import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '500' })

export default p => <h4 className={ `text-[26px] mb-[60px] md:mb-[40px] sm:mb-[30px] xs:mb-[15px] text-[#111017] sm:text-[20px] font-[500] text-center leading-[35px] ${ poppins.className }` }>{ p.children }</h4>

