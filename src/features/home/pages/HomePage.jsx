import { ANCHOR_SECTIONS } from '@/shared/config/anchors'
import {
  SHOWCASE_TITLE,
  SHOWCASE_APP_URL,
  SHOWCASE_VERCEL_URL,
  SHOWCASE_DEMO_QR_SRC,
} from '@/shared/config/projectShowcase'
import { LINKEDIN_PROFILE_URL } from '@/shared/config/linkedin'
import lnQrImg from '@/assets/Ln_QR.jpg'

function Section({ id, title, children }) {
  return (
    <section id={id} className="content-section" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="content-section__title">
        {title}
      </h2>
      <div className="content-section__body">{children}</div>
    </section>
  )
}

export function HomePage() {
  const byId = Object.fromEntries(ANCHOR_SECTIONS.map((s) => [s.id, s.label]))

  return (
    <article className="single-page">
      <Section id="intro" title={byId.intro}>
        <p>
          Это одна страница: переход по разделам — через якоря в шапке и боковой панели. Подходит для
          презентаций и лендингов без отдельных URL.
        </p>
      </Section>

      <Section id="stack" title={byId.stack}>
        <p>
          Vite, React 19, JavaScript. При необходимости бэкенд задаётся через{' '}
          <code className="inline-code">VITE_API_BASE_URL</code>.
        </p>
      </Section>

      <Section id="structure" title={byId.structure}>
        <p>
          Слои <code className="inline-code">app</code>, <code className="inline-code">features</code>,{' '}
          <code className="inline-code">shared</code> и алиас импорта <code className="inline-code">@/</code>.
        </p>
      </Section>

      <Section id="contacts" title={byId.contacts}>
        <p>
          Zwei QR-Codes:{' '}
          <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{' '}
          und die Live-App — ebenso in der Seitenleiste.
        </p>
        <div className="contacts-row">
          <figure className="contact-qr contact-qr--main contact-qr--linkedin">
            <a
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-qr__link"
              aria-label="LinkedIn-Profil öffnen"
            >
              <img
                src={lnQrImg}
                alt="LinkedIn QR-Code"
                width={280}
                height={280}
                decoding="async"
                loading="lazy"
                className="contact-qr__img"
              />
            </a>
          </figure>

          <div className="project-showcase">
            <p className="project-showcase__eyebrow">Live-Projekt</p>
            <h3 className="project-showcase__title">{SHOWCASE_TITLE}</h3>
            <p className="project-showcase__desc">
              Gehostet auf Vercel — zum Präsentieren und Anklicken während des Vortrags.
            </p>
            <figure className="project-showcase__qr">
              <img
                src={SHOWCASE_DEMO_QR_SRC}
                alt={`QR-Code zu ${SHOWCASE_APP_URL}`}
                width={220}
                height={220}
                decoding="async"
                loading="lazy"
                className="project-showcase__qr-img"
              />
            </figure>
            <a
              className="project-showcase__link"
              href={SHOWCASE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="project-showcase__link-text">App öffnen</span>
              <span className="project-showcase__link-icon" aria-hidden>
                ↗
              </span>
            </a>
            <p className="project-showcase__url">
              <a href={SHOWCASE_VERCEL_URL} target="_blank" rel="noopener noreferrer">
                Projekt auf Vercel
              </a>
              <span aria-hidden> ©️ </span>
              <span title={SHOWCASE_APP_URL}>{SHOWCASE_APP_URL}</span>
            </p>
          </div>
        </div>
      </Section>
    </article>
  )
}
