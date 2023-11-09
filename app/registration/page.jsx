import RegisterForm from '@/components/RegisterDetails/RegisterForm'
import Image from 'next/image'
import React from 'react'

function Registration() {
    return (
        <div className='relative w-full min-h-screen grid place-items-center'>
            <div className='container flex justify-evenly'>
                <RegisterForm />
                <Image src="/registerImages/register-main.png" alt="" width={500} height={500} />
            </div>
        </div>
    )
}

export default Registration