
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | CodeVista Solutions",
  description:
    "Learn more about CodeVista Solutions (OPC) Pvt. Ltd. and our expertise in software, ERP, CRM, SaaS and web development.",
};

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "100%", label: "Custom Solutions" },
  { value: "24/7", label: "Support" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50">
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="container mx-auto px-6 py-24">
            <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm">
              About CodeVista Solutions
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
              Transforming Ideas Into Powerful Digital Solutions
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-blue-100 leading-8">
              CodeVista Solutions (OPC) Pvt. Ltd. helps startups, SMEs and
              enterprises build modern websites, scalable web applications,
              ERP, CRM and SaaS products that drive business growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/email"
                className="rounded-lg bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
              >
                Get Free Consultation
              </a>

              <a
                href="/services"
                className="rounded-lg border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto -mt-10 px-6 pb-20">
          <div className="grid gap-6 rounded-2xl bg-white p-8 shadow-xl md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <h2 className="text-4xl font-bold text-slate-900">{item.value}</h2>
                <p className="mt-2 text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-widest text-blue-700">
                Who We Are
              </p>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Building Technology That Helps Businesses Grow
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                CodeVista Solutions (OPC) Pvt. Ltd. is a software development
                company focused on delivering reliable, scalable and modern
                digital products. We specialize in custom websites, ERP, CRM,
                SaaS platforms, business automation and AI-powered solutions.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Every project is developed with a focus on performance,
                security, scalability and user experience. We work closely
                with our clients to understand their business goals and build
                software that creates measurable value.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Empower businesses through innovative technology solutions
                that simplify operations, improve efficiency and accelerate
                digital growth.
              </p>

              <hr className="my-10" />

              <h3 className="text-3xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Become a trusted technology partner by delivering secure,
                scalable and high-quality software solutions backed by
                exceptional service.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}