'use client'

import React from 'react';

export default function Email() {
  return (
    <>
      {/* Contact Section: With Image Cover */}
      <div
        className="bg-cover"
        style={{
          backgroundImage:
            'url("https://cdn.tailkit.com/media/placeholders/photo-wpU4veNGnHg-1280x800.jpg")',
        }}
      >
        <div className="bg-gray-50/95">
          <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
            <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
              {/* Heading with Company Info */}
              <div className="lg:w-2/5">
                <div className="mb-1 text-sm font-bold tracking-wider text-orange-600 uppercase">
                  We reply in 24hrs
                </div>
                <h2 className="mb-4 text-4xl font-black text-black">
                  Get in touch
                </h2>
                <p className="text-xl leading-relaxed font-medium text-gray-700">
                  If something does not make sense, feel free to contact us and
                  we will get back to you as soon as possible.
                </p>
                <h4 className="mt-10 mb-4 font-semibold tracking-wider uppercase">
                  CodeVista Solutions Pvt Ltd.  
                </h4>
                <div className="leading-relaxed text-gray-600">
                  SCO-245, 1st Floor, Mattaur, Sector-70 
                  <br />
                  Mohali, India 160071
                  <br />
                  <abbr title="Phone">P:</abbr> (+91) 7888968943
                </div>
              </div>
              {/* END Heading with Company Info */}

              {/* Contact Form */}
              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-xs lg:mx-auto lg:w-1/2">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6 p-5 md:p-10"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label
                        htmlFor="firstname"
                        className="inline-block font-medium"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-orange-500 focus:ring-3 focus:ring-orange-500/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="lastname"
                        className="inline-block font-medium"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-orange-500 focus:ring-3 focus:ring-orange-500/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="inline-block font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-orange-500 focus:ring-3 focus:ring-orange-500/50"
                    />
                  </div>
                  {/* <div className="space-y-1">
                    <label
                      htmlFor="department"
                      className="inline-block font-medium"
                    >
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      className="block w-full rounded-lg border border-gray-200 py-3 pr-10 pl-5 leading-6 focus:border-orange-500 focus:ring-3 focus:ring-orange-500/50"
                      defaultValue=""
                    >
                      <option value="sales">Sales</option>
                      <option value="support">Support</option>
                      <option value="projects">Projects</option>
                      <option value="payments">Payments</option>
                      <option value="hiring">Hiring</option>
                    </select>
                  </div> */}
                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="inline-block font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-orange-500 focus:ring-3 focus:ring-orange-500/50"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-orange-700 bg-orange-700 px-8 py-4 leading-6 font-semibold text-white hover:border-orange-600 hover:bg-orange-600 hover:text-white focus:ring-3 focus:ring-orange-400/50 active:border-orange-700 active:bg-orange-700"
                  >
                    {/* <svg
                      className="hi-mini hi-paper-airplane inline-block size-2 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg> */}
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
              {/* END Contact Form */}
            </div>
          </div>
        </div>
      </div>
      {/* END Contact Section: With Image Cover */}
    </>
  );
}