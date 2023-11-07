"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Portfolio() {
    const mainPortfolio = [
        {
            image: "image-1.png",
            title: "Online Shopping Website",
            link: "",
            category: "Websites"
        },
        {
            image: "image-1.png",
            title: "UI/UX Design",
            link: "",
            category: "UI/UX Design"
        },
        {
            image: "image-1.png",
            title: "Graphic Design",
            link: "",
            category: "Graphic Design"
        },
        {
            image: "image-1.png",
            title: "Mobile Applications",
            link: "",
            category: "Mobile Applications"
        }
    ]
    const [activeCategory, setActiveCategory] = useState("")
    const categories = mainPortfolio.reduce((arr, elm) => {
        !arr.includes(elm.category) ? arr.push(elm.category) : null
        return arr
    }, [])
    return (
        <div className='mt-[65px]'>
            <h5 className='text-[26px] font-[500] text-center leading-[35px]'>Portfolio</h5>
            <div className='mb-[115px] mt-[50px] flex container justify-center gap-[45px]'>
                <button onClick={ () => setActiveCategory("") } className={ `transition-all duration-200 border-[1px] px-[30px] py-[10px] font-[400] rounded-[5px] ${ !activeCategory ? "border-[#f301d2] bg-[#f301d2] text-white" : "border-[#ccc] text-[#ccc] bg-white" }` }>All</button>
                { categories.map((elm, ind) => (
                    <button className={ `transition-all duration-200 border-[1px] px-[30px] py-[10px] font-[400] rounded-[5px] ${ activeCategory == elm ? "border-[#f301d2] bg-[#f301d2] text-white" : "border-[#ccc] text-[#ccc] bg-white" }` } onClick={ () => setActiveCategory(elm) } key={ ind }>
                        { elm }
                    </button>
                )) }
            </div>
            <div className='container grid mt-[65px] justify-between gap-y-[55px] gap-x-[35px]' style={ { gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))" } }>
                { mainPortfolio.filter(e => e.category.includes(activeCategory)).map((elm, ind) => <Link href={ elm.link } key={ ind }>
                    <Image alt={ elm.title } src={ `/portfolioImages/${ elm.image }` } width={ 500 } height={ 500 } className='object-cover max-h-[300px] rounded-[26px]' />
                    <p className='px-[5px] mt-[10px] text-[#181a25] text-[20px] font-[500]'>
                        <span>{ elm.title }</span>
                        <Image align='right' className='max-w-[20px] object-contain' alt='' src='/portfolioImages/share.png' width={ 40 } height={ 40 } />
                    </p>
                </Link>) }
            </div>
        </div>
    )
}

export default Portfolio