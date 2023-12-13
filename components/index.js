"use client"
import Footer from './Footer'
import Header from './Header'
import NextTopLoader from 'nextjs-toploader'
import { usePathname } from 'next/navigation'

function Components({ child }) {
    const blockLayout = usePathname() === "/registration"
    
    return <>
        <NextTopLoader color="#f792df"
            initialPosition={ 0.08 }
            height={ 4 }
            showSpinner={ false }
            easing="ease"
            speed={ 200 }
            shadow="0 0 10px #f792df, 0 0 5px #f792df"
            zIndex={ 1000 }
            showAtBottom={ false } />
        { !blockLayout && <Header /> }
        { child }
        { !blockLayout && <Footer /> }
    </>
}

export default Components