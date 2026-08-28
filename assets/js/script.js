'use strict';

// ===============================
// MOHAMED KHALID PORTFOLIO SCRIPT
// ===============================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Portfolio layout refinements ----------
  const layoutFix = document.createElement('style');
  layoutFix.textContent = `
    .contacts-list,
    .contact-item,
    .contact-info {
      overflow: visible !important;
    }

    .contacts-list {
      width: 100% !important;
    }

    .contact-item {
      display: grid !important;
      grid-template-columns: 46px minmax(0, 1fr) !important;
      gap: 16px !important;
      align-items: center !important;
      width: 100% !important;
      min-width: 0 !important;
    }

    .contact-info {
      width: auto !important;
      max-width: none !important;
      min-width: 0 !important;
    }

    .contact-info .contact-link,
    .contact-info address,
    .contact-info time {
      display: block !important;
      width: 100% !important;
      max-width: none !important;
      min-width: 0 !important;
      white-space: normal !important;
      overflow: visible !important;
      text-overflow: clip !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
      line-height: 1.45 !important;
    }

    /* Clean recruiter-friendly skills layout */
    .skill .skills-list {
      padding: 24px !important;
    }

    .skill .skills-item:not(:last-child) {
      margin-bottom: 24px !important;
    }

    .skill .title-wrapper {
      display: grid !important;
      grid-template-columns: minmax(0, 1fr) 52px !important;
      align-items: end !important;
      gap: 16px !important;
      width: 100% !important;
      margin-bottom: 9px !important;
    }

    .skill .title-wrapper .h5 {
      min-width: 0 !important;
      margin: 0 !important;
      line-height: 1.45 !important;
      font-size: 14px !important;
      font-weight: 600 !important;
    }

    .skill .title-wrapper .h5 span {
      display: inline !important;
      color: var(--light-gray) !important;
      font-size: 13px !important;
      font-weight: 400 !important;
    }

    .skill .title-wrapper data {
      justify-self: end !important;
      align-self: end !important;
      width: 52px !important;
      text-align: right !important;
      color: var(--orange-yellow-crayola) !important;
      font-size: 13px !important;
      font-weight: 500 !important;
      line-height: 1.45 !important;
    }

    .skill-progress-bg {
      width: 100% !important;
      height: 7px !important;
      overflow: hidden !important;
      border-radius: 999px !important;
    }

    .skill-progress-fill {
      border-radius: 999px !important;
    }

    @media (max-width: 520px) {
      .skill .skills-list {
        padding: 18px !important;
      }

      .skill .title-wrapper {
        grid-template-columns: minmax(0, 1fr) 44px !important;
        gap: 10px !important;
      }

      .skill .title-wrapper .h5 {
        font-size: 13px !important;
      }

      .skill .title-wrapper .h5 span {
        display: block !important;
        margin-top: 2px !important;
        font-size: 12px !important;
        line-height: 1.4 !important;
      }

      .skill .title-wrapper data {
        width: 44px !important;
        font-size: 12px !important;
      }
    }

    @media (min-width: 768px) {
      .sidebar {
        width: 340px !important;
        max-width: 340px !important;
      }
    }

    @media (min-width: 1250px) {
      .sidebar {
        width: 360px !important;
        max-width: 360px !important;
        flex: 0 0 360px !important;
      }

      main {
        max-width: 1350px !important;
      }
    }
  `;
  document.head.appendChild(layoutFix);

  // ---------- Sidebar ----------
  const sidebar = document.querySelector('[data-sidebar]');
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');

  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener('click', function () {
      sidebar.classList.toggle('active');
    });
  }

  // ---------- Main navigation ----------
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
  const pages = Array.from(document.querySelectorAll('[data-page]'));

  function normalize(value) {
    return String(value || '').trim().toLowerCase();
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      let target = normalize(link.textContent);
      if (target === 'my projects') target = 'blog';

      pages.forEach(function (page) {
        page.classList.toggle('active', normalize(page.dataset.page) === target);
      });

      navLinks.forEach(function (item) {
        item.classList.remove('active');
      });

      link.classList.add('active');
      window.scrollTo(0, 0);
    });
  });

  // ---------- Portfolio filtering ----------
  const filterItems = Array.from(document.querySelectorAll('[data-filter-item]'));
  const filterButtons = Array.from(document.querySelectorAll('[data-filter-btn]'));
  const select = document.querySelector('[data-select]');
  const selectItems = Array.from(document.querySelectorAll('[data-select-item]'));
  const selectValue = document.querySelector('[data-selecct-value]');

  function filterProjects(category) {
    category = normalize(category);
    filterItems.forEach(function (item) {
      const itemCategory = normalize(item.dataset.category);
      item.classList.toggle('active', category === 'all' || itemCategory === category);
    });
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const category = normalize(button.textContent);
      filterProjects(category);

      filterButtons.forEach(function (item) {
        item.classList.remove('active');
      });

      button.classList.add('active');
      if (selectValue) selectValue.textContent = button.textContent.trim();
    });
  });

  if (select) {
    select.addEventListener('click', function () {
      select.classList.toggle('active');
    });
  }

  selectItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const category = normalize(item.textContent);
      filterProjects(category);
      if (selectValue) selectValue.textContent = item.textContent.trim();
      if (select) select.classList.remove('active');
    });
  });

  // ---------- Contact form ----------
  const form = document.querySelector('[data-form]');
  const formInputs = Array.from(document.querySelectorAll('[data-form-input]'));
  const formBtn = document.querySelector('[data-form-btn]');

  if (form && formBtn) {
    formInputs.forEach(function (input) {
      input.addEventListener('input', function () {
        formBtn.disabled = !form.checkValidity();
      });
    });
  }
});
