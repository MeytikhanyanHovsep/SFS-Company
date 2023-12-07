import React from 'react'
import Image from 'next/image'
import Title from '@/components/TitleText'

export default function OurWork() {
    return (
        <div className='mt-[300px] sm:mt-[50px] lg:mt-[150px] container'>
            <Title>How we work?</Title>
            <div className='flex md:grid grid-cols-3 xs:grid-cols-2 mt-[30px] justify-center md:px-[70px] px-[50px] items-center bg-gradient-to-br from-[#a6c1ee] to-[#e2eaf5] gap-[85px] lg:gap-[65px] md:gap-[30px] rounded-[26px] py-[35px] xs:px-[30px]'>
                <div className='flex flex-col items-center gap-[8px] sm:gap-[5px]'>
                    <Image alt='people' src="/homeImages/work-people.png" className='min-w-[38px] object-contain md:max-w-[70px]' width={ 100 } height={ 100 } />
                    <p className='text-[45px] sm:text-[35px] text-[#999999]'>01</p>
                    <p className='text-[18px] text-[#999999]'>Discussion</p>
                </div>
                <div className='flex xs:hidden justify-center'>
                    <span className='w-[1px] h-[115px] bg-white'></span>
                </div>
                <div className='flex flex-col items-center gap-[8px] sm:gap-[5px]'>
                    <Image alt="puzzle" src="/homeImages/work-puzzle.png" className='min-w-[70px] sm:min-w-[50px] object-contain md:max-w-[70px]' width={ 100 } height={ 100 } />
                    <p className='text-[55px] sm:text-[35px] text-[#faab8c]'>02</p>
                    <p className='text-[20px] sm:text-[18px] text-[#faab8c]'>Solution</p>
                </div>
                <div className='flex justify-center md:hidden'>
                    <span className='w-[1px] h-[115px] bg-white'></span>
                </div>
                <div className='flex flex-col items-center gap-[8px] sm:gap-[5px]'>
                    <Image alt="speech" src="/homeImages/work-speech.png" className='min-w-[52px] object-contain md:max-w-[70px]' width={ 100 } height={ 100 } />
                    <p className='text-[45px] sm:text-[35px] text-[#999999]'>03</p>
                    <p className='text-[18px] text-[#999999]'>Implementation</p>
                </div>
                <div className='flex xs:hidden justify-center'>
                    <span className='w-[1px] h-[115px] bg-white'></span>
                </div>
                <div className='flex flex-col items-center gap-[8px] sm:gap-[5px]'>
                    <Image alt="done" src="/homeImages/work-done.png" className='min-w-[52px] object-contain md:max-w-[70px]' width={ 100 } height={ 100 } />
                    <p className='text-[45px] sm:text-[35px] text-[#999999]'>04</p>
                    <p className='text-[18px] text-[#999999]'>Support</p>
                </div>
            </div>
        </div>
    )
}