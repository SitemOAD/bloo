import "@/styles/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import localFont from "next/font/local";
const berlinSansDemi = localFont({
  src: [
    {
      path: "../../public/fonts/customFont.woff",
      weight: "800",
      style: "bold",
    },
  ],
  variable: '--font-berlinSansDemi',
})


export default function App({ Component, pageProps }) {
  return (
    <SmoothScroll>
      <div className={`${berlinSansDemi.variable}`}>
        <Component {...pageProps} />
      </div>
    </SmoothScroll>
  )
}
