import Image from "next/image";
import Link from "next/link";
import { Button } from "../utils";

export function Action() {
    return (
        <section className="p-5 grid md:grid-cols-2 items-center gap-x-10">
            <div className="flex flex-col">
                <h3 className="font-black text-2xl">
                    Descubre la Experiencia Royal Drive
                </h3>
                <p className="text-justify">
                    Únete a miles de conductores satisfechos que han descubierto
                    la emoción y el confort de conducir un vehículo Royal Drive.
                    No esperes más para vivir la diferencia.
                </p>
                <Button text="Agenda una cita" href="/contact" />
            </div>
            <Image
                src="/images/home/porsche-angled.png"
                width={500}
                height={500}
                alt="Angulo"
            />
        </section>
    );
}
