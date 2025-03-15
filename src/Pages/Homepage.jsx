import OffcanvasNavbar from '../Components/Navbar';
import HeroSection from '../Components/Homepage/Hero';
import CommunitySection from '../Components/Homepage/Community';
import FeaturedProjects from '../Components/Homepage/Featured';
import Services from '../Components/Homepage/Services';
import Testimonial from '../Components/Homepage/Testimonial';
import NewsSection from '../Components/Homepage/news';
import FAQ from '../Components/Homepage/Faq';
import Footer from '../Components/Footer';

const Homepage = () => {
	return (
		<>
			<OffcanvasNavbar />
			<HeroSection />
			{/* <HomeAbout /> */}
			<CommunitySection />
			<FeaturedProjects />
			<Services />
			<Testimonial />
			<NewsSection />
			<FAQ />
			<Footer />
		</>
	);
};
export default Homepage;
