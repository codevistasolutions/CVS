'use client';

import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMobile } from 'react-icons/ai';
import { MdOutlineDesignServices, MdOutlineComputer } from 'react-icons/md';

export default function FeaturesSubtleItemBoxes() {
    return (
        <>
            {/* Features Section: Ultra Tight - Almost Zero Side Gaps */}
            <div id='services' className="bg-white -mx-4 lg:-mx-0">
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
