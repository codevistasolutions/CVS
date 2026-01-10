import React from 'react';

const Testimonials = () => {
    return (
        <section id='testimonials' className="py-12 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">

                    {/* Heading */}
                    <div className="text-center">
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                            What our clients say about working with us
                        </h2>
                    </div>

                    {/* Testimonials */}
                    <div className="relative mt-10 md:mt-20">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div
                                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #44ff9a, #44b0ff, #8b44ff, #ff6644, #ebff70)",
                                }}
                            />
                        </div>

                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none md:grid-cols-3 lg:gap-10">

                            {/* Testimonial 1 */}
                            <div className="flex flex-col overflow-hidden shadow-xl bg-white rounded-2xl">
                                <div className="flex flex-col justify-between flex-1 p-6 lg:p-8">
                                    <div>
                                        <div className="flex items-center text-[#FDB241]">
                                            {'★★★★★'}
                                        </div>

                                        <blockquote className="mt-6">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">
                                                “Our website was delivered exactly how we imagined. The design,
                                                performance, and admin flow are smooth. It helped us get more
                                                online inquiries within weeks.”
                                            </p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        {/* <img src="" alt="Jiya Creations" /> */}
                                        <div>
                                            <p className="text-base font-bold text-gray-900 font-pj">
                                                Jiya Creations
                                            </p>
                                            <p className="text-sm text-gray-600 font-pj">
                                                Fashion & Clothing Brand
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="flex flex-col overflow-hidden shadow-xl bg-white rounded-2xl">
                                <div className="flex flex-col justify-between flex-1 p-6 lg:p-8">
                                    <div>
                                        <div className="flex items-center text-[#FDB241]">
                                            {'★★★★★'}
                                        </div>

                                        <blockquote className="mt-6">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">
                                                “They understood our photography business perfectly.
                                                Portfolio display, booking flow, and mobile experience
                                                are excellent. Highly recommended.”
                                            </p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        {/* <img src="" alt="Life Lens Shots" /> */}
                                        <div>
                                            <p className="text-base font-bold text-gray-900 font-pj">
                                                Life Lens Shots
                                            </p>
                                            <p className="text-sm text-gray-600 font-pj">
                                                Photography Studio
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="flex flex-col overflow-hidden shadow-xl bg-white rounded-2xl">
                                <div className="flex flex-col justify-between flex-1 p-6 lg:p-8">
                                    <div>
                                        <div className="flex items-center text-[#FDB241]">
                                            {'★★★★★'}
                                        </div>

                                        <blockquote className="mt-6">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">
                                                “From property listings to lead management, everything
                                                works smoothly. The system saved us time and improved
                                                our client follow-ups.”
                                            </p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        {/* <img src="" alt="Sahil Property" /> */}
                                        <div>
                                            <p className="text-base font-bold text-gray-900 font-pj">
                                                Sahil Property
                                            </p>
                                            <p className="text-sm text-gray-600 font-pj">
                                                Real Estate Consultant
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;

