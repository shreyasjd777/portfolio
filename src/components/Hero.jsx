import { profile, skillGroups } from '../data/content';
import { MailIcon } from './Icons';

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

        <div className="hero-reveal hero-skills" style={{ '--d': '4' }}>
          <dl className="hero-skill-groups">
            {skillGroups.map((group) => (
              <div className="hero-skill-group" key={group.label}>
                <dt>{group.label}</dt>
                <dd>
                  <ul className="hero-skill-list" aria-label={`${group.label} skills`}>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
