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
        },
    },
    variants: {
        opacity: ['disabled'],
        cursor: ['disabled'],
    },
    plugins: [require('@tailwindcss/ui')],
};
