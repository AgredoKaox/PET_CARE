// PetCare — Indicador visual de seguridad de contraseña
(function () {
  function countCharacterTypes(value) {
    var types = [
      /[a-z]/.test(value),
      /[A-Z]/.test(value),
      /\d/.test(value),
      /[^A-Za-z0-9]/.test(value)
    ];

    return types.filter(Boolean).length;
  }

  function getStrength(value) {
    var length = value.length;
    var types = countCharacterTypes(value);

    if (length >= 12 && types >= 3) {
      return { level: 3, name: 'Alta', modifier: 'high' };
    }

    if (length >= 8 && types >= 2) {
      return { level: 2, name: 'Media', modifier: 'medium' };
    }

    if (length > 0) {
      return { level: 1, name: 'Baja', modifier: 'low' };
    }

    return { level: 0, name: 'Baja', modifier: 'low' };
  }

  function initPasswordStrength() {
    document.querySelectorAll('[data-password-strength-input]').forEach(function (input) {
      var field = input.closest('.auth-form__field');
      var meter = field ? field.querySelector('[data-password-strength]') : null;
      var label = meter ? meter.querySelector('[data-strength-label]') : null;

      if (!meter || !label) {
        console.error('No se encontró el medidor o la etiqueta de seguridad de contraseña.', input);
        return;
      }

      input.addEventListener('input', function () {
        var strength = getStrength(input.value);
        label.textContent = strength.name;
        meter.dataset.level = strength.modifier;
        meter.setAttribute('aria-valuenow', String(strength.level));
        meter.setAttribute('aria-valuetext', 'Seguridad ' + strength.name);
      });
    });
  }

  window.PetCare = window.PetCare || {};
  window.PetCare.initPasswordStrength = initPasswordStrength;
})();
