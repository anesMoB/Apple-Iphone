import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'

import VideoCarousel from "./VideoCarousel"

gsap.registerPlugin(ScrollTrigger)

function Highlights() {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#highlights",
                start: "top center",
                end: "top bottom",
            },
        },
        )
        tl.from("#title", {
            y: 10,
            opacity: 0,
            duration: 1,
            ease: "ease"
        })
        tl.from(".link-blue", {
            y: 10,
            opacity: 0,
            stagger: 0.5,
            duration: 1,
            ease: "ease",

        })
    }
        , [])
    return (
        <section id="highlights" className='relative w-screen pt-6 bg-zinc-950 '>
            <div className="max-screen-width  highlights-text-container">
                <div className="highlightsTexts relative w-full max-md:h-32 h-14 flex-between flex-wrap gap-6">
                    <div id="title" className="text-5xl text-white opacity-80 ">Get the highlights</div>
                    <div className="flex-center gap-6 text-md">
                        <div className="link-blue">
                            <p className="flex-center" >Watch the film <img src={watchImg} alt="watch" width={18} height={18} className="ml-2" />
                            </p>
                        </div>
                        <div className="link-blue">
                            <p className="flex-center" >Watch the event <img src={rightImg} alt="watch" width={8} height={8} className="ml-2" />
                            </p>
                        </div>
                    </div>
                </div>
            <VideoCarousel />
            </div>
        </section >
    )
}

export default Highlights