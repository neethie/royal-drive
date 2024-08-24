import { Vehicle } from "@/app/components/ui/catalog";

export default function Catalog() {
    return (
        <main className="my-5 mx-10 space-y-5">
            <h2 className="font-black text-3xl">Todos los modelos</h2>

            <div className="grid md:grid-cols-3 gap-x-3 gap-y-3 mx-auto w-3/5">
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
