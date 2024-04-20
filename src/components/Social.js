import React from "react";
import Image from "next/image";

const Social = ({socialImg, link}) => {
    return(
        <a href={link} target="_blank" className="flex flex-col items-center raise ease duration-300">
            {/* <a target="_blank" href="https://t.me/bloofostercoin" className="raise ease duration-300"><Image src={socialImg} alt="telegram" width={140} height={75} /></a> */}
            <Image src={socialImg} width={135} height={190} alt="plant-pot" />
        </a>
    );
};

export default Social;