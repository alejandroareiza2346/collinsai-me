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

        <section id="about" className="mt-16">
          <h2 className="text-2xl font-semibold">Sobre CollinsAI</h2>
          <p className="mt-4 text-sm text-zinc-600">Somos un equipo técnico que desarrolla agentes IA y soluciones a medida para PYMEs. Si quieres conocer nuestros servicios y casos, contáctanos y te compartiremos la información y demos privadas.</p>
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
