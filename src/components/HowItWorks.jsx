import  { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function HowItWorks() {
    const videoRef = useRef()
    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })
        gsap.from('.fadeIn', {
            scrollTrigger: {
                trigger: '.fadeIn',
                start: 'top 85%'
            },
            opacity: 0,
            y: 20,
            duration: 2,
            stagger: 0.3,
            ease: 'power2.inOut'
        })
        gsap.from('.fadeIn2', {
            scrollTrigger: {
                trigger: '.fadeIn',
                start: 'top 85%'
            },
            opacity: 0,
            y: 20,
            duration: 2,
            stagger: 0.3,
            ease: 'power2.inOut'
        })
        gsap.from(videoRef.current, {
            scrollTrigger: {
                trigger: videoRef.current,
                start: 'top 85%',
                toggleActions: "play pause pause restart"
            },
            onStart: () => {
                videoRef.current.play()
            }

        })
    }, [])
    return (
        <section className='mt-15 px-10'>
            <div className="max-screen-width mt-20">
                <div id="chip" className="flex-center w-full my-20">
                    <img src={chipImg} alt="chip" width={180} height={180} />
                </div>
                <div className='text-white text-5xl text-center font-semibold'>
                    <h2 className='fadeIn'>A Pro chip.</h2>
                    <h2 className='fadeIn'>A monster win for gaming</h2>
                </div>
                <p className='fadeIn text-center text-gray-500 font-semibold my-10'>It's here. The biggest redesign in the history pf Apple's GPUs</p>

                <div className="relative h-full flex-center-col overflow-hidden">
                    <div className="overflow-hidden">
                        <img
                            src={frameImg}
                            alt="frame"
                            className="bg-transparent relative z-10"
                        />

                        <div className="w-[92%]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <video className="pointer-events-none" playsInline preload="none" muted ref={videoRef}>
                                <source src={frameVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <p className="text-gray-500 font-semibold text-center mt-2">Honkai: Star Rail</p>

                </div>
                <div className='flex flex-col justify-start items-start md:flex-row  mt-8 gap-4 '>
                   <div className="flex flex-1 justify-center flex-col">
                  <p className="text-lg text-gray-500 fadeIn2">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                  </p>

                  <p className="text-lg text-gray-500 fadeIn2">
                   Mobile {' '}
                    <span className="text-white">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters.
                  </p>
                 </div>
                    <div className="flex-1 flex justify-start flex-col fadeIn2  max-md:w-full">
                        <p className="text-lg text-gray-500 ">New</p>
                        <p className="text-2xl text-white font-semibold">Pro-class GPU</p>
                        <p className="text-lg text-gray-500">with 6 cores</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HowItWorks