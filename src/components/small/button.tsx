interface ButtonProps {
    text: string;
    onClick: (e: any) => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button type="button" className="tracking-widest font-thin cursor-pointer hover:bg-[#08fdd8] px-2 py-1 my-3 max-w-[250px] text-center border border-[#08fdd8] text-[#08fdd8] hover:text-black" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
