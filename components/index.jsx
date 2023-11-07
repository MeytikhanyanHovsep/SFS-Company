import React from 'react'
import Header from './Header'
import Footer from './Footer'
import NextTopLoader from 'nextjs-toploader'

function Components({ children }) {
    return <>
        <NextTopLoader color="#2299DD"
            initialPosition={ 0.08 }
            height={ 4 }
            showSpinner={ false }
            easing="ease"
            speed={ 200 }
            shadow="0 0 10px #2299DD, 0 0 5px #2299DD"
            zIndex={ 1000 }
            showAtBottom={ false } />
        <Header />
        { children }
        <Footer />
    </>
}

export default Components