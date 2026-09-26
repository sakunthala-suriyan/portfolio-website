/**
 * SAKUNTHALA S - PORTFOLIO INTERACTIVITY & RECRUITER TOOLS
 * Black & White Theme • Data Analyst & Power BI Developer
 */

// Project Data Details with DAX measures, metrics, and insights
const projectDetails = {
  ecommerce: {
    title: "E-Commerce Global Sales Dashboard",
    category: "Power BI • Executive BI • Sales Analytics",
    kpis: [
      { label: "Total Sales", val: "$1.79M" },
      { label: "Gross Profit", val: "$588.35K" },
      { label: "Profit Margin", val: "32.84%" },
      { label: "Units Sold", val: "6,490" },
      { label: "Total Orders", val: "1,000" }
    ],
    image: "file:///C:/Users/SAKUNTHALA/.gemini/antigravity/brain/1efba922-2213-4910-ad94-4e4938c1ab4b/.user_uploaded/media_1790356405820.png",
    localImage: "assets/images/ecommerce-dashboard.png",
    summary: "Built an executive Power BI dashboard analyzing $1.79M across Shopify ($627K), eBay ($584K), and Amazon ($580K). Empowers commercial stakeholders with multi-channel profit tracking, category velocity, and geographic demand patterns.",
    businessValue: [
      "Multi-Channel Margin Optimization: Proved that while Shopify leads in raw revenue ($627K), all three platforms maintain healthy margins (~32-35%).",
      "Category Revenue Driver: Identified Electronics as the primary revenue driver at $1,047K (58.5% of total GMV), followed by Home & Kitchen ($272K) and Sports ($195K).",
      "Geographic Expansion: India, France, and Canada proved to be top-performing international markets with over $190K+ revenue each.",
      "Inventory & Fulfillment: Top 10 products identified Headphones ($254K) and Laptops ($235K) as critical inventory items requiring prioritized supply chains."
    ],
    daxMeasures: [
      "Total Revenue = SUM('Sales_Data'[Sales_Amount])",
      "Gross Profit = [Total Revenue] - SUM('Sales_Data'[Cost_of_Goods_Sold])",
      "Profit Margin % = DIVIDE([Gross Profit], [Total Revenue], 0)",
      "Top Product Sales = CALCULATE([Total Revenue], TOPN(10, 'Products', [Total Revenue], DESC))",
      "MoM Growth % = \nVAR PrevMonth = CALCULATE([Total Revenue], DATEADD('Calendar'[Date], -1, MONTH))\nRETURN DIVIDE([Total Revenue] - PrevMonth, PrevMonth, 0)"
    ],
    techStack: ["Power BI Desktop", "DAX Formulas", "Power Query ETL", "Star Schema Modeling", "KPI Cards", "Drill-through"]
  },

  hr: {
    title: "HR Analytics & Workforce Attrition Diagnostic",
    category: "Power BI • Workforce Analytics • HR Diagnostic",
    kpis: [
      { label: "Total Employees", val: "1,417" },
      { label: "Active Employees", val: "1,186" },
      { label: "Attrition Count", val: "231" },
      { label: "Attrition Rate", val: "16.3%" },
      { label: "Average Age", val: "37 Yrs" }
    ],
    image: "file:///C:/Users/SAKUNTHALA/.gemini/antigravity/brain/1efba922-2213-4910-ad94-4e4938c1ab4b/.user_uploaded/media_1790356405886.png",
    localImage: "assets/images/hr-dashboard.png",
    summary: "Built an interactive diagnostic Power BI dashboard modeling employee retention, churn risk factors, and department demographics across 1,417 employees to empower HR business partners with actionable retention initiatives.",
    businessValue: [
      "Crucial Retention Discovery: Administration and Sales account for 59% of all corporate attrition (136 out of 231 total exits).",
      "Salary Slab Vulnerability: Employees in the 0–3 LPA and 3–6 LPA salary bands experience the steepest percentage turnover.",
      "Experience Cohort Risk: Turnover spikes dramatically during years 1–2 of employment (early-career cliff) before stabilizing as tenure surpasses 4 years.",
      "Role-Specific Churn: Laboratory Technicians and Sales Executives exhibited the highest absolute exit counts, indicating a need for compensation & workload reviews."
    ],
    daxMeasures: [
      "Total Attrition = CALCULATE(COUNTROWS('Employees'), 'Employees'[Attrition] = \"Yes\")",
      "Attrition Rate % = DIVIDE([Total Attrition], COUNTROWS('Employees'), 0)",
      "Active Headcount = CALCULATE(COUNTROWS('Employees'), 'Employees'[Attrition] = \"No\")",
      "Dept Churn Contribution % = \nDIVIDE([Total Attrition], CALCULATE([Total Attrition], ALL('Employees')), 0)"
    ],
    techStack: ["Power BI", "DAX Measures", "Cohort Analysis", "HR KPIs", "Demographic Modeling", "Slicers & Filters"]
  },

  ev: {
    title: "EV Market & Charging Infrastructure Analytics",
    category: "Power BI • CleanTech & Energy • Geospatial Analytics",
    kpis: [
      { label: "EV Sales Rev", val: "₹27bn" },
      { label: "Charging Sessions", val: "658K" },
      { label: "Energy Consumed", val: "6.93M kWh" },
      { label: "Total EV Sales", val: "5K Units" },
      { label: "Sales Surge", val: "+12.5%" }
    ],
    image: "file:///C:/Users/SAKUNTHALA/.gemini/antigravity/brain/1efba922-2213-4910-ad94-4e4938c1ab4b/.user_uploaded/media_1790356405900.png",
    localImage: "assets/images/ev-dashboard.png",
    summary: "Developed an end-to-end clean mobility and energy dashboard analyzing electric vehicle sales trends, charging infrastructure density, and energy consumption patterns across Indian states and vehicle segments.",
    businessValue: [
      "Infrastructure Utilization Boom: 658,000 charging sessions delivered 6.93M kWh of energy, highlighting a surge in grid infrastructure usage (+18.3%).",
      "South India Regional Leadership: Karnataka, Tamil Nadu, and Kerala lead in adoption velocity and charging density.",
      "Channel Dominance: Dealership networks drive 58% of EV sales, while direct online sales have grown to 12%.",
      "OEM Market Share: BYD (₹153.8M) and Hyundai (₹148.0M) lead top manufacturer revenues, followed closely by Mahindra and Tata Motors."
    ],
    daxMeasures: [
      "Avg Energy per Session = DIVIDE(SUM('Charging'[Energy_kWh]), COUNT('Charging'[Session_ID]), 0)",
      "Dynamic ARPU = DIVIDE(SUM('Sales'[Revenue]), SUM('Sales'[Units_Sold]), 0)",
      "Charging Growth % = \nVAR CurrentSess = [Total Charging Sessions]\nVAR PriorSess = CALCULATE([Total Charging Sessions], PREVIOUSMONTH('Calendar'[Date]))\nRETURN DIVIDE(CurrentSess - PriorSess, PriorSess, 0)",
      "State Adoption Index = DIVIDE([State EV Sales], [Total EV Sales], 0)"
    ],
    techStack: ["Power BI", "Geospatial Maps", "Time of Day Profiling", "Power Query ETL", "Multi-Tab Architecture", "CleanTech KPIs"]
  },

  phonepe: {
    title: "PhonePe Digital Payment Insights — Powering Bharat",
    category: "Power BI • FinTech & Payments • Transaction Analytics",
    kpis: [
      { label: "Total Value", val: "₹3.47bn" },
      { label: "Total Trans.", val: "300K" },
      { label: "Unique Users", val: "108K" },
      { label: "Success Rate", val: "96.00%" },
      { label: "Weekday Share", val: "71.6%" }
    ],
    image: "file:///C:/Users/SAKUNTHALA/.gemini/antigravity/brain/1efba922-2213-4910-ad94-4e4938c1ab4b/.user_uploaded/media_1790356405940.png",
    localImage: "assets/images/phonepe-dashboard.png",
    summary: "Designed an executive FinTech dashboard analyzing digital payments and financial inclusion metrics powering Bharat, examining ₹3.47bn in payment volume, gateway success metrics, demographic cohorts, and service mix.",
    businessValue: [
      "Service Revenue Engine: Loans constitute the single highest transaction value channel at approximately ₹2.53bn, far outpacing Insurance and Recharge services.",
      "Weekday Commerce Dominance: 71.6% of transaction traffic concentrates between Monday and Friday, reflecting commerce and B2B vendor payments.",
      "Demographic Adoption: Gen X leads volume with 37.58%, closely matched by Millennials at 37.07%, demonstrating cross-generational penetration.",
      "System Health & Reliability: Sustained a 96.00% success rate across 300,000 transactions, isolating payment status bottlenecks (Failed vs. Pending vs. Successful)."
    ],
    daxMeasures: [
      "Success Rate % = DIVIDE(CALCULATE(COUNT('Trans'[ID]), 'Trans'[Status] = \"Successful\"), COUNT('Trans'[ID]), 0)",
      "Avg Ticket Size = DIVIDE(SUM('Trans'[Amount]), COUNT('Trans'[ID]), 0)",
      "Cohort Penetration = DIVIDE(CALCULATE(SUM('Trans'[Amount])), CALCULATE(SUM('Trans'[Amount]), ALL('Demographics')), 0)",
      "Daily Run Rate = AVERAGEX(VALUES('Calendar'[Date]), [Total Value])"
    ],
    techStack: ["Power BI", "FinTech DAX", "Time-Series Waves", "Cohort Segmentation", "Transaction Diagnostics", "Financial Modeling"]
  }
};

// Real Production DAX and SQL Code Snippets (Fresher Proof of Technical Competency)
const codeSnippets = {
  daxGrowth: {
    lang: "DAX",
    title: "Month-over-Month (MoM) Revenue Growth with Time Intelligence",
    code: `// DAX Measure: MoM Revenue Growth % with error handling
MoM Revenue Growth % = 
VAR CurrentMonthSales = [Total Revenue]
VAR PreviousMonthSales = 
    CALCULATE(
        [Total Revenue],
        DATEADD('Dim_Date'[Date], -1, MONTH)
    )
VAR Variance = CurrentMonthSales - PreviousMonthSales
RETURN
    IF(
        ISBLANK(PreviousMonthSales),
        BLANK(),
        DIVIDE(Variance, PreviousMonthSales, 0)
    )`
  },

  daxChurn: {
    lang: "DAX",
    title: "Department Churn Contribution % (Context Transition with ALL)",
    code: `// DAX Measure: Relative Department Contribution to Total Company Attrition
Dept Attrition Contribution % = 
VAR DepartmentExits = 
    CALCULATE(
        COUNTROWS('Fact_Employee_Attrition'),
        'Fact_Employee_Attrition'[Attrition_Status] = "Yes"
    )
VAR TotalCompanyExits = 
    CALCULATE(
        COUNTROWS('Fact_Employee_Attrition'),
        'Fact_Employee_Attrition'[Attrition_Status] = "Yes",
        ALL('Fact_Employee_Attrition')
    )
RETURN
    DIVIDE(DepartmentExits, TotalCompanyExits, 0)`
  },

  sqlRanking: {
    lang: "SQL",
    title: "Multi-Table Join with Window Function (DENSE_RANK) across Platforms",
    code: `-- SQL Query: Identify top performing products per sales channel
WITH ProductSalesSummary AS (
    SELECT 
        p.Platform_Name,
        prod.Product_Category,
        prod.Product_Name,
        SUM(f.Sales_Amount) AS Total_Sales,
        SUM(f.Gross_Profit) AS Total_Profit,
        DENSE_RANK() OVER (
            PARTITION BY p.Platform_Name 
            ORDER BY SUM(f.Sales_Amount) DESC
        ) AS Category_Rank
    FROM Fact_Ecommerce_Sales f
    INNER JOIN Dim_Platform p ON f.Platform_ID = p.Platform_ID
    INNER JOIN Dim_Product prod ON f.Product_ID = prod.Product_ID
    WHERE f.Order_Date >= '2026-01-01'
    GROUP BY p.Platform_Name, prod.Product_Category, prod.Product_Name
)
SELECT 
    Platform_Name,
    Product_Category,
    Product_Name,
    Total_Sales,
    Total_Profit
FROM ProductSalesSummary
WHERE Category_Rank <= 5
ORDER BY Platform_Name, Category_Rank;`
  },

  sqlCohort: {
    lang: "SQL",
    title: "Employee Churn Tenure & Salary Bracket Diagnostics",
    code: `-- SQL Query: CTE Aggregation for Attrition Risk Clustering
WITH ChurnMetrics AS (
    SELECT 
        Department,
        Salary_Slab,
        CASE 
            WHEN Years_At_Company <= 2 THEN '0-2 Yrs (High Risk)'
            WHEN Years_At_Company <= 5 THEN '3-5 Yrs (Mid Risk)'
            ELSE '5+ Yrs (Stable)'
        END AS Tenure_Cohort,
        COUNT(*) AS Total_Staff,
        SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) AS Exited_Staff
    FROM Fact_HR_Workforce
    GROUP BY Department, Salary_Slab, 
             CASE 
                WHEN Years_At_Company <= 2 THEN '0-2 Yrs (High Risk)'
                WHEN Years_At_Company <= 5 THEN '3-5 Yrs (Mid Risk)'
                ELSE '5+ Yrs (Stable)'
             END
)
SELECT 
    Department,
    Salary_Slab,
    Tenure_Cohort,
    Total_Staff,
    Exited_Staff,
    ROUND((Exited_Staff * 100.0 / NULLIF(Total_Staff, 0)), 2) AS Attrition_Rate_Pct
FROM ChurnMetrics
WHERE Exited_Staff > 0
ORDER BY Attrition_Rate_Pct DESC;`
  },

  daxFintech: {
    lang: "DAX",
    title: "FinTech UPI Gateway Success Rate & Ticket Size Diagnostic",
    code: `-- DAX Measure: FinTech Payment Gateway Health
Gateway Success Rate % = 
VAR SuccessfulTxn = 
    CALCULATE(
        COUNT('Fact_Transactions'[Transaction_ID]),
        'Fact_Transactions'[Payment_Status] = "Successful"
    )
VAR TotalAttempts = COUNT('Fact_Transactions'[Transaction_ID])
RETURN
    DIVIDE(SuccessfulTxn, TotalAttempts, 0)

// Average Transaction Value (Ticket Size)
Avg Ticket Size INR = 
DIVIDE(
    SUM('Fact_Transactions'[Amount_INR]),
    COUNT('Fact_Transactions'[Transaction_ID]),
    0
)`
  }
};

// DOM Content Loaded Handler
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initProjectFilters();
  initModalLightbox();
  initCodeExplorer();
  initCandidateFitMatcher();
  initDaxCalculator();
  initSimulator();
  initContactForm();
  initCopyButtons();
});

/* ==========================================================================
   1. Theme Toggle (Black & White Dark / Light)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio_theme", next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById("themeIcon");
  if (!iconSpan) return;
  iconSpan.textContent = theme === "light" ? "🌙" : "☀️";
}

/* ==========================================================================
   2. Project Filter Tabs
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const categories = card.getAttribute("data-categories") || "";
        if (filterVal === "all" || categories.includes(filterVal)) {
          card.style.display = "flex";
          card.style.opacity = "1";
        } else {
          card.style.display = "none";
          card.style.opacity = "0";
        }
      });
    });
  });
}

/* ==========================================================================
   3. Interactive Modal / Lightbox for Project Details
   ========================================================================== */
function initModalLightbox() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const modalBody = document.getElementById("modalDynamicContent");

  if (!modal || !closeBtn) return;

  window.openProjectModal = function(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    let kpiHtml = data.kpis.map(k => `
      <div style="background: var(--bg-tertiary); border: 1px solid var(--border-color); padding: 0.85rem; border-radius: 0.5rem;">
        <div style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700;">${k.label}</div>
        <div style="font-size: 1.35rem; font-weight: 800; color: var(--text-main); margin-top: 0.2rem;">${k.val}</div>
      </div>
    `).join("");

    let businessHtml = data.businessValue.map(b => `
      <li style="margin-bottom: 0.6rem; color: var(--text-main); font-size: 0.88rem;">${b}</li>
    `).join("");

    let daxHtml = data.daxMeasures.map(d => `
      <div style="background: #000; padding: 0.75rem 1rem; border-radius: 0.4rem; font-family: monospace; font-size: 0.8rem; color: #fff; border-left: 2px solid var(--text-main); margin-bottom: 0.6rem; white-space: pre-wrap; overflow-x: auto;">${escapeHtml(d)}</div>
    `).join("");

    let techHtml = data.techStack.map(t => `
      <span class="tech-pill">${t}</span>
    `).join("");

    modalBody.innerHTML = `
      <div class="modal-img-container">
        <img src="${data.image}" onerror="this.onerror=null; this.src='${data.localImage}'; this.parentElement.style.padding='1rem';" alt="${data.title}">
      </div>
      <div class="modal-details">
        <div style="margin-bottom: 1.25rem;">
          <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-dim);">${data.category}</span>
          <h2 style="font-size: 1.6rem; font-weight: 800; margin-top: 0.25rem; color: var(--text-main);">${data.title}</h2>
        </div>

        <p style="font-size: 0.98rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
          ${data.summary}
        </p>

        <h3 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 800; color: var(--text-dim); margin-bottom: 0.75rem;">
          Executive KPI Metrics
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem;">
          ${kpiHtml}
        </div>

        <h3 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 800; color: var(--text-dim); margin-bottom: 0.75rem;">
          Business Problem, Solution & Measurable Impact
        </h3>
        <ul style="padding-left: 1.15rem; margin-bottom: 1.5rem; line-height: 1.6;">
          ${businessHtml}
        </ul>

        <h3 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 800; color: var(--text-dim); margin-bottom: 0.75rem;">
          Production DAX Code & Business Formulas
        </h3>
        <div style="margin-bottom: 1.5rem;">
          ${daxHtml}
        </div>

        <h3 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 800; color: var(--text-dim); margin-bottom: 0.75rem;">
          Technologies & Data Modeling
        </h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
          ${techHtml}
        </div>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

/* ==========================================================================
   4. Interactive SQL & DAX Code Explorer (Fresher Extra)
   ========================================================================== */
function initCodeExplorer() {
  const tabs = document.querySelectorAll(".code-tab-btn");
  const codeBox = document.getElementById("codeContentBox");
  const copyBtn = document.getElementById("copyCodeBtn");

  if (!codeBox || tabs.length === 0) return;

  let currentKey = "daxGrowth";

  function renderCode(key) {
    const item = codeSnippets[key];
    if (!item) return;
    currentKey = key;
    codeBox.textContent = item.code;
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const key = tab.getAttribute("data-code");
      renderCode(key);
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const item = codeSnippets[currentKey];
      if (item) {
        copyToClipboard(item.code, item.lang + " Code Snippet");
      }
    });
  }

  // Initial render
  renderCode("daxGrowth");
}

/* ==========================================================================
   5. Interactive Live Dashboard Simulator / KPI Explorer
   ========================================================================== */
function initSimulator() {
  const simTabs = document.querySelectorAll(".sim-tab-btn");
  const simContent = document.getElementById("simDynamicContent");
  if (!simContent || simTabs.length === 0) return;

  const simViews = {
    ecommerce: `
      <div style="display: grid; grid-template-columns: 1.4fr 1fr; gap: 1.5rem; align-items: stretch;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
            <h4 style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">Monthly Sales & Gross Profit Trend (2026)</h4>
            <span style="font-size: 0.75rem; color: var(--text-muted);">■ Revenue &nbsp; — Gross Profit</span>
          </div>
          <div style="background: #000; border: 1px solid var(--border-color); border-radius: 0.6rem; padding: 1.25rem;">
            <svg viewBox="0 0 500 200" style="width: 100%; height: auto; display: block;">
              <line x1="40" y1="20" x2="480" y2="20" stroke="rgba(255,255,255,0.06)" />
              <line x1="40" y1="70" x2="480" y2="70" stroke="rgba(255,255,255,0.06)" />
              <line x1="40" y1="120" x2="480" y2="120" stroke="rgba(255,255,255,0.06)" />
              <line x1="40" y1="170" x2="480" y2="170" stroke="rgba(255,255,255,0.2)" />
              <!-- Revenue Bars in Monochrome Slate -->
              <rect x="55" y="60" width="22" height="110" rx="3" fill="#ffffff" opacity="0.85" />
              <rect x="92" y="58" width="22" height="112" rx="3" fill="#ffffff" opacity="0.85" />
              <rect x="129" y="72" width="22" height="98" rx="3" fill="#ffffff" opacity="0.85" />
              <rect x="166" y="98" width="22" height="72" rx="3" fill="#ffffff" opacity="0.85" />
              <rect x="203" y="40" width="22" height="130" rx="3" fill="#ffffff" opacity="0.85" />
              <rect x="240" y="50" width="22" height="120" rx="3" fill="#ffffff" opacity="0.85" />
              <rect x="277" y="56" width="22" height="114" rx="3" fill="#ffffff" opacity="0.85" />
              <rect x="314" y="46" width="22" height="124" rx="3" fill="#ffffff" opacity="0.85" />
              <rect x="351" y="38" width="22" height="132" rx="3" fill="#ffffff" opacity="0.85" />
              <rect x="388" y="52" width="22" height="118" rx="3" fill="#ffffff" opacity="0.85" />
              <rect x="425" y="58" width="22" height="112" rx="3" fill="#ffffff" opacity="0.85" />
              <!-- Profit Trend Line in stark white -->
              <polyline points="66,135 103,136 140,138 177,148 214,128 251,130 288,138 325,126 362,124 399,130 436,132"
                fill="none" stroke="#a1a1aa" stroke-width="2.5" stroke-linecap="round" />
              <text x="66" y="190" text-anchor="middle" fill="#71717a" font-size="10">Jan</text>
              <text x="140" y="190" text-anchor="middle" fill="#71717a" font-size="10">Mar</text>
              <text x="214" y="190" text-anchor="middle" fill="#71717a" font-size="10">May</text>
              <text x="288" y="190" text-anchor="middle" fill="#71717a" font-size="10">Jul</text>
              <text x="362" y="190" text-anchor="middle" fill="#71717a" font-size="10">Sep</text>
              <text x="436" y="190" text-anchor="middle" fill="#71717a" font-size="10">Nov</text>
            </svg>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          <h4 style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">Platform Share ($1.79M GMV)</h4>
          <div style="background: #000; border: 1px solid var(--border-color); border-radius: 0.6rem; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-around; flex-grow: 1;">
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.35rem;">
                <span>Shopify</span>
                <span style="color: #fff;">$627K (35.0%)</span>
              </div>
              <div class="skill-progress-bg"><div class="skill-progress-bar" style="width: 35%;"></div></div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.35rem;">
                <span>eBay</span>
                <span style="color: #a1a1aa;">$584K (32.6%)</span>
              </div>
              <div class="skill-progress-bg"><div class="skill-progress-bar" style="width: 32.6%; background: #a1a1aa;"></div></div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.35rem;">
                <span>Amazon</span>
                <span style="color: #71717a;">$580K (32.4%)</span>
              </div>
              <div class="skill-progress-bg"><div class="skill-progress-bar" style="width: 32.4%; background: #71717a;"></div></div>
            </div>
            <div style="padding-top: 0.75rem; border-top: 1px solid var(--border-color); font-size: 0.8rem; color: var(--text-muted);">
              💡 <strong>Key Takeaway:</strong> Electronics generated $1,047K (58.5% of sales) with 32.84% margin stability.
            </div>
          </div>
        </div>
      </div>
    `,

    hr: `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
        <div>
          <h4 style="font-weight: 700; font-size: 0.95rem; color: var(--text-main); margin-bottom: 0.75rem;">Department Attrition Concentration (231 Exits)</h4>
          <div style="background: #000; border: 1px solid var(--border-color); border-radius: 0.6rem; padding: 1.25rem;">
            <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              <svg viewBox="0 0 160 160" width="130" height="130">
                <circle r="60" cx="80" cy="80" fill="transparent" stroke="#27272a" stroke-width="20" />
                <circle r="60" cx="80" cy="80" fill="transparent" stroke="#ffffff" stroke-width="20"
                  stroke-dasharray="135.7 377" stroke-dashoffset="0" />
                <circle r="60" cx="80" cy="80" fill="transparent" stroke="#a1a1aa" stroke-width="20"
                  stroke-dasharray="86.7 377" stroke-dashoffset="-135.7" />
                <circle r="60" cx="80" cy="80" fill="transparent" stroke="#71717a" stroke-width="20"
                  stroke-dasharray="71.6 377" stroke-dashoffset="-222.4" />
                <text x="80" y="85" text-anchor="middle" fill="#fff" font-weight="800" font-size="14">16.3%</text>
              </svg>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.8rem;">
              <div><span style="color:#ffffff;">■</span> Administration: 36%</div>
              <div><span style="color:#a1a1aa;">■</span> Sales: 23%</div>
              <div><span style="color:#71717a;">■</span> Operations: 19%</div>
              <div><span style="color:#52525b;">■</span> IT: 13%</div>
            </div>
          </div>
        </div>

        <div>
          <h4 style="font-weight: 700; font-size: 0.95rem; color: var(--text-main); margin-bottom: 0.75rem;">HR Diagnostic Insights</h4>
          <div style="background: #000; border: 1px solid var(--border-color); border-radius: 0.6rem; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
            <div style="border-left: 2px solid #ffffff; padding-left: 0.75rem;">
              <div style="font-weight: 700; font-size: 0.85rem; color: #ffffff;">59% Churn Concentration</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Admin and Sales account for 136 of 231 exits. Immediate retention priority.</div>
            </div>
            <div style="border-left: 2px solid #a1a1aa; padding-left: 0.75rem;">
              <div style="font-weight: 700; font-size: 0.85rem; color: #a1a1aa;">Tenure Cliff (Years 1–2)</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Attrition peaks within years 1 to 2 before stabilizing past year 4.</div>
            </div>
            <div style="border-left: 2px solid #71717a; padding-left: 0.75rem;">
              <div style="font-weight: 700; font-size: 0.85rem; color: #71717a;">Salary Slab Sensitivity</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">0–3 LPA and 3–6 LPA compensation bands have the highest turnover rates.</div>
            </div>
          </div>
        </div>
      </div>
    `,

    ev: `
      <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 1.5rem;">
        <div>
          <h4 style="font-weight: 700; font-size: 0.95rem; color: var(--text-main); margin-bottom: 0.75rem;">Top EV Manufacturers by Revenue (India)</h4>
          <div style="background: #000; border: 1px solid var(--border-color); border-radius: 0.6rem; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.85rem;">
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>BYD</span>
                <span>₹153.8M (512 Units)</span>
              </div>
              <div class="skill-progress-bg"><div class="skill-progress-bar" style="width: 95%;"></div></div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>Hyundai</span>
                <span>₹148.0M (513 Units)</span>
              </div>
              <div class="skill-progress-bg"><div class="skill-progress-bar" style="width: 91%; background: #a1a1aa;"></div></div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>Mahindra</span>
                <span>₹95.9M (531 Units)</span>
              </div>
              <div class="skill-progress-bg"><div class="skill-progress-bar" style="width: 62%; background: #71717a;"></div></div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>Tata Motors</span>
                <span>₹72.9M (655 Units)</span>
              </div>
              <div class="skill-progress-bg"><div class="skill-progress-bar" style="width: 48%; background: #52525b;"></div></div>
            </div>
          </div>
        </div>

        <div style="background: #000; border: 1px solid var(--border-color); border-radius: 0.6rem; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
          <h4 style="font-weight: 700; font-size: 0.95rem; color: var(--text-main); margin-bottom: 0.5rem;">Infrastructure Dynamics</h4>
          <div style="display: flex; flex-direction: column; gap: 0.65rem;">
            <div style="background: var(--bg-tertiary); padding: 0.65rem; border-radius: 0.4rem; border: 1px solid var(--border-color);">
              <div style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700;">Charging Sessions</div>
              <div style="font-size: 1.25rem; font-weight: 800; color: #fff;">658,000</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">+18.3% MoM growth</div>
            </div>
            <div style="background: var(--bg-tertiary); padding: 0.65rem; border-radius: 0.4rem; border: 1px solid var(--border-color);">
              <div style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700;">Energy Consumed</div>
              <div style="font-size: 1.25rem; font-weight: 800; color: #fff;">6.93M kWh</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Clean power delivered</div>
            </div>
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.6rem;">
            📍 <strong>Adoption Hub:</strong> Karnataka and Tamil Nadu lead public fast-charging grid utilization.
          </div>
        </div>
      </div>
    `,

    phonepe: `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
        <div>
          <h4 style="font-weight: 700; font-size: 0.95rem; color: var(--text-main); margin-bottom: 0.75rem;">Transaction Value by Service (₹3.47bn Total)</h4>
          <div style="background: #000; border: 1px solid var(--border-color); border-radius: 0.6rem; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.85rem;">
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>Digital Loans</span>
                <span>₹2.50bn (72.0%)</span>
              </div>
              <div class="skill-progress-bg"><div class="skill-progress-bar" style="width: 72%;"></div></div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>Insurance Premium</span>
                <span>₹0.50bn (14.4%)</span>
              </div>
              <div class="skill-progress-bg"><div class="skill-progress-bar" style="width: 14.4%; background: #a1a1aa;"></div></div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>P2P Transfers</span>
                <span>₹0.40bn (11.5%)</span>
              </div>
              <div class="skill-progress-bg"><div class="skill-progress-bar" style="width: 11.5%; background: #71717a;"></div></div>
            </div>
          </div>
        </div>

        <div style="background: #000; border: 1px solid var(--border-color); border-radius: 0.6rem; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
          <h4 style="font-weight: 700; font-size: 0.95rem; color: var(--text-main); margin-bottom: 0.5rem;">User & Temporal Metrics</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem;">
            <div style="background: var(--bg-tertiary); padding: 0.65rem; border-radius: 0.4rem; border: 1px solid var(--border-color);">
              <div style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700;">Weekday Traffic</div>
              <div style="font-size: 1.25rem; font-weight: 800; color: #fff;">71.6%</div>
            </div>
            <div style="background: var(--bg-tertiary); padding: 0.65rem; border-radius: 0.4rem; border: 1px solid var(--border-color);">
              <div style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700;">Success Rate</div>
              <div style="font-size: 1.25rem; font-weight: 800; color: #fff;">96.00%</div>
            </div>
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.6rem;">
            👥 <strong>Demographic Balance:</strong> Gen X represents 37.58% of payments, followed closely by Millennials at 37.07%.
          </div>
        </div>
      </div>
    `
  };

  simContent.innerHTML = simViews.ecommerce;

  simTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      simTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const key = tab.getAttribute("data-sim");
      if (simViews[key]) {
        simContent.innerHTML = simViews[key];
      }
    });
  });
}

/* ==========================================================================
   6. Contact Form & Toast
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("senderName").value.trim();
    const email = document.getElementById("senderEmail").value.trim();
    const subject = document.getElementById("messageSubject").value.trim();
    const message = document.getElementById("messageBody").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.");
      return;
    }

    const mailtoLink = `mailto:sakunthalasuriyan992@gmail.com?subject=${encodeURIComponent(subject || 'Interview / Opportunity for Sakunthala S (' + name + ')')}&body=${encodeURIComponent("Sender Name: " + name + "\nSender Email: " + email + "\n\nMessage:\n" + message)}`;
    
    window.location.href = mailtoLink;
    showToast("Opening default email client...");
    form.reset();
  });
}

/* ==========================================================================
   7. Copy to Clipboard Utility
   ========================================================================== */
function initCopyButtons() {
  window.copyToClipboard = function(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied ${label} to clipboard!`);
      }).catch(() => {
        fallbackCopy(text, label);
      });
    } else {
      fallbackCopy(text, label);
    }
  };

  function fallbackCopy(text, label) {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast(`Copied ${label} to clipboard!`);
  }
}

/* ==========================================================================
   8. Toast Notification
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==========================================================================
   Candidate Fit Matcher (Interactive Recruiter Extra)
   ========================================================================== */
function initCandidateFitMatcher() {
  const tabs = document.querySelectorAll(".fit-tab-btn");
  const content = document.getElementById("fitDetailsContent");
  if (!content || tabs.length === 0) return;

  const fitProfiles = {
    pbi: {
      title: "Power BI / DAX Developer Fit",
      fitScore: "98% Match",
      summary: "Proven ability to model complex relational data (Star Schema), author optimized DAX measures (CALCULATE context transitions, semi-additive calculations, time intelligence), and design high-signal executive KPI dashboards.",
      keyStrengths: [
        "DAX Measures: Time Intelligence (MoM, YoY), iterators (SUMX, AVERAGEX), and filter overrides (ALL, ALLEXCEPT).",
        "Dimensional Modeling: Fact/Dimension separation, bridge tables, and bi-directional cross-filtering management.",
        "4 Production Dashboards: Global Sales ($1.79M), HR Attrition (1,417 staff), CleanTech EV (₹27bn), and FinTech Payments (₹3.47bn).",
        "Power BI Service: Row-level security (RLS), scheduled refreshes, workspace app distribution, and gateway connectivity."
      ],
      matchingProjects: ["E-Commerce Global Sales", "HR Analytics & Workforce Churn", "EV Infrastructure Analytics"]
    },

    sql: {
      title: "SQL & Data Pipeline Analyst Fit",
      fitScore: "95% Match",
      summary: "Skilled in querying relational databases, data extraction, complex joins, subqueries, Common Table Expressions (CTEs), and analytical window functions.",
      keyStrengths: [
        "SQL Querying: DENSE_RANK, ROW_NUMBER, CTE aggregations, multi-table INNER/LEFT joins, and HAVING filters.",
        "Power Query M Code: Custom data shaping, merging, unpivoting columns, conditional columns, and data cleansing.",
        "ETL Discipline: Handling nulls, duplicate keys, data type normalization, and pipeline validation.",
        "Certified: 'The Complete SQL Bootcamp: Go from Zero to Hero' (2026)."
      ],
      matchingProjects: ["E-Commerce Sales Platform Modeling", "HR Churn Risk Segmentation", "PhonePe UPI Transaction Cohorts"]
    },

    business: {
      title: "Financial & Commercial Analyst Fit",
      fitScore: "99% Match",
      summary: "Unique dual qualification in Commerce and Computer Applications. Speaks the language of business stakeholders natively — margins, ROI, ARPU, CAC, and operational bottlenecks.",
      keyStrengths: [
        "Academic Honors: Gold Medalist in M.Com (Computer Applications) and University 3rd Rank (86.61%) in M.Phil (Commerce).",
        "Commercial Metrics: Margin analysis, gross profit elasticity, product category Pareto distributions (80/20 rule).",
        "FinTech & Retail Acumen: Financial services modeling (₹3.47bn volume, digital loans, insurance premiums).",
        "Executive Storytelling: Synthesizing statistical variance into bottom-line executive summaries."
      ],
      matchingProjects: ["PhonePe Digital Payment Insights", "E-Commerce Multi-Channel Margin Tracking", "HR Workforce Churn Cost Model"]
    },

    immediate: {
      title: "Immediate Joining & Rapid Onboarding Fit",
      fitScore: "100% Available",
      summary: "Zero days notice period. Certified in 9 industry credentials in 2026 alone, demonstrating unmatched learning velocity and rapid productivity.",
      keyStrengths: [
        "Notice Period: Immediate (0 Days) — Ready for immediate offer rollout and onboarding.",
        "Location Flexibility: Open to Chennai, Bangalore, Hyderabad, Coimbatore, Salem, Hybrid, and Remote.",
        "Enterprise Exposure: 7 months at Verticurl (A WPP Company) working within Agile teams and delivery standards.",
        "Continuous Learner: 9 verified certifications across Power BI, SQL, Python, Tableau, and Excel in 2026."
      ],
      matchingProjects: ["All 4 Production BI Dashboards", "Production Code Explorer", "ATS Resume Ready"]
    }
  };

  function renderFit(key) {
    const data = fitProfiles[key];
    if (!data) return;

    let strengthsHtml = data.keyStrengths.map(s => `
      <li style="margin-bottom: 0.45rem; font-size: 0.85rem; color: var(--text-muted); position: relative; padding-left: 1.1rem;">
        <span style="position: absolute; left: 0; color: #fff;">▪</span> ${s}
      </li>
    `).join("");

    let projHtml = data.matchingProjects.map(p => `
      <span class="tech-pill" style="color: #fff; background: #000; border-color: var(--border-accent);">${p}</span>
    `).join("");

    content.innerHTML = `
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.65rem;">
          <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--text-main);">${data.title}</h4>
          <span style="font-size: 0.82rem; font-weight: 800; color: #fff; background: var(--bg-tertiary); padding: 0.25rem 0.65rem; border-radius: 9999px; border: 1px solid var(--border-color);">${data.fitScore}</span>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.15rem;">
          ${data.summary}
        </p>
        <ul style="list-style: none; margin-bottom: 1rem;">
          ${strengthsHtml}
        </ul>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center;">
          <span style="font-size: 0.75rem; color: var(--text-dim); font-weight: 700; text-transform: uppercase;">Proof Projects:</span>
          ${projHtml}
        </div>
      </div>

      <div style="background: #000; border: 1px solid var(--border-color); border-radius: 0.75rem; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.85rem; text-align: center;">
        <div style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700;">Recruiter Action</div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #fff;">Direct Interview Request</div>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Shortlist Sakunthala directly for your open requisition.</p>
        <a href="https://wa.me/919790156348?text=Hello%20Sakunthala,%20we%20want%20to%20interview%20you%20for%20a%20Data%20Analyst%20role" target="_blank" class="btn btn-whatsapp" style="padding: 0.55rem; font-size: 0.82rem; text-decoration: none;">
          <span>💬</span> Chat on WhatsApp
        </a>
        <a href="mailto:sakunthalasuriyan992@gmail.com?subject=Interview%20Invitation%20-%20Data%20Analyst" class="btn btn-secondary" style="padding: 0.55rem; font-size: 0.82rem;">
          Send Email Invite
        </a>
      </div>
    `;
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const key = tab.getAttribute("data-fit");
      renderFit(key);
    });
  });

  renderFit("pbi");
}

/* ==========================================================================
   Live DAX Metric Calculator (Interactive Recruiter Extra)
   ========================================================================== */
function initDaxCalculator() {
  const revInput = document.getElementById("calcRevenue");
  const cogsInput = document.getElementById("calcCogs");
  const channelSelect = document.getElementById("calcChannel");
  const profitDisplay = document.getElementById("calcGrossProfitDisplay");
  const marginDisplay = document.getElementById("calcMarginDisplay");
  const statusDisplay = document.getElementById("calcStatusDisplay");

  if (!revInput || !cogsInput || !profitDisplay) return;

  const presets = {
    All: { rev: 1790000, cogs: 1201650 },
    Shopify: { rev: 627000, cogs: 422000 },
    eBay: { rev: 584000, cogs: 387000 },
    Amazon: { rev: 580000, cogs: 394000 }
  };

  function calculate() {
    const rev = parseFloat(revInput.value) || 0;
    const cogs = parseFloat(cogsInput.value) || 0;
    const grossProfit = rev - cogs;
    const marginPct = rev > 0 ? (grossProfit / rev) * 100 : 0;

    profitDisplay.textContent = "$" + grossProfit.toLocaleString();
    marginDisplay.textContent = marginPct.toFixed(2) + "%";

    if (marginPct >= 30) {
      statusDisplay.textContent = "🟢 Healthy Margin (>30%)";
      statusDisplay.style.color = "#22c55e";
    } else if (marginPct >= 15) {
      statusDisplay.textContent = "🟡 Moderate Margin (15–30%)";
      statusDisplay.style.color = "#f59e0b";
    } else {
      statusDisplay.textContent = "🔴 Low / Warning Margin (<15%)";
      statusDisplay.style.color = "#ef4444";
    }
  }

  if (channelSelect) {
    channelSelect.addEventListener("change", () => {
      const p = presets[channelSelect.value];
      if (p) {
        revInput.value = p.rev;
        cogsInput.value = p.cogs;
        calculate();
      }
    });
  }

  revInput.addEventListener("input", calculate);
  cogsInput.addEventListener("input", calculate);
  calculate();
}
