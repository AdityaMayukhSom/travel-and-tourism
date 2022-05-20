module.exports = {
    mode: "jit",
    content: ["./*.{js,jsx,ts,tsx,html}", "./html/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                vietnam: ['"Be Vietnam Pro"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
