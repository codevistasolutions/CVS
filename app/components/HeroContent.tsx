export default function HeroContent() {
  return (
    <>
      {/* Hero Section: Image Side With Simple Header */}
      <div className="bg-white overflow-hidden">

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-0 lg:pb-16">
          <div className="lg:w-1/2 lg:flex lg:items-center">
            <div>

              <h1 className="text-5xl md:text-5xl font-extrabold mb-4">
                Maximise your Business with our <span className="text-customOrange-500">Cutting Edge</span> Tech Solutions
              </h1>
              <h2 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                We are a dedicated development team providing top-notch tech services for B2B clients.
                Explore our range of services and discover how we can help your business succeed.
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                <a href="#features" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 drop-shadow-2xl border-customOrange-500 bg-customOrange-500 text-white hover:text-white hover:bg-customOrange-800 hover:border-customOrange-800 focus:ring focus:ring-customOrange-500 focus:ring-opacity-50 active:bg-customOrange-500 active:border-customOrange-500">
                  <span>EXPLORE MORE</span>
                </a>
                <a href="#email" className="inline-flex justify-center items-center space-x-2  font-semibold focus:outline-none px-6 py-4 leading-6 text-customOrange-500 hover:text-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
            <div className="lg:w-max mx-5 relative">

              <img src="/hero.png" alt="Hero Image" className="relative mx-auto" />
            </div>
          </div>
        </div>
      </div>
      {/* END Hero Content */}

      {/* END Hero Section: Image Side With Simple Header */}
    </>
  )
}
