import { useCallback, useEffect, useRef, useState } from 'react';
import { projects } from '../data/content';
import { projectArt } from '../data/projectArt';
import { ArrowUpRightIcon } from './Icons';

const canHover = () => window.matchMedia?.('(hover: hover)').matches;

function handleTilt(e) {
  if (!canHover()) return;
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width - 0.5;
  const py = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.setProperty('--rx', `${(-py * 6).toFixed(2)}deg`);
  card.style.setProperty('--ry', `${(px * 8).toFixed(2)}deg`);
}

function resetTilt(e) {
  const card = e.currentTarget;
  card.style.setProperty('--rx', '0deg');
  card.style.setProperty('--ry', '0deg');
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [trigger, setTrigger] = useState(null);
  const closeRef = useRef(null);

  const closeModal = useCallback(() => {
    setSelected(null);
    window.requestAnimationFrame(() => trigger?.focus());
  }, [trigger]);

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [selected, closeModal]);

  useEffect(() => {
    if (selected) closeRef.current?.focus();
  }, [selected]);

  return (
    <section id="projects" className="projects" aria-label="Projects">
      <div className="section-head" data-reveal>
        <h2>Selected projects</h2>
        <p>A few things built end to end — architecture, interface, and the parts in between.</p>
      </div>

      <div className="project-grid">
        {projects.map((project, i) => {
          const Art = projectArt[project.art];
          return (
            <article
              key={project.name}
              className={`project-card glass${project.featured ? ' is-featured' : ''}`}
              data-reveal
              style={{ '--d': i % 3 }}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div className="project-art-wrap">
                <Art />
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>
                <ul className="tag-row">
                  {project.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <button type="button" className="project-link" onClick={(event) => { event.stopPropagation(); setTrigger(event.currentTarget); setSelected(project); }}>
                  View details
                </button>
                {project.links.live && (
                  <div className="project-links">
                    <a href={project.links.live} className="project-link" target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
                      <ArrowUpRightIcon width={16} height={16} />
                      Live site
                    </a>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
      {selected && (
        <div className="project-modal-backdrop" role="presentation" onMouseDown={closeModal}>
          <div
            className="project-modal glass"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
            onKeyDown={(event) => {
              if (event.key !== 'Tab') return;
              const focusable = event.currentTarget.querySelectorAll('button, a[href]');
              if (!focusable.length) return;
              const first = focusable[0];
              const last = focusable[focusable.length - 1];
              if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
              } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
              }
            }}
          >
            <button ref={closeRef} type="button" className="project-modal-close" onClick={closeModal} aria-label="Close project details">×</button>
            <p className="project-modal-kicker">Project details</p>
            <h3 id="project-modal-title">{selected.name}</h3>
            <p className="project-tagline">{selected.tagline}</p>
            <p className="project-modal-description">{selected.description}</p>
            <ul className="tag-row">{selected.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            {selected.links.live ? <a className="project-link" href={selected.links.live} target="_blank" rel="noreferrer">Visit live site <ArrowUpRightIcon width={16} height={16} /></a> : <p className="project-modal-placeholder">Live link not provided.</p>}
          </div>
        </div>
      )}
    </section>
  );
}
