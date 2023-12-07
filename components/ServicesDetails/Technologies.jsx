import Image from 'next/image'
import React from 'react'
import Title from '@/components/TitleText'

export default function Technologies() {
    const technologies = ["react", "react", "react", "react", "react", "react", "react", "react"]
    return (
        <div className='w-full relative md:mt-[100px] xs:mt-[60px] mt-[200px] mb-[160px]'>
            <Title>Technologies</Title>
            <div className='container flex-wrap flex sm:mt-[40px] mt-[80px] justify-center items-center gap-[120px] md:gap-[70px] sm:gap-[50px] xs:gap-x-[20px] sm:gap-y-[35px]'>
                { technologies.map((elm, ind) => (
                    <Image key={ind} alt={elm} src={`/servicesImages/${elm}.png`} width={ 150 } height={ 50 } className='max-w-[140px] sm:max-w-[120px] object-contain' />
                )) }
            </div>
        </div>
    )
}