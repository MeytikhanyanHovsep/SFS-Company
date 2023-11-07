import DesignDetails from "@/Components/DesignDetails";
import AboutUs from "@/components/AboutUsDetails";
import OurTeam from "@/components/AboutUsDetails/OurTeam";
import HomeDetails from "@/components/HomeDetails";
import Work from "@/components/HomeDetails/OurWork";
import OurPartners from "@/components/HomeDetails/OurPartners";
import Services from "@/components/ServicesDetails/OurServices";

export default function Home() {
    return <>
        <DesignDetails />
        <HomeDetails />
        <Work />
        <AboutUs />
        <Services style="mb-[150px]" />
        <OurTeam />
        <OurPartners />
    </>
}
