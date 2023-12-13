import Image from 'next/image'
import Title from '@/components/TitleText'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '300',
})


export default function FirstBlog() {
    const mainBlog = Array(12).map(() => null).fill({ image: 'image-1.png', title: 'Online Shopping Website' })

    return <>
        <div className='container'>
            <Title>Blog</Title>
            <p className={ `text-[#666] text-[18px] xs:text-[14px] xs:leading-[20px] sm:text-[16px] leading-[29px] font-[300] ${ roboto.className }` }>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div className='grid mt-[65px] gap-y-[55px] gap-x-[35px] cards-grid sm:gap-x-[20px] xs:gap-x-[10px] sm:gap-y-[30px] xs:gap-y-[20px]'>
                { mainBlog.map((elm, ind) => <div key={ ind }>
                    <Image alt={ elm.title } src={ `/blogImages/${ elm.image }` } width={ 500 } height={ 500 } className='object-cover sm:rounded-[10px] max-h-[290px] rounded-[26px]' />
                    <p className='px-[5px] mt-[10px] text-[#181a25] text-[20px] sm:text-[16px] font-[500]'>{ elm.title }</p>
                </div>) }
            </div>
        </div>

    </>

}