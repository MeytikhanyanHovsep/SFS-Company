import Image from 'next/image'
import React from 'react'

function Technologies() {
    return (
        <div className='w-full relative mt-[200px] mb-[160px]'>
            <h5 className='text-[26px] font-[500] text-center mb-[80px]'>Why order a website?</h5>
            <div className='container flex-wrap flex justify-center items-center gap-[120px]'>
                <Image alt='react' src="/servicesImages/react.png" width={150} height={50} className='max-w-[140px] object-contain' />
                <Image alt='react' src="/servicesImages/react.png" width={150} height={50} className='max-w-[140px] object-contain' />
                <Image alt='react' src="/servicesImages/react.png" width={150} height={50} className='max-w-[140px] object-contain' />
                <Image alt='react' src="/servicesImages/react.png" width={150} height={50} className='max-w-[140px] object-contain' />
                <Image alt='react' src="/servicesImages/react.png" width={150} height={50} className='max-w-[140px] object-contain' />
                <Image alt='react' src="/servicesImages/react.png" width={150} height={50} className='max-w-[140px] object-contain' />
                <Image alt='react' src="/servicesImages/react.png" width={150} height={50} className='max-w-[140px] object-contain' />
                <Image alt='react' src="/servicesImages/react.png" width={150} height={50} className='max-w-[140px] object-contain' />
                <Image alt='react' src="/servicesImages/react.png" width={150} height={50} className='max-w-[140px] object-contain' />
            </div>
        </div>
    )
}

export default Technologies