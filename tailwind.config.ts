import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "selector",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            backgroundColor: {
                danube: {
                    "50": "#f4f8fa",
                    "100": "#e5eff4",
                    "200": "#d1e3ec",
                    "300": "#b1d2df",
                    "400": "#8cbace",
                    "500": "#70a2c1",
                    "600": "#6491b6",
                    "700": "#527aa3",
                    "800": "#476586",
                    "900": "#3d546b",
                    "950": "#283443",
                },

                darkmode: {
                    ligther: "#121416",
                    darker: "#181b20",
                },
            },
            textColor: {
                danube: {
                    "50": "#f4f8fa",
                    "100": "#e5eff4",
                    "200": "#d1e3ec",
                    "300": "#b1d2df",
                    "400": "#8cbace",
                    "500": "#70a2c1",
                    "600": "#6491b6",
                    "700": "#527aa3",
                    "800": "#476586",
                    "900": "#3d546b",
                    "950": "#283443",
                },
            },
            borderColor: {
                danube: {
                    "50": "#f4f8fa",
                    "100": "#e5eff4",
                    "200": "#d1e3ec",
                    "300": "#b1d2df",
                    "400": "#8cbace",
                    "500": "#70a2c1",
                    "600": "#6491b6",
                    "700": "#527aa3",
                    "800": "#476586",
                    "900": "#3d546b",
                    "950": "#283443",
                },

                darkmode: {
                    ligther: "#121416",
                    darker: "#181b20",
                },
            },
        },
    },
    plugins: [],
};
export default config;
