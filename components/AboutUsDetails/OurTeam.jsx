"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Title from '@/components/TitleText'
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

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
        <div className='w-full mb-[150px] relative'>
            <Title>Our Team</Title>
            { isFull
                ? <div className='flex container justify-between mt-[60px] gap-[50px] flex-wrap'>
                    { workers.map((elm, ind) => (
                        <div key={ ind } className='cursor-pointer flex flex-col gap-[5px]'>
                            <Image src={ `/workersImages/${ elm.image }` } className='w-[300px] object-cover h-[320px] rounded-[25px] mb-[10px]' width={ 350 } height={ 350 } alt='John Smith' />
                            <p className='text-[16px] font-[400] text-[#999999]'>{ elm.profession }</p>
                            <h4 className='text-[22px] text-[#333] font-[500]'>{ elm.firstName }</h4>
                        </div>
                    )) }
                </div>
                : <div className='container overflow-hidden'>
                    <Swiper
                        breakpoints={ {
                            0:{
                                slidesPerView:2,
                                spaceBetween:10,
                            },
                            750: {
                                slidesPerView: 3,
                            },
                            1300: {
                                slidesPerView: 4,
                            }
                        } } slidesPerView={ 4 } spaceBetween={ 20 } centeredSlides={ false }
                        modules={ [Pagination] } className="before:left-0 before:top-0 before:z-[10] px-[50px] mt-[60px] sm:mt-[30px] overflow-hidden h-[430px] md:h-[370px]">
                        { workers.map((elm, ind) => (
                            <SwiperSlide key={ ind }>
                                <div className='flex cursor-pointer min-w-full items-center'>
                                    <div className='mx-auto'>
                                        <Image src={ `/workersImages/${ elm.image }` } className='w-[3000px] md:h-[250px] md:w-[250px] object-cover xs:max-h-[170px] h-[320px] rounded-[25px]' width={ 350 } height={ 350 } alt='John Smith' />
                                        <p className='text-[16px] text-left mt-[10px] xs:mt-[5px] xs:mb-[0px] mb-[5px] font-[400] text-[#999999]'>{ elm.profession }</p>
                                        <p className='text-[22px] text-[#333] font-[500] xs:text-[18px]'>{ elm.firstName }</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )) }
                    </Swiper>
                </div>
            }
            <Image src="/designDetailsImages/teamDetail.png" alt='' className={ `absolute z-[-1] bottom-[-65px] max-w-[245px] object-contain left-[-115px] ${ isFull ? "translate-y-[-50%] top-[50%]" : "bottom-[-65px]" }` } width={ 250 } height={ 250 } />
        </div>
    );
}