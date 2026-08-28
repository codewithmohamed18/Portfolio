'use strict';

// ===============================
// MOHAMED KHALID PORTFOLIO SCRIPT
// Stable navigation-first version
// ===============================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Sidebar contact layout fix ----------
  // Keep long email / GitHub / LinkedIn text visible instead of truncating with "...".
  const sidebarStyleFix = document.createElement('style');
  sidebarStyleFix.textContent = `
    .contact-info {
      width: 100% !important;
      max-width: none !important;
      min-width: 0 !important;
      overflow: visible !important;
    }

    .contact-info .contact-link,
    .contact-info address,
    .contact-info time {
      white-space: normal !important;
      overflow: visible !important;
      text-overflow: clip !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
      line-height: 1.45 !important;
      max-width: 100% !important;
    }

    .contact-item {
      align-items: flex-start !important;
      min-width: 0 !important;
    }

    .contacts-list {
      width: 100% !important;
    }

    @media (min-width: 1250px) {
      .sidebar {
        width: 320px !important;
        flex: 0 0 320px !important;
      }

      main {
        max-width: 1280px !important;
      }
    }
  `;
  document.head.appendChild(sidebarStyleFix);

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

      // Navbar label is "My Projects" but the existing template section uses data-page="blog".
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
      const visible = category === 'all' || itemCategory === category;
      item.classList.toggle('active', visible);
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
