import React from "react";

const Button = ({text}) => {
    return(
        <button type="button" className="bg-[#247ED9] text-white font-berlinSansDemi px-4 py-2 rounded-full text-3xl raise ease duration-300">{text}</button>
    );
};

export default Button;