"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HoverVehicleProps = {
    alt: string;
    src: string;
    newSrc: string;
};

function HoverVehicle({ alt, src, newSrc }: HoverVehicleProps) {
    const [hover, setHover] = useState(src);

    const handleEnter = () => {
        setHover(newSrc);
    };

    const handleLeave = () => {
        setHover(src);
    };

    return (
        <Image
            src={hover}
            alt={alt}
            width={200}
            height={200}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        />
    );
}

export function Vehicle() {
    return (
        <Link
            className="border border-transparent p-3 flex flex-col w-fit bg-danube-100 rounded-xl dark:bg-darkmode-ligther"
            href="/catalog/1"
        >
            <p className="font-black">Cayman Style</p>
            <HoverVehicle
                alt="Cayman Style"
                src="/images/catalog/cayman-style.png"
                newSrc="/images/catalog/cayman-style-side.png"
            />
        </Link>
    );
}
