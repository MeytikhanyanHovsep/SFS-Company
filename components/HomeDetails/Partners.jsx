import Image from 'next/image'
import React from 'react'
import Title from '@/components/TitleText'

export default function OurPartners() {
    return (
        <div>
            <Title>Our Partners</Title>
            <div className='w-full bg-[#fbfbfb] py-[30px]'>
                <div className='flex container flex-wrap gap-y-[60px] justify-evenly gap-x-[150px] md:container md:gap-x-[20px] xs:gap-[10px]'>
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] xs:max-w-[130px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] xs:max-w-[130px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] xs:max-w-[130px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] xs:max-w-[130px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] xs:max-w-[130px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] xs:max-w-[130px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] xs:max-w-[130px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] xs:max-w-[130px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] xs:max-w-[130px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] xs:max-w-[130px] object-contain' />
                    <Image src="/aboutUsImages/word-press.png" alt='word-press' width={ 250 } height={ 250 } className='max-w-[200px] sm:max-w-[150px] xs:max-w-[130px] object-contain' />
                </div>
            </div>
        </div>
    )
}