'use client';

import { useEffect, useState } from 'react';
import HeroOne from './HeroOne';
// import HeroTwo from './HeroTwo';
import HeroThree from './HeroThree';

export default function HeroCarousel() {
  const heroes = [HeroOne, HeroThree];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroes.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen "> {/* Added overflow-hidden for safety */}
      
      <div className="absolute inset-0">
        {heroes.map((Hero, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Hero />
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            // className={`h-3 rounded-full transition-all duration-300 ${
            //   index === currentIndex
            //     ? 'bg-gray-900 w-10'
            //     : 'bg-gray-400 w-3 hover:bg-gray-600'
            // }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


// 'use client';

// import { useEffect, useState } from 'react';
// import HeroOne from './HeroOne';
// // import HeroTwo from './HeroTwo';
// import HeroThree from './HeroThree';

// export default function HeroCarousel() {
//   const heroes = [HeroOne, HeroThree];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % heroes.length);
//     }, 7000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen"> {/* ❌ h-screen removed */}
      
//       {heroes.map((Hero, index) => (
//         <div
//           key={index}
//           className={`transition-opacity duration-1000 ease-in-out ${
//             index === currentIndex ? 'opacity-100 block' : 'opacity-0 hidden'
//           }`}
//         >
//           <Hero />
//         </div>
//       ))}

//       {/* Dot Indicators */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//         {heroes.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`h-3 rounded-full transition-all duration-300 ${
//               index === currentIndex
//                 ? 'bg-gray-900 w-10'
//                 : 'bg-gray-400 w-3 hover:bg-gray-600'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
