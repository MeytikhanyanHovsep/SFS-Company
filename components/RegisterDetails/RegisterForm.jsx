import Image from 'next/image'
import React from 'react'
import logoImage from "@/public/logo.png"

function RegisterForm() {
    return (
        <form className='flex flex-col gap-[20px] max-w-[350px] w-[320px] items-center justify-center'>
            <h3 className='flex gap-[10px] items-center justify-center text-[35px] font-[500] tracking-[1.05px] text-[#F534DB]'>
                <span>Welcome!</span>
                <Image src={logoImage} className='w-[45px] object-contain' width={ 50 } height={ 50 } alt='' />
            </h3>
            <div className='flex w-full py-[10px] gap-[13px] px-[5px] border-[#ccc] border-b-[1px]'>
                <Image src="/registerImages/user.png" className='max-w-[17px] object-contain' width={ 50 } height={ 50 } alt='' />
                <input type='text' className='' placeholder='*name' />
            </div>
            <div>
                <Image src="/registerImages/user.png" width={ 50 } height={ 50 } alt='' />
                <input type='text' placeholder='*surname' />
            </div>
            <div>
                <Image src="/registerImages/mail.png" width={ 50 } height={ 50 } alt='' />
                <input type='text' placeholder='*email address' />
            </div>
            <div>
                <Image src="/registerImages/phone.png" width={ 50 } height={ 50 } alt='' />
                <input type='text' placeholder='*phone number' />
            </div>
            <div>
                <Image src="/registerImages/padlock.png" width={ 50 } height={ 50 } alt='' />
                <input type='text' placeholder='*password' />
            </div>
            <button>Register</button>
        </form>
    )
}

export default RegisterForm