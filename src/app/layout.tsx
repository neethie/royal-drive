import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { Header, Footer, AsideNav } from "./components/ui/layout";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
    title: "Royal Drive",
    description: "Drive like a king.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`${pt_sans.className} text-gray-950 bg-danube-50 dark:bg-darkmode-darker dark:text-gray-50 text-sm `}
            >
                <AsideNav />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
