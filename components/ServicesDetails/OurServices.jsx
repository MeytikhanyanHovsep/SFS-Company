import Image from 'next/image'
import Title from '@/components/TitleText'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500', '400'],
})

export default function OurServices({ style }) {
    return (
        <div className={ 'w-full relative max-w-[100vw] overflow-x-hidden ' + style }>
            <Title>Our Services</Title>
            <div className='container mt-[-50px] sm:mt-0 pt-[60px] grid sm:gap-[20px] grid-cols-3 xs:max-w-max xs:grid-cols-1 gap-[100px] lg:gap-[60px] md:grid-cols-2 justify-between'>
                <div className='flex pt-[55px] xs:pb-[20px] pb-[30px] flex-col xs:max-w-[350px] bg-gradient-to-br from-[#a6c1ee] to-[#e2eaf5] justify-center border-[1px] border-[#e4eef7] rounded-[26px] gap-[12px] px-[23px] relative items-center'>
                    <Image alt='graphic-design' src="/servicesImages/graphic-design.png" className='absolute sm:max-w-[80px] w-[110px] object-contain xs:top-[-40px] top-[-55px]' width={ 110 } height={ 110 } />
                    <h3 className={ `font-[500] break-normal text-white text-[22px] sm:text-[20px] xs:text-[18px] ${ roboto.className }` }>Graphic Design</h3>
                    <p className={ `font-[500] text-white text-[16px] sm:text-[14px] ${ roboto.className }` }>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <div className='z-[-1] absolute hidden xs:flex gap-[3px] bottom-[-25px] left-[-35px]'>
                        <Image src="/designDetailsImages/circleDetail2.png" alt='' className='relative bottom-[-10px] max-w-[20px] object-contain' width={ 50 } height={ 50 } />
                        <Image src="/designDetailsImages/circleDetail2.png" alt='' className='relative max-w-[45px] object-contain' width={ 50 } height={ 50 } />
                    </div>
                </div>
                <div className='flex flex-col xs:max-w-[350px] px-[15px] xs:pb-[10px] pb-[20px] pt-[35px] xs:pt-[15px] items-center border-[1px] border-[#e4eef7] rounded-[25px] bg-white'>
                    <div className='relative'>
                        <Image alt='web-dev' className='xs:max-w-[40px]' src="/servicesImages/web-dev.png" width={ 50 } height={ 50 } />
                        <Image src="/designDetailsImages/pinkCircleDetail.png" alt='' width={ 45 } height={ 45 } className='top-[-10px] right-[-10px] max-w-[40px] object-contain absolute' />
                    </div>
                    <h3 className={ `mt-[25px] xs:mt-[15px] mb-[7px] break-normal font-[500] text-[22px] text-[#999] sm:text-[20px] xs:text-[18px] ${ roboto.className }` }>Web Development</h3>
                    <p className={ `text-[16px] font-[400] text-[#999] sm:text-[14px] ${ roboto.className }` }>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className='flex flex-col xs:max-w-[350px] px-[15px] xs:pb-[10px] pb-[20px] pt-[35px] xs:pt-[15px] items-center border-[1px] border-[#e4eef7] rounded-[25px] bg-white'>
                    <div className='relative'>
                        <Image alt='smm' className='xs:max-w-[40px]' src="/servicesImages/globe.png" width={ 50 } height={ 50 } />
                        <Image src="/designDetailsImages/pinkCircleDetail.png" alt='' width={ 45 } height={ 45 } className='bottom-[-10px] right-[-10px] max-w-[40px] object-contain absolute' />
                    </div>
                    <h3 className={ `mt-[25px] xs:mt-[15px] mb-[7px] break-normal font-[500] text-[22px] text-[#999] sm:text-[20px] xs:text-[18px] ${ roboto.className }` }>SMM</h3>
                    <p className={ `text-[16px] font-[400] text-[#999] sm:text-[14px] ${ roboto.className }` }>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
            </div>
            <Image src="/designDetailsImages/servicesBigDetail.png" className='z-[-1] absolute top-0 left-0 h-[100%] max-h-[600px] max-w-[200px] xs:hidden' alt='' width={ 300 } height={ 1000 } />
            <Image src="/designDetailsImages/servicesGroup1.png" alt='' className='z-[-1] absolute top-[5px] max-w-[245px] object-contain md:top-[50px] right-[-95px] md:right-[-50px] md:max-w-[170px]' width={ 250 } height={ 250 } />
        </div>
    )
}