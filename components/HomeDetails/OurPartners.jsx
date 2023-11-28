import Image from 'next/image'
import React from 'react'

function OurPartners() {
    return (
        <div className='mb-[180px]'>
            <h5 className='text-[26px] font-[500] container text-center mb-[60px]'>Our Partners</h5>
            <div className='bg-[#fbfbfb] py-[25px]'>
                <div className='flex flex-wrap gap-y-[50px] justify-evenly gap-x-[150px] md:container md:gap-x-[20px]'>
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] object-contain' />
                </div>
            </div>
        </div>
    )
}

export default OurPartners