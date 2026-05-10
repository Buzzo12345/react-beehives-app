import { createElement } from 'react';
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from 'lucide-react';


function App() {
  const features = [
    {
      icon: Leaf,
      title: 'Natura prima di tutto',
      description: 'Una home semplice e pulita per presentare il progetto con immediatezza.',
    },
    {
      icon: ShieldCheck,
      title: 'Chiara e leggera',
      description: 'Struttura minimale, leggibile da mobile e pronta da estendere.',
    },
    {
      icon: Sparkles,
      title: 'Pronta da personalizzare',
      description: 'Puoi sostituire testi, colori e contenuti senza toccare la logica.',
    },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f5f0df_0%,_#f8f4ea_42%,_#eef3ea_100%)] text-slate-900">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-10 lg:px-10">
        <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200/70 bg-white/70 px-4 py-2 text-sm font-medium text-amber-900 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          Benvenuto nella tua nuova home
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              New Black Ferrets
            </p>
            <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Una home semplice, chiara e accogliente.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Questo è un punto di partenza essenziale per presentare il progetto,
              guidare l&apos;utente e lasciare spazio alle prossime sezioni.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Scopri di più
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white"
              >
                Contattaci
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
                Home preview
              </p>
              <h2 className="mt-4 text-2xl font-bold">Pulita, moderna, immediata.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Una sezione visiva essenziale che comunica il progetto senza distrazioni.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Layout</p>
                  <p className="mt-2 text-lg font-semibold">Responsive</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Stile</p>
                  <p className="mt-2 text-lg font-semibold">Minimale</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="features" className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                {createElement(Icon, { className: 'h-6 w-6' })}
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </section>

        <section
          id="contact"
          className="mt-16 rounded-[2rem] border border-slate-200 bg-white/80 px-6 py-8 shadow-sm backdrop-blur sm:px-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Vuoi aggiungere altre sezioni?</h2>
              <p className="mt-2 text-slate-600">Posso trasformarla in una landing, un portale o un dashboard più completo.</p>
            </div>
            <a
              href="mailto:info@example.com"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              Scrivimi
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;