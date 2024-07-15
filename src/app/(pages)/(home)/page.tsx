import { Hero, Details, Action } from "@/app/components/ui/home";

export default function Home() {
    return (
        <div className="my-5 mx-10 space-y-10">
            <Hero />
            <Details />
            <Action />
        </div>
    );
}
