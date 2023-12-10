"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Title from '@/components/TitleText'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500', '400'],
})

export default function Portfolio() {
    const mainPortfolio = [
        { image: "image-1.png", title: "Online Shopping Website", link: "", category: "Websites" },
        { image: "image-1.png", title: "UI/UX Design", link: "", category: "UI/UX Design" },
        { image: "image-1.png", title: "Graphic Design", link: "", category: "Graphic Design" },
        { image: "image-1.png", title: "Mobile Applications", link: "", category: "Mobile Applications" }
    ]
    const [activeCategory, setActiveCategory] = useState("")
    const categories = [...new Set(mainPortfolio.map(e => e.category))]
    return (
        <div className='mt-[65px] sm:mt-[40px]'>
            <Title>Portfolio</Title>
            <div className='mb-[115px] md:mb-[90px] sm:mb-[40px] flex md:flex-wrap sm:gap-[15px] container justify-center gap-[45px]'>
                <button onClick={ () => setActiveCategory("") } className={ `transition-all duration-200 border-[1px] px-[30px] py-[10px] font-[400] rounded-[5px] ${ !activeCategory ? "border-[#f301d2] bg-[#f301d2] text-white" : "border-[#ccc] text-[#ccc] bg-white" } ${ roboto.className }` }>All</button>
                { categories.map((elm, ind) => (
                    <button className={ `transition-all duration-200 border-[1px] sm:px-[10px] px-[30px] py-[10px] font-[400] rounded-[5px] ${ roboto.className } ${ activeCategory == elm ? "border-[#f301d2] bg-[#f301d2] text-white" : "border-[#ccc] text-[#ccc] bg-white" }` } onClick={ () => setActiveCategory(elm) } key={ ind }>
                        { elm }
                    </button>
                )) }
            </div>
            <div className='container grid justify-between gap-y-[55px] sm:gap-y-[30px] xs:gap-y-[20px sm:gap-x-[10px] gap-x-[35px] cards-grid'>
                { mainPortfolio.filter(e => e.category.includes(activeCategory)).map((elm, ind) =>
                    <div className='flex justify-start' key={ ind }>
                        <Link href={ elm.link } key={ ind }>
                            <Image alt={ elm.title } src={ `/portfolioImages/${ elm.image }` } width={ 500 } height={ 500 } className='object-cover max-h-[300px] rounded-[26px] sm:rounded-[10px]' />
                            <p className='px-[5px] mt-[10px] text-[#181a25] flex justify-between text-[20px] sm:text-[16px] font-[500] gap-[10px]'>
                                <span className={ roboto.className }>{ elm.title }</span>
                                <Image className='max-w-[20px] sm:max-w-[15px] object-contain' alt='' src='/portfolioImages/share.png' width={ 40 } height={ 40 } />
                            </p>
                        </Link>
                    </div>) }
            </div>
        </div>
    )
}