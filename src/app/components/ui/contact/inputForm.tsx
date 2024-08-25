interface InputFormProps {
    placeholder: string;
    id: string;
    end?: number;
    textarea?: boolean;
}

export function InputForm({ placeholder, id, end, textarea }: InputFormProps) {
    return !textarea ? (
        <input
            type="text"
            placeholder={placeholder}
            id={id}
            className={`
                py-1 px-3 rounded-md uppercase text-xs border border-gray-300 ${
                    end ? "col-span-2" : ""
                }
            `}
        />
    ) : (
        <textarea
            placeholder={placeholder}
            id={id}
            className="
                py-1 px-3 rounded-md uppercase text-xs border border-gray-300 h-[100px] col-span-2
            "
        />
    );
}
