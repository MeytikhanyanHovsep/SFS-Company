import Image from 'next/image'
import React from 'react'
import logoImage from "@/public/logo.png"

function RegisterForm() {
    return (
        <form className='flex flex-col gap-[20px] max-w-[350px] w-[320px] items-center justify-center'>
            <h3 className='flex gap-[10px] items-center justify-center text-[35px] font-[500] tracking-[1.05px] uppercase text-[#F534DB]'>
                <span>Welcome!</span>
                <Image src={logoImage} className='w-[45px] object-contain' width={ 50 } height={ 50 } alt='' />
            </h3>
            <div className='flex w-full py-[10px] gap-[13px] px-[5px] border-[#ccc] border-b-[1px]'>
                <Image src="/registerImages/user.png" className='max-w-[17px] object-contain' width={ 50 } height={ 50 } alt='' />
                <input type='text' className="placeholder:text-[#ccc] pr-[20px] w-full outline-none text-[#666] text-[16px] font-[300] bg-transparent" placeholder='*name' />
            </div>
            <div className='flex w-full py-[10px] gap-[13px] px-[5px] border-[#ccc] border-b-[1px]'>
                <Image src="/registerImages/user.png" className='max-w-[17px] object-contain' width={ 50 } height={ 50 } alt='' />
                <input type='text' className="placeholder:text-[#ccc] pr-[20px] w-full outline-none text-[#666] text-[16px] font-[300] bg-transparent" placeholder='*surname' />
            </div>
            <div className='flex w-full py-[10px] gap-[13px] px-[5px] border-[#ccc] border-b-[1px]'>
                <Image src="/registerImages/mail.png" className='max-w-[17px] object-contain' width={ 50 } height={ 50 } alt='' />
                <input type='text' className="placeholder:text-[#ccc] pr-[20px] w-full outline-none text-[#666] text-[16px] font-[300] bg-transparent" placeholder='*email address' />
            </div>
            <div className='flex w-full py-[10px] gap-[13px] px-[5px] border-[#ccc] border-b-[1px]'>
                <Image src="/registerImages/phone.png" className='max-w-[17px] object-contain' width={ 50 } height={ 50 } alt='' />
                <input type='text' className="placeholder:text-[#ccc] pr-[20px] w-full outline-none text-[#666] text-[16px] font-[300] bg-transparent" placeholder='*phone number' />
            </div>
            <div className='flex w-full py-[10px] gap-[13px] px-[5px] border-[#ccc] border-b-[1px]'>
                <Image src="/registerImages/padlock.png" className='max-w-[17px] object-contain' width={ 50 } height={ 50 } alt='' />
                <input type='text' className="placeholder:text-[#ccc] pr-[20px] w-full outline-none text-[#666] text-[16px] font-[300] bg-transparent" placeholder='*password number' />
            </div>
            <button className="tracking-[0.65] w-[200px] px-[37px] mt-[20px] py-[10px] text-[16px] text-[#fff] bg-[#f301d2] border-[1px] border-[#f301d2] rounded-[5px] hover:bg-transparent uppercase hover:text-[#f301d2] transition-all duration-200">Register</button>
        </form>
    )
}

export default RegisterForm