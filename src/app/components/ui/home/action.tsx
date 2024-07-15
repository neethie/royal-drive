import Image from "next/image";
import Link from "next/link";
import { Button } from "../utils";

export function Action() {
    return (
        <section className="p-5 flex justify-between gap-5 items-center">
            <div className="w-2/5 flex flex-col">
                <h3 className="font-black text-2xl">
                    Descubre la Experiencia Royal Drive
                </h3>
                <p>
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
