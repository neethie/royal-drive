"use client";

import Link from "next/link";
import { PiUserCircleThin } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { useUIStore } from "@/store";

export function Header() {
    const openSideMenu = useUIStore((state) => state.openSideMenu);

    return (
        <header className="flex items-center gap-2 flex-col md:flex-row justify-between p-5 text-lg">
            <div className="flex items-center gap-5 md:self">
                <Link className="uppercase font-black text-xl" href="/">
                    Royal Drive
                </Link>
                <nav className="hidden md:flex text-base  gap-3 ">
                    <Link href="/">Home</Link>
                    <Link href="/catalog">Catalogo</Link>
                    <Link href="/contact">Contacto</Link>
                    <Link href="/about">Acerca</Link>
                </nav>
            </div>
            <div className="hidden md:flex">
                <button>
                    <PiUserCircleThin className="w-5 h-5 font-black" />
                </button>
            </div>
        </header>
    );
}
