import { Form } from "@/app/components/ui/contact";

export default function Contact() {
    return (
        <main className="mx-5 space-y-10 sm:grid grid-cols-2 gap-x-3 min-h-screen items-center justify-center">
            <div className="px-5 flex flex-col">
                <h2 className="text-3xl md:text-6xl font-black">
                    Nos encanta saber de tí
                </h2>
                <p className="md:text-base text-justify">
                    Contáctanos a través de nuestra información de contacto o
                    completa el formulario, y nos comunicaremos contigo.
                    Estaremos encantados de asistirte en lo que necesites.
                </p>
            </div>
            <Form />
        </main>
    );
}
