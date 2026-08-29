'use strict';

// ===============================
// MOHAMED KHALID PORTFOLIO SCRIPT
// ===============================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Sidebar contact layout ----------
  const sidebarStyleFix = document.createElement('style');
  sidebarStyleFix.textContent = `
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

    .contact-item .icon-box {
      flex-shrink: 0 !important;
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
  document.head.appendChild(sidebarStyleFix);

  document.querySelectorAll('.contact-info .contact-link, .contact-info address, .contact-info time').forEach(function (element) {
    element.style.setProperty('white-space', 'normal', 'important');
    element.style.setProperty('overflow', 'visible', 'important');
    element.style.setProperty('text-overflow', 'clip', 'important');
    element.style.setProperty('max-width', 'none', 'important');
    element.style.setProperty('width', '100%', 'important');
    element.style.setProperty('overflow-wrap', 'anywhere', 'important');
    element.style.setProperty('word-break', 'break-word', 'important');
  });

  // ---------- My Skills section ----------
  // Uses the portfolio's original skill-bar design exactly as requested.
  const skillSection = document.querySelector('.skill');

  if (skillSection) {
    skillSection.innerHTML = `
      <h3 class="h3 skills-title">My Skills</h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Python (Pandas, NumPy, Matplotlib, Seaborn)</h5>
            <data value="87">87%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 87%;"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">SQL (Queries, Joins, Aggregation)</h5>
            <data value="83">83%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 83%;"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Excel (VLOOKUP, Pivot Tables, Charts)</h5>
            <data value="85">85%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 85%;"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Tableau / Power BI (Interactive Dashboards)</h5>
            <data value="81">81%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 81%;"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Data Cleaning (Preprocessing & Transformation)</h5>
            <data value="90">90%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Statistical Analysis & A/B Testing (Analysis & Hypothesis Testing)</h5>
            <data value="75">75%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 75%;"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Data Visualization & Reporting (Charts & Reports)</h5>
            <data value="91">91%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 91%;"></div>
          </div>
        </li>
      </ul>
    `;
  }

  // ---------- Portfolio project sync ----------
  // Keep the strong portfolio projects, restore the projects from the previous portfolio,
  // and remove the three visualizer/demo projects requested by the user.
  const portfolioList = document.querySelector('.portfolio .project-list');

  if (portfolioList) {
    const removedRepos = [
      'Medical-Data-Visualizer-Public',
      'Page-View-Time-Series-Visualizer',
      'demographic-data-analyzer'
    ];

    Array.from(portfolioList.querySelectorAll('.project-item')).forEach(function (item) {
      const link = item.querySelector('a');
      const href = link ? link.getAttribute('href') || '' : '';
      if (removedRepos.some(function (repo) { return href.includes(repo); })) {
        item.remove();
      }
    });

    // Use the previous portfolio naming for the customer analytics project.
    const customerProject = Array.from(portfolioList.querySelectorAll('.project-item')).find(function (item) {
      const link = item.querySelector('a');
      return link && (link.getAttribute('href') || '').includes('customer-shopping-behavior-analysis');
    });
    if (customerProject) {
      const title = customerProject.querySelector('.project-title');
      if (title) title.textContent = 'Customer Shopping Trends';
    }

    const addProject = function (config) {
      const exists = Array.from(portfolioList.querySelectorAll('a')).some(function (link) {
        return (link.getAttribute('href') || '') === config.href;
      });
      if (exists) return;

      const item = document.createElement('li');
      item.className = 'project-item active';
      item.setAttribute('data-filter-item', '');
      item.setAttribute('data-category', config.category.toLowerCase());
      item.innerHTML = `
        <a href="${config.href}" target="_blank" rel="noopener noreferrer">
          <figure class="project-img">
            <div class="project-item-icon-box"><ion-icon name="eye-outline"></ion-icon></div>
            <img src="${config.image}" alt="${config.title}" loading="lazy">
          </figure>
          <h3 class="project-title">${config.title}</h3>
          <p class="project-category">${config.category}</p>
        </a>
      `;
      portfolioList.appendChild(item);
    };

    addProject({
      href: 'https://github.com/codewithmohamed18/video_game_analysis',
      title: 'Video Game Analysis',
      category: 'Python',
      image: './assets/images/project-5.png'
    });

    addProject({
      href: 'https://github.com/codewithmohamed18/amazon_books_sales_analysis',
      title: 'Amazon Book Analysis',
      category: 'SQL Queries',
      image: './assets/images/project-6.png'
    });

    // Make SQL Queries available as a filter because Amazon Book Analysis uses it.
    const desktopFilterList = document.querySelector('.portfolio .filter-list');
    if (desktopFilterList && !Array.from(desktopFilterList.querySelectorAll('[data-filter-btn]')).some(function (btn) {
      return btn.textContent.trim().toLowerCase() === 'sql queries';
    })) {
      const li = document.createElement('li');
      li.className = 'filter-item';
      li.innerHTML = '<button data-filter-btn>SQL Queries</button>';
      desktopFilterList.appendChild(li);
    }

    const mobileSelectList = document.querySelector('.portfolio .select-list');
    if (mobileSelectList && !Array.from(mobileSelectList.querySelectorAll('[data-select-item]')).some(function (btn) {
      return btn.textContent.trim().toLowerCase() === 'sql queries';
    })) {
      const li = document.createElement('li');
      li.className = 'select-item';
      li.innerHTML = '<button data-select-item>SQL Queries</button>';
      mobileSelectList.appendChild(li);
    }
  }

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
  // Query after the portfolio sync above, so new/restored projects and filters are included.
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
