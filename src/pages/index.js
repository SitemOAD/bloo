import React, {useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Scroller from "@/components/Scroller";
import Social from "@/components/Social";
import { AOSInit } from "@/components/AOS";

export default function Home() {

  const [address, setAddress] = useState("0x8a5F9a6b653ecbDb406f9EB5F0C8dDba10919Aec");

  return (
    <div className="">
      <AOSInit />
      <div className="headerBG relative z-20">
        <Navbar />
        <div className="min-h-[90vh]">
          <Image src="/title BLOO.png" width={600} height={20} alt="title" className="lg:ml-20" />
          <Image src="/hello rec.png" width={650} height={20} alt="title" className="lg:ml-20 mt-[-1rem]" />
          <a href="https://app.uniswap.org/swap?outputcurrency=0x8a5f9a6b653ecbdb406f9eb5f0c8ddba10919aec&chain=base&utm_source=dexscreener&utm_medium=app" target="_blank"><Image src="/buy asset.png" width={350} height={50} alt="buy-button" className="mt-20 3xl:mt-40 4xl:mt-60" /></a>
        </div>
      </div>
      <header data-aos="fade-up" className="flex flex-col items-center justify-between max-w-screen-2xl mx-auto px-3 mb-[-2rem] lg:px-0 lg:flex-row">
        {/* <div className="flex flex-col justify-between h-[35vh] lg:h-[45vh]">
          <div>
            <Image src="/text5 1.png" alt="bloo" width={800} height={250} />
            <p className="font-berlinSansDemi text-white text-4xl mt-4 ml-2 lg:ml-0">Hello, I’m Bloo. Do you remember me?</p>
          </div>
          <a href="" className="mt-5 lg:mt-0"><Button text="Buy $BLOO" /></a>
        </div> */}
        {/* <Image className="mt-[5rem] lg:mt-0" src="/bloo 1.png" alt="bloo" width={800} height={250} /> */}
      </header>
      {/* <Scroller /> */}
      <div className="bgMain relative z-[10]">
        <section>
          <div className="flex flex-col items-center py-60 gap-y-10 relative px-3 lg:px-0">
            <p data-aos="fade-up" className="font-berlinSansDemi text-black text-4xl">LP Burn & 0% Tax</p>
            <div data-aos="fade-up" className="p-1 pl-4 bg-[#3472A5] border-[4px] border-white rounded-full flex flex-col gap-y-2 justify-between items-center w-[100%] mb-[2rem] lg:w-[50%] md:flex-row">
              <p className="font-berlinSansDemi text-black text-sm md:text-lg lg:text-2xl bg-[#C4DBE8] p-2 rounded-xl mx-3 px-4 border-2 border-white">{address}</p>
              <div className="bg-[#fff] text-[#3472A5] font-berlinSansDemi text-xl px-10 py-4 rounded-full cursor-pointer" onClick={() => navigator.clipboard.writeText(address)}>COPY</div>
            </div>
            {/* <div data-aos="fade-up" className="absolute max-w-[300px] bottom-[-17rem] lg:max-w-[unset] lg:bottom-[-24rem]"><Image src="/bloo3.png" alt="bloo" width={400} height={500} /></div> */}
          </div>
        </section>
        <section className="mt-[5rem] lg:mt-[20rem] flex flex-col items-center">
          <Image data-aos="fade-up" src="/about 2.png" alt="about" height={170} width={760} />
            <div className="flex justify-between gap-x-40 mt-20">
              {/* <Image data-aos="fade-up" className="hidden lg:block" src="/bloo2 1.png" alt="bloo" width={500} height={700} /> */}
              <Image data-aos="fade-up" src="/blooCanvas.png" alt="bloo" width={700} height={700} />
            </div>
        </section>
      </div>
      <footer className="pt-[10rem] relative lg:pt-[15rem] footerBG">
        <div data-aos="fade-up" className="max-w-screen-2xl mx-auto">
          <p className="font-berlinSansDemi text-white text-4xl max-w-screen-lg px-3 lg:p-0">BLOO IS NOW PART OF THE FAMILY. TO MANY MORE LAUGHTER AND FUN, ALL TOGETHER.</p>
        </div>
        <div className="flex max-w-screen-2xl mx-auto justify-between mt-20">
          <div className="flex gap-x-7">
              <Social socialImg="/telegramPlant.png" link="https://t.me/bloofostercoin"/>
              <Social socialImg="/wPLant.png" link="https://warpcast.com/bloofoster"/>
              <Social socialImg="/xPlant.png" link="https://twitter.com/bloofostercoin"/>
              <Social socialImg="/dexPlant.png" link="https://dexscreener.com/base/0x12bcf75F37C790bb8FB4238520905Ae33394bb66"/>
          </div>
          <div className="hidden lg:flex"><Image src="/blooooo.png" height={0} width={250} alt="bloo" /></div>
        </div>
        {/* <Image src="/footerImg2.png" alt="grass-with-bloo" className="FooterImage relative z-10" width={0}
        height={0}
        sizes="100vw"/> */}
      </footer>
    </div>
  )
}
