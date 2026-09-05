/* TEKMentors homepage prototype. One script, no dependencies.
   1. dataLayer tracking (docs/08-tracking-plan.md convention)
   2. Header scroll state
   3. Mobile menu sheet (below 940px)
   4. Sticky mobile bar
   5. Section views
   6. Routing band: drops the fading edge once the scroller reaches its end
   7. Phone accordions below 640px: the six answers, each roster row's "What you build"
      (the spotlight's list stays open)
   8. Enquiry form: chips and the labels that follow them, presets, validation,
      sending, sent, reset
   The form posts nowhere. submitEnquiry() is the wiring point. */
(function () {
  'use strict';

  /* 1. Tracking ---------------------------------------------------------- */

  window.dataLayer = window.dataLayer || [];

  function track(payload) {
    window.dataLayer.push(payload);
    if (window.console && console.log) console.log('dataLayer', payload); // prototype only
  }

  // Label text without decorative glyphs or screen-reader-only suffixes.
  function visibleText(el) {
    var clone = el.cloneNode(true);
    Array.prototype.forEach.call(clone.querySelectorAll('[aria-hidden], .sr-only'), function (n) { n.parentNode.removeChild(n); });
    return clone.textContent.replace(/\s+/g, ' ').trim().slice(0, 60);
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-event]');
    if (!el) return;
    var p = { event: el.dataset.event };
    Object.keys(el.dataset).forEach(function (k) {
      if (k !== 'event' && k !== 'alsoEvent') p[k] = el.dataset[k];
    });
    if (!p.cta_text) p.cta_text = visibleText(el);
    if (!p.link_url && el.getAttribute('href')) p.link_url = el.getAttribute('href');
    track(p);
    // A second event from the same click: the spotlight buttons push cta_click
    // and program_click {program: fde} (tracking plan, revision 3 addendum).
    if (el.dataset.alsoEvent) {
      track({ event: el.dataset.alsoEvent, program: el.dataset.program || '', location: p.location || '', link_url: p.link_url, cta_text: p.cta_text });
    }
  });

  /* 2. Header ------------------------------------------------------------ */

  var header = document.querySelector('.site-header');
  var scrollTick = false;
  function onScroll() {
    if (scrollTick) return;
    scrollTick = true;
    window.requestAnimationFrame(function () {
      scrollTick = false;
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 80);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* 3. Mobile menu -------------------------------------------------------- */

  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-menu]');
  var closeBtn = menu && menu.querySelector('[data-menu-close]');
  var FOCUSABLE = 'a[href], button:not([disabled]), input:not([type="hidden"]), textarea, [tabindex]:not([tabindex="-1"])';

  function menuIsOpen() {
    return !!(menu && menu.classList.contains('is-open'));
  }

  function openMenu() {
    if (!menu) return;
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    track({ event: 'menu_open' });
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu(returnFocus) {
    if (!menu || !menuIsOpen()) return;
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    if (returnFocus !== false && toggle) toggle.focus();
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      if (menuIsOpen()) closeMenu(); else openMenu();
    });
    if (closeBtn) closeBtn.addEventListener('click', function () { closeMenu(); });

    // Following a link puts the sheet away; do not steal focus from the target.
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (!menuIsOpen()) return;
      if (e.key === 'Escape') { e.preventDefault(); closeMenu(); return; }
      if (e.key !== 'Tab') return;
      var items = Array.prototype.filter.call(menu.querySelectorAll(FOCUSABLE), function (el) {
        return el.offsetParent !== null;
      });
      if (!items.length) return;
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 940) closeMenu(false);
    });
  }

  /* 4. Sticky bar --------------------------------------------------------- */

  // The bar appears once the facts strip (so the hero and the routing band
  // with it) has scrolled out above, and hides while the form card is in view.
  var bar = document.querySelector('[data-sticky-bar]');
  var facts = document.getElementById('facts');
  var formCard = document.getElementById('form');

  if (bar && facts && 'IntersectionObserver' in window) {
    var topGone = false, formInView = false;
    function updateBar() {
      bar.classList.toggle('is-visible', topGone && !formInView);
      bar.classList.toggle('is-hidden', formInView);
    }
    new IntersectionObserver(function (entries) {
      topGone = !entries[0].isIntersecting && entries[0].boundingClientRect.bottom < 0;
      updateBar();
    }, { threshold: 0 }).observe(facts);
    if (formCard) {
      new IntersectionObserver(function (entries) {
        formInView = entries[0].isIntersecting;
        updateBar();
      }, { threshold: 0.15 }).observe(formCard);
    }
  }

  /* 5. Section views ------------------------------------------------------- */

  if ('IntersectionObserver' in window) {
    var seen = {};
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !seen[en.target.id]) {
          seen[en.target.id] = true;
          track({ event: 'section_view', section: en.target.id });
        }
      });
    }, { threshold: 0.5 });
    ['ways', 'fde', 'programs', 'who', 'consulting', 'how', 'answers', 'proof', 'insights', 'contact'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });
  }

  /* 6. Routing band ---------------------------------------------------------- */

  /* Below 960px the pills scroll sideways under a fading right edge (styles.css,
     section 19). The fade is dropped once the last pill is fully in view, so
     the row never looks cut off when there is nothing more to see. */
  var scroller = document.querySelector('[data-routes-scroller]');
  if (scroller) {
    var scrollwrap = scroller.parentNode;
    function updateRoutesEdge() {
      scrollwrap.classList.toggle('is-end', scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 2);
    }
    scroller.addEventListener('scroll', updateRoutesEdge, { passive: true });
    window.addEventListener('resize', updateRoutesEdge);
    updateRoutesEdge();
  }

  /* 7. Phone accordions ------------------------------------------------------ */

  /* Below 640px the six answers fold behind their question (first one open) and
     each program row folds its "What you build" list behind a button. At 640px
     and above nothing is added: the markup is the plain h3 and list. The
     enhancement is applied and removed as the viewport crosses the line. */
  var phone = window.matchMedia('(max-width: 639.98px)');
  var CHEVRON = '<svg class="chevron" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6"/></svg>';

  function setExpanded(btn, panel, open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.hidden = !open;
  }

  var answers = Array.prototype.slice.call(document.querySelectorAll('.answer'));
  var builds = Array.prototype.slice.call(document.querySelectorAll('.roster__row .builds'));

  function enhanceAnswers() {
    answers.forEach(function (item, i) {
      if (item.classList.contains('is-enhanced')) return;
      var q = item.querySelector('.answer__q');
      var a = item.querySelector('.answer__a');
      if (!q || !a) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'answer__toggle';
      btn.setAttribute('aria-controls', a.id);
      btn.textContent = q.textContent;
      btn.insertAdjacentHTML('beforeend', CHEVRON);
      q.textContent = '';
      q.appendChild(btn);
      setExpanded(btn, a, i === 0);
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') !== 'true';
        setExpanded(btn, a, open);
        if (open) track({ event: 'faq_toggle', question_index: i + 1 });
      });
      item.classList.add('is-enhanced');
    });
  }
  function restoreAnswers() {
    answers.forEach(function (item) {
      if (!item.classList.contains('is-enhanced')) return;
      var q = item.querySelector('.answer__q');
      var a = item.querySelector('.answer__a');
      var btn = q.querySelector('.answer__toggle');
      var chevron = btn.querySelector('.chevron');
      if (chevron) btn.removeChild(chevron);
      q.textContent = btn.textContent;
      a.hidden = false;
      item.classList.remove('is-enhanced');
    });
  }

  function enhanceBuilds() {
    builds.forEach(function (list) {
      var label = list.previousElementSibling;
      if (!label || !label.classList.contains('roster__builds-label')) return;
      if (label.previousElementSibling && label.previousElementSibling.classList.contains('builds-toggle')) return;
      var row = list.closest('.roster__row');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'builds-toggle';
      btn.setAttribute('aria-controls', list.id);
      btn.textContent = 'What you build';
      btn.insertAdjacentHTML('beforeend', CHEVRON);
      label.parentNode.insertBefore(btn, label);
      setExpanded(btn, list, false);
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') !== 'true';
        setExpanded(btn, list, open);
        if (open) track({ event: 'program_builds_toggle', program: row ? row.getAttribute('data-program') || '' : '' });
      });
    });
  }
  function restoreBuilds() {
    builds.forEach(function (list) {
      var label = list.previousElementSibling;
      var btn = label && label.previousElementSibling;
      if (!btn || !btn.classList.contains('builds-toggle')) return;
      btn.parentNode.removeChild(btn);
      list.hidden = false;
    });
  }

  function applyPhoneLayout() {
    if (phone.matches) { enhanceAnswers(); enhanceBuilds(); }
    else { restoreAnswers(); restoreBuilds(); }
  }
  if (phone.addEventListener) phone.addEventListener('change', applyPhoneLayout);
  else if (phone.addListener) phone.addListener(applyPhoneLayout);
  applyPhoneLayout();

  /* 8. Enquiry form --------------------------------------------------------- */

  /* WIRING POINT. Resolve to reach the sent state; reject with an Error to show
     the failure block. payload is { need, program, name, email, org, msg }.
     In the WordPress build this is Forminator; see docs/08-tracking-plan.md. */
  function submitEnquiry(payload) {
    if (window.console && console.info) console.info('Enquiry (not wired, posts nowhere):', payload);
    return new Promise(function (resolve) { setTimeout(resolve, 600); });
  }

  var form = document.querySelector('[data-enquiry]');
  var sent = document.querySelector('[data-enquiry-sent]');
  if (!form || !sent) return;

  var titleEl = form.querySelector('[data-enquiry-title]');
  var msgLabel = form.querySelector('[data-enquiry-msg-label]');
  var orgLabel = form.querySelector('[data-enquiry-org-label]');
  var errorEl = form.querySelector('[data-enquiry-error]');
  var submitBtn = form.querySelector('[data-enquiry-submit]');
  var needInput = form.querySelector('[data-need-input]');
  var programInput = form.querySelector('[data-program-input]');
  var chips = Array.prototype.slice.call(form.querySelectorAll('[data-chip]'));
  var resetBtn = sent.querySelector('[data-enquiry-reset]');
  var honeypot = form.querySelector('#f-website');
  var openedAt = Date.now();
  var started = false;

  var field = {
    name: form.querySelector('#f-name'),
    email: form.querySelector('#f-email'),
    org: form.querySelector('#f-org'),
    msg: form.querySelector('#f-msg')
  };

  // The title, the long-answer question, its placeholder and the company label
  // follow the intent chip. Strings from prototype/copy.md, revision 2.
  var INTENT = {
    project: {
      title: 'Tell us what is stuck',
      msgLabel: 'What is stuck?',
      placeholder: 'One or two lines is plenty. Plain language beats a spec.',
      orgLabel: 'Company (optional)'
    },
    training_team: {
      title: 'Tell us about the team',
      msgLabel: 'Who is the team, and what should they be able to build?',
      placeholder: 'Team size, current stack, and the outcome you need.',
      orgLabel: 'Company (optional)'
    },
    join_program: {
      title: 'Ask about a program',
      msgLabel: 'Which program, and where are you now?',
      placeholder: 'Your experience, the program you have in mind, and any dates that matter.',
      orgLabel: 'Current employer or college (optional)'
    },
    not_sure: {
      title: 'Tell us what you need',
      msgLabel: 'What is on your mind?',
      placeholder: 'One or two lines is plenty.',
      orgLabel: 'Company (optional)'
    }
  };

  function applyIntent(need) {
    var t = INTENT[need] || INTENT.not_sure;
    if (titleEl && titleEl.textContent !== t.title) titleEl.textContent = t.title;
    if (msgLabel) msgLabel.textContent = t.msgLabel;
    if (field.msg) field.msg.setAttribute('placeholder', t.placeholder);
    if (orgLabel) orgLabel.textContent = t.orgLabel;
  }

  var EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  var SUBMIT_LABEL = submitBtn.textContent;
  var FAILURE = 'That did not send. Email us at info@tekmentors.com and we will pick it up from there.';

  function audienceFor(need) {
    if (need === 'project' || need === 'training_team') return 'corporate';
    if (need === 'join_program') return 'professional';
    return 'unknown';
  }

  function showError(message) {
    errorEl.textContent = message;
    errorEl.hidden = false;
  }
  function clearError() {
    if (errorEl.hidden) return;
    errorEl.textContent = '';
    errorEl.hidden = true;
  }

  function selectChip(need, fromClick) {
    var found = false;
    chips.forEach(function (chip) {
      var on = chip.dataset.need === need;
      if (on) found = true;
      chip.classList.toggle('is-active', on);
      chip.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    if (found) { needInput.value = need; applyIntent(need); }
    if (found && fromClick) track({ event: 'enquiry_need_select', need: need });
    return found;
  }
  applyIntent(needInput.value);

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () { selectChip(chip.dataset.need, true); });
  });

  // Program buttons carry data-need; reaching the form presets the chip. A link
  // with data-msg also prefills the message, if it is still empty, and leaves
  // the caret at the end so the visitor can carry on typing. That link scrolls
  // to the form card itself (a fragment jump would blur the textarea again),
  // honouring the page's scroll-behavior and the card's scroll-margin.
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[data-need]');
    if (!link) return;
    if (selectChip(link.dataset.need, false)) {
      programInput.value = link.dataset.program || '';
    }
    if (!link.dataset.msg || !field.msg) return;
    if (!field.msg.value) {
      field.msg.value = link.dataset.msg;
      clearError();
    }
    var end = field.msg.value.length;
    try { field.msg.setSelectionRange(end, end); } catch (err) { /* older engines */ }
    e.preventDefault();
    var card = document.getElementById('form') || form;
    card.scrollIntoView({ block: 'start' });
    field.msg.focus({ preventScroll: true });
  });

  Object.keys(field).forEach(function (key) {
    if (!field[key]) return;
    field[key].addEventListener('input', function () {
      clearError();
      if (!started) {
        started = true;
        track({ event: 'enquiry_start', need: needInput.value });
      }
    });
  });

  function validate() {
    if (!field.name.value.trim()) {
      return { el: field.name, key: 'name', message: 'We need a name to reply to.' };
    }
    if (!EMAIL.test(field.email.value.trim())) {
      return { el: field.email, key: 'email', message: 'That email does not look right. Check it and send again.' };
    }
    if (field.msg.value.trim().length < 8) {
      return { el: field.msg, key: 'message', message: 'A line or two about what is stuck helps us route this properly.' };
    }
    return null;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var problem = validate();
    if (problem) {
      showError(problem.message);
      track({ event: 'enquiry_error', error_field: problem.key });
      problem.el.focus();
      return;
    }

    // Honeypot filled or submitted within two seconds of opening: behave as sent, send nothing.
    if ((honeypot && honeypot.value) || Date.now() - openedAt < 2000) {
      showSent();
      return;
    }

    clearError();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending';

    submitEnquiry({
      need: needInput.value,
      program: programInput.value,
      name: field.name.value.trim(),
      email: field.email.value.trim(),
      org: field.org.value.trim(),
      msg: field.msg.value.trim()
    }).then(function () {
      var payload = { event: 'enquiry_submit', need: needInput.value, audience: audienceFor(needInput.value), form_id: 'homepage_enquiry' };
      if (programInput.value) payload.program = programInput.value;
      track(payload);
      showSent();
    }).catch(function () {
      showError(FAILURE);
      track({ event: 'enquiry_error', error_field: 'server' });
    }).then(function () {
      submitBtn.disabled = false;
      submitBtn.textContent = SUBMIT_LABEL;
    });
  });

  function showSent() {
    form.hidden = true;
    sent.hidden = false;
    sent.focus();
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      form.reset();
      selectChip('project', false);
      programInput.value = '';
      clearError();
      openedAt = Date.now();
      sent.hidden = true;
      form.hidden = false;
      field.name.focus();
    });
  }
})();
