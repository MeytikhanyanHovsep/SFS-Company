import Image from 'next/image'
import { Poppins, Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ["latin"],
    weight: "300"
})
const poppins = Poppins({
    subsets: ["latin"],
    weight: "600"
})

export default function ServicesDetails() {
    return (
        <div className="container flex justify-between items-center gap-[20px] md:gap-0 sm:flex-col">
            <div className="max-w-[755px] lg:pb-[50px] sm:pb-0 lg:pt-[50px] relative">
                <h3 className={ `text-[40px] xs:text-[20px] lg:text-[35px] md:text-[30px] sm:text-[25px] font-[600] text-[#343434] leading-[55px] sm:leading-[35px] md:leading-[45px] ${ poppins.className }` }>WE OFFER IDEAS THAT RAISE YOUR BUSINESS ABOVE THE EXPECTED.</h3>
                <p className={ `my-[7px] text-[#666] text-[20px] sm:text-[18px] xs:text-[16px] font-[300] tracking-[0.8] xs:leading-[23px] ${ roboto.className }` }>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <Image priority alt='' className="max-w-[535px] lg:max-w-[450px] md:max-w-[300px] sm:max-w-[500px] xs:max-w-[350px] object-contain" src="/servicesImages/main-image.png" width={ 1000 } height={ 1000 } />
        </div>
    )
}