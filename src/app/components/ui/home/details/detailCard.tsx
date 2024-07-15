type DetailCardProps = {
    title: string;
    text: string;
};

export function DetailCard({ title, text }: DetailCardProps) {
    return (
        <div className="p-2 hover:scale-[1.01] transition-all">
            <h3 className="font-black">{title}</h3>
            <p>{text}</p>
        </div>
    );
}
