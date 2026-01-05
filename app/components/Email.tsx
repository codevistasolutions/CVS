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
                  Company Inc.
                </h4>
                <div className="leading-relaxed text-gray-600">
                  1080 Sunshine Valley, Suite 2563
                  <br />
                  San Francisco, CA 85214
                  <br />
                  <abbr title="Phone">P:</abbr> (123) 456-7890
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
                  <div className="space-y-1">
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
                  </div>
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


// export default function Email() {
//   return (
//     <>
//       {/* Newsletter Section: Simple */}


//       <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 relative" id="email">
//         <div className='absolute top-0 right-0 lg:px-0'>
//           <svg className='hidden md:hidden lg:block' width="272" height="137" viewBox="0 0 544 274" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M544 2.00002C544 37.7196 536.965 73.0894 523.295 106.09C509.626 139.09 489.591 169.076 464.333 194.333C439.076 219.591 409.09 239.626 376.09 253.295C343.089 266.965 307.72 274 272 274C236.28 274 200.911 266.965 167.91 253.295C134.91 239.626 104.924 219.591 79.6669 194.333C54.4094 169.076 34.374 139.09 20.7048 106.09C7.03548 73.0893 -3.1227e-06 37.7195 0 2L100.372 2.00001C100.372 24.5386 104.811 46.8565 113.436 67.6794C122.061 88.5023 134.703 107.422 150.64 123.36C166.578 139.297 185.498 151.939 206.321 160.564C227.144 169.189 249.461 173.628 272 173.628C294.539 173.628 316.856 169.189 337.679 160.564C358.502 151.939 377.422 139.297 393.36 123.36C409.297 107.422 421.939 88.5023 430.564 67.6794C439.189 46.8565 443.629 24.5386 443.629 2.00002H544Z" fill="#EE6C4D" /><path d="M410 1.20643e-05C410 18.1224 406.431 36.0674 399.495 52.8103C392.56 69.5533 382.395 84.7663 369.581 97.5807C356.766 110.395 341.553 120.56 324.81 127.495C308.067 134.431 290.122 138 272 138C253.878 138 235.933 134.431 219.19 127.495C202.447 120.56 187.234 110.395 174.419 97.5807C161.605 84.7663 151.44 69.5532 144.505 52.8103C137.569 36.0674 134 18.1224 134 0L184.924 4.4519e-06C184.924 11.435 187.176 22.7581 191.552 33.3226C195.928 43.8872 202.342 53.4864 210.428 61.5722C218.514 69.658 228.113 76.0719 238.677 80.4479C249.242 84.8239 260.565 87.0762 272 87.0762C283.435 87.0762 294.758 84.8239 305.323 80.4479C315.887 76.0719 325.486 69.658 333.572 61.5722C341.658 53.4864 348.072 43.8872 352.448 33.3226C356.824 22.7581 359.076 11.435 359.076 1.20643e-05H410Z" fill="#EE6C4D" />
//           </svg>
//         </div>
//         <div className="lg:w-2/3 xl:w-1/2 mx-auto text-center">
//           <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
//             Ready to get started?
//           </h3>
//           <p className="prose prose-indigo mb-6">
//             Get in touch with us today
//           </p>
//           <form className="space-y-3 lg:w-2/3 mx-auto">
//             <div className="flex bg-customOrange-200 drop-shadow-2xl-xl p-3">
//               <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full drop-shadow-2xl border-gray-200 focus:border-customOrange-500 focus:ring focus:ring-customOrange-500 focus:ring-opacity-50 mx-0" type="email" id="email" name="email" placeholder="Your email" />
//               <button type="submit" className="inline-flex justify-center items-center  border font-semibold focus:outline-none flex-none px-4 py-3 leading-6 drop-shadow-2xl border-customOrange-500 bg-customOrange-500 text-white hover:text-white hover:bg-customOrange-800 hover:border-customOrange-800 focus:ring focus:ring-customOrange-500 focus:ring-opacity-50 active:bg-customOrange-500 active:border-customOrange-500 mx-0">
//                 <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="sm:hidden hi-outline hi-plus inline-block w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
//                 <span className="hidden sm:inline">Sign Up</span>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* END Newsletter Section: Simple */}
//     </>
//   )
// }
