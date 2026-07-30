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
  Software Development Company
  <br />
  Building Scalable Digital Solutions
</h1>

<p className="mt-8 text-lg leading-8 text-gray-600 max-w-3xl mx-auto font-inter">
  CodeVista Solutions (OPC) Pvt. Ltd. is a software development company based in
  Mohali, Punjab, helping startups, SMEs and enterprises across India build
  modern websites, ERP systems, CRM software, SaaS platforms, AI-powered
  business applications and custom digital solutions that accelerate growth.
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
  CodeVista Solutions was founded with a simple vision—to help businesses
  embrace digital transformation through reliable, scalable and modern software.
  We believe technology should simplify operations, improve productivity and
  create measurable business value rather than unnecessary complexity.
</p>

<p className="mt-6 text-lg leading-8 text-gray-600 font-inter">
  Our team specializes in Web Development, Custom Software Development,
  Enterprise ERP Systems, CRM Development, SaaS Products, AI Integrations,
  Mobile Applications and UI/UX Design. Every solution is tailored to the
  clients workflow instead of forcing businesses to adapt to generic software.
</p>

<p className="mt-6 text-lg leading-8 text-gray-600 font-inter">
  From startups launching their first digital product to established companies
  modernizing their operations, CodeVista works as a long-term technology
  partner delivering secure, scalable and future-ready solutions.
</p>

            </div>

          </div>

        </div>
      </section> 

      {/*industries we serve*/}

      <section className="pb-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center max-w-3xl mx-auto">
      <span className="uppercase tracking-[0.25em] text-gray-500 text-sm font-semibold">
        INDUSTRIES WE SERVE
      </span>

      <h2 className="mt-5 text-4xl font-bold text-gray-900 font-pj">
        Technology Solutions Across Multiple Industries
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        We develop software solutions for healthcare, real estate,
        manufacturing, education, retail, logistics, finance,
        hospitality and service-based businesses.
      </p>
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
  Our mission is to empower businesses with innovative web development,
  enterprise software, ERP, CRM and AI-powered solutions that improve
  efficiency, reduce operational costs and support long-term digital growth.
</p>

            </div>

            <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-10">

              <h3 className="text-3xl font-bold text-gray-900">
                Our Vision
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-600">
  We envision CodeVista Solutions becoming one of Indias most trusted software
  development companies by delivering world-class technology, exceptional
  customer service and long-term value to every client.
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
              Lets Build Something Great Together
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
  Whether you need a business website, ERP software, CRM platform, SaaS
  application or AI-powered business solution, our team is ready to help you
  build technology that scales with your business.
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