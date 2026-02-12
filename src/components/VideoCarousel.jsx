import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef, useState } from "react"
import { highlightsSlides } from "../constants"
import { pauseImg, playImg, replayImg } from "../utils"

gsap.registerPlugin(ScrollTrigger)

function VideoCarousel() {
    const [videoStates, setVideoStates] = useState({
        videoId: 0,
        isPlaying: false,
        isLastVideo: false,
        isEnded: false,
        isStarted: false,
    })
    const sliderRef = useRef(null)
    const spanContainerRefs = useRef([])
    const spanDivContainerRefs = useRef([])
    const videoRefs = useRef([])
    const [loadedMetaData, setLoadedMetaData] = useState([])
    const { 
        videoId,
        isPlaying,
        isLastVideo,
        isEnded,
        isStarted 
    } = videoStates

    useGSAP(() => {
        gsap.to(".video-container", {
            scrollTrigger: {
                trigger: ".video-container",
            },
            xPercent: `${-100 * videoId}`,
            ease: "power2.inOut", // show visualizer https://gsap.com/docs/v3/Eases
        })
        gsap.to(videoRefs.current[videoId], {
            scrollTrigger: {
                trigger: videoRefs.current[videoId],
                toggleActions: "restart none none none"
            },
            onComplete: () => {
                setVideoStates(prev => ({
                    ...prev,
                    isPlaying: true,
                    isStarted: true
                }))
            }
        })

    }, [videoId, isStarted])

    useEffect(() => {
        if(!isPlaying) return;
        let currentProgress = 0
        const anim = gsap.to(spanDivContainerRefs.current[videoId], {
            onUpdate: () => {
                let progress = Math.ceil(anim.progress() * 100)
                if (currentProgress != progress) {
                    currentProgress = progress
                    gsap.to(spanDivContainerRefs.current[videoId], {
                        width: window.innerWidth < 640 ? '10vw' : '6vw',
                    })
                    gsap.to(spanContainerRefs.current[videoId], {
                        width: `${currentProgress}%`,
                    })
                }
            },
            onComplete: () => {
                gsap.to( spanContainerRefs.current[videoId], {
                    width: 12,
                })
                gsap.to(spanDivContainerRefs.current[videoId], {
                    width: 12,
                })

            }
        })
        if (videoId == 0) {
            anim.restart()
        }

        const updateAnime = () => {
            anim.progress(videoRefs.current[videoId].currentTime / videoRefs.current[videoId].duration)
        }
        if (isPlaying) {
            gsap.ticker.add(updateAnime)

        } else {
            gsap.ticker.remove(updateAnime)
        }
    }, [videoId, isPlaying])

    useEffect(() => {
        if (loadedMetaData.length < highlightsSlides.length) return

        if (!isPlaying) {
            videoRefs.current[videoId].pause()
        } else {
            // videoRefs.current[videoId].currentTime = 0;
            isStarted && videoRefs.current[videoId].play()
        }
    }, [isStarted, isPlaying, videoId, loadedMetaData])

    const videoStatesHandler = (state, index) => {
        switch (state) {
            case 'video-ended':
                setVideoStates(prev => ({ ...prev, isEnded: true, videoId: index, }))
                break;
            case 'last-video':
                setVideoStates(prev => ({ ...prev, isLastVideo: true }))
                break;
            case 'video-reset':
                setVideoStates(prev => ({ ...prev, isLastVideo: false, videoId: 0 }))
                break;
            case 'video-pause-play':
                setVideoStates(prev => ({ ...prev, isPlaying: !prev.isPlaying }))
                break;
            default:
                return videoStates;
        }
    }

    return <div>
        <div id="carousel-container" className={`relative w-full h-full flex-center-col mt-8  gap-6`}>
            <div ref={sliderRef} id="slider" className="relative w-full h-full flex justify-start gap-12">
                {highlightsSlides.map((vidInfo, index) => (
                    <div key={vidInfo.id} className="video-container video-carousel_container shrink-0">
                        <div  className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black ">
                            <video
                                className="pointer-events-none"
                                onPlay={() => {
                                    setVideoStates(prev => ({ ...prev, isPlaying: true }))
                                }}
                                onEnded={() => {
                                    videoId == highlightsSlides.length - 1 ?
                                        videoStatesHandler('last-video')
                                        : videoStatesHandler('video-ended', videoId + 1)
                                }}
                                onLoadedMetadata={(el) => setLoadedMetaData(prev => [...prev, el])}
                                muted preload="auto" playsInline={true} ref={(el) => videoRefs.current[index] = el}>
                                <source src={vidInfo.video} />
                            </video>
                            <div className="absolute top-6 left-6 md:text-2xl text-xl opacity-90 font-medium flex flex-col items-start justify-start z-2">
                                {vidInfo.textLists.map((text, index) => (
                                    <div key={index}>{text}</div>
                                ))}
                            </div>
                        </div>
                    </div>))}


            </div>
        </div>
        <div className=" relative w-full h-8 ml-[30%] md:ml-[45%] mt-4 flex gap-2">
            <div className="spans-container py-3 px-5 bg-zinc-900 flex-center gap-6 rounded-2xl">
                {highlightsSlides.map((_, index) =>
                    <div key={index} ref={(el) => spanDivContainerRefs.current[index] = el} className="relative bg-zinc-800 w-3 h-3 rounded-full">
                        <span ref={(el) => spanContainerRefs.current[index] = el} className="w-3 h-3 rounded-full bg-amber-50 absolute top-0 left-0" />
                    </div>
                )}
            </div>
            <div className="control flex-center bg-zinc-900 p-2 rounded-full cursor-pointer">
                <img onClick={() => {
                    isEnded && isLastVideo ?
                        videoStatesHandler('video-reset')
                        : videoStatesHandler('video-pause-play')
                }} src={
                    isEnded && isLastVideo ? replayImg :
                        isPlaying ? pauseImg : playImg
                } alt={isEnded && isLastVideo ? "restart" :
                    isPlaying ? "pause" : "play"} width={18} height={18} />
            </div>
        </div>
    </div>
}

export default VideoCarousel

