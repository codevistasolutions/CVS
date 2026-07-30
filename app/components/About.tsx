'use client';

export default function About() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Delivered" },
    { value: "100%", label: "Client Focused" },
    { value: "24/7", label: "Support" },
  ];

  const features = [
    {
      title: "Business First",
      description:
        "Every solution is designed around your business objectives instead of unnecessary complexity.",
    },
    {
      title: "Modern Technologies",
      description:
        "We build with the latest web technologies to ensure speed, security and scalability.",
    },
    {
      title: "Long-Term Partnership",
      description:
        "We don't disappear after delivery. We help maintain, improve and scale your software.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero */}

      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="inline-flex rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gray-700 shadow-sm">
            About CodeVista
          </span>

          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-pj leading-tight">
            Building Digital Products
            <br />
            That Drive Real Business Growth
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-3xl mx-auto font-inter">
            CodeVista Solutions (OPC) Pvt. Ltd. helps startups, SMEs and
            enterprises build websites, ERP systems, CRM platforms,
            SaaS products and custom software that solve real business
            problems.
          </p>
        </div>
      </section>

      {/* Our Story */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-10">

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-2xl bg-gray-100 h-44"></div>

                <div className="rounded-2xl bg-gray-200 h-60"></div>

                <div className="rounded-2xl bg-gray-200 h-60"></div>

                <div className="rounded-2xl bg-gray-100 h-44"></div>

              </div>

            </div>

            <div>

              <span className="text-sm uppercase tracking-[0.25em] text-gray-500 font-semibold">
                OUR STORY
              </span>

              <h2 className="mt-5 text-4xl font-bold text-gray-900 font-pj">
                Technology Built Around Business Goals
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600 font-inter">
                We founded CodeVista with one belief: software should make
                businesses faster, smarter and more efficient.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600 font-inter">
                Instead of building generic solutions, we create platforms
                tailored to your workflows. From websites to enterprise
                software, every project is focused on measurable business
                outcomes.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600 font-inter">
                Our goal isn't just delivering software—it's becoming a
                long-term technology partner for businesses that want to
                scale confidently.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Stats */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-5xl font-bold text-gray-900">
                  {item.value}
                </h3>

                <p className="mt-4 text-gray-600">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <span className="uppercase tracking-[0.25em] text-gray-500 text-sm font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900 font-pj">
              More Than Just Software Development
            </h2>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {features.map((feature) => (

              <div
                key={feature.title}
                className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition hover:shadow-lg hover:-translate-y-1"
              >

                <div className="h-14 w-14 rounded-2xl bg-gray-900"></div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {feature.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-10">

              <h3 className="text-3xl font-bold text-gray-900">
                Our Mission
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Empower businesses with reliable digital solutions that
                simplify operations, improve productivity and support
                sustainable growth.
              </p>

            </div>

            <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-10">

              <h3 className="text-3xl font-bold text-gray-900">
                Our Vision
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                To become a trusted technology partner for businesses by
                delivering innovative software solutions that create
                lasting value.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-28">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="rounded-[32px] bg-white border border-gray-200 shadow-sm px-8 py-16 text-center">

            <h2 className="text-4xl font-bold text-gray-900 font-pj">
              Let's Build Something Great Together
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're launching a startup or modernizing an existing
              business, we're here to turn your ideas into scalable digital
              solutions.
            </p>

            <a
              href="/#contact"
              className="inline-flex px-8 py-4 mt-10 text-lg font-semibold text-white transition-all duration-200 bg-gray-900 rounded hover:bg-gray-700"
            >
              Get in Touch
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}