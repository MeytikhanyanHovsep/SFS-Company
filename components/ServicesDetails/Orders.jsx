import Image from 'next/image'
import React from 'react'

function Orders() {
    return (
        <div className='w-full relative mt-[200px] mb-[90px]'>
            <h5 className='text-[26px] font-[500] text-center'>Why order a website?</h5>
            <div className='container flex justify-between'>
                <Image src="/servicesImages/coding-services.png" width={ 550 } height={ 550 } className='max-w-[500px] object-contain' alt='services' />
                <div className='flex flex-col min-h-full relative justify-center gap-[60px] max-w-[715px]'>
                    <p className='text-[#333] text-[18px] leading-[32px] tracking-[0.72] font-[300]'>We believe that a great deal of passion, responsibility and professionalism in work is necessary to achieve the desired level of growth and success. We eliminate all the barriers to the industry entry and facilitate profitable development.</p>
                    <div className='flex min-h-[270px] mx-auto justify-center items-end gap-[110px] max-w-[620px] max-h-[275px]'>
                        <div className='relative h-full size bg-contain bg-center bg-no-repeat bg-[url(/designDetailsImages/circleDetail3.png)] max-h-[175px] flex items-center justify-center flex-col p-[20px]'>
                            <Image src="/servicesImages/agreement.png" width={ 55 } height={ 55 } className='max-w-[50px] object-contain' alt='agreement' />
                            <p className='text-[#337ab7] text-[30px] font-[700]'>Reliability</p>
                            <Image className='absolute z-[-1] max-w-[45px] bottom-[-5px] rotate-180 right-[-40px] object-contain' src="/designDetailsImages/servicesGroup4.png" alt='' width={ 50 } height={ 50 } />
                        </div>
                        <div className='relative max-h-[175px] self-start flex bottom-0 items-center justify-center flex-col'>
                            <div className='relative p-[15px]'>
                                <Image src="/servicesImages/insignia.png" width={ 55 } height={ 55 } className='max-w-[50px] object-contain' alt='insignia' />
                                <Image src="/designDetailsImages/circleDetail3.png" className='absolute top-0 left-0 object-contain max-w-full z-[-1]' width={ 200 } height={ 200 } alt='' />
                            </div>
                            <p className='text-[#337ab7] text-[30px] font-[700]'>Quality</p>
                            <Image className='absolute max-w-[45px] top-[-25px] z-[-1] left-[-30px] object-contain' src="/designDetailsImages/servicesGroup4.png" alt='' width={ 50 } height={ 50 } />
                        </div>
                        <div className='relative max-h-[175px] flex bottom-0 items-center justify-center flex-col pb-[10px]'>
                            <div className='relative p-[15px]'>
                                <Image src="/servicesImages/clock.png" width={ 55 } height={ 55 } className='max-w-[50px] object-contain' alt='clock' />
                                <Image src="/designDetailsImages/circleDetail3.png" className='absolute top-0 left-0 object-contain max-w-full z-[-1]' width={ 200 } height={ 200 } alt='' />
                            </div>
                            <p className='text-[#337ab7] text-[30px] font-[700]'>Efficiency</p>
                            <Image className='absolute z-[-1] max-w-[45px] bottom-[-20px] right-[-80px] object-contain' src="/designDetailsImages/servicesGroup4.png" alt='' width={ 50 } height={ 50 } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders