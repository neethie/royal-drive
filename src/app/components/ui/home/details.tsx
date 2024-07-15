import Image from "next/image";
import { DetailCard } from "./details/detailCard";
import { details } from "./details/detailList";

export function Details() {
    return (
        <section className="p-5">
            <h3 className="font-black text-2xl text-center">
                Características Destacadas
            </h3>
            <div className="md:grid grid-cols-[1fr_2fr]  items-center">
                <Image
                    src="/images/home/porsche-back.png"
                    alt="Porsche back"
                    width={500}
                    height={500}
                />
                <div className="grid grid-cols-2">
                    {details.map((detail) => (
                        <DetailCard
                            key={detail.title}
                            title={detail.title}
                            text={detail.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
