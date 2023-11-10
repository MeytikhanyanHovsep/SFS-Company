import Image from 'next/image'
import React from 'react'

function RegisterDesignDetails() {
    return (
        <div className='absolute h-full top-0 left-0 w-full z-[-1]'>
            <Image src="/designDetailsImages/registerBigDetail.png" alt="" width={ 500 } height={ 500 } className='max-w-[280px] object-contain absolute top-0 left-0' />
            <Image src="/designDetailsImages/registerGroup1.png" className=' absolute top-[70px] left-[90px] max-w-[110px] object-contain' alt="" width={ 150 } height={ 150 } />
            <Image alt='' width={ 500 } height={ 500 } src="/designDetailsImages/registerHeadDetail.png" className="absolute right-0 top-0 max-w-[310px] object-contain" />
            <Image src="/designDetailsImages/registerGroup3.png" className='absolute right-[40px] top-[65px] max-w-[40px] object-contain' alt="" width={ 150 } height={ 150 } />
            <Image src="/designDetailsImages/registerGroup2.png" className='absolute right-[40px] bottom-[95px] max-w-[135px] object-contain' alt="" width={ 150 } height={ 150 } />
        </div>
    )
}

export default RegisterDesignDetails