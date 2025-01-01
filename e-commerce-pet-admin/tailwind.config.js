module.exports = {
    content: ['./src/**/*.{html,js}'],
    important: '#root',
    theme: {
        extend: {
            opacity: {
                0: '0',
            },
            width: {
                '1/6-gap-5': 'calc(16.666667% - 20px)',
                '1/4-gap-5': 'calc(25% - 20px)',
                '1/3-gap-5': 'calc(33.33333% - 20px)',
                '1/2-gap-5': 'calc(50% - 10px)',
                '1/3-gap-7': 'calc(33.3% - 28px)',
                '1/2-gap-7': 'calc(50% - 28px)',
            },
            visibility: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'hover', 'focus'],
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '10%': { transform: 'rotate(14deg)' },
                    '20%': { transform: 'rotate(-8deg)' },
                    '30%': { transform: 'rotate(14deg)' },
                    '40%': { transform: 'rotate(-4deg)' },
                    '50%': { transform: 'rotate(10.0deg)' },
                    '60%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
                showDown: {
                    '0%': { opacity: 0.1, transform: ' translateY(-100px),translateZ(-20px)' },
                    '25%': { opacity: 0.3, transform: ' translateY(-75px), translateZ(-8px)' },
                    '50%': { opacity: 0.7, transform: ' translateY(-50px), translateZ(-6px)' },
                    '75%': { opacity: 0.8, transform: ' translateY(-25px), translateZ(-4px)' },
                    '100%': { opacity: 1, transform: ' translateY(0px) , translateZ(0px)' },
                },
                showOn: {
                    '0%': { opacity: 1, transform: ' translateY(0px),translateZ(0px)' },
                    '25%': { opacity: 0.8, transform: ' translateY(-25px), translateZ(-2px)' },
                    '50%': { opacity: 0.7, transform: ' translateY(-50px), translateZ(-4px)' },
                    '75%': { opacity: 0.3, transform: ' translateY(-75px), translateZ(-6px)' },
                    '100%': { opacity: 0, transform: ' translateY(-100px) , translateZ(-20px)', display: 'none' },
                },
                blink: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                },
                closeNav: {
                    '0% ': {
                        width: '5rem',
                        opacity: ' 0',
                    },
                    '25%': {
                        width: '5rem',
                    },
                    '50%': {
                        width: '10rem',
                    },
                    '75% ': {
                        width: '15rem',
                    },
                    '100%': {
                        width: '20rem',
                        opacity: '1',
                    },
                },
                openNav: {
                    '0% ': {
                        width: '20rem',
                        opacity: ' 0',
                    },
                    '25%': {
                        width: '15rem',
                    },
                    '50%': {
                        width: '10rem',
                    },
                    '75% ': {
                        width: '7rem',
                    },
                    '100%': {
                        width: '5rem',
                        opacity: '1',
                    },
                },
            },
            animation: {
                'waving-hand': 'wave 1s ease-in-out infinite',
                'showDown-popup': 'showDown 0.2s ease-in-out ',
                'showOn-popup': 'showOn 0.2s ease-in-out forwards',
                'blink-badge': 'blink 1s infinite',
            },
        },
    },
}
