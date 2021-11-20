;(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  (() => {
    const menuBtnRef = document.querySelector("[data-menu-button]")
    const mobileMenuRef = document.querySelector("[data-menu]")
    menuBtnRef.addEventListener("click", () => {
      const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
      menuBtnRef.classList.toggle("is-open")
      menuBtnRef.setAttribute("aria-expanded", !expanded)
      mobileMenuRef.classList.toggle("is-open")
    })
  })();

  (() => {
    const menuItmRef = document.querySelectorAll('[data-menu-item]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const menuBtnRef = document.querySelector('[data-menu-button]');
  
    function closeMenu() {
      mobileMenuRef.classList.remove('is-open');
      menuBtnRef.classList.toggle('is-open');
    }
    Array.from(menuItmRef).forEach(item => item.addEventListener('click', closeMenu));
  })();
  