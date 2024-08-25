import { Vehicle } from "@/app/components/ui/catalog";

export default function Catalog() {
    return (
        <main className="my-5 mx-10 space-y-5">
            <div className="">
                <h2 className="font-black text-2xl">Catálogo de autos</h2>
                <p>Explora nuestros modelos Royal Drive!</p>
            </div>

            <div className="grid md:grid-cols-4 gap-x-3 gap-y-3 mx-auto w-4/5">
                <Vehicle />
                <Vehicle />
                <Vehicle />
                <Vehicle />
                <Vehicle />
                <Vehicle />
                <Vehicle />
                <Vehicle />
            </div>
        </main>
    );
}
