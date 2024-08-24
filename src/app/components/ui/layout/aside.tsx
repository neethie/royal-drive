"use client";

import { useUIStore } from "@/store";
import { AsideButton } from "./asideButton";
import {
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import clsx from "clsx";

export function AsideNav() {
    const isSideBarOpen = useUIStore((state) => state.isSidebarOpen);
    const closeSideMenu = useUIStore((state) => state.closeSideMenu);
    const openSideMenu = useUIStore((state) => state.openSideMenu);

    return (
        <>
            {isSideBarOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
            )}
            {isSideBarOpen && (
                <div
                    className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-sm backdrop-filter"
                    onClick={() => closeSideMenu()}
                ></div>
            )}

            <div
                className={clsx(
                    "fixed left-0 top-0 w-3/4 dark:bg-darkmode-ligther bg-danube-50 h-screen z-20 p-10 space-y-10 transition-all duration-300 transform",
                    {
                        "-translate-x-full": !isSideBarOpen,
                    }
                )}
            >
                <button
                    className={`md:hidden rounded-lg bg-gray-200 dark:bg-gray-200 dark:text-gray-950 w-12 h-12 flex justify-center items-center absolute ${
                        isSideBarOpen ? "-right-6" : "-right-10"
                    } `}
                    onClick={() =>
                        isSideBarOpen ? closeSideMenu() : openSideMenu()
                    }
                >
                    {isSideBarOpen ? (
                        <MdKeyboardDoubleArrowLeft className="font-bold text-xl" />
                    ) : (
                        <MdKeyboardDoubleArrowRight className="font-bold text-xl" />
                    )}
                </button>
                <h3 className="font-black uppercase  text-2xl">Menu</h3>
                <nav className="flex flex-col gap-3 font-semibold">
                    <AsideButton text="Home" href="/" />
                    <AsideButton text="Catálogo" href="/catalog" />
                    <AsideButton text="Contacto" href="/contact" />
                    <AsideButton text="Acerca" href="/about" />
                </nav>
            </div>
        </>
    );
}
