/* TEKMentors homepage prototype. One script, no dependencies.
   1. dataLayer tracking (docs/08-tracking-plan.md convention)
   2. Header scroll state
   3. Mobile menu sheet (below 940px)
   4. Sticky mobile bar
   5. Section views
   6. Enquiry form: chips, presets, validation, sending, sent, reset
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
      if (k !== 'event') p[k] = el.dataset[k];
    });
    if (!p.cta_text) p.cta_text = visibleText(el);
    if (!p.link_url && el.getAttribute('href')) p.link_url = el.getAttribute('href');
    track(p);
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

  var bar = document.querySelector('[data-sticky-bar]');
  var hero = document.getElementById('hero');
  var formCard = document.getElementById('form');

  if (bar && hero && 'IntersectionObserver' in window) {
    var heroGone = false, formInView = false;
    function updateBar() {
      bar.classList.toggle('is-visible', heroGone && !formInView);
      bar.classList.toggle('is-hidden', formInView);
    }
    new IntersectionObserver(function (entries) {
      heroGone = !entries[0].isIntersecting && entries[0].boundingClientRect.bottom < 0;
      updateBar();
    }, { threshold: 0 }).observe(hero);
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
    ['who', 'programs', 'consulting', 'how', 'answers', 'proof', 'insights', 'contact'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });
  }

  /* 6. Enquiry form --------------------------------------------------------- */

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
    if (found) needInput.value = need;
    if (found && fromClick) track({ event: 'enquiry_need_select', need: need });
    return found;
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () { selectChip(chip.dataset.need, true); });
  });

  // Program buttons carry data-need; reaching the form presets the chip.
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[data-need]');
    if (!link) return;
    if (selectChip(link.dataset.need, false)) {
      programInput.value = link.dataset.program || '';
    }
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
