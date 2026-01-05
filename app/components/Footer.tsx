import React, { useState } from 'react';

const Footer = () => {        
    return (
        <footer className="py-10 bg-white sm:pt-16 lg:pt-16">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <img className="w-auto h-28" src="/logo.svg" alt="" />

        <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 gap-y-16 lg:grid-cols-6 gap-x-16">
            <div>
                <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">Company</h6>

                <ul className="mt-8 space-y-5">
                    <li>
                        <a href="#about" title="" className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Career </a>
                    </li>
                </ul>
            </div>

            <div>
                <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">Help</h6>

                <ul className="mt-8 space-y-5">
                    <li>
                        <a href="#" title="" className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Privacy Policy </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
                <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">Resources</h6>

                <ul className="mt-8 space-y-5">
                    <li>
                        <a href="#" title="" className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Free eBooks </a>
                    </li>

                    <li>
                        <a href="#" title="" className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Development Tutorial </a>
                    </li>

                    <li>
                        <a href="#" title="" className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> How to - Blog </a>
                    </li>

                    <li>
                        <a href="#" title="" className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Youtube Playlist </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-2 sm:col-span-3 xl:pl-20">
                <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">Subscribe to newsletter</h6>

                <div className="relative mt-8">
                    <div className="absolute -inset-2">
                        <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"}}></div>
                    </div>

                    <form action="#" method="POST" className="relative">
                        <div className="flex">
                            <div className="flex-1">
                                <input type="email" name="" id="" placeholder="Enter email address" className="block w-full px-4 py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-gray-300 focus:ring-gray-900 focus:border-gray-900 rounded-l-xl font-pj caret-gray-900" required />
                            </div>

                            <button type="submit" className="px-10 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent sm:px-16 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-r-xl font-pj focus:outline-none">Join</button>
                        </div>
                    </form>
                </div>

                <div className="grid grid-cols-1 mt-8 gap-y-8 sm:grid-cols-2 sm:gap-x-16">
                    <div>
                        <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">Call us</h6>
                        <p className="mt-2.5 text-l font-pj text-gray-900 font-bold">
                            <a href="#" title=""> +91 7888968943 </a>
                        </p>
                    </div>

                    <div>
                        <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">Email us</h6>
                        <p className="mt-2.5 text-l font-pj text-gray-900 font-bold">
                            <a href="#" title=""> support@codevistasolutions.com </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <hr className="mt-16 border-gray-200" />

        <div className="mt-8 sm:flex sm:items-center sm:justify-between">
            <ul className="flex items-center justify-start space-x-3 sm:order-2 sm:justify-end">
                <li>
                    <a href="#" target="_blank" title="" className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200" rel="noopener">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                            ></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a href="#" target="_blank" title="" className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200" rel="noopener">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a href="#" target="_blank" title="" className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200" rel="noopener">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                            <path
                                d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                            ></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a href="#" target="_blank" title="" className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200" rel="noopener">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                            ></path>
                        </svg>
                    </a>
                </li>
            </ul>

            <p className="mt-8 text-sm font-normal text-gray-600 font-pj sm:order-1 sm:mt-0">© Copyright 2025, All Rights Reserved</p>
        </div>
    </div>
</footer>

    )
}
export default Footer;



// export default function Footer() {
//     return (
//         <>
//             {/* Footer Section: With Links Info Newsletter */}
//             <footer id="page-footer" className="bg-white">
//                 <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                         <div className="space-y-6">
//                             <h4 className="text-sm uppercase font-semibold tracking-wider text-gray-400">
//                                 About
//                             </h4>
//                             <nav className="flex flex-col space-y-3">
//                                 <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
//                                     Home
//                                 </a>
//                                 <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
//                                     Features
//                                 </a>
//                                 <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
//                                     FAQs
//                                 </a>
//                                 <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
//                                     Reviews
//                                 </a>
//                                 <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
//                                     Stories
//                                 </a>
//                             </nav>
//                         </div>
//                         <div className="space-y-6">
//                             <h4 className="text-sm uppercase font-semibold tracking-wider text-gray-400">
//                                 Privacy
//                             </h4>
//                             <nav className="flex flex-col space-y-3">
//                                 <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
//                                     Privacy Policy
//                                 </a>
//                                 <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
//                                     Payment Terms
//                                 </a>
//                                 <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
//                                     Terms of Service
//                                 </a>
//                                 <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
//                                     Cookies
//                                 </a>
//                                 <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
//                                     Refunds
//                                 </a>
//                             </nav>
//                         </div>
//                         <div className="space-y-6">
//                             <div className="items-center">
//                                 {/* <img src="/logo.svg" alt="Hero Image" className="relative lg:-mx-9 md:mx-auto" /> */}
//                                 <img src="/logo.svg" alt="Hero Image" className="w-[150px] max-w-full h-auto object-contain" />
//                             </div>

//                             <div className="text-sm leading-relaxed">
//                                 +91 7888968943 <br />
//                                 support@codevistasolutions.com<br />

//                             </div>

//                         </div>
//                     </div>
//                     <hr className="my-10" />
//                     <div className="flex flex-col md:flex-row-reverse md:justify-between space-y-6 md:space-y-0 text-center md:text-left text-sm">
//                         <nav className="space-x-4">
//                             <a href="#" className="text-gray-400 hover:text-customOrange-500">
//                                 <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon-twitter inline-block w-5 h-5"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" /></svg>
//                             </a>
//                             <a href="#" className="text-gray-400 hover:text-customOrange-500">
//                                 <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon-facebook inline-block w-5 h-5"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" /></svg>
//                             </a>
//                             <a href="#" className="text-gray-400 hover:text-customOrange-500">
//                                 <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon-instagram inline-block w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
//                             </a>
//                             <a href="#" className="text-gray-400 hover:text-customOrange-500">
//                                 <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon-github inline-block w-5 h-5"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
//                             </a>
//                             <a href="#" className="text-gray-400 hover:text-customOrange-500">
//                                 <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon-github inline-block w-5 h-5"><path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 00-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.894 9.894 0 0112 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 013.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 015.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 012.087 12zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027a39.137 39.137 0 012.043 7.46c-3.349 1.291-6.953.666-9.641-1.433zm11.586.43a41.098 41.098 0 00-1.92-6.897c1.876-.265 3.94-.196 6.199.196a9.923 9.923 0 01-4.279 6.701z" /></svg>
//                             </a>
//                         </nav>
//                         <div className="text-gray-500">
//                             <span className="font-medium">© Copyright 2025 CodeVista Solutions All rights reserved.</span>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//             {/* END Footer Section: With Links Info Newsletter */}
//         </>
//     )
// }

