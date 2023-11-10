import RegisterDesignDetails from '@/components/RegisterDetails/RegisterDesignDetails'
import RegisterForm from '@/components/RegisterDetails/RegisterForm'
import Image from 'next/image'
import React from 'react'

function Registration() {
    return (
        <div className='relative w-full min-h-screen grid place-items-center'>
            <div className='container flex justify-evenly'>
                <RegisterForm />
                <Image src="/registerImages/register-main.png" className='max-w-[640px] object-contain w-full translate-x-[10%]' alt="" width={ 500 } height={ 500 } />
            </div>
            <RegisterDesignDetails />
        </div>
    )
}

export default Registration