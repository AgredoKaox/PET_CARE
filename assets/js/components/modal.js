// PetCare — Componente de modales accesibles
(function () {
  window.PetCare = window.PetCare || {};

  window.PetCare.initModal = function () {
    let lastTrigger = null;
    let activeModal = null;

    function getFocusable(modal) {
      return Array.from(modal.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'))
        .filter((element) => !element.hidden);
    }

    function closeModal(modal) {
      if (!modal) return;
      modal.hidden = true;
      document.body.classList.remove('body--modal-open');
      activeModal = null;
      if (lastTrigger) lastTrigger.focus();
    }

    document.querySelectorAll('[data-modal-open]').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const modal = document.getElementById(trigger.dataset.modalOpen);
        if (!modal) return;

        lastTrigger = trigger;
        activeModal = modal;
        modal.hidden = false;
        document.body.classList.add('body--modal-open');

        const focusable = getFocusable(modal);
        if (focusable.length) focusable[0].focus();
      });
    });

    document.querySelectorAll('[data-modal-close]').forEach((button) => {
      button.addEventListener('click', () => closeModal(button.closest('.modal')));
    });

    document.addEventListener('keydown', (event) => {
      if (!activeModal) return;

      if (event.key === 'Escape') {
        closeModal(activeModal);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = getFocusable(activeModal);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    document.querySelectorAll('.modal').forEach((modal) => {
      modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal(modal);
      });
    });
  };
})();
