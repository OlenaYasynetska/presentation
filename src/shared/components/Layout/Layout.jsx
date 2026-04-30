import { Outlet } from 'react-router-dom'
import { ANCHOR_SECTIONS } from '@/shared/config/anchors'
import { SHOWCASE_TITLE, SHOWCASE_APP_URL, SHOWCASE_DEMO_QR_SRC } from '@/shared/config/projectShowcase'
import { LINKEDIN_PROFILE_URL } from '@/shared/config/linkedin'
import lnQrImg from '@/assets/Ln_QR.jpg'

function AnchorLink({ id, children }) {
  return (
    <a href={`#${id}`} className="nav-anchor">
      {children}
    </a>
  )
}

export function Layout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header__inner">
          <a href="#intro" className="app-logo">
            presentation
          </a>
          <nav className="app-header__nav" aria-label="Основная навигация">
            {ANCHOR_SECTIONS.map(({ id, label }) => (
              <AnchorLink key={id} id={id}>
                {label}
              </AnchorLink>
            ))}
          </nav>
        </div>
      </header>

      <div className="app-body">
        <aside className="app-sidebar" aria-label="Разделы страницы">
          <nav className="app-sidebar__nav">
            {ANCHOR_SECTIONS.map(({ id, label }) => (
              <AnchorLink key={id} id={id}>
                {label}
              </AnchorLink>
            ))}
          </nav>

          <div className="app-sidebar__qr">
            <a
              href={LINKEDIN_PROFILE_URL}
              className="app-sidebar__qr-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn-Profil öffnen"
            >
              <img
                src={lnQrImg}
                alt=""
                width={140}
                height={140}
                decoding="async"
                loading="lazy"
                className="app-sidebar__qr-img"
              />
            </a>
            <a
              href={LINKEDIN_PROFILE_URL}
              className="app-sidebar__qr-caption app-sidebar__qr-caption--link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="app-sidebar__showcase">
            <p className="app-sidebar__showcase-label">Live-Projekt</p>
            <a
              className="app-sidebar__showcase-link"
              href={SHOWCASE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${SHOWCASE_TITLE} — App öffnen`}
            >
              <span className="app-sidebar__showcase-title">{SHOWCASE_TITLE}</span>
              <span className="app-sidebar__showcase-cta" aria-hidden>
                ↗ App
              </span>
            </a>
            <div className="app-sidebar__project-qr">
              <a
                href={SHOWCASE_APP_URL}
                className="app-sidebar__project-qr-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="QR: App öffnen"
              >
                <img
                  src={SHOWCASE_DEMO_QR_SRC}
                  alt=""
                  width={120}
                  height={120}
                  decoding="async"
                  loading="lazy"
                  className="app-sidebar__project-qr-img"
                />
              </a>
            </div>
          </div>
        </aside>

        <main className="app-main" id="main-content">
          <Outlet />
        </main>
      </div>

      <footer className="app-footer">
        <p className="app-footer__text">
          Einseitige Navigation mit Sprungmarken · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}
