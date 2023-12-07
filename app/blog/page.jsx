"use client"
import SecondBlog from '@/components/BlogDetails/SecondBlog'
import FirstBlog from '@/components/BlogDetails/firstBlog'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Blog() {
    const [blogInd, setBlogInd] = useState(0)
    const blogs = [<FirstBlog />, <SecondBlog />]

    return <>
        <div className='relative mt-[65px]'>
            { blogs[blogInd] }
            <div className='relative container top-[50px] flex justify-end gap-[20px]'>
                <button className='align-start transition-all duration-100 w-[90px] border-[1px] py-[12px] font-[400] rounded-[5px] text-[#fff] text-center bg-[#a6c1ee] flex items-center gap-[5px] justify-center' onClick={ () => blogInd > 0 && setBlogInd(blogInd - 1) }>
                    <Image src="/blogImages/share.png" alt="" className='max-w-[15px] object-contain' width={20} height={20} />
                    <span>Share</span>
                </button>
                <button className={ `transition-all duration-100 w-[100px] border-[1px] py-[12px] font-[400] rounded-[5px] before:mr-[5px] before:content-["◄"] ${ blogInd > 0 ? "border-[#f301d2] text-center bg-[#f301d2] text-white" : "border-[#ccc] text-[#ccc] bg-white" }` } onClick={ () => blogInd > 0 && setBlogInd(blogInd - 1) }>Previous</button>
                <button className={ `transition-all duration-100 w-[100px] border-[1px] py-[12px] font-[400] rounded-[5px] after:ml-[5px] after:content-["►"] ${ blogInd < blogs.length - 1 ? "border-[#f301d2] text-center bg-[#f301d2] text-white" : "border-[#ccc] text-[#ccc] bg-white" }` } onClick={ () => blogInd < blogs.length - 1 && setBlogInd(blogInd + 1) }>Next</button>
            </div>
        </div>
    </>
}