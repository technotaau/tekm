/* TEKMentors homepage prototype. One script, no dependencies.
   1. dataLayer tracking (docs/08-tracking-plan.md convention)
   2. Header scroll state
   3. Mobile menu sheet (below 940px)
   4. Sticky mobile bar
   5. Section views
   6. Hero slider: tabs, arrows, keyboard, swipe, auto-advance, pauses
   7. Enquiry form: chips, presets, validation, sending, sent, reset
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

  /* 6. Hero slider ---------------------------------------------------------- */

  /* Three slides on a translateX track. Auto-advance every 8s, held while the
     pointer is over it, focus is inside it, a finger is on it, or the tab is
     hidden; never under prefers-reduced-motion. The progress bar is a CSS
     animation kept in step by pausing its play state with the timer. */
  var slider = document.querySelector('[data-slider]');
  if (slider) (function () {
    var INTERVAL = 8000;
    var SWIPE_MIN = 40;
    var trackEl = slider.querySelector('[data-slider-track]');
    var viewport = slider.querySelector('[data-slider-viewport]');
    var slides = Array.prototype.slice.call(trackEl.querySelectorAll('[data-slide]'));
    var tabs = Array.prototype.slice.call(slider.querySelectorAll('[data-slide-tab]'));
    var status = slider.querySelector('[data-slider-status]');
    var prevBtn = slider.querySelector('[data-slider-prev]');
    var nextBtn = slider.querySelector('[data-slider-next]');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    var count = slides.length;
    var index = 0;
    var timer = null, startedAt = 0, remaining = INTERVAL;
    var holds = { hover: false, focus: false, touch: false, hidden: document.visibilityState === 'hidden' };

    function autoplayAllowed() { return count > 1 && !reduce.matches; }
    function isHeld() { return holds.hover || holds.focus || holds.touch || holds.hidden; }

    var LEAD = 2000; // fetch the next photo this long before an auto-advance

    // Photos for slides 2 and 3 wait in data-src until the slide is about to show.
    function loadPhoto(i) {
      var img = slides[((i % count) + count) % count].querySelector('img[data-src]');
      if (!img) return;
      var srcEl = img.parentNode && img.parentNode.tagName === 'PICTURE' ? img.parentNode.querySelector('source[data-srcset]') : null;
      if (srcEl) { srcEl.setAttribute('srcset', srcEl.getAttribute('data-srcset')); srcEl.removeAttribute('data-srcset'); }
      if (img.hasAttribute('data-srcset')) { img.setAttribute('srcset', img.getAttribute('data-srcset')); img.removeAttribute('data-srcset'); }
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    }

    var preTimer = null;
    function clearTimer() {
      if (timer) { clearTimeout(timer); timer = null; }
      if (preTimer) { clearTimeout(preTimer); preTimer = null; }
    }
    function armTimer(ms) {
      clearTimer();
      remaining = ms;
      if (!autoplayAllowed() || isHeld()) return;
      startedAt = Date.now();
      timer = setTimeout(function () { goTo(index + 1, 'auto'); }, ms);
      preTimer = setTimeout(function () { loadPhoto(index + 1); }, Math.max(0, ms - LEAD));
    }
    // Restart the CSS progress animation on every change, including a click on the active tab.
    function resetProgress() {
      tabs.forEach(function (tab) {
        var bar = tab.querySelector('.slider__progress');
        if (!bar) return;
        bar.style.animation = 'none';
        void bar.offsetWidth;
        bar.style.animation = '';
      });
    }
    function hold(key, on) {
      var was = isHeld();
      holds[key] = on;
      var now = isHeld();
      if (now && !was) {
        if (timer) remaining = Math.max(0, remaining - (Date.now() - startedAt));
        clearTimer();
        slider.classList.add('is-paused');
      } else if (!now && was) {
        slider.classList.remove('is-paused');
        armTimer(Math.max(remaining, 400));
      }
    }

    function goTo(n, trigger) {
      var next = ((n % count) + count) % count;
      var changed = next !== index;
      index = next;
      loadPhoto(index);
      if (trigger === 'swipe' || trigger === 'arrow') { loadPhoto(index + 1); loadPhoto(index - 1); }
      trackEl.setAttribute('data-index', String(index));
      slides.forEach(function (slide, i) {
        var on = i === index;
        slide.classList.toggle('is-active', on);
        // The slide holding the h1 hides its parts, not itself, so the page keeps one exposed h1.
        var parts = slide.querySelector('h1') ? Array.prototype.slice.call(slide.querySelectorAll('[data-slide-part]')) : [slide];
        parts.forEach(function (part) {
          if (on) { part.removeAttribute('aria-hidden'); part.removeAttribute('inert'); }
          else { part.setAttribute('aria-hidden', 'true'); part.setAttribute('inert', ''); }
        });
        Array.prototype.forEach.call(slide.querySelectorAll('a, button'), function (el) {
          if (on) el.removeAttribute('tabindex'); else el.setAttribute('tabindex', '-1');
        });
      });
      tabs.forEach(function (tab, i) {
        var on = i === index;
        tab.classList.toggle('is-active', on);
        tab.setAttribute('aria-selected', on ? 'true' : 'false');
        tab.setAttribute('tabindex', on ? '0' : '-1');
      });
      if (status) status.textContent = (index + 1) + ' of ' + count;
      if (changed && trigger) {
        track({ event: 'hero_slide_view', slide_index: index + 1, slide_label: slides[index].getAttribute('data-slide-label') || '', trigger: trigger });
      }
      resetProgress();
      armTimer(INTERVAL);
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { goTo(i, 'tab'); });
      tab.addEventListener('keydown', function (e) {
        var target = null;
        if (e.key === 'ArrowRight') target = index + 1;
        else if (e.key === 'ArrowLeft') target = index - 1;
        else if (e.key === 'Home') target = 0;
        else if (e.key === 'End') target = count - 1;
        if (target === null) return;
        e.preventDefault();
        goTo(target, 'tab');
        tabs[index].focus();
      });
    });
    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(index - 1, 'arrow'); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(index + 1, 'arrow'); });

    slider.addEventListener('mouseenter', function () { hold('hover', true); });
    slider.addEventListener('mouseleave', function () { hold('hover', false); });
    slider.addEventListener('focusin', function () { hold('focus', true); });
    slider.addEventListener('focusout', function (e) {
      if (!e.relatedTarget || !slider.contains(e.relatedTarget)) hold('focus', false);
    });
    slider.addEventListener('touchstart', function () { hold('touch', true); }, { passive: true });
    slider.addEventListener('touchend', function () { hold('touch', false); }, { passive: true });
    slider.addEventListener('touchcancel', function () { hold('touch', false); }, { passive: true });
    document.addEventListener('visibilitychange', function () { hold('hidden', document.visibilityState !== 'visible'); });

    // Swipe: touch and pen only; a mouse drag would fight text selection.
    var startX = null, startY = null;
    viewport.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse') return;
      startX = e.clientX; startY = e.clientY;
    });
    viewport.addEventListener('pointerup', function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX, dy = e.clientY - startY;
      startX = startY = null;
      if (Math.abs(dx) < SWIPE_MIN || Math.abs(dx) < Math.abs(dy)) return;
      goTo(dx < 0 ? index + 1 : index - 1, 'swipe');
    });
    viewport.addEventListener('pointercancel', function () { startX = startY = null; });

    function applyMotionPreference() {
      slider.classList.toggle('is-static', reduce.matches);
      if (reduce.matches) clearTimer(); else armTimer(INTERVAL);
    }
    if (reduce.addEventListener) reduce.addEventListener('change', applyMotionPreference);
    else if (reduce.addListener) reduce.addListener(applyMotionPreference);

    slider.classList.toggle('is-static', reduce.matches);
    goTo(0, null);
  })();

  /* 7. Enquiry form --------------------------------------------------------- */

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
