import TestimonialSection from "./TestimonialSection";

export default function Testimonials() {
  return (
    <>
      {/* Testimonials Section: Boxed Multiple Alternate */}
      <div className="bg-white" id="testimonials">
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div className="text-center">
            <h2 className="mb-3 text-3xl font-black text-black md:text-4xl lg:mx-auto lg:w-2/3 lg:leading-tight">
              What our clients say
            </h2>
            <h3 className="text-lg font-medium leading-relaxed text-gray-700 lg:mx-auto lg:w-3/5">
              Discover the Success Stories and Feedback from Our Satisfied Clients
            </h3>
          </div>
          {/* END Heading */}

          {/* Feedback */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
            <TestimonialSection
              content="Working with this development team has been a game-changer for our business. Their technical skills and professionalism are unparalleled."
              name="Alex Sader"
              designation="Web Developer"
            />

            <TestimonialSection
              content="I'm extremely impressed with the work done by this development team. They consistently deliver high-quality solutions and exceed our expectations."
              name="Emily Johnson"
              designation="Project Manager"
            />

            <TestimonialSection
              content="I highly recommend this development team for their exceptional expertise and dedication. They have been instrumental in the success of our projects."
              name="John Smith"
              designation="CEO"
            />
          </div>
          {/* END Feedback */}
        </div>
      </div>
      {/* END Testimonials Section: Boxed Multiple Alternate */}
    </>
  )
}
