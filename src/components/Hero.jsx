import { useEffect, useState } from "react"
import { heroText } from "../constants"
import { heroVideo, smallHeroVideo } from "../utils"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Hero() {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 640 ? smallHeroVideo : heroVideo)

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 640) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);

        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [])

    useGSAP(() => {
        gsap.from(['#heroText','.buying-container'], {
            y: 10,
            opacity: 0,
            duration: 1,
            delay: 1,
            ease: "linear"
        })
    }
        , [])
    return (
        <section className="w-full nav-height flex-center-col">
            <div className="w-5/6 flex-center-col gap-3 ">
                <h1 id="heroText" className="text-4xl max-md:text-3xl font-bold opacity-70 text-orange-100">{heroText[0]}</h1>
               <div className="w-10/12 max-md:w-9/12">
                 <video muted autoPlay playsInline={true} preload="auto" loop key={videoSrc} typeof="video/mp4">
                    <source src={videoSrc} />
                </video>
               </div>
            </div>
            <div className="buying-container flex-center-col gap-4">
                <div className="button-blue">Buy</div>
                <h2 className="font-bold text-md">{heroText[1]}</h2>
            </div>

        </section>
    )
}

export default Hero