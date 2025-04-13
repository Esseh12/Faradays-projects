import OffcanvasNavbar from '../Components/Navbar';
import AboutHero from '../Components/About/AboutHero';
import AboutSection from '../Components/About/AboutSection';
import Footer from '../Components/Footer';

const About = () => {
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
			<AboutHero />
			<AboutSection />
			<Footer />
		</>
	);
};
export default About;
