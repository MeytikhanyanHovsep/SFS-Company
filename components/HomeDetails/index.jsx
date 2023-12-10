import Image from 'next/image'
import Link from 'next/link'
import { Poppins, Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "500"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: "600"
})

export default function HomeDetails() {
    return (
        <div className="container flex justify-between items-center gap-[20px] md:gap-0 sm:flex-col">
            <div className="max-w-[755px] lg:pt-[50px] flex flex-col justify-center">
                <h3 className={ `text-[40px] xs:text-[23px] lg:text-[35px] md:text-[30px] sm:text-[25px] font-[600] text-[#343434] leading-[55px] md:leading-[45px] ${ poppins.className }` }>WE OFFER IDEAS THAT RAISE YOUR BUSINESS ABOVE THE EXPECTED.</h3>
                <p className={ `my-[7px] text-[#666] text-[20px] sm:text-[18px] xs:text-[16px] font-[300] tracking-[0.8] ${ roboto.className }` }>We built awesome products</p>
                <p className={ `text-[#666] text-[20px] sm:text-[18px] xs:text-[16px] font-[300] tracking-[0.8] ${ roboto.className }` }>We specialize in design and developing and supporting products.</p>
                <Link href="/services" className={ `tracking-[0.65] w-[200px] xs:w-[120px] xs:px-0 sm:w-[150px] md:mt-[20px] mt-[45px] text-center px-[37px] py-[10px] text-[18px] text-[#fff] bg-[#f301d2] border-[1px] border-[#f301d2] rounded-[5px] hover:bg-transparent hover:text-[#f301d2] transition-all duration-200 ${ roboto.className }` }>Services</Link>
            </div>
            <Image priority alt='notebook' className="max-w-[535px] sm:mt-[30px] md:max-w-[350px] sm:max-w-[450px] xs:max-w-[350px] object-contain" src="/homeImages/main-image.png" width={ 1000 } height={ 1000 } />
        </div>
    )
}