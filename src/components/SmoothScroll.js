"use client"
import {ReactLenis, useLenis} from "@studio-freight/react-lenis";

function SmoothScroll({children}) {
    return (
        <ReactLenis root options={{lerp: 0.06}}>
            { children }
        </ReactLenis>
    )
}

export default SmoothScroll;