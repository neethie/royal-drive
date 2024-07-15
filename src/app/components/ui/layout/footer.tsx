import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="p-5 mt-10">
            <div className="p-5 flex gap-5 font-black items-center md:items-end flex-col md:flex-row">
                <Link href="/">Términos y Condiciones</Link>
                <Link href="/">Privacidad</Link>

                <nav className="flex flex-col items-center md:items-start gap-3 ">
                    <Link href="/">Home</Link>
                    <Link href="/catalog">Catalogo</Link>
                    <Link href="/contact">Contacto</Link>
                    <Link href="/about">Acerca</Link>
                </nav>
            </div>
            <div className="flex-col flex md:flex-row items-center justify-between border-t-2 pt-5 gap-2">
                <Link className="uppercase font-black text-xl" href="/">
                    Royal Drive
                </Link>
                <p className="text-center">
                    Desarrollado por MoralessJ. Todos los derechos reservados.
                </p>
                <div className="">
                    <Link href="https://github.com/MoralessJ">
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
