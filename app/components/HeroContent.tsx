// // export default function HeroContent() {
// //   return (
// //     <>
// //       {/* Hero Section: Image Side With Simple Header */}
// //       <div className="bg-white overflow-hidden">

// //         {/* Hero Content */}
// //         <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-0 lg:pb-16">
// //           <div className="lg:w-1/2 lg:flex lg:items-center">
// //             <div>

// //               <h1 className="text-5xl md:text-5xl font-extrabold mb-4">
// //                 Maximise your Business with our <span className="text-customOrange-500">Cutting Edge</span> Tech Solutions
// //               </h1>
// //               <h2 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
// //                 We are a dedicated development team providing top-notch tech services for B2B clients.
// //                 Explore our range of services and discover how we can help your business succeed.
// //               </h2>
// //               <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
// //                 <a href="#features" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 drop-shadow-2xl border-customOrange-500 bg-customOrange-500 text-white hover:text-white hover:bg-customOrange-800 hover:border-customOrange-800 focus:ring focus:ring-customOrange-500 focus:ring-opacity-50 active:bg-customOrange-500 active:border-customOrange-500">
// //                   <span>EXPLORE MORE</span>
// //                 </a>
// //                 <a href="#email" className="inline-flex justify-center items-center space-x-2  font-semibold focus:outline-none px-6 py-4 leading-6 text-customOrange-500 hover:text-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
// //                   <span>Contact Us</span>
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
// //             <div className="lg:w-max mx-5 relative">

// //               <img src="/hero.png" alt="Hero Image" className="relative mx-auto" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* END Hero Content */}

// //       {/* END Hero Section: Image Side With Simple Header */}
// //     </>
// //   )
// // }

// 'use client';

// import { useState } from 'react';

// export default function HeroContent() {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <>
//       <div className="bg-gray-50">


//         <section className="relative py-12 sm:py-16 lg:pb-40">
//           <div className="absolute bottom-0 right-0 overflow-hidden">
//             <img className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png" alt="" />
//           </div>

//           <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
//               <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
//                 <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">An editor that helps you write clean codes.</h1>
//                 <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>

//                 <a href="#" title="" className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
//                   Try our free editor
//                 </a>

//                 <div className="mt-8 sm:mt-16">
//                   <div className="flex items-center justify-center lg:justify-start">
//                     <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                       <path
//                         d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//                       />
//                     </svg>
//                     <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                       <path
//                         d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//                       />
//                     </svg>
//                     <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                       <path
//                         d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//                       />
//                     </svg>
//                     <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                       <path
//                         d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//                       />
//                     </svg>
//                     <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                       <path
//                         d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//                       />
//                     </svg>
//                   </div>

//                   <blockquote className="mt-6">
//                     <p className="text-lg font-bold text-gray-900 font-pj">Best code editor in market!</p>
//                     <p className="mt-3 text-base leading-7 text-gray-600 font-inter">Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.</p>
//                   </blockquote>

//                   <div className="flex items-center justify-center mt-3 lg:justify-start">
//                     <img className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png" alt="" />
//                     <p className="ml-2 text-base font-bold text-gray-900 font-pj">Denny Jones</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="xl:col-span-1">
//                 <img className="w-full mx-auto" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png" alt="" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


'use client';

export default function HeroContent() {
  return (
    <>
      <div className="bg-gray-50">
        <section className="relative py-16 sm:py-20 lg:pb-40">
          <div className="absolute bottom-0 right-0 overflow-hidden">
            <img
              className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2">
              
              {/* LEFT CONTENT */}
              <div className="text-center lg:text-left xl:pr-20">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl font-pj">
                  Turning Ideas into Scalable Digital Solutions
                </h1>

                <p className="mt-4 text-lg text-gray-600 font-inter max-w-xl mx-auto lg:mx-0">
                  CodeVista Solutions builds reliable software, web, and enterprise applications
                  tailored to help businesses grow and adapt in a digital-first world.
                </p>

                <a
                  href="#contact"
                  className="inline-flex px-8 py-4 mt-8 text-lg font-semibold text-white transition-all duration-200 bg-gray-900 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Get in Touch
                </a>
              </div>

              {/* RIGHT IMAGE */}
              <div>
                <img
                  className="w-full mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                  alt="CodeVista Solutions Illustration"
                />
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
