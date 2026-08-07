import { profile } from '../data/content';
import { ArrowUpRightIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, XIcon } from './Icons';

const socialIcons = { github: GithubIcon, linkedin: LinkedinIcon, x: XIcon };

export default function Hero() {
  return (
    <section id="about" className="hero" aria-label="About">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-reveal hero-name" style={{ '--d': '0' }}>
            {profile.name}
          </h1>
          <p className="hero-reveal hero-role" style={{ '--d': '1' }}>
            {profile.role} · {profile.location}
          </p>
          <p className="hero-reveal hero-tagline" style={{ '--d': '2' }}>
            {profile.tagline}
          </p>

          <div className="hero-reveal hero-bio" style={{ '--d': '3' }}>
            {profile.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <ul className="hero-reveal hero-focus" style={{ '--d': '4' }}>
            {profile.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>

          <div className="hero-reveal hero-cta" style={{ '--d': '5' }}>
            <a
              className="btn btn-primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View projects
              <ArrowUpRightIcon width={16} height={16} />
            </a>
            <a className="btn btn-ghost" href={profile.resumeUrl}>
              <DownloadIcon width={16} height={16} />
              Résumé
            </a>
            <div className="hero-social">
              {profile.social.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a key={s.label} href={s.href} className="icon-btn" aria-label={s.label} target="_blank" rel="noreferrer">
                    <Icon width={17} height={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hero-reveal hero-card glass" style={{ '--d': '2' }}>
          <div className="hero-card-avatar" aria-hidden="true">
            {profile.initials}
          </div>
          <div className="hero-card-row">
            <span className="hero-card-status" />
            <span>{profile.availability}</span>
          </div>
          <dl className="hero-card-facts">
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>{profile.role}</dd>
            </div>
            <div>
              <dt>Reach</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>
                  <MailIcon width={14} height={14} />
                  {profile.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <button
        type="button"
        className="hero-scroll-cue"
        aria-label="Scroll to experience"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="hero-scroll-line" />
        Scroll
      </button>
    </section>
  );
}
