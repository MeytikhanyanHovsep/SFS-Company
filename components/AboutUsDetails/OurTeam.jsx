"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';

function OurTeam({ isFull = false }) {
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
            <h5 className='text-[26px] font-[500] text-center mb-[60px]'>Our Team</h5>
            { isFull
                ? <div className='flex container justify-between gap-[50px] flex-wrap'>
                    { workers.map((elm, ind) => (
                        <div key={ ind } className='cursor-pointer flex flex-col gap-[5px]'>
                            <Image src={ `/workersImages/${ elm.image }` } className='w-[300px] object-cover h-[320px] rounded-[25px] mb-[10px]' width={ 350 } height={ 350 } alt='John Smith' />
                            <p className='text-[16px] font-[400] text-[#999999]'>{ elm.profession }</p>
                            <h4 className='text-[22px] text-[#333] font-[500]'>{ elm.firstName }</h4>
                        </div>
                    )) }
                </div>
                : <Swiper
                    slidesPerView={ 4 } centeredSlides={ false } pagination={ { clickable: true, } } modules={ [Pagination] } className="before:left-0 before:top-0 before:z-[10] px-[50px] mt-[1   50px] container h-[430px]">
                    { workers.map((elm, ind) => (
                        <SwiperSlide key={ ind } className=''>
                            <div className='flex cursor-pointer min-w-full items-center'>
                                <div className='mx-auto'>

                                    <Image src={ `/workersImages/${ elm.image }` } className='w-[300px] object-cover h-[320px] rounded-[25px]' width={ 350 } height={ 350 } alt='John Smith' />
                                    <p className='text-[16px] text-left mt-[10px] mb-[5px] font-[400] text-[#999999]'>{ elm.profession }</p>
                                    <h4 className='text-[22px] text-[#333] font-[500]'>{ elm.firstName }</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    )) }
                </Swiper>
            }
            <Image src="/designDetailsImages/teamDetail.png" alt='' className={`absolute z-[-1] bottom-[-65px] max-w-[245px] object-contain left-[-115px] ${isFull ? "translate-y-[-50%] top-[50%]" : "bottom-[-65px]"}`} width={ 250 } height={ 250 } />
        </div>
    );
}

export default OurTeam