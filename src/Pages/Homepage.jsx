import OffcanvasNavbar from '../Components/Navbar';
// import HeroSection from '../Components/Homepage/HeroSection';
import HomeAbout from '../Components/Homepage/About';
import NewsSection from '../Components/Homepage/news';
import FAQ from '../Components/Homepage/Faq';
import Footer from '../Components/Footer';

const Homepage = () => {
	return (
		<>
			<OffcanvasNavbar />
			{/* <HeroSection /> */}
			<HomeAbout />
			<NewsSection />
			<FAQ />
			<Footer />
		</>
	);
};
export default Homepage;
