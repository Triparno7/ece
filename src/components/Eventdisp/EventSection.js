// import React from 'react'

// const Event = () => {
  //   return (
    //     <div>Event</div>
    //   )
    // }
    
    // export default Event
    
    import React, { useState } from 'react';
    import "./EventSection.css"
    import eventsData from '../Events/eventsData';
    import debounce from 'lodash.debounce';
// import {eventsData1,eventsData2} from '../Events/eventsData';


// const eventsSet1 = [
//   {
//     id: 1,
//     text: 'Alumni talkshow details',
//     // imgSrc: 'https://i.imgur.com/jLKspxt.jpeg'
//     imgSrc: eventsData[3].image,
//   },
//   {
//     id: 2,
//     text: 'Invitee details',
//     imgSrc: '/Invited.jpg',
//   },
//   {
//     id: 3,
//     text: 'Placement talks details',
//     imgSrc: '/placement.jpg',
//   },
// ];

// const eventsSet2 = [
//   {
//     id: 4,
//     text: 'PCB Workshop details',
//     imgSrc: '/PCB.jpg',
//   },
//   {
//     id: 5,
//     text: 'Freshers orientation',
//     imgSrc: '/Exordium.jpg',
//   },
//   {
//     id: 6,
//     text: 'Tech Talks',
//     imgSrc: '/tech.jpg',
//   },
// ];

//   const [activeEvent, setActiveEvent] = useState(null);
//   const [showMore, setShowMore] = useState(false);

//   const events = showMore ? eventsSet2 : eventsSet1;

//   return (
  //     <div className="event-section-container">
  //       <h1 className="event-header">
  //         <span className="highlight-text text-white">OUR</span> EVENTS
  //       </h1>
  //       <div className="event-details-container">
  //         <div className="event-details-text">
  //           <p>{activeEvent ? activeEvent.text : 'Hover over the events to see details'}</p>
  //         </div>
//         <div className="event-images-container">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className={`event-image-box ${activeEvent && activeEvent.id === event.id ? 'active' : ''}`}
//               onMouseEnter={() => setActiveEvent(event)}
//               onMouseLeave={() => setActiveEvent(null)}
//             >
//               <img
//                 src={event.imgSrc}
//                 alt={`Event ${event.id}`}
//                 className="event-image"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <button
//         className="toggle-button"
//         onClick={() => setShowMore(!showMore)}
//       >
//         {showMore ? 'Show Previous' : 'Know More'}
//       </button>
//     </div>
//   );
// };
const eventsData1=eventsData.filter(obj=>obj.id>=0 && obj.id<=4)
const eventsData2=eventsData.filter(obj=>obj.id>=5 && obj.id<=9)
// const EventSection = () => {

// const [activeEvent, setActiveEvent] = useState(null);
// const [showMore, setShowMore] = useState(false);

//   const events = showMore ? eventsData2 : eventsData1;
//   return (
//     <>
//     <div className="flex-row md:flex-row items-center justify-center bg-black border-teal-300 border-8 rounded-xl text-white p-6 flex-wrap font-sans">
//       <h1 className='text-5xl text-center font-extrabold text-teal-300 underline decoration-slate-50 decoration-8'>
//         <span className='text-white'>OUR </span>
//         EVENTS
//       </h1>
//      <div className="flex text-white p-10 justify-between">
//       <div className="flex items-center justify-center text-lg">
//         <p className='text-2xl font-medium font-sans max-w-11'>{activeEvent ? activeEvent.description : 'Hover over the events to see details'}</p>
//       </div>
//       <div className="flex gap-4 flex-wrap justify-center items-center">
//         {events.map((event) => (
//           <div
//           key={event.id}
//             className={`w-48 cursor-pointer transform transition-opacity duration-1000 relative `}
           
//             onMouseEnter={() => setActiveEvent(event)}
//             onMouseLeave={() => setActiveEvent(null)}
//           >
//             <img
//               src={event.image}
//               alt={`Event ${event.id}`}
//               className="w-full rounded-lg"
//               />
//           </div>
//         ))}
//       </div>
      
//     </div>
//     <div className="mt-4 flex justify-center">

//     <button
//         className="bg-teal-300 hover:bg-teal-700 text-stone-800 font-bold py-2 px-4 rounded-xl font-sans text-xl static"
//         onClick={() => setShowMore(!showMore)}
//         >
//         {showMore ? 'Show Previous' : 'Know More'}
//       </button>
//       </div>
//     </div>
//         </>
  
//   )
// }
// export default EventSection;


// const EventSection = () => {
//   const [activeEvent, setActiveEvent] = useState(null);
//   const [showMore, setShowMore] = useState(false);

//   const events = showMore ? eventsData2 : eventsData1;

//   const debouncedSetActiveEvent = debounce((event) => {
//     setActiveEvent(event);
//   }, 500);

//   return (
//     <>
//       <div className="flex-row md:flex-row items-center justify-center bg-black border-teal-300 border-8 rounded-xl text-white p-6 flex-wrap font-sans">
//         <h1 className="text-5xl text-center font-extrabold text-teal-300 underline decoration-slate-50 decoration-8">
//           <span className="text-white">OUR </span>
//           EVENTS
//         </h1>
//         <div className="flex text-white p-10 justify-between">
//           <div className="flex items-center justify-center text-lg">
//             {activeEvent ? (
//               <p
//                 className="text-2xl font-medium font-sans max-w-11 overflow-hidden"
//                 style={{ height: '100px' }}
//               >
//                 {activeEvent.description}
//               </p>
//             ) : (
//               <p
//                 className="text-2xl font-medium font-sans max-w-11 overflow-hidden"
//                 style={{ height: '100px' }}
//               >
//                 Hover over the events to see details
//               </p>
//             )}
//           </div>
//           <div className="flex gap-4 flex-wrap justify-center items-center">
//             {events.map((event) => (
//               <div
//                 key={event.id}
//                 className={`w-48 cursor-pointer transform transition-opacity duration-1000 relative ${
//                   activeEvent && activeEvent.id === event.id
//                     ? "opacity-100 z-20"
//                     : "opacity-50 z-10"
//                 }`}
//                 onMouseEnter={() => debouncedSetActiveEvent(event)}
//                 onMouseLeave={() => setActiveEvent(null)}
//               >
//                 <img
//                   src={event.image}
//                   alt={`Event ${event.id}`}
//                   className="w-full rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-4 flex justify-center">
//           <button
//             className="bg-teal-300 hover:bg-teal-700 text-stone-800 font-bold py-2 px-4 rounded-xl font-sans text-xl static"
//             onClick={() => setShowMore(!showMore)}
//           >
//             {showMore ? "Show Previous" : "Know More"}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EventSection;




const EventSection = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const events = showMore ? eventsData2 : eventsData1;

  const debouncedSetActiveEvent = debounce((event) => {
    setActiveEvent(event);
  }, 500);

  return (
    <>
      <div className="flex-row md:flex-row items-center justify-center bg-black border-teal-300 border-8 rounded-xl text-white p-6 flex-wrap font-sans h-[600px] w-full">
        <h1 className="text-5xl text-center font-extrabold text-teal-300 underline decoration-slate-50 decoration-8 mb-4">
          <span className="text-white">OUR </span>
          EVENTS
        </h1>
        <div className="flex text-white p-10 justify-between relative">
          <div className="flex items-center justify-center text-lg w-full">
            {activeEvent ? (
              <p
                className="text-2xl font-medium font-sans max-w-11 overflow-hidden"
                style={{ height: '100px' }}
              >
                {activeEvent.description}
              </p>
            ) : (
              <p
                className="text-2xl font-medium font-sans max-w-11 overflow-hidden"
                style={{ height: '100px' }}
              >
                Hover over the events to see details
              </p>
            )}
          </div>
          <div className="flex flex-wrap justify-center items-center absolute top-0 left-0 right-0">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`w-48 cursor-pointer transform transition-opacity duration-1000 ${
                  activeEvent && activeEvent.id === event.id
                    ? "opacity-100 z-20"
                    : "opacity-50 z-10"
                } absolute`}
                style={{
                  top: `${index * 20}px`, // Adjust the vertical stacking as needed
                  left: `${index % 2 === 0 ? '10%' : '30%'}`, // Adjust the horizontal position as needed
                }}
                onMouseEnter={() => debouncedSetActiveEvent(event)}
                onMouseLeave={() => setActiveEvent(null)}
              >
                <img
                  src={event.image}
                  alt={`Event ${event.id}`}
                  className="w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="bg-teal-300 hover:bg-teal-700 text-stone-800 font-bold py-2 px-4 rounded-xl font-sans text-xl static"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Previous" : "Know More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default EventSection;