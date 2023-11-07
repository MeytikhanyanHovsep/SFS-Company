import Image from 'next/image'
import React from 'react'

function AboutUsDetails() {
    return (
        <div className={ 'mt-[125px] w-full mb-[150px]' }>
            <h5 className='text-[26px] font-[500] text-center mb-[60px]'>Who are we?</h5>
            <div className='container flex justify-between items-center pl-[100px]'>
                <Image alt='programmer' src="/aboutUsImages/programmer.png" width={ 700 } height={ 700 } className='max-w-[500px] object-contain' />
                <div className='relative grid grid-cols-2 w-full max-w-[650px] justify-center'>
                    <div className='flex top-[20px] relative px-[17px] py-[75px] gap-[20px] items-center justify-center rounded-[15px]'>
                        <span className='text-[#96b9f3] text-[45px] font-[700]'>120+</span>
                        <p className='text-[#333] text-[18px] tracking-[0.7px] max-w-min'>Complated projects</p>
                        <Image  alt='' src="/designDetailsImages/threeCirclesDetail.png" width={ 50 } height={ 50 } className='absolute h-[50px] object-contain rotate-[180deg] top-[-20px] right-[10px]' />
                    </div>
                    <div className='flex relative top-[-70px] right-[40px] px-[17px] py-[75px] gap-[20px] items-center justify-center rounded-[15px]'>
                        <span className='text-[#96b9f3] text-[45px] font-[700]'>50+</span>
                        <p className='text-[#333] text-[18px] tracking-[0.7px] max-w-min'>Clients</p>
                    </div>
                    <div className='flex relative px-[17px] left-[40px] bottom-[-70px] py-[75px] gap-[20px] items-center justify-center rounded-[15px]'>
                        <span className='text-[#96b9f3] text-[45px] font-[700]'>9</span>
                        <p className='text-[#333] text-[18px] tracking-[0.7px] max-w-min'>Years in business</p>
                    </div>
                    <div className='flex relative bottom-[10px] right-[10px] px-[17px] py-[75px] gap-[20px] items-center justify-center rounded-[15px]'>
                        <span className='text-[#96b9f3] text-[45px] font-[700]'>100%</span>
                        <p className='text-[#333] text-[18px] tracking-[0.7px] max-w-min'>Clients satisfication</p>
                    </div>
                    <Image alt='' src="/designDetailsImages/threeCirclesDetail.png" width={ 50 } height={ 50 } className='absolute h-[50px] object-contain bottom-[10px] right-[10px]' />
                </div>
            </div>
        </div>
    )
}

export default AboutUsDetails