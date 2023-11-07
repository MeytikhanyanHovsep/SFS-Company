import DesignDetails from '@/components/DesignDetails'
import ServicesDetails from '@/components/ServicesDetails'
import Orders from '@/components/ServicesDetails/Orders'
import OurServices from '@/components/ServicesDetails/OurServices'
import Technologies from '@/components/ServicesDetails/Technologies'
import React from 'react'

function Services() {
    return <>
        <DesignDetails />
        <ServicesDetails />
        <Orders />
        <Technologies />
        <OurServices />
    </>
}

export default Services