import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/content';
import AnimatedLogo from './AnimatedLogo';
import { CloseIcon, DownloadIcon, LinkedinIcon, MailIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';

const LINKS = [
  { id: 'about', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const linkedin = profile.social.find((s) => s.icon === 'linkedin');

export default function Nav({ theme, onToggleTheme, onIntroSettle }) {
  const [active, setActive] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    // Let the menu-open effect remove the mobile scroll lock before scrolling.
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-row">
        <div className="nav-bubble nav-left glass">
          <button
            type="button"
            className="icon-btn nav-brand"
            aria-label="Reload page"
            onClick={() => window.location.reload()}
          >
            <AnimatedLogo onIntroSettle={onIntroSettle} />
          </button>
          {linkedin && (
            <a
              className="icon-btn"
              href={linkedin.href}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              data-brand-reveal
              style={{ '--d': '0' }}
            >
              <LinkedinIcon width={16} height={16} />
            </a>
          )}
        </div>

        <nav className="nav-bubble nav-center glass" aria-label="Primary" data-brand-reveal style={{ '--d': '0' }}>
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link${active === link.id ? ' is-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-bubble nav-right glass" data-brand-reveal style={{ '--d': '1' }}>
          <div className="nav-social-icons">
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon width={16} height={16} />
            </a>
            <a className="icon-btn" href={profile.resumeUrl} aria-label="Download résumé">
              <DownloadIcon width={16} height={16} />
            </a>
          </div>
          <button
            type="button"
            className="icon-btn theme-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? <SunIcon width={16} height={16} /> : <MoonIcon width={16} height={16} />}
          </button>
          <button
            type="button"
            className="nav-menu-btn"
            ref={menuButtonRef}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`nav-mobile-menu glass${menuOpen ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <ul>
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-mobile-social">
          {linkedin && (
            <a className="icon-btn" href={linkedin.href} aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <LinkedinIcon width={17} height={17} />
            </a>
          )}
          <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon width={17} height={17} />
          </a>
          <a className="icon-btn" href={profile.resumeUrl} aria-label="Download résumé">
            <DownloadIcon width={17} height={17} />
          </a>
        </div>
      </nav>
    </header>
  );
}
