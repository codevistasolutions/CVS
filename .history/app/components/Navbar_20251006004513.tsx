export default function Navbar() {
    return (
        <>
            {/* Header */}
            <header id="page-header" className="flex flex-none items-center bg-white py-10">
                <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
                    {/* Logo */}
                    <div>
                        <a href="#" className="inline-flex items-center space-x-2 font-extrabold text-lg tracking-wide  hover:text-customOrange-500">
                        {/* <img src="/logo.svg" alt="Hero Image" className="relative lg:-mx-6 md:mx-auto max-width:100px" /> */}
                        <img
                src="/logo.svg"
                alt="Logo"
                className="w-[120px] max-w-full h-auto object-contain"
              />
                        </a>
                    </div>
                    {/* END Logo */}
                    <div className="flex flex-col text-center md:flex-row md:items-center md:justify-items-start justify-items-start space-y-6 md:space-y-0 md:space-x-10">
                        {/* Navigation */}
                        <nav className="text-sm md:text-base space-x-4 md:space-x-6 ">
                            <a href="#" className="font-semibold hover:text-gray-900 text-gray-500">
                                <span>Home</span>
                            </a>
                            <a href="#about" className="font-semibold hover:text-gray-900 text-gray-500">
                                <span>About</span>
                            </a>
                            <a href="#testimonials" className="font-semibold hover:text-gray-900 text-gray-500">
                                <span>Testimonials</span>
                            </a>
                            <a href="#email" className="font-semibold hover:text-gray-900 text-gray-500">
                                <span>Contact</span>
                            </a>
                        </nav>
                        {/* END Navigation */}


                        {/* Actions */}
                        <div className="flex items-center justify-center space-x-2">
                            <a href="#" className="inline-flex justify-center items-center space-x-2 font-semibold  px-3 py-2 leading-5 text-sm hover:text-customOrange-500">
                                <span>Login</span>
                            </a>
                            <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm drop-shadow-2xl border-customOrange-500 bg-customOrange-500 text-white hover:text-white hover:bg-customOrange-800 hover:border-customOrange-800 focus:ring focus:ring-customOrange-500 focus:ring-opacity-50 active:bg-customOrange-500 active:border-customOrange-500">
                                <span>Sign Up</span>
                            </a>
                        </div>
                        {/* END Actions */}
                    </div>
                </div>
            </header>
            {/* END Header */}
        </>
    )
}

