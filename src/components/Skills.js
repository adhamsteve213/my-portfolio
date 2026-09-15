import React, { useState } from 'react';
import './Skills.css';

// ── Frontend images ──────────────────────────────────────────────────
import imgHTML5 from '../assets/my skills/frontend/HTML5_logo_and_wordmark.svg';
import imgReact from '../assets/my skills/frontend/React-icon.svg.webp';
import imgSass from '../assets/my skills/frontend/Sass_Logo_Color.svg.webp';
import imgTS from '../assets/my skills/frontend/Typescript.svg';
import imgVue from '../assets/my skills/frontend/vue.png';
import imgAngular from '../assets/my skills/frontend/angular.png';
import imgBootstrap from '../assets/my skills/frontend/bootstrap.png';
import imgCSS from '../assets/my skills/frontend/css.png';
import imgNextJS from '../assets/my skills/frontend/nextjs.png';
import imgJS from '../assets/my skills/frontend/js.png';
import imgNuxtJS from '../assets/my skills/frontend/images.png';
import imgTailwind from '../assets/my skills/frontend/tailwindcss.png';

// ── Backend images ───────────────────────────────────────────────────
import imgLaravel from '../assets/my skills/backend/Laravel-Logo.wine.png';
import imgCSharp from '../assets/my skills/backend/csharp-logo-265a149e.svg';
import imgDjango from '../assets/my skills/backend/django.png';
import imgJava from '../assets/my skills/backend/java.png';
import imgMongo from '../assets/my skills/backend/mongodb.png';
import imgMySQL from '../assets/my skills/backend/mysql.png';
import imgNode from '../assets/my skills/backend/nodejs.png';
import imgExpress from '../assets/my skills/backend/express.png';
import imgDotNet from '../assets/my skills/backend/.net.png';
import imgPHP from '../assets/my skills/backend/php-logo-png_seeklogo-108600.png';
import imgPython from '../assets/my skills/backend/python_logo_icon_168886.webp';
import imgSpring from '../assets/my skills/backend/spring-boot.png';
import imgSQL from '../assets/my skills/backend/sql-server-tutorial.svg';

// ── Software Solutions images ────────────────────────────────────────
import imgGit from '../assets/my skills/software solutions/Git_icon.svg.webp';
import imgAWS from '../assets/my skills/software solutions/aws.png';
import imgAzure from '../assets/my skills/software solutions/azure.png';
import imgDocker from '../assets/my skills/software solutions/docker.png';
import imgCICD from '../assets/my skills/software solutions/cicd.png';
import imgJenkins from '../assets/my skills/software solutions/jenkins.png';

// ── UI/UX images ─────────────────────────────────────────────────────
import imgFigma from '../assets/my skills/UIUX/figma.png';

// ── AI Automation images ─────────────────────────────────────────────
import imgMake from '../assets/my skills/Ai Automation/make.png';
import imgN8N from '../assets/my skills/Ai Automation/n8n.webp';

// ── Mobile Apps images ──────────────────────────────────────────────
import imgFlutter from '../assets/my skills/mobile apps/flutter-logo-sharing-removebg-preview.png';
import imgReactNative from '../assets/my skills/mobile apps/react_native-removebg-preview.png';

// ── Productivity images ─────────────────────────────────────────────
import imgExcel from '../assets/my skills/productivity/excel-removebg-preview.png';
import imgGoogleSheets from '../assets/my skills/productivity/google-sheets-blog-banner-removebg-preview.png';  
import imgNotion from '../assets/my skills/productivity/notion-removebg-preview.png';
//ai tools
import imgChatGPT from '../assets/my skills/ai tools/Openai-Logo-Knot-Icon-Symbol-Design-PNG.png';
import imgcopilot from '../assets/my skills/ai tools/microsoft-365-copilot-logo-png_seeklogo-501781-removebg-preview.png';
import imggemini from '../assets/my skills/ai tools/Google-Gemini-Logo-Transparent-thumb-removebg-preview.png';
import imgdeepseek from '../assets/my skills/ai tools/deepseek_logo-removebg-preview.png';
import imgclaude from '../assets/my skills/ai tools/claude_logo-removebg-preview.png';
// ── Skill data ───────────────────────────────────────────────────────
const frontendSkills = [
  { name: 'HTML5', image: imgHTML5, color: '#e44d26' },
  { name: 'CSS3', image: imgCSS, color: '#1572b6' },
  { name: 'JavaScript', image: imgJS, color: '#f7df1e' },
  { name: 'TypeScript', image: imgTS, color: '#3178c6' },
  { name: 'SASS', image: imgSass, color: '#cc6699' },
  { name: 'Tailwind CSS', image: imgTailwind, color: '#06b6d4' },
  { name: 'Bootstrap', image: imgBootstrap, color: '#7952b3' },
  { name: 'React.js', image: imgReact, color: '#61dafb' },
  { name: 'Angular', image: imgAngular, color: '#dd0031' },
  { name: 'Vue.js', image: imgVue, color: '#4fc08d' },
  { name: 'Next.js', image: imgNextJS, color: '#ffffff' },
  { name: 'Nuxt.js', image: imgNuxtJS, color: '#00dc82' },
];

const backendSkills = [
  { name: 'C#', image: imgCSharp, color: '#239120' },
  { name: 'ASP.NET', image: imgDotNet, color: '#512bd4' },
  { name: 'SQL Server', image: imgSQL, color: '#cc2927' },
  { name: 'MySQL', image: imgMySQL, color: '#4479a1' },
  { name: 'Python', image: imgPython, color: '#3776ab' },
  { name: 'Django', image: imgDjango, color: '#092e20' },
  { name: 'PHP', image: imgPHP, color: '#777bb4' },
  { name: 'Laravel', image: imgLaravel, color: '#ff2d20' },
  { name: 'Node.js', image: imgNode, color: '#339933' },
  { name: 'Express.js', image: imgExpress, color: '#eeeeee' },
  { name: 'MongoDB', image: imgMongo, color: '#47a248' },
  { name: 'Java', image: imgJava, color: '#007396' },
  { name: 'Spring Boot', image: imgSpring, color: '#6db33f' },
  { name: 'SQL', image: imgSQL, color: '#f29111' },
  
];

const softwareSkills = [
  { name: 'Git', image: imgGit, color: '#f05032' },
  { name: 'Docker', image: imgDocker, color: '#2496ed' },
  { name: 'CI/CD', image: imgCICD, color: '#2088ff' },
  { name: 'AWS', image: imgAWS, color: '#ff9900' },
  { name: 'Azure', image: imgAzure, color: '#0089d6' },
  { name: 'Jenkins', image: imgJenkins, color: '#d33833' },
]

const uiuxSkills = [
  { name: 'Figma', image: imgFigma, color: '#f24e1e' },
];

const aiSkills = [
  { name: 'Make.com', image: imgMake, color: '#6d00cc' },
  { name: 'n8n', image: imgN8N, color: '#ea4b71' },
];

const mobileSkills = [
  { name: 'Flutter', image: imgFlutter, color: '#02569b' },
  { name: 'React Native', image: imgReactNative, color: '#61dafb' },
];

const productivitySkills = [
  { name: 'Microsoft Excel', image: imgExcel, color: '#217346' },
  { name: 'Google Sheets', image: imgGoogleSheets, color: '#34a853' },
  { name: 'Notion', image: imgNotion, color: '#000000' },
];
const aiToolsSkills = [
  { name: 'ChatGPT', image: imgChatGPT, color: '#00a67e' },
  { name: 'Microsoft Copilot', image: imgcopilot, color: '#0078d4' },
  { name: 'Google Gemini', image: imggemini, color: '#4285f4' },
  { name: 'DeepSeek', image: imgdeepseek, color: '#ff6f00' },
  { name: 'Claude', image: imgclaude, color: '#ff4500' },
];
// ── Tab config ───────────────────────────────────────────────────────
const TABS = [
  { id: 'frontend', labelKey: 'frontend', icon: 'fas fa-code', skills: frontendSkills },
  { id: 'backend', labelKey: 'backend', icon: 'fas fa-server', skills: backendSkills },
  { id: 'software', labelKey: 'softwareSolutions', icon: 'fas fa-cogs', skills: softwareSkills },
  { id: 'uiux', labelKey: 'uiux', icon: 'fas fa-paint-brush', skills: uiuxSkills },
  { id: 'ai', labelKey: 'aiAutomations', icon: 'fas fa-robot', skills: aiSkills },
  { id: 'mobile', labelKey: 'mobileApps', icon: 'fas fa-mobile-alt', skills: mobileSkills },
  { id: 'productivity', labelKey: 'productivity', icon: 'fas fa-chart-line', skills: productivitySkills },
  { id: 'aiTools', labelKey: 'aiTools', icon: 'fas fa-robot', skills: aiToolsSkills },
];

const SKILLS_PER_PAGE = 8;

const Skills = ({ language, translations }) => {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState('frontend');
  const [currentPage, setCurrentPage] = useState(1);

  const activeTabData = TABS.find(tab => tab.id === activeTab);
  const skills = activeTabData ? activeTabData.skills : [];
  const totalPages = Math.ceil(skills.length / SKILLS_PER_PAGE);
  const visibleSkills = skills.slice(
    (currentPage - 1) * SKILLS_PER_PAGE,
    currentPage * SKILLS_PER_PAGE
  );

  const selectTab = (tabId) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  return (
    <section id="skills" className={`skills ${language === 'ar' ? 'rtl' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.skillsTag}</span>
          <h2 className="section-title">{t.skillsTitle}</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">{t.skillsSubtitle}</p>
        </div>

        {/* ── Skill category navigation ── */}
        <div className="skills-tabs">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => selectTab(tab.id)}
            >
              <i className={tab.icon}></i>
              {t[tab.labelKey] || tab.id}
              <span className="tab-count">{tab.skills.length}</span>
            </button>
          ))}
        </div>

        {/* ── Skills Grid ── */}
        <div className="skills-grid" key={activeTab}>
          {visibleSkills.map((skill, index) => (
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-card"
              key={skill.name}
              style={{
                '--skill-color': skill.color,
                '--skill-bg': `${skill.color}18`,
                '--delay': `${index * 0.08}s`
              }}
            >
              <div className="skill-icon">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-img"
                />
              </div>
              <div className="skill-glow"></div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-3d-effect"></div>
            </a>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="skills-pagination" aria-label={t.skillsPagination}>
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              aria-label={t.previousPage}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
              <button
                key={page}
                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
                aria-label={`${t.page} ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
              aria-label={t.nextPage}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </nav>
        )}

        <div className="skills-decoration">
          <div className="deco-circle deco-1"></div>
          <div className="deco-circle deco-2"></div>
          <div className="deco-circle deco-3"></div>
        </div>
      </div>
      <div className="section-number">03</div>
    </section>
  );
};

export default Skills;
