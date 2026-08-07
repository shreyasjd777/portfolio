import { profile } from '../data/content';
import { ArrowUpRightIcon, DownloadIcon, LinkedinIcon, MailIcon } from './Icons';

const linkedin = profile.social.find((s) => s.icon === 'linkedin');

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <section id="contact" className="contact" aria-label="Contact">
      <div className="contact-panel glass" data-reveal>
        <h2>Let's build something worth shipping.</h2>
        <p>Open to full-time and internship engineering roles. Recruiters may reach out with relevant opportunities.</p>
        <a className="btn btn-primary contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
          <ArrowUpRightIcon width={16} height={16} />
        </a>
      </div>

      <footer className="site-footer">
        <p className="site-footer-copy">© {year} {profile.name}</p>
        <div className="site-footer-icons">
          {linkedin && (
            <a className="footer-icon" href={linkedin.href} aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <LinkedinIcon width={17} height={17} />
            </a>
          )}
          <a className="footer-icon" href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon width={17} height={17} />
          </a>
          <a className="footer-icon" href={profile.resumeUrl} aria-label="Download résumé">
            <DownloadIcon width={17} height={17} />
          </a>
        </div>
      </footer>
    </section>
  );
}
