"use client";

import { useUIStore } from "@/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

type asideButtonProps = {
    text: string;
    href: string;
};

export function AsideButton({ text, href }: asideButtonProps) {
    const path = usePathname();
    const closeSideMenu = useUIStore((state) => state.closeSideMenu);
    return (
        <Link
            className={`link ${
                path === href ? "bg-gray-200 px-5 dark:text-gray-950" : ""
            } rounded-xl p-2 transition-all`}
            href={`${href}`}
            onClick={() => closeSideMenu()}
        >
            {text}
        </Link>
    );
}
