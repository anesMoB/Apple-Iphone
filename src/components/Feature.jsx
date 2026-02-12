import React, { useRef } from 'react'
import { explore1Img, explore2Img, exploreVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Feature() {
    const videoRef = useRef()
    useGSAP(()=>{
        gsap.from("#exploreTitle",{
            scrollTrigger:{
                trigger:"#exploreTitle",
                start:"top 85%",
            },
            opacity:0,
            y:40,
        })
        gsap.from(".feature",{
            scrollTrigger:{
                trigger:".feature",
                start:"top 85%",
            },
            opacity:0,
            y:40,
            stagger:0.2
        })
        
        gsap.from(videoRef.current,{
            scrollTrigger:{
                trigger:videoRef.current,
                start:"top 85%",
                toggleActions:"play pause revers restart"
            },
            onComplete:()=>{
                videoRef.current.play()
            }
        })
        gsap.from('img',{
            scrollTrigger:{
                trigger:'#featuresImgsContainer',
                start:"top 85%",
                scrub:5.5,
                toggleActions:"restart reverse restart reverse"
                
            },
            scale:1.1,
            opacity:0.7
            
        })
        gsap.from(".featuresText",{
            scrollTrigger:{
                trigger:".featuresText",
                start:"top 85%",
            },
            opacity:0,
            y:40,
            stagger:0.2
        })
        
        
    },[])
    return (
        <section className='relative'>
            <div className="max-screen-width bg-zinc-950">
                <div id='exploreTitle' className='pt-10 text-4xl lg:text-5xl opacity-75 text-white'>Explore the full story.</div>
                <div className='flex-center w-full h-[50vh] '>
                    <div className='text-5xl lg:text-6xl opacity-80 text-white font-semibold h-full flex flex-col justify-center items-start gap-8 '>
                        <h1 className='feature'>iPhone</h1>
                        <h1 className='feature '>Forged in Titanium.</h1>
                    </div>
                </div>
               <div  className='flex-center'>
                 <div className='relative w-[90%] h-[30vh] md:h-[50vh]  '>
                    <video preload='none' muted playsInline autoPlay ref={videoRef}
                    className='bg-cover'>
                        <source src={exploreVideo}/>
                    </video>
                </div>
               </div>
               <div id='featuresImgsContainer' className='flex-center max-md:flex-col '>
                 <div className='relative w-[90%] h-[30vh] md:h-[50vh]  flex-center gap-1 overflow-hidden'>
                   <div className='overflow-hidden flex-1 h-full'><img src={explore1Img} alt='Titanium' className='w-full h-full object-cover'/></div>
                   <div className='overflow-hidden flex-1 h-full'><img src={explore2Img} alt='Titanium' className='w-full h-full object-cover'/></div>    
                </div>
               </div>
               <div className='relative flex justify-center items-center max-md:mt-14 max-sm:mt-18 max-md:flex-col w-[90%] m-auto h-[30vh] leading-8 text-gray-500  gap-6'>
                <div className="featuresText flex-1  font-semibold ">
                    iPhone 15 pro is{' '}
                    <span className='text-white '>Lorem, ipsum dolor sit amet consectetur !</span>
                    <span>{' '}Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consecte Lorem, ipsum dolor sit amet consecte Facilis, possimus..</span>
                </div>
                <div className="featuresText flex-1 font-semibold">
                    iPhone 15 pro is{' '}
                    <span >Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecte Lorem, ipsum dolor sit amet consecte !</span>
                    <span className='text-white '>{' '}Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, possimus..</span>
                </div>
                
               </div>
            </div>

        </section>
    )
}

export default Feature