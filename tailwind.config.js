/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
theme: {
  extend: {
    transform: ['hover'],
    rotate: {
      'y-180': 'rotateY(180deg)',
    },
    backfaceVisibility: ['hover'],
  },
},
variants: {
  extend: {
    transform: ['hover'],
  },
},
plugins: [],
}

