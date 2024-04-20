import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return(
        <nav className="flex justify-between items-center p-5 md:px-2 lg:mx-20 2xl:p-0">
            <div className="flex gap-x-5 items-center">
                <a target="_blank" href="https://t.me/bloofostercoin" className="raise ease duration-300"><Image src="/telegram.png" alt="telegram" width={90} height={75} /></a>
                <a target="_blank" href="https://dexscreener.com/base/0x12bcf75F37C790bb8FB4238520905Ae33394bb66" className="raise ease duration-300"><Image src="/dextools.png" alt="telegram" width={90} height={75} /></a>
                <a target="_blank" href="https://twitter.com/bloofostercoin" className="raise ease duration-300"><Image className="ml-1" src="/x.png" alt="telegram" width={90} height={75} /></a>
                <a target="_blank" href="https://warpcast.com/bloofoster" className="raise ease duration-300"><Image src="/w.png" alt="telegram" width={90} height={75} /></a>
            </div>
            <Link href="" className="hidden raise ease duration-300 md:block mt-3"><Image src="/buy 1.png" alt="telegram" width={150} height={75} /></Link>
        </nav>
    );
};

export default Navbar;
