'use strict';

// Small helper used throughout the template
const elementToggleFunc = (elem) => {
  if (elem) elem.classList.toggle('active');
};

// Sidebar
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', () => elementToggleFunc(sidebar));
}

// Testimonials (optional section)
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const testimonialsModalFunc = () => {
  if (modalContainer) modalContainer.classList.toggle('active');
  if (overlay) overlay.classList.toggle('active');
};

if (modalContainer && modalImg && modalTitle && modalText) {
  testimonialsItem.forEach((item) => {
    item.addEventListener('click', function () {
      const avatar = this.querySelector('[data-testimonials-avatar]');
      const title = this.querySelector('[data-testimonials-title]');
      const text = this.querySelector('[data-testimonials-text]');

      if (!avatar || !title || !text) return;

      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
      modalTitle.innerHTML = title.innerHTML;
      modalText.innerHTML = text.innerHTML;
      testimonialsModalFunc();
    });
  });
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', testimonialsModalFunc);
if (overlay) overlay.addEventListener('click', testimonialsModalFunc);

// Portfolio filter (optional section)
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = (selectedValue) => {
  filterItems.forEach((item) => {
    const shouldShow = selectedValue === 'all' || selectedValue === item.dataset.category;
    item.classList.toggle('active', shouldShow);
  });
};

if (select) {
  select.addEventListener('click', function () {
    elementToggleFunc(this);
  });
}

selectItems.forEach((item) => {
  item.addEventListener('click', function () {
    const selectedValue = this.innerText.toLowerCase().trim();
    if (selectValue) selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

let lastClickedBtn = filterBtn.length ? filterBtn[0] : null;

filterBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    const selectedValue = this.innerText.toLowerCase().trim();
    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedBtn = this;
  });
});

// Contact form (optional section)
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (form && formBtn) {
  formInputs.forEach((input) => {
    input.addEventListener('input', () => {
      if (form.checkValidity()) {
        formBtn.removeAttribute('disabled');
      } else {
        formBtn.setAttribute('disabled', '');
      }
    });
  });
}

// Page navigation
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// Your navbar says "My Projects", while the original template page is named "blog".
// This alias lets the button work without forcing you to rename the whole section immediately.
const pageAliases = {
  'my projects': 'blog'
};

navigationLinks.forEach((link) => {
  link.addEventListener('click', function () {
    const requestedName = this.textContent.toLowerCase().trim();
    const targetPage = pageAliases[requestedName] || requestedName;

    let matched = false;

    pages.forEach((page) => {
      const isTarget = page.dataset.page === targetPage;
      page.classList.toggle('active', isTarget);
      if (isTarget) matched = true;
    });

    navigationLinks.forEach((navLink) => navLink.classList.remove('active'));
    if (matched) this.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
