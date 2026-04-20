// Section components

function SectionHead({ num, title, caption }) {
  return (
    <Reveal className="section-head">
      <h2>{title}</h2>
      {caption ? <div className="caption">{caption}</div> : null}
    </Reveal>
  );
}

function About({ data }) {
  return (
    <section id="about" className="shell">
      <SectionHead num="/01" title="About" />
      <Reveal className="curiosity">
        <span>Curiosity.</span>
        <br />
        That's it.
        <span className="small">— why I got into tech</span>
      </Reveal>

      <Reveal delay={160} className="bento" style={{ marginTop: 72 }}>
        <div className="cell span-4">
          <div className="corner">[KEEPS-ME-IN-IT]</div>
          <div className="label" style={{ marginBottom: 18 }}>What keeps me in it</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, fontSize: 17, color: 'var(--fg)', lineHeight: 1.45 }}>
            <li>→ Solving complex puzzles — debugging, architecture, integration chess.</li>
            <li>→ Translating client needs into technical solutions.</li>
            <li>→ Seeing real merchants use what I built.</li>
            <li>→ Squeezing performance out of systems.</li>
            <li>→ Constant learning — the box doesn't stop expanding.</li>
          </ul>
        </div>
        <div className="cell span-2">
          <div className="corner">[STACK]</div>
          <div className="label" style={{ marginBottom: 18 }}>Daily surface</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.6 }}>
            <div><span style={{ color: 'var(--accent)' }}>→</span> Adobe Commerce / Magento 2</div>
            <div><span style={{ color: 'var(--accent)' }}>→</span> Hyvä · Hyvä Checkout</div>
            <div><span style={{ color: 'var(--accent)' }}>→</span> PHP · Alpine · Tailwind</div>
            <div><span style={{ color: 'var(--accent)' }}>→</span> SAP · Salesforce · Akeneo</div>
            <div><span style={{ color: 'var(--accent)' }}>→</span> DIP middleware · Algolia</div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={220} className="working-style">
        {data.aboutBullets.map((b, i) => (
          <div key={i}>
            <div className="w">{b.w}</div>
            <div className="d">{b.d}</div>
          </div>
        ))}
      </Reveal>

    </section>
  );
}

function Timeline({ data }) {
  return (
    <section id="timeline" className="shell">
      <SectionHead num="/02" title="Timeline" />
      <div className="timeline">
        {data.timeline.map((r, i) => (
          <Reveal key={i} delay={i * 80} className="tl-row">
            <div className="tl-year">{r.year}</div>
            <div>
              <div className="tl-role">{r.role}</div>
              <div className="tl-desc">{r.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Capabilities({ data }) {
  return (
    <section id="capabilities" className="shell">
      <SectionHead num="/03" title="Capabilities" />
      <Reveal className="cap-list">
        {data.capabilities.map((c, i) => (
          <details key={i} className="cap">
            <summary>
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <div className="title">{c.title}</div>
              <div className="role"><b>{c.roles[0]}</b>{c.roles.length > 1 ? ` · +${c.roles.length - 1}` : ''}</div>
              <div className="chev">+</div>
            </summary>
            <div className="cap-body">
              <div className="block">
                <div className="k">what</div>
                <div className="v">{c.what}</div>
              </div>
              <div className="block">
                <div className="k">why it matters</div>
                <div className="v">{c.why}</div>
                <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {c.stack.split(' · ').map((s, j) => (
                    <span key={j} className="chip" style={{ borderColor: 'var(--hairline)' }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </details>
        ))}
      </Reveal>
    </section>
  );
}

function Skills({ data }) {
  const groups = Object.values(data.skills);
  return (
    <section id="skills" className="shell">
      <SectionHead num="/04" title="Stack" />
      <Reveal className="skills">
        {groups.map((g, i) => (
          <div key={i} className={`sk-group ${g.span}`}>
            <h3>{g.title} <span className="cnt">[{String(g.items.length).padStart(2, '0')}]</span></h3>
            <div className="sk-list">
              {g.items.map((it, j) => (
                <span key={j} className="chip">
                  {it.t}{it.s ? <span className="s">· {it.s}</span> : null}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function Certifications({ data }) {
  return (
    <section id="certs" className="shell">
      <SectionHead num="/05" title="Certifications" />
      <Reveal className="certs">
        {data.certs.map((c, i) => (
          <div key={i} className="cert">
            <div className="badge">{c.badge}</div>
            <div>
              <div className="t">{c.t}</div>
              <div className="s">{c.s}</div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function RD({ data }) {
  return (
    <section id="rd" className="shell">
      <SectionHead num="/06" title="Personal R&D" />
      <Reveal className="rd">
        <div className="k">ALSO BUILDING</div>
        <div className="v">
          {data.rdProjects.map((p, i) => (
            <React.Fragment key={i}>
              {p}
              {i < data.rdProjects.length - 1 ? <span>·</span> : null}
            </React.Fragment>
          ))}
        </div>
        <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-faint)', letterSpacing: '0.1em' }}>
          [2025 — 2026]
        </div>
      </Reveal>
      <Reveal delay={120} style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-faint)', lineHeight: 1.7, maxWidth: 720 }}>
        // curiosity-driven side work. no public links, no spotlight. just a signal<br />
        // that i ship outside the magento box and stay fluent in ai-assisted dev.
      </Reveal>
    </section>
  );
}

function Contact({ data }) {
  return (
    <section id="contact" className="shell contact">
      <SectionHead num="/07" title="Contact" />
      <Reveal>
        <h2>
          Say hi &rarr; <a href={`mailto:${data.email}`}>{data.email}</a>
        </h2>
      </Reveal>
      <Reveal delay={120} className="contact-grid">
        <a href={`mailto:${data.email}`}>
          <div className="k">Email</div>
          <div className="v">{data.email}</div>
          <div className="arrow">→ compose</div>
        </a>
        <a href={data.linkedin} target="_blank" rel="noopener">
          <div className="k">LinkedIn</div>
          <div className="v">/in/dylan-teugels</div>
          <div className="arrow">→ recommendations</div>
        </a>
        <a href={data.github} target="_blank" rel="noopener">
          <div className="k">GitHub</div>
          <div className="v">github.com</div>
          <div className="arrow">→ repositories</div>
        </a>
      </Reveal>
    </section>
  );
}

function Footer({ data }) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Brussels', hour12: false });
      setTime(`${fmt.format(d)} CET`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="shell">
      <footer>
        <div>© {data.name} · {new Date().getFullYear()}</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <span>{time} · Belgium</span>
          <a href="llms.txt" target="_blank">llms.txt</a>
          <a href="#top">↑ top</a>
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, {
  About, Timeline, Capabilities, Skills, Certifications, RD, Contact, Footer, SectionHead
});
