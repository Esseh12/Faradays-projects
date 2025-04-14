import OffcanvasNavbar from '../Components/Navbar';
import HeroSection from '../Components/Homepage/Hero';
import CommunitySection from '../Components/Homepage/Community';
import SolarSlider from '../Components/Homepage/Slider';
import Services from '../Components/Homepage/Services';
import Testimonial from '../Components/Homepage/Testimonial';
import PartnersSection from '../Components/Partners';
import FAQ from '../Components/Homepage/Faq';
import Footer from '../Components/Footer';

const Homepage = () => {
	return (
		<>
			{/* Global style to prevent horizontal overflow */}
			<style
				jsx
				global>{`
				html,
				body {
					overflow-x: hidden;
					margin: 0;
					padding: 0;
				}
			`}</style>
			<OffcanvasNavbar />
			<HeroSection />
			{/* <HomeAbout /> */}
			<CommunitySection />
			<SolarSlider />
			<Services />
			<Testimonial />
			<PartnersSection />

			<FAQ />
			<Footer />
		</>
	);
};
export default Homepage;
