import Image from 'next/image'
import React from 'react'

function DesignDetails() {
    return <>
        <div className='z-[-1] absolute top-0 left-0 w-full overflow-hidden'>
            <div className='relative max-w-min'>
                <Image alt='' src="/designDetailsImages/bigDetail.png" priority width={ 900 } height={ 900 } className='relative left-0 lg:max-w-[600px] xs:max-w-[150px] xs:min-h-[350px] xs:opacity-0 sm:max-w-[300px] md:max-w-[450px] top-0 max-w-[800px] object-contain' />
                <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 200 } height={ 200 } className='relative sm:max-w-[60px] sm:top-[-10px] left-[30px] md:max-w-[100px] md:top-[-20px] top-[-50px] max-w-[145px] object-contain' />
                <div className='absolute top-[175px] xs:top-[100px] sm:top-[40px] sm:right-[30px] sm:scale-[0.7] md:top-[90px] lg:right-[50px] right-[130px]'>
                    <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='max-w-[45px] max-h-[45px] object-contain' />
                    <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='relative top-[-5px] left-[-20px] max-w-[21px] max-h-[21px] object-contain' />
                    <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='relative left-[-10px] max-w-[10px] max-h-[10px] object-contain' />
                </div>
                <div className='absolute md:hidden top-[645px] lg:top-[550px] lg:left-[800px] left-[940px]'>
                    <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='relative max-w-[10px] max-h-[10px] object-contain rotate-180' />
                    <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='relative bottom-[-5px] max-w-[21px] max-h-[21px] object-contain rotate-180' />
                    <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='absolute max-w-[45px] max-h-[45px] object-contain left-[-45px] rotate-180' />
                </div>
            </div>
            <div className='absolute right-[-12px] sm:top-[200px] sm:scale-[0.7] md:top-[400px] top-[530px]'>
                <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='absolute max-w-[40px] right-0 top-[-47px] max-h-[40px] object-contain' />
                <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 100 } height={ 100 } className='relative max-w-[85px] max-h-[85px] object-contain' />
            </div>
        </div>
    </>
}

export default DesignDetails