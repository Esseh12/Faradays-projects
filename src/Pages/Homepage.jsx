import OffcanvasNavbar from '../Components/Navbar';
// import HeroSection from '../Components/Homepage/HeroSection';
import HomeAbout from '../Components/Homepage/About';
import Testimonial from '../Components/Homepage/Testimonial';
import NewsSection from '../Components/Homepage/news';
import FAQ from '../Components/Homepage/Faq';
import Footer from '../Components/Footer';

const Homepage = () => {
	return (
		<>
			<OffcanvasNavbar />
			{/* <HeroSection /> */}
			<HomeAbout />
			<Testimonial />
			<NewsSection />
			<FAQ />
			<Footer />
		</>
	);
};
export default Homepage;
