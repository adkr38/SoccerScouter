/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  mode:'jit',
  theme: {
    extend: {
        backgroundImage:{
            'gradient-angled':'linear-gradient(var(--gradient-angle),var(--tw-gradient-stops))'
        },
       fontFamily: {
          cmu_n: ['cmu_n', 'Arial', 'sans'],
          cmu_it: ['cmu_it', 'Arial', 'sans'],
          georgia: ['georgia', 'Arial', 'sans'],
          times_n: ['times', 'Arial', 'sans'],
          times_it: ['times_it', 'Arial', 'sans'],
          mont_n: ['mont_n', 'Arial', 'sans'],
          mont_it: ['mont_it', 'Arial', 'sans']
        }
        ,
      keyframes: {
        'fade-out-semi': {
          '0%': { opacity: '20%' },
          '100%': { opacity: '2%' },
        },

        'fade-out': {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },

        'fade-in': {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        'rise-up':{
            '0%': {transform:"scaleY(0)", "transform-origin":"bottom", filter:"invert(100%)"},
            '100%': {transform:"scaleY(1)", "transform-origin":"bottom",filter:"invert(0%)"}
        },

        'bounce-up':{
              '0%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-0.5rem)' },
              '100%': { transform: 'translateY(0) ' },
        },

        // 'soccerBall':{
        //       '0%': { transform: 'rotate(0deg)', filter:"invert(100%)" },
        //       '100%': { transform: 'rotate(360deg)', filter:"invert(0%)" },
        // }
        'soccerBall': {
          '0%': {
            transform: 'rotate(0deg)',
            filter: 'invert(100%) hue-rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(180deg)',
            filter: 'invert(50%) hue-rotate(90deg)'
          },
          '100%': {
            transform: 'rotate(360deg)',
            filter: 'invert(0%) hue-rotate(180deg)'
          }
        },
        'blurUp':{
            '0%':{
                filter:'blur(0rem)'
            },

            '50%':{
                filter:'blur(0.5rem)'
            },
            '100%':{
                filter:'blur(0rem)'
            }
        }

    },
      animation: {
        'fade-out-semi': 'fade-out-semi 2.5s ease-in-out',
        'fade-out': 'fade-out 1s ease-in-out',
        'fade-in': 'fade-in 1s ease-in-out',
        'moving-bg': 'moving-bg 10s linear infinite',
        'rise-up': 'rise-up 1s forwards',
        'bounce-up': 'bounce-up 1s linear 0.5s',
        'soccerBall': 'soccerBall 1.5s linear',
        'blurUp': 'blurUp 1.5s linear',
      },
        colors:{
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
        }
  },
  plugins: [
  import('tailwindcss-animate')
  ]
}
}

