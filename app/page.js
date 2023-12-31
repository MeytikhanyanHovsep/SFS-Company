import AboutUs from "@/components/AboutUsDetails";
import OurTeam from "@/components/AboutUsDetails/Team";
import HomeDetails from "@/components/HomeDetails";
import Work from "@/components/HomeDetails/Work";
import OurPartners from "@/components/HomeDetails/Partners";
import Services from "@/components/ServicesDetails/OurServices";
import DesignDetails from "@/components/DesignDetails";

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
