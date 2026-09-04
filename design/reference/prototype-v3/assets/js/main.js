/* ==========================================================================
   TEKMentors home page (v3)

   Two small pieces of behaviour:
     1. The header menu below 940px.
     2. The enquiry form: topic chips, validation, thank-you and reset states.

   The validation rules and copy are carried over verbatim from the prototype's
   DCLogic class in "TEKMentors Home v3.dc.html".
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     WIRING POINT

     This is the only place that needs changing to make the form live. Point it
     at your CRM, a WordPress REST route (/wp-json/tekmentors/v1/enquiry) or a
     form service. Resolve to send the visitor to the thank-you state; reject
     with an Error whose message is shown in the error strip.

     Example:
       async function submitEnquiry(payload) {
         const res = await fetch('/wp-json/tekmentors/v1/enquiry', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(payload)
         });
         if (!res.ok) throw new Error('That did not send. Try again, or email info@tekmentors.com.');
       }

     `payload` is { need, name, email, org, msg }.
     ------------------------------------------------------------------------ */
  function submitEnquiry(payload) {
    // Not connected yet. Logged so the shape is visible while testing.
    if (window.console && console.info) console.info('Enquiry (not yet wired):', payload);
    return Promise.resolve();
  }

  /* ---------------------------------------------------------------------- */
  /* Header menu                                                            */
  /* ---------------------------------------------------------------------- */
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;

    function close() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Following a link should put the menu away.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    // Leaving the narrow breakpoint clears the inline open state.
    window.addEventListener('resize', function () {
      if (window.innerWidth > 940) close();
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Enquiry form                                                           */
  /* ---------------------------------------------------------------------- */
  function initEnquiry() {
    var form = document.querySelector('[data-enquiry-form]');
    var sent = document.querySelector('[data-enquiry-sent]');
    if (!form || !sent) return;

    var errorEl = form.querySelector('[data-enquiry-error]');
    var submitBtn = form.querySelector('[data-enquiry-submit]');
    var chipValue = form.querySelector('[data-chip-value]');
    var chips = Array.prototype.slice.call(form.querySelectorAll('[data-chip]'));
    var resetBtn = sent.querySelector('[data-enquiry-reset]');

    var field = {
      name: form.querySelector('#v3name'),
      email: form.querySelector('#v3email'),
      org: form.querySelector('#v3org'),
      msg: form.querySelector('#v3msg')
    };

    var EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    function showError(message) {
      errorEl.textContent = message;
      errorEl.hidden = false;
    }

    function clearError() {
      if (errorEl.hidden) return;
      errorEl.textContent = '';
      errorEl.hidden = true;
    }

    /* Topic chips. One is always active; the value rides along in a hidden
       input so it reaches the payload. */
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (other) {
          var isThis = other === chip;
          other.classList.toggle('is-active', isThis);
          other.setAttribute('aria-pressed', isThis ? 'true' : 'false');
        });
        chipValue.value = chip.textContent.trim();
      });
    });

    /* Typing anywhere clears a standing error, as in the prototype. */
    Object.keys(field).forEach(function (key) {
      if (field[key]) field[key].addEventListener('input', clearError);
    });

    function validate() {
      if (!field.name.value.trim()) {
        return { el: field.name, message: 'We need a name to reply to.' };
      }
      if (!EMAIL.test(field.email.value.trim())) {
        return { el: field.email, message: 'That email does not look right. Check it and send again.' };
      }
      if (field.msg.value.trim().length < 8) {
        return { el: field.msg, message: 'A line or two about what is stuck helps us route this properly.' };
      }
      return null;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var problem = validate();
      if (problem) {
        showError(problem.message);
        problem.el.focus();
        return;
      }

      clearError();
      submitBtn.disabled = true;

      submitEnquiry({
        need: chipValue.value,
        name: field.name.value.trim(),
        email: field.email.value.trim(),
        org: field.org.value.trim(),
        msg: field.msg.value.trim()
      }).then(function () {
        form.hidden = true;
        sent.hidden = false;
        sent.setAttribute('tabindex', '-1');
        sent.focus();
      }).catch(function (err) {
        showError((err && err.message) || 'That did not send. Try again, or email info@tekmentors.com.');
      }).then(function () {
        submitBtn.disabled = false;
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        form.reset();
        chips.forEach(function (chip, i) {
          chip.classList.toggle('is-active', i === 0);
          chip.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
        });
        chipValue.value = chips.length ? chips[0].textContent.trim() : '';
        clearError();
        sent.hidden = true;
        form.hidden = false;
        field.name.focus();
      });
    }
  }

  initNav();
  initEnquiry();
})();
