// import React from 'react';
// import './CardFlipper.css';
// import eventsData from './Events/eventsData';

// const CardFlipper = () => {
//   return (
//     <div className="container mx-auto">
//       <div className="flex justify-between">
//         <div className="w-1/4">
//           <div className="relative h-96 bg-green-700 hover:transform hover:rotate-y-180 transition-all duration-500 perspective border-teal-100 border-4 w-96">
//             <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-green-700">
//               <img className="w-36 h-36" src={eventsData[0]} alt="Operative" />
//               <h3 className="text-white text-xl mt-4">OPERATIVE</h3>
//             </div>
//             <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center bg-green-700">
//               <h5 className="text-white text-xl mb-2">OPERATIVE</h5>
//               <p className="text-white text-center px-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, distinctio.</p>
//             </div>
//           </div>
//         </div>

//         <div className="w-1/4">
//           <div className="relative h-96 bg-purple-900 hover:transform hover:rotate-y-180 transition-all duration-500 perspective w-96 border-teal-100 border-4">
//             <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-purple-900">
//               <img className="w-36 h-36" src={eventsData[1]} alt="Rehabilitation" />
//               <h3 className="text-white text-xl mt-4">REHABILITATION</h3>
//             </div>
//             <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center bg-purple-900">
//               <h5 className="text-white text-xl mb-2">REHABILITATION</h5>
//               <p className="text-white text-center px-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, distinctio.</p>
//             </div>
//           </div>
//         </div>

//         <div className="w-1/4">
//           <div className="relative h-96 bg-green-700 hover:transform hover:rotate-y-180 transition-all duration-500 perspective">
//             <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-green-700">
//               <img className="w-36 h-36" src="https://rightphysio.com/images/our-services/Post-pre-operative.svg" alt="Elderly Rehab" />
//               <h3 className="text-white text-xl mt-4">ELDERLY REHAB</h3>
//             </div>
//             <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center bg-green-700">
//               <h5 className="text-white text-xl mb-2">ELDERLY REHAB</h5>
//               <p className="text-white text-center px-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, distinctio.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardFlipper;

import React, { useState } from 'react';
import './CardFlipper.css'; // We'll use custom styles for 3D flipping
import eventsData from './Events/eventsData';

// <div className="w-80 h-80 perspective">
//   <div className="relative w-full h-full transform-style preserve-3d transition-transform duration-700 hover:rotate-y-180">
//     {/* Front Side */}
//     <div className="absolute w-full h-full bg-green-500 backface-hidden flex flex-col items-center justify-center">
//       <img
//         className="w-32 h-32"
//         src={eventsData[0].image}
//         alt="Avatar"
//       />
//       <h3 className="text-white text-lg mt-4">OPERATIVE</h3>
//     </div>

//     {/* Back Side */}
//     <div className="absolute w-full h-full bg-green-700 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-4">
//       <h5 className="text-white text-lg mb-2">OPERATIVE</h5>
//       <p className="text-white text-sm text-center">
//         {eventsData[0].description}
//       </p>
//     </div>
//   </div>
// </div>

//code 2
// const CardFlipper = () => {
//   return (
//     <div className="flex flex-wrap justify-center items-center gap-6 p-6">
//       {eventsData.map((service, index) => (
//         <div key={index} className="flip-card w-64 h-80">
//           <div className="flip-card-inner">
//             {/* Front Side */}
//             <div className="flip-card-front bg-teal-400 p-4 flex flex-col items-center justify-center h-full rounded-lg">
//               <img src={service.image} alt={service.modaldescription} className="w-48 h-48 mb-4 max-h-max border-black border-4" />
//               <h3 className="text-black text-xl font-bold uppercase">{service.title}</h3>
//             </div>
//             {/* Back Side */}
//             <div className="flip-card-back bg-teal-400 p-4 flex flex-col items-center justify-center h-full rounded-lg">
//               <h5 className="text-black text-lg font-bold">{service.title}</h5>
//               <p className="text-black text-center mt-2">
//                 {service.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardFlipper;

const CardFlipper = () => {
  const required=[0,2,5,7]
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-6">
      {eventsData
        .filter((_, index) => required.includes(index))
        .map((service, index) => (
        <div
          key={index}
          className="flip-card w-full sm:w-64 h-96 sm:h-80 max-w-xs" // Adjust for responsiveness
        >
          <div className="flip-card-inner">
            {/* Front Side */}
            <div className="flip-card-front bg-teal-400 p-4 flex flex-col items-center justify-center h-full rounded-lg">
              <img
                src={service.image}
                alt={service.modaldescription}
                className="w-40 h-40 sm:w-48 sm:h-48 mb-4 object-cover border-black border-4"
              />
              <h3 className="text-black text-base sm:text-xl font-bold uppercase text-center">
                {service.title}
              </h3>
            </div>
            {/* Back Side */}
            <div className="flip-card-back bg-teal-400 p-4 flex flex-col items-center justify-center h-full rounded-lg">
              <h5 className="text-black text-base sm:text-lg font-bold text-center">
                {service.title}
              </h5>
              <p className="text-black text-sm sm:text-sm text-center mt-2">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardFlipper;

