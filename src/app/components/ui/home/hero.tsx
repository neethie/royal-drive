import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Hero() {
    return (
        <main className="sm:grid grid-cols-2 gap-x-3 min-h-[80vh] items-center justify-center">
            <div className="px-5 flex flex-col z-10">
                <h1 className="text-4xl md:text-6xl font-black">
                    Eleva tu estilo, eleva tu conducción.
                </h1>
                <p className="md:text-base text-justify">
                    Explora nuestra exclusiva colección de autos de lujo. Desde
                    deportivos veloces hasta sedanes elegantes, encuentra el
                    vehículo perfecto que combina estilo, confort y tecnología
                    avanzada. En Royal Drive, te ofrecemos más que un auto, te
                    brindamos un estilo de vida lleno de lujo y sofisticación.
                </p>
                <Link
                    className="bg-gray-950 px-5 py-2 rounded-2xl my-2 text-danube-50 text-sm w-40 "
                    href="/catalog"
                >
                    Descubrir modelos
                </Link>
            </div>

            <div className="">
                <Image
                    src="/images/home/porsche-model.png"
                    alt="hero"
                    width={700}
                    height={700}
                />
            </div>
        </main>
    );
}
