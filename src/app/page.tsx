import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-semibold">CollinsAI</div>
          <nav className="space-x-6">
            <Link href="#services" className="text-sm hover:underline">Servicios</Link>
            <Link href="#cases" className="text-sm hover:underline">Casos</Link>
            <Link href="#contact" className="text-sm hover:underline">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-20">
        <section className="text-center">
          <h1 className="text-4xl font-extrabold leading-tight">CollinsAI — Agentes IA que generan ingresos</h1>
          <p className="mt-4 text-lg text-zinc-600">Soluciones IA a medida para PYMEs: chatbots, automatizaciones y sistemas RAG orientados a ROI.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="mailto:contact@collinsai.me" className="rounded-full bg-black px-6 py-3 text-white">Contactar</a>
            <a href="#demo" className="rounded-full border px-6 py-3">Ver demo</a>
          </div>
        </section>

        <section id="services" className="mt-16">
          <h2 className="text-2xl font-semibold">Servicios</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold">Agentes IA & Chatbots</h3>
              <p className="mt-2 text-sm text-zinc-600">Agentes autónomos integrados con tus sistemas para ventas, soporte y operaciones.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold">Automatización de procesos</h3>
              <p className="mt-2 text-sm text-zinc-600">Automatizamos workflows críticos para reducir costos y acelerar ingresos.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold">RAG & Knowledge Systems</h3>
              <p className="mt-2 text-sm text-zinc-600">Sistemas de búsqueda semántica y asistentes con contexto empresarial.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold">Analítica y recomendaciones</h3>
              <p className="mt-2 text-sm text-zinc-600">Dashboards y recomendaciones accionables para decisiones rápidas.</p>
            </div>
          </div>
        </section>

        <section id="cases" className="mt-16">
          <h2 className="text-2xl font-semibold">Casos de éxito</h2>
          <p className="mt-4 text-sm text-zinc-600">Próximamente: estudios de caso que muestran ROI real para clientes PYMEs.</p>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-2xl font-semibold">Contacto</h2>
          <p className="mt-2 text-sm text-zinc-600">Email: <a href="mailto:owner@collinsai.me" className="underline">owner@collinsai.me</a></p>
          <p className="mt-2 text-sm text-zinc-600">También puedes agendar una demo respondiendo a ese correo.</p>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-zinc-600">© {new Date().getFullYear()} CollinsAI — Medellín, Colombia</div>
      </footer>
    </div>
  )
}
