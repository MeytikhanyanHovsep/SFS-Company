"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Roboto } from 'next/font/google';
import Title from '@/components/TitleText'
import Image from 'next/image';
import 'swiper/css/pagination';
import 'swiper/css';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500', '400'],
})

export default function OurTeam({ isFull = false }) {
    const workers = [
        { firstName: "John Smith", profession: "Backend Developer", image: "John Smith.jpg" },
        { firstName: "John Smith", profession: "Backend Developer", image: "John Smith.jpg" },
        { firstName: "John Smith", profession: "Backend Developer", image: "John Smith.jpg" },
        { firstName: "John Smith", profession: "Backend Developer", image: "John Smith.jpg" },
        { firstName: "John Smith", profession: "Backend Developer", image: "John Smith.jpg" },
        { firstName: "John Smith", profession: "Backend Developer", image: "John Smith.jpg" },
        { firstName: "John Smith", profession: "Backend Developer", image: "John Smith.jpg" },
        { firstName: "John Smith", profession: "Backend Developer", image: "John Smith.jpg" },
    ]
    return (
        <div className='w-full mb-[150px] md:mb-[100px] sm:mb-[50px] relative'>
            <Title>Our Team</Title>
            { isFull
                ? <div className='grid gap-y-[30px] container gap-[50px] md:gap-[30px] xs:gap-x-[10px] team-grid xs:gap-y-[20px]'>
                    { workers.map((elm, ind) => (
                        <div key={ ind } className='cursor-pointer flex flex-col xs:gap-0 gap-[5px]'>
                            <Image src={ `/workersImages/${ elm.image }` } className='w-full object-cover h-[320px] xs:h-[150px] sm:h-[250px] rounded-[25px] mb-[10px]' width={ 350 } height={ 350 } alt='John Smith' />
                            <p className='text-[16px] xs:text-[14px] font-[400] text-[#999999]'>{ elm.profession }</p>
                            <h4 className='text-[22px] xs:text-[18px] text-[#333] font-[500]'>{ elm.firstName }</h4>
                        </div>
                    )) }
                </div>
                : <div className='container overflow-hidden'>
                    <Swiper
                        breakpoints={ {
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            750: {
                                slidesPerView: 3,
                            },
                            1300: {
                                slidesPerView: 4,
                            }
                        } } slidesPerView={ 4 } pagination={ { clickable: true, } } modules={ [Pagination] } spaceBetween={ 40 } centeredSlides={ false }
                        className="px-[50px] overflow-hidden md:max-h-[370px] h-[430px] xs:max-h-[280px]">
                        { workers.map((elm, ind) => (
                            <SwiperSlide key={ ind }>
                                <div className='flex cursor-pointer min-w-full items-center'>
                                    <div className='mx-auto'>
                                        <Image src={ `/workersImages/${ elm.image }` } className='w-[3000px] md:h-[250px] md:w-[250px] object-cover xs:max-h-[170px] h-[320px] rounded-[25px]' width={ 350 } height={ 350 } alt='John Smith' />
                                        <p className={ `text-[16px] text-left mt-[10px] xs:mt-[5px] xs:mb-[0px] mb-[5px] font-[400] text-[#999999] ${ roboto.className }` }>{ elm.profession }</p>
                                        <p className={ `text-[22px] text-[#333] font-[500] xs:text-[18px] ${ roboto.className }` }>{ elm.firstName }</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )) }
                    </Swiper>
                </div>
            }
            <Image src="/designDetailsImages/teamDetail.png" alt='' className={ `absolute z-[-1] bottom-[-65px] max-w-[245px] xs:max-w-[170px] xs:left-[-50px] object-contain left-[-115px] ${ isFull ? "translate-y-[-50%] top-[50%]" : "bottom-[-65px]" }` } width={ 250 } height={ 250 } />
        </div>
    );
}