function Tweaks({ state, setState }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const handler = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const accents = [
    { k: 'amber', v: 'oklch(0.76 0.13 55)' },
    { k: 'lime', v: 'oklch(0.82 0.17 125)' },
    { k: 'cyan', v: 'oklch(0.78 0.12 210)' },
    { k: 'pink', v: 'oklch(0.74 0.17 0)' },
    { k: 'violet', v: 'oklch(0.70 0.16 290)' },
    { k: 'white', v: 'oklch(0.96 0.006 80)' },
  ];
  const heroes = ['split', 'terminal', 'kinetic', 'bento'];

  const persist = (edits) => {
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*'); } catch(e) {}
  };

  const setAccent = (k) => {
    const hit = accents.find(a => a.k === k);
    if (!hit) return;
    document.documentElement.style.setProperty('--accent', hit.v);
    document.documentElement.style.setProperty('--accent-dim', hit.v.replace(/\)$/, ' / 0.14)'));
    document.documentElement.style.setProperty('--accent-faint', hit.v.replace(/\)$/, ' / 0.06)'));
    setState(s => ({ ...s, accent: k }));
    persist({ accent: k });
  };
  const setAnim = (n) => {
    document.documentElement.style.setProperty('--anim', String(n / 5));
    setState(s => ({ ...s, animation: n }));
    persist({ animation: n });
  };
  const setHero = (h) => {
    setState(s => ({ ...s, hero: h }));
    persist({ hero: h });
  };

  React.useEffect(() => { setAccent(state.accent); }, []);
  React.useEffect(() => { setAnim(state.animation); }, []);

  return (
    <div className={`tweaks ${open ? 'open' : ''}`}>
      <h4>
        <span>TWEAKS · <b>v1</b></span>
        <button onClick={() => setOpen(false)}>×</button>
      </h4>
      <div className="row">
        <span className="lbl">Accent color</span>
        <div className="swatches">
          {accents.map(a => (
            <div
              key={a.k}
              className={`swatch ${state.accent === a.k ? 'active' : ''}`}
              style={{ background: a.v }}
              onClick={() => setAccent(a.k)}
              title={a.k}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <span className="lbl">Animation intensity · {state.animation}</span>
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={state.animation}
          onChange={e => setAnim(Number(e.target.value))}
        />
      </div>
      <div className="row">
        <span className="lbl">Hero variant</span>
        <div className="opts">
          {heroes.map(h => (
            <button key={h} className={state.hero === h ? 'active' : ''} onClick={() => setHero(h)}>
              {h}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- App ----
function App() {
  const data = window.PORTFOLIO_DATA;
  const defaults = window.TWEAK_DEFAULTS;
  const [state, setState] = React.useState(defaults);

  return (
    <React.Fragment>
      <TopNav />
      <Hero data={data} variant={state.hero} />
      <About data={data} />
      <Timeline data={data} />
      <Capabilities data={data} />
      <Skills data={data} />
      <Certifications data={data} />
      <RD data={data} />
      <Contact data={data} />
      <Footer data={data} />
      <Tweaks state={state} setState={setState} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
