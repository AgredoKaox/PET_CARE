// PetCare — Formularios demostrativos de acceso
(function () {
  function setFieldError(form, fieldName, message) {
    const field = form.querySelector('[name="' + fieldName + '"]');
    const error = form.querySelector('[data-field-error="' + fieldName + '"]');

    if (!field || !error) return;

    if (!error.id) error.id = field.name + '-error';
    field.setAttribute('aria-invalid', 'true');
    const describedBy = (field.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean);
    if (!describedBy.includes(error.id)) describedBy.push(error.id);
    field.setAttribute('aria-describedby', describedBy.join(' '));
    field.classList.add('auth-form__input--error');
    error.textContent = message;
    error.hidden = false;
  }

  function clearFieldError(form, field) {
    const error = form.querySelector('[data-field-error="' + field.name + '"]');

    field.removeAttribute('aria-invalid');
    field.classList.remove('auth-form__input--error');
    if (error) {
      const describedBy = (field.getAttribute('aria-describedby') || '')
        .split(/\s+/)
        .filter(function (id) { return id && id !== error.id; });
      if (describedBy.length) field.setAttribute('aria-describedby', describedBy.join(' '));
      else field.removeAttribute('aria-describedby');
      error.textContent = '';
      error.hidden = true;
    }
  }

  function validateRequiredFields(form) {
    let firstInvalidField = null;

    form.querySelectorAll('[required]').forEach(function (field) {
      const empty = field.type === 'checkbox' ? !field.checked : !field.value.trim();

      if (empty) {
        setFieldError(form, field.name, field.type === 'checkbox'
          ? 'Debes aceptar los términos para continuar.'
          : 'Este campo es obligatorio.');
        firstInvalidField = firstInvalidField || field;
      } else if (field.type === 'email' && !field.validity.valid) {
        setFieldError(form, field.name, 'Ingresa un correo electrónico válido.');
        firstInvalidField = firstInvalidField || field;
      } else {
        clearFieldError(form, field);
      }
    });

    return firstInvalidField;
  }

  function initAuthFlows() {
    document.querySelectorAll('[data-auth-form]').forEach(function (form) {
      form.querySelectorAll('input, select, textarea').forEach(function (field) {
        field.addEventListener('input', function () {
          clearFieldError(form, field);
        });
        field.addEventListener('change', function () {
          clearFieldError(form, field);
        });
      });

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        let firstInvalidField = validateRequiredFields(form);

        if (form.dataset.authForm === 'registro') {
          const password = form.querySelector('[name="contrasena"]');
          const confirmation = form.querySelector('[name="confirmar-contrasena"]');

          if (password && confirmation && password.value && confirmation.value && password.value !== confirmation.value) {
            setFieldError(form, confirmation.name, 'Las contraseñas no coinciden.');
            firstInvalidField = firstInvalidField || confirmation;
          }
        }

        if (firstInvalidField) {
          firstInvalidField.focus();
          return;
        }

        if (form.dataset.authForm === 'recuperacion') {
          const message = document.querySelector('[data-recovery-success]');
          if (message) {
            message.hidden = false;
            message.focus();
          }
          form.hidden = true;
          return;
        }

        if (form.dataset.redirect) window.location.href = form.dataset.redirect;
      });
    });

    const loginNotice = document.querySelector('[data-auth-success]');
    if (loginNotice && new URLSearchParams(window.location.search).get('registro') === 'exitoso') {
      loginNotice.textContent = 'Tu cuenta de demostración quedó lista. Ingresa tus credenciales para continuar.';
    }
  }

  window.PetCare = window.PetCare || {};
  window.PetCare.initAuthFlows = initAuthFlows;
})();
