'use strict';

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: {
        mode: 'all',
        content: ['./src/**/*.js'],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            inset: {
                0: 0,
                auto: 'auto',
                '1/2': '50%',
            },
        },
    },
    variants: {
        opacity: ['disabled'],
        cursor: ['disabled'],
    },
    plugins: [require('@tailwindcss/ui')],
};
