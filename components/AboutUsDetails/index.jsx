import Image from 'next/image'
import React from 'react'
import Title from '@/components/TitleText'

export default function AboutUsDetails() {
    return (
        <div className='mt-[125px] xs:mt-[80px] w-full mb-[150px] xs:mb-[80px]'>
            <Title>Who are we?</Title>
            <div className='container sm:flex-col sm:mt-0 flex justify-between items-center pl-[100px] overflow-hidden' >
                <Image alt='programmer' src="/aboutUsImages/programmer.png" width={ 700 } height={ 700 } className='sm:order-2 lg:max-w-[370px] max-w-[500px] sm:max-w-[300px] object-contain ' />
                <div className='relative grid grid-cols-2 w-full max-w-[650px] justify-center'>
                    <div className='flex top-[20px] relative md:static sm:flex-row md:flex-col px-[17px] md:py-[30px] py-[75px] gap-[20px] sm:gap-[10px] items-center justify-center xs:flex-col rounded-[15px]'>
                        <span className='text-[#96b9f3] text-[45px] md:text-[40px] sm:text-[30px] font-[700]'>120+</span>
                        <p className='text-[#333] text-[18px] tracking-[0.7px] max-w-min'>Complated projects</p>
                        <Image  alt='' src="/designDetailsImages/threeCirclesDetail.png" width={ 50 } height={ 50 } className='absolute h-[50px] object-contain rotate-[180deg] top-[-20px] md:top-0 md:left-[20px] right-[10px]' />
                    </div>
                    <div className='flex relative md:static sm:flex-row md:flex-col top-[-70px] right-[40px] px-[17px] md:py-[30px] py-[75px] gap-[20px] sm:gap-[10px] items-center xs:flex-col justify-center rounded-[15px]'>
                        <span className='text-[#96b9f3] text-[45px] md:text-[40px] sm:text-[30px] font-[700]'>50+</span>
                        <p className='text-[#333] text-[18px] tracking-[0.7px] max-w-min'>Clients</p>
                    </div>
                    <div className='flex relative md:static sm:flex-row xs:flex-col md:flex-col px-[17px] left-[40px] bottom-[-70px] md:py-[30px] py-[75px] gap-[20px] sm:gap-[10px] items-center justify-center rounded-[15px]'>
                        <span className='text-[#96b9f3] text-[45px] md:text-[40px] sm:text-[30px] font-[700]'>9</span>
                        <p className='text-[#333] text-[18px] tracking-[0.7px] max-w-min'>Years in business</p>
                    </div>
                    <div className='flex relative md:static sm:flex-row md:flex-col bottom-[10px] right-[10px] px-[17px] md:py-[30px] py-[75px] gap-[20px] sm:gap-[10px] items-center xs:flex-col justify-center rounded-[15px]'>
                        <span className='text-[#96b9f3] text-[45px] md:text-[40px] sm:text-[30px] font-[700]'>100%</span>
                        <p className='text-[#333] text-[18px] tracking-[0.7px] max-w-min'>Clients satisfication</p>
                    </div>
                    <Image alt='' src="/designDetailsImages/threeCirclesDetail.png" width={ 50 } height={ 50 } className='absolute h-[50px] object-contain bottom-[10px] right-[10px]' />
                </div>
            </div>
        </div>
    )
}