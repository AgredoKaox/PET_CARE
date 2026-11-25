// PetCare — Prototipo | Punto de entrada JavaScript
document.addEventListener('DOMContentLoaded', () => {
  if (window.PetCare) {
    if (window.PetCare.initMenu) window.PetCare.initMenu();
    if (window.PetCare.initTabs) window.PetCare.initTabs();
    if (window.PetCare.initModal) window.PetCare.initModal();
    if (window.PetCare.initPasswordToggles) window.PetCare.initPasswordToggles();
    if (window.PetCare.initPasswordStrength) window.PetCare.initPasswordStrength();
  }
});
