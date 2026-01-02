// // export default function Navbar() {
// //     return (
// //         <>
// //             {/* Header */}
// //             <header id="page-header" className="flex flex-none items-center bg-white py-10">
// //                 <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
// //                     {/* Logo */}
// //                     <div>
// //                         <a href="#" className="inline-flex items-center space-x-2 font-extrabold text-lg tracking-wide  hover:text-customOrange-500">
// //                         {/* <img src="/logo.svg" alt="Hero Image" className="relative lg:-mx-6 md:mx-auto max-width:100px" /> */}
// //                         <img
// //                 src="/logo.svg"
// //                 alt="Logo"
// //                 className="w-[150px] max-w-full h-auto object-contain"
// //               />
// //                         </a>
// //                     </div>
// //                     {/* END Logo */}
// //                     <div className="flex flex-col text-center md:flex-row md:items-center md:justify-items-start justify-items-start space-y-6 md:space-y-0 md:space-x-10">
// //                         {/* Navigation */}
// //                         <nav className="text-sm md:text-base space-x-4 md:space-x-6 ">
// //                             <a href="#" className="font-semibold hover:text-gray-900 text-gray-500">
// //                                 <span>Home</span>
// //                             </a>
// //                             <a href="#about" className="font-semibold hover:text-gray-900 text-gray-500">
// //                                 <span>About</span>
// //                             </a>
// //                             <a href="#testimonials" className="font-semibold hover:text-gray-900 text-gray-500">
// //                                 <span>Testimonials</span>
// //                             </a>
// //                             <a href="#email" className="font-semibold hover:text-gray-900 text-gray-500">
// //                                 <span>Contact</span>
// //                             </a>
// //                         </nav>
// //                         {/* END Navigation */}


// //                         {/* Actions */}
// //                         {/* <div className="flex items-center justify-center space-x-2">
// //                             <a href="#" className="inline-flex justify-center items-center space-x-2 font-semibold  px-3 py-2 leading-5 text-sm hover:text-customOrange-500">
// //                                 <span>Login</span>
// //                             </a>
// //                             <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm drop-shadow-2xl border-customOrange-500 bg-customOrange-500 text-white hover:text-white hover:bg-customOrange-800 hover:border-customOrange-800 focus:ring focus:ring-customOrange-500 focus:ring-opacity-50 active:bg-customOrange-500 active:border-customOrange-500">
// //                                 <span>Sign Up</span>
// //                             </a>
// //                         </div> */}
// //                         {/* END Actions */}
// //                     </div>
// //                 </div>
// //             </header>
// //             {/* END Header */}
// //         </>
// //     )
// // }


// 'use client';

// import { useState } from 'react';

// export default function Navbar() {
//   const [expanded, setExpanded] = useState(false);


//     return (
//         <>
//         <div className="bg-gray-50">

            
//             {/* Header */}
//             <header className="relative z-10 py-4 md:py-6">
//                 <div className="container px-4 mx-auto sm:px-6 lg:px-8">
//                     <div className="relative flex items-center justify-between">
//                         <div className="flex-shrink-0">
//                             <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
//                                 <img className="w-auto h-32" src="/logo.svg" alt="" />
//                             </a>
//                         </div>

//                         <div className="flex md:hidden">
//                             <button type="button" className="text-gray-900" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
//                                 {!expanded && (
//                                     <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
//                                     </svg>
//                                 )}

//                                 {expanded && (
//                                     <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 )}
//                             </button>
//                         </div>

//                         <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
//                             <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Home </a>

//                             <a href="#about" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About Us </a>

//                             <a href="#testimonials" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Testimonials </a>
//                         </div>

//                         <div className="hidden md:flex">
//                             <a
//                                 href="#email"
//                                 title=""
//                                 className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                                 role="button"
//                             >
//                                 Contact Us
//                             </a>
//                         </div>
//                     </div>

//                     {expanded && (
//                         <nav>
//                             <div className="px-1 py-8">
//                                 <div className="grid gap-y-7">
//                                     <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Home </a>

//                                     <a href="#about" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About Us </a>

//                                     <a href="#testimonials" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Testimonials </a>

//                                     <a
//                                         href="#email"
//                                         title=""
//                                         className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                                         role="button"
//                                     >
//                                         Contact Us
//                                     </a>
//                                 </div>
//                             </div>
//                         </nav>
//                     )}
//                 </div>
//             </header>
//             {/* END Header */}
//             </div>
//         </>
//     )
// }



'use client';

import { useState } from 'react';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <>
      <div className="bg-gray-50">
        {/* Header */}
        <header className="relative z-10 py-4 md:py-6">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a
                  href="#"
                  className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <img className="w-auto h-32" src="/logo.svg" alt="Logo" />
                </a>
              </div>

              {/* Mobile Burger */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-900"
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                >
                  {!expanded ? (
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50">
                  Home
                </a>
                <a href="#about" className="text-base font-medium text-gray-900 hover:text-opacity-50">
                  About Us
                </a>
                <a
                  href="#testimonials"
                  className="text-base font-medium text-gray-900 hover:text-opacity-50"
                >
                  Testimonials
                </a>
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:flex">
                <a
                  href="#email"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded hover:bg-gray-600"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Mobile Menu */}
            {expanded && (
              <nav>
                <div className="px-1 py-8">
                  <div className="grid gap-y-7">
                    <a
                      href="#"
                      onClick={closeMenu}
                      className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded hover:bg-gray-50"
                    >
                      Home
                    </a>

                    <a
                      href="#about"
                      onClick={closeMenu}
                      className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded hover:bg-gray-50"
                    >
                      About Us
                    </a>

                    <a
                      href="#testimonials"
                      onClick={closeMenu}
                      className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded hover:bg-gray-50"
                    >
                      Testimonials
                    </a>

                    <a
                      href="#email"
                      onClick={closeMenu}
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded hover:bg-gray-600"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </nav>
            )}
          </div>
        </header>
        {/* END Header */}
      </div>
    </>
  );
}
