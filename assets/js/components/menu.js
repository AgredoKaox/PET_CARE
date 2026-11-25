// PetCare — Componente de menú móvil
(function () {
  window.PetCare = window.PetCare || {};

  window.PetCare.initMenu = function () {
    const toggle = document.querySelector('.header__menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (!toggle || !sidebar) return;

    const backdrop = document.createElement('div');
    backdrop.className = 'sidebar__backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.appendChild(backdrop);

    function openMenu() {
      if (window.matchMedia('(min-width: 48rem)').matches) return;
      sidebar.classList.add('sidebar--open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('body--menu-open');

      const firstLink = sidebar.querySelector('a, button');
      if (firstLink) firstLink.focus();
    }

    function closeMenu() {
      sidebar.classList.remove('sidebar--open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('body--menu-open');
      toggle.focus();
    }

    toggle.addEventListener('click', () => {
      if (sidebar.classList.contains('sidebar--open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    backdrop.addEventListener('click', closeMenu);

    document.addEventListener('keydown', (event) => {
      if (!sidebar.classList.contains('sidebar--open')) return;

      if (event.key === 'Escape') {
        closeMenu();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = Array.from(sidebar.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'))
        .filter((element) => !element.hidden);

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

    document.querySelectorAll('.header__role-switch').forEach((roleSwitch) => {
      roleSwitch.querySelectorAll('.header__role').forEach((role) => {
        role.addEventListener('click', () => {
          roleSwitch.querySelectorAll('.header__role').forEach((item) => {
            item.classList.remove('header__role--active');
            item.setAttribute('aria-pressed', 'false');
          });
          role.classList.add('header__role--active');
          role.setAttribute('aria-pressed', 'true');
        });
      });
    });
  };
})();
