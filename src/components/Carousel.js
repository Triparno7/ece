

import React, { useState, useEffect } from 'react';
import './Carousel.css';
import eventDataHome from './Home/eventDataHome';
import eventsData from './Events/eventsData';
const Carousel = () => {

  const [sliderItems, setSliderItems] = useState(eventsData);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    const runNextAuto = setTimeout(() => {
      handleNext();
    }, timeAutoNext);

    return () => clearTimeout(runNextAuto);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % sliderItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + sliderItems.length) % sliderItems.length);
  };

  return (
    <div className="carousel">
      <div className="list">
        <div className="item">
          <img 
            src={sliderItems[currentIndex].image} 
            alt="carousel-img" 
          />
          <p className='text-white'>{sliderItems[currentIndex].description}</p>
        </div>
      </div>
      
      <div className="thumbnail">
        {sliderItems.map((item, index) => (
          <div 
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img 
              src={item.image} 
              alt={`thumbnail-${index}`} 
            />
          </div>
        ))}
      </div>

      <button id="prev" onClick={handlePrev}>Prev</button>
      <button id="next" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;





// const Carousel = () => {
//   const [sliderItems, setSliderItems] = useState(eventsData);
  
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const timeAutoNext = 7000;

//   useEffect(() => {
//     const runNextAuto = setTimeout(() => {
//       handleNext();
//     }, timeAutoNext);

//     return () => clearTimeout(runNextAuto);
//   }, [currentIndex]);

//   const handleNext = () => {
//     setCurrentIndex((currentIndex + 1) % sliderItems.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((currentIndex - 1 + sliderItems.length) % sliderItems.length);
//   };

//   return (
//     <div className="carousel relative flex flex-col items-center">
//       <div className="flex justify-center w-full items-center space-x-4 gap-4">
//         {/* Image Section */}
//         <div className="list w-2/5 overflow-hidden max-w-full max-h-full">
//           <div className="item text-center transition duration-700">
//             <img 
//               src={sliderItems[currentIndex].image} 
//               alt="carousel-img" 
//               className="w-full object-cover rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Description Section */}
//         <div className="w-full flex items-center">
//           <div className="bg-gray-100 p-4 rounded-lg shadow-lg max-w-full">
//             <p className="text-lg font-semibold">{sliderItems[currentIndex].description}</p>
//           </div>
//         </div>
//       </div>

//       {/* Thumbnails */}
//       <div className="thumbnail flex justify-center mt-4 space-x-2">
//         {sliderItems.map((item, index) => (
//           <div 
//             key={index}
//             className={`item w-16 h-16 rounded overflow-hidden border-2 cursor-pointer ${index === currentIndex ? 'border-indigo-500' : 'border-gray-300'}`}
//             onClick={() => setCurrentIndex(index)}
//           >
//             <img 
//               src={item.image} 
//               alt={`thumbnail-${index}`} 
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Prev and Next Buttons */}
//       <button 
//         id="prev" 
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
//         onClick={handlePrev}
//       >
//         Prev
//       </button>

//       <button 
//         id="next" 
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
//         onClick={handleNext}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Carousel;


