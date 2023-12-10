import Image from 'next/image'
import Title from '@/components/TitleText'

export default function Technologies() {
    const technologies = ["react", "react", "react", "react", "react", "react", "react", "react"]
    return (
        <div className='w-full relative md:mt-[100px] xs:mt-[0px] mt-[200px] mb-[160px]'>
            <Title>Technologies</Title>
            <div className='container mt-[30px] sm:mt-[40px] flex-wrap flex justify-center items-center gap-[120px] md:gap-[70px] sm:gap-[50px] xs:gap-x-[35px] sm:gap-y-[35px]'>
                { technologies.map((elm, ind) => (
                    <Image key={ ind } alt={ elm } src={ `/servicesImages/${ elm }.png` } width={ 150 } height={ 50 } className='max-w-[140px] sm:max-w-[120px] object-contain' />
                )) }
            </div>
        </div>
    )
}