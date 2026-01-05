'use client';

import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMobile } from 'react-icons/ai';
import { MdOutlineDesignServices, MdOutlineComputer } from 'react-icons/md';

export default function FeaturesSubtleItemBoxes() {
    return (
        <>
            {/* Features Section: Ultra Tight - Almost Zero Side Gaps */}
            <div className="bg-white -mx-4 lg:-mx-0">
                <div className="container xl:max-w-7xl mx-auto px-0 py-16 lg:py-32 space-y-16">
                    {/* Heading */}
                    <div className="text-center px-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                            Our
                            <span className="text-customOrange-500"> Services </span>
                            
                        </h2>
                        <div className="w-12 h-1.5 bg-customOrange-500 rounded-lg mb-3 mx-auto" />
                        <h3 className="md:text-lg text-gray-600 md:leading-relaxed font-medium lg:w-2/3 mx-auto">
                            Comprehensive technology solutions designed to optimize your workflow and enhance your digital presence.</h3>
                    </div>
                    {/* END Heading */}

                    {/* Features Grid - Zero Side Gaps on Large Screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-2 px-4 lg:px-0">
                        <div className="group p-4 lg:p-5 bg-gray-50 rounded-xl">
                            <div className="relative w-12 mb-7 text-customOrange-500">
                                <CgWebsite className="inline-block w-10 h-10 transition duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-gray-900">ERP Implementation</h4>
                            <p className="leading-relaxed text-gray-600 text-sm font-medium">
                                Streamline your business operations efficiently with comprehensive ERPNext solutions tailored to your workflow.
                            </p>
                        </div>

                        <div className="group p-4 lg:p-5 bg-gray-50 rounded-xl">
                            <div className="relative w-12 mb-7 text-customOrange-500">
                                <AiOutlineMobile className="inline-block w-10 h-10 transition duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-gray-900">Web Development</h4>
                            <p className="leading-relaxed text-gray-600 text-sm font-medium">
                                Modern, responsive, and high-performance websites built with the latest technologies to engage your audience.
                            </p>
                        </div>

                        <div className="group p-4 lg:p-5 bg-gray-50 rounded-xl">
                            <div className="relative w-12 mb-7 text-customOrange-500">
                                <MdOutlineDesignServices className="inline-block w-10 h-10 transition duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-gray-900">Custom IT Solutions</h4>
                            <p className="leading-relaxed text-gray-600 text-sm font-medium">
                                Bespoke software and IT infrastructure designed specifically to address your unique business challenges.
                            </p>
                        </div>

                        <div className="group p-4 lg:p-5 bg-gray-50 rounded-xl">
                            <div className="relative w-12 mb-7 text-customOrange-500">
                                <MdOutlineComputer className="inline-block w-10 h-10 transition duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-gray-900">Other Specialties</h4>
                            <p className="leading-relaxed text-gray-600 text-sm font-medium">
                                Cloud migration, cybersecurity audits, and digital transformation consulting to future-proof your company.
                            </p>
                        </div>
                    </div>
                    {/* END Features */}
                </div>
            </div>
        </>
    );
}

// 'use client';

// import { CgWebsite } from 'react-icons/cg';
// import { AiOutlineMobile } from 'react-icons/ai';
// import { MdOutlineDesignServices, MdOutlineComputer } from 'react-icons/md';

// export default function FeaturesSubtleItemBoxes() {
//   return (
//     <>
//       {/* Features Section: Subtle Item Boxes - Tighter Side Gaps */}
//       <div className="bg-white">
//         <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-6 xl:px-4 lg:py-32 space-y-16">
//           {/* Heading */}
//           <div className="text-center">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
//               Our services are going to
//               <span className="text-customOrange-500"> blow </span>
//               your mind
//             </h2>
//             <div className="w-12 h-1.5 bg-customOrange-500 rounded-lg mb-3 mx-auto" />
//             <h3 className="md:text-lg text-gray-600 md:leading-relaxed font-medium lg:w-2/3 mx-auto">
//               We have been working with the biggest companies and delivered over 30 high profile projects in the past year. Let us build something together today.
//             </h3>
//           </div>
//           {/* END Heading */}

//           {/* Features Grid - Reduced Side Gaps */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6">
//             <div className="group p-6 lg:p-7 xl:p-8 bg-gray-50 rounded-xl">
//               <div className="relative w-12 mb-8 text-customOrange-500">
//                 <CgWebsite className="inline-block w-10 h-10 transition duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
//               </div>
//               <h4 className="text-xl font-bold mb-3 text-gray-900">Web Development</h4>
//               <p className="leading-relaxed text-gray-600 text-sm font-medium">
//                 Build and optimize stunning websites and web applications tailored to your specific needs, ensuring a seamless user experience.
//               </p>
//             </div>

//             <div className="group p-6 lg:p-7 xl:p-8 bg-gray-50 rounded-xl">
//               <div className="relative w-12 mb-8 text-customOrange-500">
//                 <AiOutlineMobile className="inline-block w-10 h-10 transition duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
//               </div>
//               <h4 className="text-xl font-bold mb-3 text-gray-900">Mobile App Development</h4>
//               <p className="leading-relaxed text-gray-600 text-sm font-medium">
//                 Create powerful and intuitive mobile applications for iOS and Android platforms, enabling you to reach and engage with your target audience effectively.
//               </p>
//             </div>

//             <div className="group p-6 lg:p-7 xl:p-8 bg-gray-50 rounded-xl">
//               <div className="relative w-12 mb-8 text-customOrange-500">
//                 <MdOutlineDesignServices className="inline-block w-10 h-10 transition duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
//               </div>
//               <h4 className="text-xl font-bold mb-3 text-gray-900">UI/UX Design</h4>
//               <p className="leading-relaxed text-gray-600 text-sm font-medium">
//                 Craft visually appealing and user-friendly interfaces that enhance usability and create memorable experiences for your customers.
//               </p>
//             </div>

//             <div className="group p-6 lg:p-7 xl:p-8 bg-gray-50 rounded-xl">
//               <div className="relative w-12 mb-8 text-customOrange-500">
//                 <MdOutlineComputer className="inline-block w-10 h-10 transition duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
//               </div>
//               <h4 className="text-xl font-bold mb-3 text-gray-900">Software Development</h4>
//               <p className="leading-relaxed text-gray-600 text-sm font-medium">
//                 Develop scalable and efficient software solutions that streamline your business processes and drive productivity across your organization.
//               </p>
//             </div>
//           </div>
//           {/* END Features */}
//         </div>
//       </div>
//     </>
//   );
// }


// import { CgWebsite } from 'react-icons/cg'
// import { AiOutlineMobile, AiOutlineCloudServer } from 'react-icons/ai'
// import { MdOutlineDesignServices, MdOutlineComputer } from 'react-icons/md'
// import { BsRobot } from 'react-icons/bs'

// export default function FeaturesSubtleItemBoxes() {
//     return (
//         <>
//             {/* Features Section: Subtle Item Boxes */}
//             <div className="bg-white">
//                 <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 space-y-16">
//                     {/* Heading */}
//                     <div className="text-center">
//                         <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
//                             Our services are going to
//                             <span className="text-customOrange-500"> blow </span>
//                             your mind
//                         </h2>
//                         <div className="w-12 h-1.5 bg-customOrange-500 rounded-lg mb-3 mx-auto" />
//                         <h3 className="md:text-lg text-gray-600 md:leading-relaxed font-medium lg:w-2/3 mx-auto">
//                             We have been working with the biggest companies and delivered over 30 high profile projects in the past year. Let us build something together today.
//                         </h3>
//                     </div>
//                     {/* END Heading */}

//                     {/* Features */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
//                         <div className="group p-6 lg:p-8 xl:p-10 bg-gray-50 rounded-xl">
//                             <div className="relative w-12 mb-8 text-customOrange-500">
//                                 <CgWebsite className="hi-solid hi-globe inline-block w-10 h-10 right-0 bottom-0 transition translate-x-2 translate-y-2 text-customOrange-500 group-hover:translate-x-0 group-hover:translate-y-0" />
//                             </div>
//                             <h4 className="text-xl font-bold mb-3 text-gray-900">
//                                 Web Development
//                             </h4>
//                             <p className="leading-relaxed text-gray-600 text-sm font-medium">
//                                 Build and optimize stunning websites and web applications tailored to your specific needs, ensuring a seamless user experience.
//                             </p>
//                         </div>
//                         <div className="group p-6 lg:p-8 xl:p-10 bg-gray-50 rounded-xl">
//                             <div className="relative w-12 mb-8 text-customOrange-500">
//                                 <AiOutlineMobile className="hi-solid hi-globe inline-block w-10 h-10 right-0 bottom-0 transition translate-x-2 translate-y-2 text-customOrange-500 group-hover:translate-x-0 group-hover:translate-y-0" />
//                             </div>
//                             <h4 className="text-xl font-bold mb-3 text-gray-900">
//                                 Mobile App Development
//                             </h4>
//                             <p className="leading-relaxed text-gray-600 text-sm font-medium">
//                                 Create powerful and intuitive mobile applications for iOS and Android platforms, enabling you to reach and engage with your target audience effectively.
//                             </p>
//                         </div>
//                         <div className="group p-6 lg:p-8 xl:p-10 bg-gray-50 rounded-xl">
//                             <div className="relative w-12 mb-8 text-customOrange-500">
//                                 <MdOutlineDesignServices className="hi-solid hi-globe inline-block w-10 h-10 right-0 bottom-0 transition translate-x-2 translate-y-2 text-customOrange-500 group-hover:translate-x-0 group-hover:translate-y-0" />
//                             </div>
//                             <h4 className="text-xl font-bold mb-3 text-gray-900">
//                                 UI/UX Design
//                             </h4>
//                             <p className="leading-relaxed text-gray-600 text-sm font-medium">
//                                 Craft visually appealing and user-friendly interfaces that enhance usability and create memorable experiences for your customers.
//                             </p>
//                         </div>
//                         <div className="group p-6 lg:p-8 xl:p-10 bg-gray-50 rounded-xl">
//                             <div className="relative w-12 mb-8 text-customOrange-500">
//                                 <MdOutlineComputer className="hi-solid hi-globe inline-block w-10 h-10 right-0 bottom-0 transition translate-x-2 translate-y-2 text-customOrange-500 group-hover:translate-x-0 group-hover:translate-y-0" />
//                             </div>
//                             <h4 className="text-xl font-bold mb-3 text-gray-900">
//                                 Software Development
//                             </h4>
//                             <p className="leading-relaxed text-gray-600 text-sm font-medium">
//                                 Develop scalable and efficient software solutions that streamline your business processes and drive productivity across your organization.
//                             </p>
//                         </div>
//                         {/* <div className="group p-6 lg:p-8 xl:p-10 bg-gray-50 rounded-xl">
//                             <div className="relative w-12 mb-8 text-customOrange-500">
//                                 <BsRobot className="hi-solid hi-globe inline-block w-10 h-10 right-0 bottom-0 transition translate-x-2 translate-y-2 text-customOrange-500 group-hover:translate-x-0 group-hover:translate-y-0" />
//                             </div>
//                             <h4 className="text-xl font-bold mb-3 text-gray-900">
//                                 AI and Machine Learning
//                             </h4>
//                             <p className="leading-relaxed text-gray-600 text-sm font-medium">
//                                 Harness the potential of artificial intelligence and machine learning technologies to gain valuable insights, automate tasks, and deliver personalized experiences to your users.
//                             </p>
//                         </div>
//                         <div className="group p-6 lg:p-8 xl:p-10 bg-gray-50 rounded-xl">
//                             <div className="relative w-12 mb-8 text-customOrange-500">
//                                 <AiOutlineCloudServer className="hi-solid hi-globe inline-block w-10 h-10 right-0 bottom-0 transition translate-x-2 translate-y-2 text-customOrange-500 group-hover:translate-x-0 group-hover:translate-y-0" />
//                             </div>
//                             <h4 className="text-xl font-bold mb-3 text-gray-900">
//                                 Cloud Services
//                             </h4>
//                             <p className="leading-relaxed text-gray-600 text-sm font-medium">
//                                 Leverage the power of cloud computing to enhance data storage, collaboration, and scalability while ensuring data security and cost-efficiency.
//                             </p>
//                         </div> */}
//                     </div>
//                     {/* END Features */}
//                 </div>
//             </div>
//             {/* END Features Section: Subtle Item Boxes */}
//         </>
//     )
// }


