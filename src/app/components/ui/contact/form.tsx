import { Button } from "../utils";
import { InputForm } from "./inputForm";

export function Form() {
    return (
        <form className="shadow-sm p-4 rounded-2xl w-3/4">
            <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase">Información</h3>
                <div className="grid grid-cols-2 gap-2">
                    <InputForm placeholder="Nombre" id="name" />
                    <InputForm placeholder="Teléfono" id="phone" />
                    <InputForm placeholder="Correo" id="email" end={1} />
                    <InputForm
                        placeholder="Tu mensaje"
                        id="message"
                        textarea={true}
                    />
                </div>
            </div>
            <div className="flex flex-row-reverse">
                <input
                    type="submit"
                    value="Enviar"
                    className="bg-darkmode-ligther px-5 py-2 rounded-2xl my-2 text-danube-50 text-sm w-fit transition-all hover:scale-105 cursor-pointer"
                />
            </div>
        </form>
    );
}
