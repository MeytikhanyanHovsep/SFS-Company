import Image from 'next/image'
import React from 'react'
import Title from '@/components/TitleText'

export default function OurServices({ style }) {
    return (
        <div className={ 'w-full relative ' + style }>
            <Title>Our Services</Title>
            {/* <div className='container flex flex-col flex-wrap gap-[100px]'>
                <div className="flex justify-end items-center lg:justify-between lg:gap-[50px] lg:static gap-[85px] relative right-0">
                    <div className='flex pt-[55px] pb-[30px] flex-col max-w-[345px] bg-gradient-to-br from-[#a6c1ee] to-[#e2eaf5] justify-center border-[1px] border-[#e4eef7] rounded-[26px] gap-[12px] px-[23px] relative items-center'>
                        <Image alt='ui-ux' src="/servicesImages/ui-ux.png" className='absolute w-[110px] object-contain top-[-55px]' width={ 110 } height={ 110 } />
                        <h3 className='font-[600] text-white text-[22px]'>UI/UX Design</h3>
                        <p className='font-[500] text-white text-[16px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className='z-[-1] absolute flex gap-[3px] bottom-[-25px] left-[-35px]'>
                            <Image src="/designDetailsImages/circleDetail2.png" alt='' className='relative bottom-[-10px] max-w-[20px] object-contain' width={ 50 } height={ 50 } />
                            <Image src="/designDetailsImages/circleDetail2.png" alt='' className='relative max-w-[45px] object-contain' width={ 50 } height={ 50 } />
                        </div>
                    </div>
                    <div className='flex flex-col max-w-[345px] px-[15px] pb-[20px] pt-[35px] items-center border-[1px] border-[#e4eef7] rounded-[25px] bg-white'>
                        <div className='relative'>
                            <Image alt='globe' src="/servicesImages/globe.png" width={ 50 } height={ 50 } />
                            <Image src="/designDetailsImages/pinkCircleDetail.png" alt='' width={ 45 } height={ 45 } className='top-[-10px] right-[-10px] max-w-[40px] object-contain absolute' />
                        </div>
                        <h3 className='mt-[25px] mb-[7px] text-[22px] text-[#999]'>Web Development</h3>
                        <p className='text-[16px] text-[#999]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                    <div className='flex flex-col max-w-[345px] px-[15px] pb-[20px] pt-[35px] items-center border-[1px] border-[#e4eef7] rounded-[25px] bg-white'>
                        <div className='relative'>
                            <Image alt='mobile-phone' src="/servicesImages/mobile-phone.png" width={ 50 } height={ 50 } />
                            <Image src="/designDetailsImages/pinkCircleDetail.png" alt='' width={ 45 } height={ 45 } className='bottom-[-10px] right-[-10px] max-w-[40px] object-contain absolute' />
                        </div>
                        <h3 className='mt-[25px] mb-[7px] text-[22px] text-[#999]'>Mobile App Development</h3>
                        <p className='text-[16px] text-[#999]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                </div>
                <div className="flex justify-start lg:justify-between lg:gap-[50px] lg:static gap-[85px] relative left-0">
                    <div className='flex flex-col max-w-[345px] px-[15px] pb-[20px] pt-[35px] items-center border-[1px] border-[#e4eef7] rounded-[25px] bg-white'>
                        <div className='relative'>
                            <Image alt='graphic-design' src="/servicesImages/graphic-design.png" width={ 50 } height={ 50 } />
                            <Image src="/designDetailsImages/pinkCircleDetail.png" alt='' width={ 45 } height={ 45 } className='top-[-10px] left-[-10px] max-w-[40px] object-contain absolute' />
                        </div>
                        <h3 className='mt-[25px] mb-[7px] text-[22px] text-[#999]'>Graphic Design</h3>
                        <p className='text-[16px] text-[#999]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                    <div className='flex flex-col max-w-[345px] px-[15px] pb-[20px] pt-[35px] items-center border-[1px] border-[#e4eef7] rounded-[25px] bg-white'>
                        <div className='relative'>
                            <Image alt='quality' src="/servicesImages/quality.png" width={ 50 } height={ 50 } />
                            <Image src="/designDetailsImages/pinkCircleDetail.png" alt='' width={ 45 } height={ 45 } className='top-[-10px] right-[-10px] max-w-[40px] object-contain absolute' />
                        </div>
                        <h3 className='mt-[25px] mb-[7px] text-[22px] text-[#999]'>Quality Assurance</h3>
                        <p className='text-[16px] text-[#999]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                    <div className='flex flex-col max-w-[345px] px-[15px] pb-[20px] pt-[35px] items-center border-[1px] relative border-[#e4eef7] rounded-[25px] bg-white'>
                        <div className='relative'>
                            <Image alt='engineering' src="/servicesImages/engineering.png" width={ 50 } height={ 50 } />
                            <Image src="/designDetailsImages/pinkCircleDetail.png" alt='' width={ 45 } height={ 45 } className='bottom-[-2px] left-[-20px] max-w-[40px] object-contain absolute' />
                        </div>
                        <h3 className='mt-[25px] mb-[7px] text-[22px] text-[#999]'>QA Automation Engineering</h3>
                        <p className='text-[16px] text-[#999]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                        <Image src="/designDetailsImages/servicesGroup3.png" alt='' className='absolute top-[0px] max-w-[38px] object-contain right-[-19px]' width={ 50 } height={ 50 } />
                    </div>
                </div>
                <div className='flex justify-center gap-[85px]'>
                    <div className='flex flex-col max-w-[345px] px-[15px] pb-[20px] pt-[35px] items-center border-[1px] border-[#e4eef7] rounded-[25px] bg-white'>
                        <div className='relative'>
                            <Image alt='seo' src="/servicesImages/seo.png" width={ 50 } height={ 50 } />
                            <Image src="/designDetailsImages/pinkCircleDetail.png" alt='' width={ 45 } height={ 45 } className='top-[-10px] right-[-10px] max-w-[40px] object-contain absolute' />
                        </div>
                        <h3 className='mt-[25px] mb-[7px] text-[22px] text-[#999]'>SEO</h3>
                        <p className='text-[16px] text-[#999]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                    <div className='flex flex-col max-w-[345px] px-[15px] pb-[20px] pt-[35px] items-center border-[1px] border-[#e4eef7] rounded-[25px] bg-white'>
                        <div className='relative'>
                            <Image alt='process' src="/servicesImages/process.png" width={ 50 } height={ 50 } />
                            <Image src="/designDetailsImages/pinkCircleDetail.png" alt='' width={ 45 } height={ 45 } className='bottom-[-5px] left-[-5px] max-w-[40px] object-contain absolute' />
                        </div>
                        <h3 className='mt-[25px] mb-[7px] text-[22px] text-[#999]'>DevOPs</h3>
                        <p className='text-[16px] text-[#999]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                </div>
            </div>
            <Image src="/designDetailsImages/servicesBigDetail.png" className='z-[-1] absolute bottom-[-100px] left-0 h-[850px] max-w-[250px]' alt='' width={ 300 } height={ 1000 } />
            <Image src="/designDetailsImages/servicesGroup1.png" alt='' className='z-[-1] absolute top-[5px] max-w-[245px] object-contain right-[-95px]' width={ 250 } height={ 250 } />
            <Image src="/designDetailsImages/servicesGroup2.png" alt='' className='z-[-1] absolute bottom-[90px] max-w-[50px] object-contain left-[180px]' width={ 70 } height={ 70 } /> */}
        </div>
    )
}