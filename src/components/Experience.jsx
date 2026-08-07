import { education, experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="experience" aria-label="Experience and education">
      <div className="section-head" data-reveal>
        <h2>Experience</h2>
        <p>Product engineering experience across booking, education, and messaging products.</p>
      </div>

      <ol className="timeline">
        {experience.map((job, i) => (
          <li key={job.company} className="timeline-item" data-reveal style={{ '--d': i % 3 }}>
            <div className="timeline-marker" aria-hidden="true">
              <span className="timeline-dot" />
              {i < experience.length - 1 && <span className="timeline-line" />}
            </div>
            <div className="timeline-card glass">
              <div className="timeline-card-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="timeline-company">{job.company} · {job.location}</p>
                </div>
                <p className="timeline-dates">
                  {job.start} — {job.end}
                </p>
              </div>
              <p className="timeline-summary">{job.summary}</p>
              <ul className="timeline-highlights">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <ul className="tag-row">
                {job.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="section-head section-head-tight" data-reveal>
        <h3>Education</h3>
      </div>

      <div className="education-grid">
        {education.map((ed, i) => (
          <div className="education-card glass" key={ed.school} data-reveal style={{ '--d': i }}>
            {ed.start && ed.end && <p className="education-dates">{ed.start} — {ed.end}</p>}
            <h4>{ed.school}</h4>
            <p className="education-credential">{ed.credential}</p>
            <p className="education-detail">{ed.detail}</p>
            <p className="education-location">{ed.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
