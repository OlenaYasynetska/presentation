import { Outlet } from 'react-router-dom'
import { ANCHOR_SECTIONS } from '@/shared/config/anchors'

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
        </aside>

        <main className="app-main" id="main-content">
          <Outlet />
        </main>
      </div>

      <footer className="app-footer">
        <p className="app-footer__text">
          Одностраничная навигация по якорям · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}
