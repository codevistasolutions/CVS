export default function Industries() {
    const industries = [
      {
        title: "Healthcare",
        desc: "Hospital websites, appointment booking systems, EMR software, AI automation and patient management platforms.",
      },
      {
        title: "Real Estate",
        desc: "Property portals, CRM software, lead management systems and real estate automation solutions.",
      },
      {
        title: "Education",
        desc: "Learning Management Systems, school ERP, student portals, admission software and AI learning tools.",
      },
      {
        title: "Manufacturing",
        desc: "ERP software, inventory management, production tracking and workflow automation.",
      },
      {
        title: "Retail & Ecommerce",
        desc: "Modern ecommerce websites, inventory software, POS integration and customer management systems.",
      },
      {
        title: "Startups",
        desc: "MVP development, SaaS platforms, scalable cloud applications and AI-powered business software.",
      },
    ];
  
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="mx-auto max-w-3xl text-center">
  
            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Industries We Empower
            </span>
  
            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Software Development Solutions for Every Industry
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-gray-600">
              CodeVista Solutions builds high-performance websites,
              ERP software, CRM systems, SaaS platforms and AI-powered
              business solutions tailored for industries across India.
            </p>
  
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  
            {industries.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
  
                <p className="mt-4 leading-8 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }