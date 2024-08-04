import React, { forwardRef, useRef, useState } from 'react'
import lineWafe from '../../assets/bg-card.jpg'

const GiftCard = forwardRef(({ data }, refCard) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(data.no_rekening)
        .then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    const type = [
        {
            bank: 'BCA',
            color: 'from-[#2A528A] to-[#5D6EC7]'
        }, {
            bank: 'SeaBank',
            color: 'from-[#F6995C] to-[#5D6EC7]'
        }, {
            bank: 'Mandiri',
            color: 'from-[#1572A1] to-[#8CC0DE]'
        }
    ]

    const bankType = type.find((item) => item.bank === data.bank);// Default color if bank is not found
    console.log(bankType.color);

    return (
        <div ref={refCard} className={`relative will-change-auto w-full h-44 lg:h-72 2xl:h-[380px] flex flex-col justify-between bg-gradient-to-br ${bankType.color} text-white rounded-lg p-6 group shadow-lg first:translate-x-32 last:-translate-x-32 first:rotate-3 last:-rotate-3`}>
            <div className="flex justify-between">
                <h4 className='text-base xl:text-2xl font-creato-display font-normal'>{data.nama}</h4>
                <h3 className='text-xl xl:text-3xl font-creato-display italic font-black'>{data.bank}</h3>
            </div>
            <div className="">
                <h1 className='text-xl xl:text-4xl font-creato-display font-medium'>{data.no_rekening}</h1>
            </div>
            <div className="absolute w-full h-full top-0 left-0 invisible group-hover:visible transition-opacity ease-out duration-500 bg-slate-900/30 rounded-lg backdrop-blur z-[5] flex justify-center items-center">
                <button className='z-10 py-2 px-4 bg-slate-800 text-white rounded' onClick={handleCopy}>{isCopied ? 'Copied!' : 'Copy Text'}</button>
            </div>
            {/* <img className='absolute top-0 left-0 w-full h-full mix-blend-color-burn object-cover rounded-lg' src={lineWafe} alt="line-wave-card"/> */}
        </div>
    )
})

export default GiftCard