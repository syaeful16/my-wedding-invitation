import { useRef, useState } from 'react'
import GiftCard from './components/GiftPage/GiftCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart } from 'lucide-react'

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
    const sectionGiftRef = useRef(null)
    const titleGiftRef = useRef(null)
    const cardGiftRef = useRef([])

    const cardData = [
        {
            nama: 'Syaefulloh Arnas',
            bank: 'BCA',
            no_rekening: '098687123'
        }, {
            nama: 'Widyaningsih',
            bank: 'Mandiri',
            no_rekening: '098687123'
        }
    ]

    useGSAP(() => {
        let animationGift = gsap.timeline()
        animationGift.from(titleGiftRef.current, {
            y: 250
        })
        cardGiftRef.current.forEach((cardRef, i) => {
            animationGift.to(cardRef, {
                translateX: 0,
                translateY: 0,
                rotate: 0
            }, "-=0.5")
        })


        ScrollTrigger.create({
            trigger: sectionGiftRef.current,
            start: '5% center',
            end: 'center center',
            animation: animationGift,
            scrub: 1,
            snap: {
                snapTo: 'labels',
                duration: { min: 0.2, max: 3 },
                ease: 'power4.in'
            },
            markers: true
        })
    }, [])

    return (
        <div className="bg-[#FBF9F1]">
            <section className='w-full h-screen bg-slate-300'>

            </section>
            <section ref={sectionGiftRef} className='relative flex flex-col gap-4 2xl:gap-10 justify-center items-center w-full h-auto py-10'>
                <div className="flex flex-col justify-center items-center">
                    <h1 ref={titleGiftRef} className='text-3xl lg:text-5xl 2xl:text-6xl font-safira-march lg:leading-loose'>Wedding Gift</h1>
                </div>
                <div className="w-screen flex flex-wrap py-6 overflow-x-hidden">
                    <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10 mx-auto">
                        {cardData.map((items, i) => (
                            <GiftCard key={i} ref={(el) => (cardGiftRef.current[i] = el)} data={items}/>
                        ))}
                    </div>
                </div>
            </section>
                <div className="relative flex justify-center items-center">
                    <hr className='w-3/4 border border-gray-200'/>
                    <div className="absolute mx-auto flex bg-[#FBF9F1] px-4">
                        <Heart fill='#E36387' strokeWidth={0}/>
                        <Heart fill='#E36387' strokeWidth={0}/>
                        <Heart fill='#E36387' strokeWidth={0}/>
                    </div>
                </div>
            <section className='w-full h-screen container py-20 px-10'>
                <h1 className='text-3xl lg:text-4xl 2xl:text-5xl font-safira-march leading-[60px] py-0 md:py-10 text-[#11324D]'>Ucapan dan Doa</h1>
                <p className='w-full xl:w-1/2 text-gray-500 font-creato-display font-normal'>Kami percaya bahwa doa dan ucapan dari orang-orang terkasih memberikan kekuatan dan berkah dalam kehidupan pernikahan kami.</p>
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 my-6 rounded-3xl bg-[#11324D]">
                    <div className="w-full p-8 xl:p-10">
                        <form className='flex flex-col gap-6 border border-red-500'>
                            <input type="text" name="nama" id="nama" />
                            <textarea placeholder='Hello'/>
                        </form>
                    </div>
                    <div className="w-full"></div>
                </div>
            </section>
        </div>
    )
}

export default App
