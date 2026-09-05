import React, { useState, useMemo, useEffect } from 'react';
import './Projects.css';
import projectsData from '../data/projectsData';

/**
 * Pick a random thumbnail from a project's images array
 */
const pickRandomThumbnail = (images) => {
  if (!images || images.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Projects = ({ language, translations }) => {
  const t = translations[language];

  // Process projects: pick random thumbnail for each
  const folders = useMemo(() => {
    return projectsData.map((project) => ({
      id: project.id,
      name: project.name,
      description: project.description,
      githubUrl: project.githubUrl,
      images: project.images,
      thumbnail: pickRandomThumbnail(project.images),
    }));
  }, []);

  const [openFolder, setOpenFolder] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // lock scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = openFolder ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [openFolder]);

  const handleOpenFolder = (folder) => {
    setOpenFolder(folder);
    setActiveIndex(0);
  };

  const currentImage = openFolder?.images[activeIndex] || null;

  const nextImage = () => {
    if (!openFolder || openFolder.images.length === 0) return;
    setActiveIndex((index) => (index + 1) % openFolder.images.length);
  };

  const prevImage = () => {
    if (!openFolder || openFolder.images.length === 0) return;
    setActiveIndex((index) => (index - 1 + openFolder.images.length) % openFolder.images.length);
  };

  return (
    <section id="portfolio" className={`projects ${language === 'ar' ? 'rtl' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t?.projectsTag || 'Portfolio'}</span>
          <h2 className="section-title">{t?.projectsTitle || 'My Projects'}</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">{t?.projectsSubtitle || 'A showcase of my recent projects and work samples.'}</p>
        </div>

        <div className="projects-grid">
          {folders.map((folder) => (
            <div key={folder.id} className="folder-card" onClick={() => handleOpenFolder(folder)}>
              <div className="folder-card-thumb">
                {folder.thumbnail ? (
                  <>
                    <img src={folder.thumbnail} alt={folder.name} />
                    <div className="folder-card-overlay">
                      <i className="fas fa-search-plus"></i>
                      <span>{folder.images.length} {t?.images || 'Images'}</span>
                    </div>
                  </>
                ) : (
                  <div className="folder-card-placeholder">
                    <i className="fas fa-folder"></i>
                    <span>{t?.emptyFolder || 'Empty Folder'}</span>
                  </div>
                )}
              </div>
              <div className="folder-card-info">
                <h3>{folder.name}</h3>
                {folder.description && <p>{folder.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════ OPEN FOLDER — Image Gallery (Full Page Overlay) ═══════ */}
      {openFolder && (
        <div className="folder-full-page" onClick={() => setOpenFolder(null)}>
          <div className={`folder-page-content ${language === 'ar' ? 'rtl' : ''}`} onClick={e => e.stopPropagation()}>
            <div className="folder-header sticky-header">
              <div className="folder-header-left">
                <button className="folder-back-btn" onClick={() => setOpenFolder(null)}>
                  <i className={`fas fa-arrow-${language === 'ar' ? 'right' : 'left'}`}></i>
                </button>
                <i className="fas fa-folder-open folder-header-icon"></i>
                <div className="folder-title-wrap">
                  <h3>{openFolder.name}</h3>
                  <p>{openFolder.description}</p>
                </div>
              </div>
              <div className="folder-header-right">
                <button className="folder-close-btn" onClick={() => setOpenFolder(null)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>

            <div className="folder-body full-width">
              {openFolder.images.length === 0 ? (
                <div className="empty-state">
                  <i className="fas fa-images"></i>
                  <p>{t?.noImages || 'No Images'}</p>
                </div>
              ) : (
                <div className="folder-slider-layout">
                  <div className="slider-left-panel">
                    <div className="slider-main-image-wrap">
                      <img src={currentImage} alt={openFolder.name} loading="lazy" />

                      {openFolder.images.length > 1 && (
                        <>
                          <button className="slider-arrow slider-arrow-left" onClick={prevImage} aria-label="Previous image">
                            <i className="fas fa-chevron-left"></i>
                          </button>

                          <button className="slider-arrow slider-arrow-right" onClick={nextImage} aria-label="Next image">
                            <i className="fas fa-chevron-right"></i>
                          </button>
                        </>
                      )}
                    </div>

                    {openFolder.images.length > 1 && (
                      <div className="slider-thumbs-row">
                        {openFolder.images.map((img, idx) => (
                          <button
                            key={idx}
                            type="button"
                            className={`slider-thumb-btn ${idx === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(idx)}
                            aria-label={`Show image ${idx + 1}`}
                          >
                            <img src={img} alt={`${openFolder.name} ${idx + 1}`} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="slider-right-panel">
                    <div className="project-meta-block">
                      <span className="meta-label">{t?.projectName || 'Project'}</span>
                      <h4>{openFolder.name}</h4>
                      <p>{openFolder.description}</p>
                    </div>

                    {/* GitHub Link Button */}
                    <a
                      href={openFolder.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link-btn"
                    >
                      <i className="fab fa-github"></i>
                      <span>{t?.visitProject || 'View on GitHub'}</span>
                    </a>

                    <div className="project-count-block">
                      <span>{activeIndex + 1} / {openFolder.images.length}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="section-number">04</div>
    </section>
  );
};

export default Projects;

