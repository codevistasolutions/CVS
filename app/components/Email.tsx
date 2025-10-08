export default function Email() {
  return (
    <>
      {/* Newsletter Section: Simple */}


      <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 relative" id="email">
        <div className='absolute top-0 right-0 lg:px-0'>
          <svg className='hidden md:hidden lg:block' width="272" height="137" viewBox="0 0 544 274" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M544 2.00002C544 37.7196 536.965 73.0894 523.295 106.09C509.626 139.09 489.591 169.076 464.333 194.333C439.076 219.591 409.09 239.626 376.09 253.295C343.089 266.965 307.72 274 272 274C236.28 274 200.911 266.965 167.91 253.295C134.91 239.626 104.924 219.591 79.6669 194.333C54.4094 169.076 34.374 139.09 20.7048 106.09C7.03548 73.0893 -3.1227e-06 37.7195 0 2L100.372 2.00001C100.372 24.5386 104.811 46.8565 113.436 67.6794C122.061 88.5023 134.703 107.422 150.64 123.36C166.578 139.297 185.498 151.939 206.321 160.564C227.144 169.189 249.461 173.628 272 173.628C294.539 173.628 316.856 169.189 337.679 160.564C358.502 151.939 377.422 139.297 393.36 123.36C409.297 107.422 421.939 88.5023 430.564 67.6794C439.189 46.8565 443.629 24.5386 443.629 2.00002H544Z" fill="#EE6C4D" /><path d="M410 1.20643e-05C410 18.1224 406.431 36.0674 399.495 52.8103C392.56 69.5533 382.395 84.7663 369.581 97.5807C356.766 110.395 341.553 120.56 324.81 127.495C308.067 134.431 290.122 138 272 138C253.878 138 235.933 134.431 219.19 127.495C202.447 120.56 187.234 110.395 174.419 97.5807C161.605 84.7663 151.44 69.5532 144.505 52.8103C137.569 36.0674 134 18.1224 134 0L184.924 4.4519e-06C184.924 11.435 187.176 22.7581 191.552 33.3226C195.928 43.8872 202.342 53.4864 210.428 61.5722C218.514 69.658 228.113 76.0719 238.677 80.4479C249.242 84.8239 260.565 87.0762 272 87.0762C283.435 87.0762 294.758 84.8239 305.323 80.4479C315.887 76.0719 325.486 69.658 333.572 61.5722C341.658 53.4864 348.072 43.8872 352.448 33.3226C356.824 22.7581 359.076 11.435 359.076 1.20643e-05H410Z" fill="#EE6C4D" />
          </svg>
        </div>
        <div className="lg:w-2/3 xl:w-1/2 mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
            Ready to get started?
          </h3>
          <p className="prose prose-indigo mb-6">
            Get in touch with us today
          </p>
          <form className="space-y-3 lg:w-2/3 mx-auto">
            <div className="flex bg-customOrange-200 drop-shadow-2xl-xl p-3">
              <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full drop-shadow-2xl border-gray-200 focus:border-customOrange-500 focus:ring focus:ring-customOrange-500 focus:ring-opacity-50 mx-0" type="email" id="email" name="email" placeholder="Your email" />
              <button type="submit" className="inline-flex justify-center items-center  border font-semibold focus:outline-none flex-none px-4 py-3 leading-6 drop-shadow-2xl border-customOrange-500 bg-customOrange-500 text-white hover:text-white hover:bg-customOrange-800 hover:border-customOrange-800 focus:ring focus:ring-customOrange-500 focus:ring-opacity-50 active:bg-customOrange-500 active:border-customOrange-500 mx-0">
                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="sm:hidden hi-outline hi-plus inline-block w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                <span className="hidden sm:inline">Sign Up</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* END Newsletter Section: Simple */}
    </>
  )
}
