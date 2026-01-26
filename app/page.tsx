import Banner from "../components/Banner/Banner";
import Specilization from "../components/specilization/specilization";
import Projects from "../components/Projects/Project";
import ConstructionServices from "../components/ConstructionServices/ConstructionServices";
import Partner from "../components/Partner/Partner";
import SelectedProjects from "../components/SelectedProjects/SelectedProjects";
import Blog from "../components/Blog/Blog";
import Form from "../components/Form/Form";
import KaryaniChoose from "../components/KaryaniChoose/KaryaniChoose";
import Maintenance from "../components/Maintenance/Maintenance";
import Footer from "../components/Footer/Footer";
import { sanityService } from "../src/lib/sanity.service";
export default async function Home() {
    const posts = await sanityService.getAllPosts();
    return (
        <main>
            <Banner />
            <Specilization />
            <Projects />
            <ConstructionServices />
            <Form />
            <KaryaniChoose />
            <Partner/>
            <SelectedProjects />
            <Maintenance />
            <Blog posts={posts} />
            <Footer />
            
            
            {/* أي components تانية */}
        </main>
    );
}
