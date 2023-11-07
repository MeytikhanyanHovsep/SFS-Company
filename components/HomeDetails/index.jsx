import Image from 'next/image'
import React from 'react'

function HomeDetails() {
    return (
        <div className="container flex justify-between items-center gap-[20px]">
            <div className="max-w-[755px] h-full relative">
                <h3 className="text-[40px] font-[600] text-[#343434] leading-[55px]">WE OFFER IDEAS THAT RAISE YOUR BUSINESS ABOVE THE EXPECTED.</h3>
                <p className="my-[7px] text-[#666] text-[20px] font-[300] tracking-[0.8]">We built awesome products</p>
                <p className="text-[#666] text-[20px] font-[300] tracking-[0.8]">We specialize in design and developing and supporting products.</p>
                <button className="absolute tracking-[0.65] w-[200px] bottom-[-90px] px-[37px] py-[10px] text-[16px] text-[#fff] bg-[#f301d2] border-[1px] border-[#f301d2] rounded-[5px] hover:bg-transparent hover:text-[#f301d2] transition-all duration-200">Services</button>
            </div>
            <Image priority alt='' className="max-w-[535px] object-contain max-h-[450px]" src="/homeImages/main-image.png" width={ 1000 } height={ 1000 } />
        </div>
    )
}

export default HomeDetails