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

  // ---------- Professional Technical Skills section ----------
  const skillSection = document.querySelector('.skill');

  if (skillSection) {
    skillSection.innerHTML = `
      <h3 class="h3 tech-skills-heading">Technical Skills</h3>
      <p class="tech-skills-intro">Core tools and technologies I use across analytics, business intelligence and data engineering projects.</p>

      <div class="tech-skills-grid">
        <div class="tech-skill-card">
          <div class="tech-skill-card-header">
            <div class="tech-skill-icon"><ion-icon name="analytics-outline"></ion-icon></div>
            <div>
              <h4>Analytics & Business Intelligence</h4>
              <p>Business insights, dashboards and decision support</p>
            </div>
          </div>
          <div class="tech-tags">
            <span>Power BI</span>
            <span>Tableau</span>
            <span>Excel</span>
            <span>KPI Reporting</span>
            <span>Dashboard Design</span>
            <span>Data Visualization</span>
          </div>
        </div>

        <div class="tech-skill-card">
          <div class="tech-skill-card-header">
            <div class="tech-skill-icon"><ion-icon name="code-slash-outline"></ion-icon></div>
            <div>
              <h4>SQL & Python</h4>
              <p>Querying, analysis, transformation and automation</p>
            </div>
          </div>
          <div class="tech-tags">
            <span>SQL</span>
            <span>Joins & CTEs</span>
            <span>Window Functions</span>
            <span>Python</span>
            <span>Pandas</span>
            <span>NumPy</span>
          </div>
        </div>

        <div class="tech-skill-card">
          <div class="tech-skill-card-header">
            <div class="tech-skill-icon"><ion-icon name="server-outline"></ion-icon></div>
            <div>
              <h4>Data Engineering</h4>
              <p>ETL/ELT pipelines and modern lakehouse workflows</p>
            </div>
          </div>
          <div class="tech-tags">
            <span>Azure Data Factory</span>
            <span>Databricks</span>
            <span>PySpark</span>
            <span>ADLS Gen2</span>
            <span>Delta Lake</span>
            <span>ETL / ELT</span>
          </div>
        </div>

        <div class="tech-skill-card">
          <div class="tech-skill-card-header">
            <div class="tech-skill-icon"><ion-icon name="layers-outline"></ion-icon></div>
            <div>
              <h4>Data Modeling & Cloud</h4>
              <p>Analytics-ready models, quality and cloud platforms</p>
            </div>
          </div>
          <div class="tech-tags">
            <span>Star Schema</span>
            <span>Dimensional Modeling</span>
            <span>Data Quality</span>
            <span>BigQuery</span>
            <span>Azure</span>
            <span>GCP</span>
          </div>
        </div>
      </div>
    `;

    const techStyle = document.createElement('style');
    techStyle.textContent = `
      .tech-skills-heading {
        margin-bottom: 6px;
      }

      .tech-skills-intro {
        color: var(--light-gray-70);
        font-size: 13px;
        line-height: 1.6;
        margin-bottom: 22px;
      }

      .tech-skills-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .tech-skill-card {
        display: block !important;
        position: relative;
        padding: 20px;
        background: var(--border-gradient-onyx);
        border: 1px solid var(--jet);
        border-radius: 14px;
        box-shadow: var(--shadow-2);
        overflow: hidden;
        z-index: 1;
      }

      .tech-skill-card::before {
        content: '';
        position: absolute;
        inset: 1px;
        background: var(--bg-gradient-jet);
        border-radius: 13px;
        z-index: -1;
      }

      .tech-skill-card-header {
        display: flex;
        align-items: flex-start;
        gap: 13px;
        margin-bottom: 16px;
      }

      .tech-skill-icon {
        width: 40px;
        height: 40px;
        flex: 0 0 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        color: var(--orange-yellow-crayola);
        background: var(--onyx);
        border: 1px solid var(--jet);
        font-size: 20px;
      }

      .tech-skill-card h4 {
        color: var(--white-2);
        font-size: 15px;
        font-weight: 600;
        line-height: 1.35;
        margin: 0 0 4px;
      }

      .tech-skill-card-header p {
        color: var(--light-gray-70);
        font-size: 12px;
        line-height: 1.45;
        margin: 0;
      }

      .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .tech-tags span {
        display: inline-flex;
        align-items: center;
        width: auto;
        padding: 7px 11px;
        border-radius: 8px;
        border: 1px solid var(--jet);
        background: var(--eerie-black-1);
        color: var(--light-gray);
        font-size: 11px;
        font-weight: 500;
        line-height: 1.2;
      }

      .tech-skill-card:hover {
        border-color: hsla(45, 100%, 72%, 0.45);
      }

      @media (min-width: 768px) {
        .tech-skills-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .tech-skill-card {
          min-height: 190px;
        }
      }
    `;
    document.head.appendChild(techStyle);
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
