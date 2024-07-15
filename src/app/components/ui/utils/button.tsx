import Link from "next/link";

type ButtonProps = {
    text: string;
    href: string;
};

export function Button({ text, href }: ButtonProps) {
    return (
        <Link
            className="bg-gray-950 px-5 py-2 rounded-2xl my-2 text-danube-50 text-sm w-fit transition-all hover:scale-105 "
            href={href}
        >
            {text}
        </Link>
    );
}
