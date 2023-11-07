import Image from 'next/image'
import React from 'react'

function OurWork() {
    return (
        <div className='mt-[300px] w-full'>
            <h5 className='text-[26px] text-[#111017] font-[500] text-center mb-[30px]'>How we work?</h5>
            <div className='container flex justify-center items-center max-w-[1150px] bg-gradient-to-br from-[#a6c1ee] to-[#e2eaf5] gap-[85px] rounded-[26px] py-[35px] w'>
                <div className='flex flex-col items-center gap-[8px]'>
                    <Image alt='people' src="/homeImages/work-people.png" className='w-[38px] object-contain' width={ 100 } height={ 100 } />
                    <p className='text-[45px] text-[#999999]'>01</p>
                    <p className='text-[18px] text-[#999999]'>Discussion</p>
                </div>
                <span className='max-w-[10px]'>
                <Image alt="orange-row" src="/homeImages/work-orange-row.png" className='h-[120px] object-contain' width={ 100 } height={ 100 } />
                </span>
                <div className='flex flex-col items-center gap-[8px]'>
                    <Image alt="puzzle" src="/homeImages/work-puzzle.png" className='w-[70px] object-contain' width={ 100 } height={ 100 } />
                    <p className='text-[55px] text-[#faab8c]'>02</p>
                    <p className='text-[20px] text-[#faab8c]'>Solution</p>
                </div>
                <span className='w-[1px] h-[115px] bg-white'></span>

                <div className='flex flex-col items-center gap-[8px]'>
                    <Image alt="speech" src="/homeImages/work-speech.png" className='w-[52px] object-contain' width={ 100 } height={ 100 } />
                    <p className='text-[45px] text-[#999999]'>03</p>
                    <p className='text-[18px] text-[#999999]'>Implementation</p>
                </div>
                <span className='w-[1px] h-[115px] bg-white'></span>
                <div className='flex flex-col items-center gap-[8px]'>
                    <Image alt="done" src="/homeImages/work-done.png" className='w-[52px] object-contain' width={ 100 } height={ 100 } />
                    <p className='text-[45px] text-[#999999]'>04</p>
                    <p className='text-[18px] text-[#999999]'>Support</p>
                </div>
            </div>
        </div>
    )
}

export default OurWork