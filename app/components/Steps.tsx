import React from 'react';

const Steps = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center max-w-5xl grid-cols-1 mx-auto gap-12 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                            One Platform for Digital Service Businesses
                        </h2>

                        <p className="mt-6 text-base text-gray-600 font-pj max-w-lg mx-auto lg:mx-0">
                            Build, sell, and manage custom software services with recurring revenue —
                            all from one simple dashboard.
                        </p>
                    </div>

                    {/* Right Card */}
                    <div className="relative max-w-md mx-auto lg:max-w-none">
                        <div className="absolute -inset-1.5">
                            <div
                                className="w-full h-full opacity-30 blur-lg"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #44ff9a, #44b0ff, #8b44ff, #ff6644, #ebff70)",
                                }}
                            />
                        </div>

                        <div className="relative bg-white rounded-2xl">
                            <div className="p-6 md:p-8">
                                <div className="space-y-8">

                                    {/* Step 1 */}
                                    <div className="flex items-start">
                                        <div className="flex items-center justify-center w-10 h-10 text-white bg-gray-800 rounded-full flex-shrink-0">
                                            1
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-base font-semibold text-gray-900 font-pj">
                                                Registration
                                            </h3>
                                            <p className="mt-2 text-base text-gray-600 font-pj">
                                                Create your account, connect payments, and launch instantly.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex items-start">
                                        <div className="flex items-center justify-center w-10 h-10 text-white bg-gray-800 rounded-full flex-shrink-0">
                                            2
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-base font-semibold text-gray-900 font-pj">
                                                Add Products
                                            </h3>
                                            <p className="mt-2 text-base text-gray-600 font-pj">
                                                List services with pricing, demos, portfolios, and booking.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex items-start">
                                        <div className="flex items-center justify-center w-10 h-10 text-white bg-gray-800 rounded-full flex-shrink-0">
                                            3
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-base font-semibold text-gray-900 font-pj">
                                                Grow Audience
                                            </h3>
                                            <p className="mt-2 text-base text-gray-600 font-pj">
                                                Capture leads, run campaigns, and track performance.
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

export default Steps;

