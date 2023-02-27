

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                header: "#FED046",
                myred: "#4C0000"
            },
            fontFamily: {
                king: ['King'],
                saira: ['Saira'],
                poppins: ['Poppins']
            }
        },
        boxShadow: {
            glow: '0px 0px 15px 0px rgba(254,208,70,0.99)',
            glow2: '0px 0px 30px 0px rgba(254,208,70,0.99)'

        }
    },
    plugins: [],
}
