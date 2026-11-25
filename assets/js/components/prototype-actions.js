// PetCare — Acciones visuales del prototipo
(function () {
  let feedbackTimer;

  function showFeedback(message) {
    let feedback = document.querySelector('[data-screen-feedback]');

    if (!feedback) {
      feedback = document.createElement('p');
      feedback.className = 'screen-feedback';
      feedback.setAttribute('role', 'status');
      feedback.setAttribute('aria-live', 'polite');
      feedback.setAttribute('aria-atomic', 'true');
      feedback.setAttribute('data-screen-feedback', '');
      document.body.appendChild(feedback);
    }

    feedback.textContent = message;
    feedback.hidden = false;
    window.clearTimeout(feedbackTimer);
    feedbackTimer = window.setTimeout(function () {
      feedback.hidden = true;
    }, 3500);
  }

  function closeModal(modal) {
    const closeButton = modal ? modal.querySelector('[data-modal-close]') : null;
    if (closeButton) closeButton.click();
  }

  function restoreFormSubmitLabel(event) {
    const form = event.target.form;
    if (!form || !form.classList.contains('screen-form--submitted')) return;

    form.classList.remove('screen-form--submitted');
    const submitButton = form.querySelector('[type="submit"]');
    if (submitButton && submitButton.dataset.originalText) {
      submitButton.textContent = submitButton.dataset.originalText;
    }
  }

  function setBadge(container, text, modifier) {
    if (!container) return;
    let badge = container.querySelector('.badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'badge';
      container.appendChild(badge);
    }

    badge.classList.remove('badge--success', 'badge--warning', 'badge--info', 'badge--danger', 'badge--neutral');
    badge.classList.add('badge--' + modifier);
    badge.textContent = text;
  }

  function markAlertRead(button) {
    const alert = button.closest('.alert');
    if (!alert || alert.classList.contains('alert--read')) return;

    alert.classList.add('alert--read');
    button.textContent = 'Leída';
    button.disabled = true;
  }

  function markAllAlertsRead() {
    document.querySelectorAll('.alert').forEach(function (alert) {
      alert.classList.add('alert--read');
      const button = alert.querySelector('button');
      if (button) {
        button.textContent = 'Leída';
        button.disabled = true;
      }
    });
  }

  function setAppointmentStatus(text, modifier) {
    const panel = document.querySelector('.screen-columns__aside');
    if (!panel) return;

    const statusLabel = Array.from(panel.querySelectorAll('dt')).find(function (label) {
      return label.textContent.trim() === 'Estado';
    });
    const statusContainer = statusLabel ? statusLabel.nextElementSibling : panel;
    setBadge(statusContainer, text, modifier);
  }

  function initPrototypeActions() {
    const requestedModal = new URLSearchParams(window.location.search).get('modal');
    if (requestedModal === 'agregar-mascota') {
      const trigger = document.querySelector('[data-modal-open="modal-agregar-mascota"]');
      if (trigger) trigger.click();
    }

    document.addEventListener('submit', function (event) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || form.matches('[data-auth-form]')) return;

      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const modal = form.closest('.modal');
      let message = form.dataset.successMessage || 'Cambios aplicados solo en esta demostración; no se guardaron permanentemente.';
      if (modal && modal.dataset.mode === 'reschedule') message = 'La cita quedó reprogramada en esta demostración.';

      const submitButton = form.querySelector('[type="submit"]');
      if (submitButton) {
        if (!submitButton.dataset.originalText) submitButton.dataset.originalText = submitButton.textContent;
        submitButton.textContent = form.dataset.successText || 'Listo';
      }
      form.classList.add('screen-form--submitted');
      showFeedback(message);
      if (modal) {
        closeModal(modal);
        if (modal.id === 'modal-nueva-cita') modal.dataset.mode = '';
      }
    });

    document.addEventListener('input', restoreFormSubmitLabel);
    document.addEventListener('change', restoreFormSubmitLabel);

    document.addEventListener('click', function (event) {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest('button');
      if (!button || button.disabled) return;

      const action = button.dataset.action;
      const modalTrigger = button.hasAttribute('data-modal-open');

      if (button.matches('.header__menu-toggle, [role="tab"], [data-password-toggle], [data-modal-close]') && !action) return;

      if (action === 'marcar-leida') {
        markAlertRead(button);
        showFeedback('Notificación marcada como leída en esta demostración.');
        return;
      }

      if (action === 'marcar-todas-leidas') {
        markAllAlertsRead();
        showFeedback('Todas las notificaciones quedaron marcadas como leídas.');
        return;
      }

      if (action === 'completar-cita') {
        setAppointmentStatus('Completada', 'success');
        button.textContent = 'Cita completada';
        button.disabled = true;
        showFeedback('Cita completada en esta demostración.');
        return;
      }

      if (action === 'reagendar-cita') {
        const modal = document.getElementById('modal-nueva-cita');
        if (modal) {
          modal.dataset.mode = 'reschedule';
          const title = modal.querySelector('.modal__title');
          const saveButton = modal.querySelector('form [type="submit"]');
          if (title) title.textContent = 'Reagendar cita';
          if (saveButton) saveButton.textContent = 'Guardar cambio';
          const trigger = document.querySelector('[data-modal-open="modal-nueva-cita"]');
          if (trigger) trigger.click();
        }
        return;
      }

      if (action === 'confirmar-cancelacion-cita') {
        setAppointmentStatus('Cancelada', 'danger');
        const cancelButton = document.querySelector('[data-action="confirmar-cancelacion-cita"]');
        if (cancelButton) {
          cancelButton.textContent = 'Cita cancelada';
          cancelButton.disabled = true;
        }
        showFeedback('Cita cancelada en esta demostración.');
        return;
      }

      if (action === 'marcar-dosis') {
        const progress = document.querySelector('[data-dose-progress]');
        if (progress) {
          const values = progress.textContent.match(/(\d+)\s+de\s+(\d+)/);
          if (values) progress.textContent = 'Progreso: ' + Math.min(Number(values[1]) + 1, Number(values[2])) + ' de ' + values[2] + ' días';
        }
        const status = document.querySelector('[data-dose-status]');
        if (status) {
          status.classList.remove('badge--warning', 'badge--info', 'badge--danger', 'badge--neutral');
          status.classList.add('badge--success');
          status.textContent = 'Dosis administrada';
        }
        button.textContent = 'Dosis registrada';
        button.disabled = true;
        showFeedback('Dosis marcada como tomada.');
        return;
      }

      if (action === 'estado-solicitud') {
        const status = button.dataset.status === 'aprobada' ? 'Aprobada' : 'Rechazada';
        const modifier = button.dataset.status === 'aprobada' ? 'success' : 'danger';
        const item = button.closest('.screen-stack__item');
        setBadge(item, status, modifier);
        button.textContent = status;
        button.disabled = true;
        const otherButton = item ? item.querySelector('button[data-action="estado-solicitud"]') : null;
        if (otherButton) otherButton.disabled = true;
        showFeedback('Solicitud marcada como ' + status.toLowerCase() + ' en esta demostración.');
        return;
      }

      const buttonLabel = button.getAttribute('aria-label') || button.textContent.trim();
      if (action === 'eliminar-demostracion' || /^Eliminar\b/.test(buttonLabel)) {
        const row = button.closest('tr, li, .screen-stack__item');
        if (row) {
          row.classList.add(row.tagName === 'TR' ? 'table__row--removed' : 'screen-stack__item--removed');
        }
        button.disabled = true;
        showFeedback('Elemento marcado para eliminación; no se borraron datos permanentes.');
        return;
      }

      if (action === 'seleccionar-vista-calendario') {
        const controls = button.closest('.calendar__controls');
        if (controls) {
          controls.querySelectorAll('button').forEach(function (item) {
            item.classList.remove('button--primary');
            item.classList.add('button--secondary');
            item.setAttribute('aria-pressed', 'false');
          });
          button.classList.remove('button--secondary');
          button.classList.add('button--primary');
          button.setAttribute('aria-pressed', 'true');
        }
        showFeedback('Vista ' + button.textContent.trim().toLowerCase() + ' seleccionada; la agenda es estática.');
        return;
      }

      if (action === 'cambiar-mes') {
        const title = button.closest('.calendar__month').querySelector('.card__title');
        const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        const match = title ? title.textContent.trim().toLowerCase().match(/^([a-záéíóú]+)\s+(\d{4})$/) : null;
        if (match) {
          const monthIndex = months.indexOf(match[1]);
          const date = new Date(Number(match[2]), monthIndex + Number(button.dataset.monthOffset), 1);
          title.textContent = months[date.getMonth()].charAt(0).toUpperCase() + months[date.getMonth()].slice(1) + ' ' + date.getFullYear();
        }
        showFeedback('Mes actualizado; las citas visibles son datos estáticos.');
        return;
      }

      if (action === 'confirmar-eliminacion-cuenta') {
        showFeedback('La eliminación de cuenta no se ejecuta en este prototipo.');
        const modal = button.closest('.modal');
        if (modal) closeModal(modal);
        return;
      }

      if (action === 'marcar-como-pendiente') {
        showFeedback('Esta preferencia quedó aplicada solo durante esta visita.');
        return;
      }

      if (modalTrigger && !action) {
        const modal = document.getElementById(button.dataset.modalOpen);
        if (modal && modal.id === 'modal-nueva-cita') {
          const isReschedule = modal.dataset.mode === 'reschedule';
          const form = modal.querySelector('form');
          const submitButton = form ? form.querySelector('[type="submit"]') : null;
          if (!isReschedule) {
            modal.dataset.mode = '';
            const title = modal.querySelector('.modal__title');
            if (title) title.textContent = 'Nueva cita';
            if (submitButton) submitButton.textContent = 'Guardar cita';
          } else if (submitButton) {
            submitButton.textContent = 'Guardar cambio';
          }
          if (form) {
            form.reset();
            form.classList.remove('screen-form--submitted');
          }
          if (submitButton) submitButton.disabled = false;
        }
        return;
      }

      if (button.matches('[data-modal-close], [data-password-toggle], [role="tab"], .header__menu-toggle') || button.type === 'submit') return;
      showFeedback('«' + (button.getAttribute('aria-label') || button.textContent.trim()) + '» es una acción de demostración; no se guardan datos.');
    });
  }

  window.PetCare = window.PetCare || {};
  window.PetCare.initPrototypeActions = initPrototypeActions;
})();
