const { useState, useEffect, useRef, useMemo } = React;

// ------- Typewriter hook -------
function useTypewriter(words, { typeMs = 70, holdMs = 1800, delMs = 35 } = {}) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing'); // typing | holding | deleting

  useEffect(() => {
    const word = words[idx % words.length];
    let t;
    if (phase === 'typing') {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
      } else {
        t = setTimeout(() => setPhase('holding'), 10);
      }
    } else if (phase === 'holding') {
      t = setTimeout(() => setPhase('deleting'), holdMs);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), delMs);
      } else {
        setIdx((i) => i + 1);
        setPhase('typing');
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx, words, typeMs, holdMs, delMs]);

  return text;
}

// ------- Scroll reveal -------
function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
}

// ------- Nav -------
function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    ['about', 'about'],
    ['work', 'capabilities'],
    ['stack', 'skills'],
    ['contact', 'contact'],
  ];
  return (
    <nav className={`top ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="brand"><b>DT</b>&nbsp;/ technical-lead.php</a>
      <div className="links">
        {links.map(([l, id]) => (
          <a key={id} href={`#${id}`}>{'>'} {l}</a>
        ))}
      </div>
    </nav>
  );
}

// ------- Hero variants -------
function HeroSplit({ data }) {
  const typed = useTypewriter(
    data.headline.parts.find(p => p.type === 'typed')?.alts ?? ['Adobe Commerce'],
    { typeMs: 65, holdMs: 2200, delMs: 28 }
  );
  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="hero-grid">
          <div>
            <div className="label" style={{ marginBottom: 24 }}>
              <span style={{ color: 'var(--accent)' }}>●</span>&nbsp;&nbsp;DYLAN TEUGELS · PORTFOLIO · 2026
            </div>
            <h1>
              <span className="line"><Reveal delay={80}>Technical Lead</Reveal></span>
              <span className="line"><Reveal delay={180}>building scalable</Reveal></span>
              <span className="line typed-line"><Reveal delay={280}><em>{typed}</em></Reveal></span>
            </h1>
            <Reveal delay={480}>
              <p className="hero-sub">{data.sub}</p>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <div className="photo-card">
              <img src="assets/dylan.webp" alt="Portrait of Dylan Teugels" loading="eager" />
              <div className="tag"><b>●</b>&nbsp;LIVE · DYLAN.TEUGELS</div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={560} className="meta-strip">
          {data.meta.map((m, i) => (
            <div key={i}>
              <div className="k">{m.k}</div>
              <div className="v">
                {i === 0 ? <span className="dot" /> : null}
                {m.v}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function HeroTerminal({ data }) {
  const [lines, setLines] = useState([]);
  const [cursor, setCursor] = useState(true);
  useEffect(() => {
    const script = [
      { k: 'cmd', v: '$ whoami' },
      { k: 'out', v: 'dylan.teugels — technical lead @ phpro' },
      { k: 'cmd', v: '$ cat about.md | head' },
      { k: 'out', v: '5+ yrs · Adobe Commerce · Hyvä early adopter · Belgium' },
      { k: 'cmd', v: '$ ls -1 capabilities/' },
      { k: 'out', v: 'middleware-integrations/\nmaster-data/\npim/\nsearch-at-scale/\nmicroservices/\nhyva-checkout/\nb2b-complexity/\nmulti-store/\ntechnical-leadership/' },
      { k: 'cmd', v: '$ ./portfolio --scroll' },
    ];
    let i = 0;
    const tick = () => {
      if (i >= script.length) return;
      setLines((p) => [...p, script[i]]);
      i++;
      setTimeout(tick, 380);
    };
    tick();
    const blink = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(blink);
  }, []);
  return (
    <section className="hero" id="top">
      <div className="shell">
        <div style={{ maxWidth: 900, fontFamily: 'var(--font-mono)', fontSize: 15, lineHeight: 1.9 }}>
          <div className="label" style={{ marginBottom: 24 }}>
            <span style={{ color: 'var(--accent)' }}>●</span>&nbsp;&nbsp;session · dylan@phpro · ~/portfolio
          </div>
          {lines.map((l, i) => (
            <div key={i} style={{ whiteSpace: 'pre-line', color: l.k === 'cmd' ? 'var(--fg)' : 'var(--fg-dim)' }}>
              {l.v}
            </div>
          ))}
          <span style={{ color: 'var(--accent)', opacity: cursor ? 1 : 0 }}>▌</span>
        </div>

        <div className="meta-strip" style={{ marginTop: 64 }}>
          {data.meta.map((m, i) => (
            <div key={i}>
              <div className="k">{m.k}</div>
              <div className="v">{i === 0 ? <span className="dot" /> : null}{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroKinetic({ data }) {
  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="label" style={{ marginBottom: 24 }}>
          <span style={{ color: 'var(--accent)' }}>●</span>&nbsp;&nbsp;DYLAN TEUGELS · PORTFOLIO · 2026
        </div>
        <h1 style={{ fontSize: 'clamp(56px, 11vw, 180px)', lineHeight: 0.92 }}>
          <span className="line"><Reveal delay={80}>Technical</Reveal></span>
          <span className="line"><Reveal delay={180} style={{ color: 'var(--accent)' }}>Lead.</Reveal></span>
          <span className="line"><Reveal delay={300} style={{ color: 'var(--fg-faint)' }}>Adobe Commerce.</Reveal></span>
          <span className="line"><Reveal delay={420} style={{ color: 'var(--fg-faint)' }}>Hyvä.</Reveal></span>
          <span className="line"><Reveal delay={540} style={{ color: 'var(--fg-faint)' }}>Belgium.</Reveal></span>
        </h1>
        <Reveal delay={720} className="meta-strip" style={{ marginTop: 64 }}>
          {data.meta.map((m, i) => (
            <div key={i}>
              <div className="k">{m.k}</div>
              <div className="v">{i === 0 ? <span className="dot" /> : null}{m.v}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function HeroBento({ data }) {
  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="label" style={{ marginBottom: 24 }}>
          <span style={{ color: 'var(--accent)' }}>●</span>&nbsp;&nbsp;DYLAN TEUGELS · PORTFOLIO · 2026
        </div>
        <div className="bento" style={{ gridTemplateRows: 'auto auto' }}>
          <Reveal className="cell span-4" style={{ padding: 32 }}>
            <div className="corner">[HDR]</div>
            <h1 style={{ fontSize: 'clamp(36px, 5.2vw, 72px)', lineHeight: 1.02 }}>
              Technical Lead building scalable <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Adobe Commerce</em> platforms.
            </h1>
            <p className="hero-sub" style={{ marginTop: 20 }}>{data.sub}</p>
          </Reveal>
          <Reveal delay={120} className="cell span-2" style={{ padding: 0 }}>
            <div className="photo-card" style={{ border: 0, height: '100%' }}>
              <img src="assets/dylan.webp" alt="Dylan Teugels" />
              <div className="tag"><b>●</b>&nbsp;LIVE</div>
            </div>
          </Reveal>
          {data.meta.map((m, i) => (
            <Reveal key={i} delay={180 + i * 60} className="cell span-2" style={{ padding: '22px 24px' }}>
              <div className="corner">[{String(i + 1).padStart(2, '0')}]</div>
              <div className="k" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--fg-faint)', textTransform: 'uppercase' }}>{m.k}</div>
              <div style={{ marginTop: 8, fontSize: 17, fontWeight: 500 }}>
                {i === 0 ? <span style={{ display: 'inline-block', width: 7, height: 7, background: 'var(--accent)', marginRight: 8, verticalAlign: 'middle', borderRadius: '50%' }} /> : null}
                {m.v}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero({ data, variant }) {
  if (variant === 'terminal') return <HeroTerminal data={data} />;
  if (variant === 'kinetic') return <HeroKinetic data={data} />;
  if (variant === 'bento') return <HeroBento data={data} />;
  return <HeroSplit data={data} />;
}

// export globally
Object.assign(window, { Reveal, TopNav, Hero, useTypewriter });
