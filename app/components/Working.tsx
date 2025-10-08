export default function Working() {
  return (
    <>
      {/* Heading */}
      <div className="bg-white">
        <div className="text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            How it works
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            Streamline Your Path to Success with Our Innovative Approach
          </h3>
        </div>
      </div>
      {/* END Heading */}

      <div className="bg-white pt-14 px-7">
        {/* Timeline: Centered with Extra Info */}
        <div className="relative py-5 dark:text-gray-100">
          {/* Vertical Guide */}
          <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 flex flex-col justify-center lg:left-1/2 lg:-ml-6" aria-hidden="true">
            <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-b from-transparent to-customOrange-200 rounded-t dark:to-teal-900" />
            <div className="mx-auto w-1 grow bg-customOrange-200 dark:bg-teal-900" />
            <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-t from-transparent to-customOrange-200 rounded-b dark:to-teal-900" />
          </div>
          {/* END Vertical Guide */}

          {/* Timeline */}
          <ul className="relative space-y-4 pl-10 md:pl-12 lg:pl-0">
            {/* Event */}
            <li className="relative lg:w-1/2 lg:pr-6 lg:mr-auto">
              <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
                <div className="w-3 h-3 bg-customOrange-500 rounded-full ring ring-customOrange-200 ring-opacity-100 ring-offset-2 dark:bg-customOrange-300 dark:ring-teal-900 dark:ring-offset-gray-900" />
              </div>
              <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
                <h4 className="font-semibold mb-2">
                  Discuss the Requirements
                </h4>
                <p className="text-sm leading-relaxed">
                  &#8226; Understand your project goals, objectives, and specific requirements.<br />
                  &#8226; Conduct thorough discussions to clarify the scope and expectations.<br />
                  &#8226; Gather all necessary information to ensure a comprehensive understanding of the project.<br />
                </p>
              </div>
              <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6">
                <p className="font-medium text-sm text-gray-500">
                  Step 1
                </p>
              </div>
            </li>
            {/* END Event */}

            {/* Event */}
            <li className="relative lg:w-1/2 lg:pl-6 lg:ml-auto">
              <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
                <div className="w-3 h-3 bg-customOrange-500 rounded-full ring ring-customOrange-200 ring-opacity-100 ring-offset-2 dark:bg-customOrange-300 dark:ring-teal-900 dark:ring-offset-gray-900" />
              </div>
              <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
                <h4 className="font-semibold mb-2">
                  White Paper/Layout and Commercial Discussion
                </h4>
                <p className="text-sm leading-relaxed">
                  &#8226; Prepare a detailed white paper or layout outlining the proposed solution.<br />
                  &#8226; Present the white paper/layout to you for review and feedback.<br />
                  &#8226; Discuss the commercials, including project timelines, pricing, and payment terms.<br />
                  &#8226;  Ensure all parties are aligned on the project plan and commercial aspects.<br />
                </p>
              </div>
              <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pl-0 lg:pr-6">
                <p className="font-medium text-sm text-gray-500">
                  Step 2
                </p>
              </div>
            </li>
            {/* END Event */}

            {/* Event */}
            <li className="relative lg:w-1/2 lg:pr-6 lg:mr-auto">
              <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
                <div className="w-3 h-3 bg-customOrange-500 rounded-full ring ring-customOrange-200 ring-opacity-100 ring-offset-2 dark:bg-customOrange-300 dark:ring-teal-900 dark:ring-offset-gray-900" />
              </div>
              <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
                <h4 className="font-semibold mb-2">
                  Start Working on the Project
                </h4>
                <p className="text-sm leading-relaxed">
                  &#8226; Initiate the development process based on the approved white paper/layout.<br />
                  &#8226; Assign a dedicated team of skilled professionals to work on your project.<br />
                  &#8226; Adhere to industry best practices and ensure code quality and scalability.<br />
                  &#8226; Regularly communicate project progress and address any queries or concerns.<br />
                </p>
              </div>
              <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6">
                <p className="font-medium text-sm text-gray-500">
                  Step 3
                </p>
              </div>
            </li>
            {/* END Event */}

            {/* Event */}
            <li className="relative lg:w-1/2 lg:pl-6 lg:ml-auto">
              <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
                <div className="w-3 h-3 bg-customOrange-500 rounded-full ring ring-customOrange-200 ring-opacity-100 ring-offset-2 dark:bg-customOrange-300 dark:ring-teal-900 dark:ring-offset-gray-900" />
              </div>
              <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
                <h4 className="font-semibold mb-2">
                  Deliver on Time
                </h4>
                <p className="text-sm leading-relaxed">
                  &#8226; Monitor project timelines and milestones to ensure timely delivery.<br />
                  &#8226; Conduct rigorous testing and quality assurance to ensure a bug-free solution.<br />
                  &#8226; Provide regular updates on the project status and involve you in the testing phase.<br />
                  &#8226; Deliver the completed project on time, meeting all agreed-upon requirements.<br />
                </p>
              </div>
              <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pl-0 lg:pr-6">
                <p className="font-medium text-sm text-gray-500">
                  Step 4
                </p>
              </div>
            </li>
            {/* END Event */}
          </ul>
          {/* END Timeline */}
        </div>
        {/* END Timeline: Centered with Extra Info */}
      </div>
    </>
  )
}
