// PetCare — Componente de pestañas accesibles
(function () {
  window.PetCare = window.PetCare || {};

  window.PetCare.initTabs = function () {
    document.querySelectorAll('.tabs').forEach((tabs, tabsIndex) => {
      const tabList = tabs.querySelector('[role="tablist"]');
      if (!tabList) return;

      const tabButtons = Array.from(tabList.querySelectorAll('[role="tab"]'));
      const panels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

      if (!tabButtons.length) return;

      tabButtons.forEach((tab, tabIndex) => {
        let panel = panels[tabIndex] || null;

        if (!tab.id) tab.id = `tab-petcare-${tabsIndex}-${tabIndex}`;
        if (panel) {
          if (!panel.id) panel.id = `panel-petcare-${tabsIndex}-${tabIndex}`;
          tab.setAttribute('aria-controls', panel.id);
          panel.setAttribute('aria-labelledby', tab.id);
        }

        tab.setAttribute('tabindex', tab.getAttribute('aria-selected') === 'true' ? '0' : '-1');

        function activate() {
          tabButtons.forEach((item) => {
            item.classList.remove('tabs__tab--active');
            item.setAttribute('aria-selected', 'false');
            item.setAttribute('tabindex', '-1');
          });
          panels.forEach((item) => item.hidden = true);

          tab.classList.add('tabs__tab--active');
          tab.setAttribute('aria-selected', 'true');
          tab.setAttribute('tabindex', '0');
          if (panel) panel.hidden = false;
        }

        tab.addEventListener('click', activate);
        tab.addEventListener('keydown', (event) => {
          const currentIndex = tabButtons.indexOf(document.activeElement);
          let nextIndex = currentIndex;
          const vertical = tabList.getAttribute('aria-orientation') === 'vertical';

          if (event.key === (vertical ? 'ArrowDown' : 'ArrowRight')) nextIndex = (currentIndex + 1) % tabButtons.length;
          if (event.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
          if (event.key === 'Home') nextIndex = 0;
          if (event.key === 'End') nextIndex = tabButtons.length - 1;

          if (nextIndex !== currentIndex) {
            event.preventDefault();
            tabButtons[nextIndex].focus();
            tabButtons[nextIndex].click();
          }
        });

        if (tabIndex > 0 && tab.getAttribute('aria-selected') !== 'true' && panel) {
          panel.hidden = true;
        }
      });
    });
  };
})();
