// PetCare — Alternar visibilidad de contraseñas
(function () {
  function initPasswordToggles() {
    document.querySelectorAll('[data-password-toggle]').forEach(function (button) {
      var targetId = button.getAttribute('data-target');
      var input = targetId ? document.getElementById(targetId) : null;
      var icons = button.querySelectorAll('.auth-form__toggle-icon');

      if (!input || icons.length < 2) {
        console.error('No se pudo inicializar el control de visibilidad de contraseña.', button);
        return;
      }

      button.addEventListener('click', function () {
        var isVisible = input.type === 'text';
        input.type = isVisible ? 'password' : 'text';
        button.setAttribute('aria-pressed', String(!isVisible));
        button.setAttribute('aria-label', isVisible ? 'Mostrar contraseña' : 'Ocultar contraseña');
        icons[0].hidden = !isVisible;
        icons[1].hidden = isVisible;
      });
    });
  }

  window.PetCare = window.PetCare || {};
  window.PetCare.initPasswordToggles = initPasswordToggles;
})();
