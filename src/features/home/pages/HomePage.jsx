import { ANCHOR_SECTIONS } from '@/shared/config/anchors'

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
        <p>Здесь может быть форма, ссылки или контакты — как отдельный блок с якорём #contacts.</p>
      </Section>
    </article>
  )
}
