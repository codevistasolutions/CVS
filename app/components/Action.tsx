import Link from "next/link";

export default function Action() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 py-24">

      {/* Background Glow */}

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
          Lets Build Something Amazing
        </span>

        <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
          Ready to Grow Your Business
          <br />
          With Modern Technology?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-orange-100">
          Whether you need a modern business website,
          SaaS platform, ERP, CRM or AI-powered software,
          CodeVista Solutions is ready to turn your idea
          into reality.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <Link
            href="/email"
            className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-orange-600 transition hover:scale-105"
          >
            Book Free Consultation
          </Link>

          <Link
            href="/services"
            className="rounded-full border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-orange-600"
          >
            View Our Services
          </Link>

        </div>

      </div>

    </section>
  );
}    