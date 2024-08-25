"use client";

import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useUIStore } from "@/store";
import clsx from "clsx";

export function Header() {
    // Sidebar State
    const openSideMenu = useUIStore((state) => state.openSideMenu);
    // Dark Mode State
    const isDarkMode = useUIStore((state) => state.isDarkMode);
    const setDarkMode = useUIStore((state) => state.setDarkMode);

    const handleDarkMode = () => {
        setDarkMode(!isDarkMode);
        isDarkMode
            ? document.body.classList.remove("dark")
            : document.body.classList.add("dark");
    };

    return (
        <header className="top-0 flex items-center gap-2 flex-col md:flex-row justify-between p-5 text-lg fixed bg-danube-50 w-full shadow-sm z-50">
            <div className="flex items-center gap-5 ">
                <Link className="uppercase font-black text-xl" href="/">
                    Royal Drive
                </Link>
            </div>
            <nav className="hidden md:flex text-base  gap-3 ">
                <Link href="/">Inicio</Link>
                <Link href="/catalog">Catalogo</Link>
                <Link href="/contact">Contacto</Link>
                <Link href="/about">Acerca</Link>
            </nav>
            <div className="flex flex-row gap-3">
                <button className="hidden md:flex">
                    <CiUser className="w-5 h-5 font-black" />
                </button>
                <button onClick={() => handleDarkMode()}>
                    <CiDark
                        className={clsx("w-5 h-5", {
                            "text-gray-950": !isDarkMode,
                            "text-gray-50": isDarkMode,
                        })}
                    />
                </button>
            </div>
        </header>
    );
}
