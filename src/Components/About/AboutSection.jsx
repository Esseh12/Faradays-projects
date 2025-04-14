import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import PartnersSection from '../Partners';
import FeaturedProjects from '../Homepage/Featured';
import avatar_one from '../../assets/Images/avatar_one.svg';
import avatar_two from '../../assets/Images/avatar_two.svg';

const AboutSection = () => {
	const [visibleStats, setVisibleStats] = useState(false);
	const [animateImage, setAnimateImage] = useState(false);
	const mapRef = useRef(null);

	// Intersection Observer for stats section
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisibleStats(true);
				}
			},
			{ threshold: 0.3 }
		);
		const statsSection = document.getElementById('stats-section');
		if (statsSection) observer.observe(statsSection);
		return () => {
			if (statsSection) observer.disconnect();
		};
	}, []);

	// Image animation trigger
	useEffect(() => {
		const imageObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setAnimateImage(true);
				}
			},
			{ threshold: 0.3 }
		);
		const imageSection = document.getElementById('hero-image');
		if (imageSection) imageObserver.observe(imageSection);
		return () => {
			if (imageSection) imageObserver.disconnect();
		};
	}, []);

	// Company achievements data
	const stats = [
		{
			value: 500,
			label: 'MW Enterprise Clients',
			icon: '⚡',
			description: 'Powering major businesses worldwide',
		},
		{
			value: 120,
			label: 'Completed Projects',
			icon: '🏗️',
			description: 'From residential to industrial scale',
		},
		{
			value: 80,
			label: 'Technical Experts',
			icon: '👩‍💻',
			description: 'Specialized in renewable technologies',
		},
		{
			value: 15,
			label: 'Industry Awards',
			icon: '🏆',
			description: 'For innovation and sustainability',
		},
	];

	// Additional stats for enhanced stats section
	const additionalStats = [
		{
			value: 32,
			label: 'CO₂ Reduction',
			suffix: 'M tons',
			description: 'Carbon emissions prevented annually',
		},
		{
			value: 98,
			label: 'Client Satisfaction',
			suffix: '%',
			description: 'Based on post-project surveys',
		},
		{
			value: 25,
			label: 'Warranty Period',
			suffix: ' years',
			description: 'Industry-leading guarantee',
		},
		{
			value: 42,
			label: 'Countries',
			suffix: '+',
			description: 'Global installation presence',
		},
	];

	// Testimonials data
	const testimonials = [
		{
			text: "SRNE's grid solutions have set new industry benchmarks in smart energy management.",
			author: 'Johnathan Blake',
			role: 'CTO, Global Energy Consortium',
			company: 'Schneider Electric',
			image: avatar_one,
		},
		{
			text: 'The precision of their photovoltaic systems revolutionized our urban infrastructure.',
			author: 'Dr. Emily Zhou',
			role: 'Director of Sustainability',
			company: 'ZTE Smart Cities',
			image: avatar_two,
		},
	];

	// Animation variants
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	// Image animation variants
	const imageAnimation = {
		hidden: { opacity: 0, scale: 0.9, rotateY: 15 },
		visible: {
			opacity: 1,
			scale: 1,
			rotateY: 0,
			transition: {
				duration: 1.2,
				ease: 'easeOut',
			},
		},
	};

	// Float animation for image
	const floatAnimation = {
		initial: { y: 0 },
		animate: {
			y: [-10, 10, -10],
			transition: {
				duration: 6,
				ease: 'easeInOut',
				repeat: Infinity,
				repeatType: 'loop',
			},
		},
	};

	// Stat counter component
	const StatCounter = ({ value, isVisible, suffix = '+' }) => {
		const [count, setCount] = useState(0);
		useEffect(() => {
			if (!isVisible) return;
			let start = 0;
			const duration = 2000;
			const increment = Math.ceil(value / (duration / 16));
			const timer = setInterval(() => {
				start += increment;
				if (start > value) {
					setCount(value);
					clearInterval(timer);
				} else {
					setCount(start);
				}
			}, 16);
			return () => clearInterval(timer);
		}, [isVisible, value]);
		return (
			<span>
				{count}
				{suffix}
			</span>
		);
	};

	return (
		<div className='about-section'>
			{/* Hero Section */}
			<section className='hero-section'>
				<div className='hero-overlay'></div>
				<Container>
					<Row className='hero-content-row'>
						<Col
							lg={6}
							md={12}
							className='hero-text-col'>
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								className='hero-text'>
								<h1>
									Powering Tomorrow with <span>Solar Innovation</span>
								</h1>
								<p>
									At SolarTech, we're more than energy providers – we're
									architects of a sustainable future. Our team of passionate
									engineers delivers cutting-edge renewable energy solutions
									worldwide.
								</p>
								<div className='hero-stats'>
									<div className='hero-stat'>
										<span className='stat-number'>15+</span>
										<span className='stat-label'>Years Experience</span>
									</div>
									<div className='hero-stat'>
										<span className='stat-number'>25k+</span>
										<span className='stat-label'>Systems Installed</span>
									</div>
								</div>
								<button className='hero-cta'>Explore Our Work</button>
							</motion.div>
						</Col>
						<Col
							lg={6}
							md={12}
							className='hero-image-col'>
							<motion.div
								id='hero-image'
								initial='hidden'
								animate={animateImage ? 'visible' : 'hidden'}
								variants={imageAnimation}
								className='hero-image-container'>
								<motion.div
									variants={floatAnimation}
									animate='animate'
									initial='initial'
									className='image-wrapper'>
									<img
										src='https://images.pexels.com/photos/19895880/pexels-photo-19895880/free-photo-of-man-standing-among-solar-panels.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
										alt='Man standing among solar panels'
										className='hero-image'
									/>
									<div className='image-overlay'>
										<div className='overlay-content'>
											<h3>Our Commitment</h3>
											<p>
												Certified sustainable solutions with industry-leading
												25-year performance guarantees.
											</p>
										</div>
									</div>
								</motion.div>
							</motion.div>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Stats Section */}
			<section
				id='stats-section'
				className='stats-section'>
				<Container>
					<div className='stats-header'>
						<motion.h2
							initial={{ opacity: 0 }}
							animate={visibleStats ? { opacity: 1 } : {}}
							transition={{ duration: 0.6 }}>
							Our Impact
						</motion.h2>
						<motion.p
							initial={{ opacity: 0 }}
							animate={visibleStats ? { opacity: 1 } : {}}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='stats-subtitle'>
							Transforming the renewable energy landscape with sustainable
							innovation and measurable results.
						</motion.p>
					</div>

					<div className='stats-container primary-stats'>
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								className='stat-card'
								initial={{ opacity: 0, y: 20 }}
								animate={visibleStats ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.5, delay: index * 0.1 }}>
								<div className='stat-icon'>{stat.icon}</div>
								<div className='stat-value'>
									<StatCounter
										value={stat.value}
										isVisible={visibleStats}
										suffix={index === 0 ? ' MW' : '+'}
									/>
								</div>
								<div className='stat-label'>{stat.label}</div>
								<div className='stat-description'>{stat.description}</div>
							</motion.div>
						))}
					</div>

					<motion.div
						className='stats-divider'
						initial={{ scaleX: 0 }}
						animate={visibleStats ? { scaleX: 1 } : {}}
						transition={{ duration: 0.8, delay: 0.6 }}
					/>

					<div className='stats-container additional-stats'>
						{additionalStats.map((stat, index) => (
							<motion.div
								key={index}
								className='stat-card secondary'
								initial={{ opacity: 0, y: 20 }}
								animate={visibleStats ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}>
								<div className='stat-value'>
									<StatCounter
										value={stat.value}
										isVisible={visibleStats}
										suffix={stat.suffix}
									/>
								</div>
								<div className='stat-label'>{stat.label}</div>
								<div className='stat-description'>{stat.description}</div>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			<FeaturedProjects />
			{/* Partners Section */}
			<PartnersSection />

			{/* Testimonials Section */}
			<section className='testimonials-section'>
				<Container>
					<h2>What Our Partners Say</h2>
					<div className='testimonials-container'>
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								className='testimonial-card'
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true, amount: 0.3 }}
								variants={{
									hidden: { opacity: 0, y: 30 },
									visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
								}}>
								<div className='quote-icon'>
									<svg
										width='32'
										height='32'
										viewBox='0 0 24 24'>
										<path
											fill='currentColor'
											d='M6.5 10c-.223 0-.437.034-.65.1-.212.067-.405.162-.578.285-.173.123-.324.266-.452.429-.128.162-.228.34-.3.53h2.98v2.924h-2.98V22H.5v-7.77c0-.855.164-1.642.495-2.363.33-.722.768-1.345 1.313-1.868.545-.523 1.18-.935 1.905-1.235.725-.3 1.478-.45 2.26-.45.568 0 1.026.09 1.372.27.347.18.625.42.835.721.21.3.367.635.47 1.006.103.371.154.772.154 1.204v.808h-2.804v-.401c0-.307-.035-.55-.11-.731-.077-.181-.194-.31-.35-.39-.156-.08-.358-.12-.608-.12zm13.5 0c-.223 0-.437.034-.65.1-.212.067-.405.162-.578.285-.173.123-.324.266-.452.429-.128.162-.228.34-.3.53h2.98v2.924h-2.98V22H14v-7.77c0-.855.164-1.642.495-2.363.33-.722.768-1.345 1.313-1.868.545-.523 1.18-.935 1.905-1.235.725-.3 1.478-.45 2.26-.45.568 0 1.026.09 1.372.27.347.18.625.42.835.721.21.3.367.635.47 1.006.103.371.154.772.154 1.204v.808h-2.804v-.401c0-.307-.035-.55-.11-.731-.077-.181-.194-.31-.35-.39-.156-.08-.358-.12-.608-.12'
										/>
									</svg>
								</div>
								<p className='testimonial-text'>{testimonial.text}</p>
								<div className='testimonial-author'>
									<div className='author-image'>
										<img
											src={testimonial.image}
											alt={testimonial.author}
										/>
									</div>
									<div className='author-info'>
										<h4>{testimonial.author}</h4>
										<p>{testimonial.role}</p>
										<span>{testimonial.company}</span>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			<style jsx>{`
				.about-section {
					--primary-color: #0062cc;
					--secondary-color: #004976;
					--accent-color: #00a3e0;
					--text-color: #333;
					--text-light: #6c757d;
					--bg-light: #f8f9fa;
					--bg-dark: #0a1929;
					--transition: all 0.3s ease;
					font-family: 'Inter', sans-serif;
					color: var(--text-color);
					line-height: 1.6;
				}

				/* Hero Section */
				.hero-section {
					position: relative;
					padding: 6rem 0;
					background-color: #0a1929;
					overflow: hidden;
					min-height: 80vh;
					display: flex;
					align-items: center;
				}
				.hero-overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: linear-gradient(
						90deg,
						rgba(0, 0, 0, 0.8) 0%,
						rgba(0, 0, 0, 0.6) 50%,
						rgba(0, 0, 0, 0.4) 100%
					);
					z-index: 1;
				}
				.hero-content-row {
					position: relative;
					z-index: 2;
				}
				.hero-text-col {
					padding-right: 2rem;
				}
				.hero-text {
					color: white;
				}
				.hero-text h1 {
					font-size: 3.5rem;
					font-weight: 700;
					margin-bottom: 1.5rem;
					line-height: 1.2;
				}
				.hero-text h1 span {
					color: var(--accent-color);
				}
				.hero-text p {
					font-size: 1.1rem;
					margin-bottom: 2rem;
					opacity: 0.9;
				}
				.hero-stats {
					display: flex;
					gap: 2rem;
					margin-bottom: 2.5rem;
				}
				.hero-stat {
					display: flex;
					flex-direction: column;
				}
				.stat-number {
					font-size: 2.5rem;
					font-weight: 700;
					color: var(--accent-color);
					line-height: 1;
				}
				.stat-label {
					font-size: 0.9rem;
					color: #fff;
					opacity: 0.8;
				}
				.hero-cta {
					background-color: var(--accent-color);
					color: white;
					border: none;
					padding: 1rem 2rem;
					font-size: 1rem;
					font-weight: 600;
					border-radius: 4px;
					cursor: pointer;
					transition: var(--transition);
					box-shadow: 0 4px 12px rgba(0, 163, 224, 0.3);
				}
				.hero-cta:hover {
					background-color: #0089bd;
					transform: translateY(-2px);
					box-shadow: 0 6px 16px rgba(0, 163, 224, 0.4);
				}
				/* Hero Image Card */
				.hero-image-col {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.hero-image-container {
					position: relative;
					width: 100%;
					height: 100%;
					min-height: 300px;
					display: flex;
					align-items: center;
					justify-content: center;
					perspective: 1000px;
				}
				.image-wrapper {
					position: relative;
					width: 90%;
					max-width: 500px;
					border-radius: 12px;
					overflow: hidden;
					box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
					transform-style: preserve-3d;
				}
				.hero-image {
					width: 100%;
					height: auto;
					display: block;
					transition: transform 0.5s ease;
				}
				.image-wrapper:hover .hero-image {
					transform: scale(1.05);
				}
				.image-overlay {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
					padding: 2rem 1.5rem 1.5rem;
				}
				.overlay-content h3 {
					color: white;
					font-size: 1.5rem;
					font-weight: 600;
					margin: 0 0 0.5rem;
				}
				.overlay-content p {
					color: rgba(255, 255, 255, 0.9);
					font-size: 0.9rem;
					margin: 0;
				}
				/* Stats Section */
				.stats-section {
					padding: 6rem 0;
					background-color: var(--bg-light);
					position: relative;
					overflow: hidden;
				}
				.stats-section::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
					opacity: 0.5;
				}
				.stats-header {
					text-align: center;
					margin-bottom: 3.5rem;
					position: relative;
				}
				.stats-section h2 {
					font-size: 2.8rem;
					font-weight: 700;
					margin-bottom: 1rem;
					color: var(--secondary-color);
				}
				.stats-subtitle {
					font-size: 1.2rem;
					color: var(--text-light);
					max-width: 700px;
					margin: 0 auto;
					text-align: center;
				}
				.stats-container {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					gap: 2rem;
				}
				.stats-divider {
					height: 2px;
					background: linear-gradient(
						to right,
						transparent,
						var(--accent-color),
						transparent
					);
					margin: 3rem auto;
					width: 80%;
					max-width: 700px;
					transform-origin: center;
				}
				.additional-stats {
					margin-top: 1rem;
				}
				.stat-card {
					background-color: white;
					padding: 2rem;
					border-radius: 12px;
					flex: 1;
					min-width: 220px;
					max-width: 260px;
					text-align: center;
					box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
					transition: var(--transition);
					display: flex;
					flex-direction: column;
					align-items: center;
					position: relative;
				}
				.stat-card::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 4px;
					height: 100%;
					background-color: var(--primary-color);
					opacity: 0;
					transition: var(--transition);
				}
				.stat-card:hover {
					transform: translateY(-8px);
					box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
				}
				.stat-card:hover::before {
					opacity: 1;
				}
				.stat-card.secondary {
					background-color: rgba(255, 255, 255, 0.7);
					backdrop-filter: blur(10px);
				}
				.stat-card.secondary::before {
					background-color: var(--accent-color);
				}
				.stat-icon {
					font-size: 2rem;
					margin-bottom: 1rem;
					background-color: rgba(0, 98, 204, 0.1);
					width: 60px;
					height: 60px;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
					margin-bottom: 1rem;
				}
				.stat-value {
					font-size: 2.5rem;
					font-weight: 700;
					color: var(--primary-color);
					margin-bottom: 0.5rem;
					line-height: 1;
				}
				.stat-label {
					font-size: 1.1rem;
					font-weight: 600;
					color: var(--secondary-color);
					margin-bottom: 0.75rem;
				}
				.stat-description {
					font-size: 0.9rem;
					color: var(--text-light);
					line-height: 1.4;
				}
				/* Partners Section */
				.partners-section {
					padding: 7rem 0;
					background-color: white;
					border-top: 1px solid rgba(0, 0, 0, 0.05);
					border-bottom: 1px solid rgba(0, 0, 0, 0.05);
				}
				.partners-section h2 {
					text-align: center;
					font-size: 2.8rem;
					font-weight: 700;
					margin-bottom: 1rem;
					color: var(--secondary-color);
				}
				.section-subtitle {
					text-align: center;
					color: var(--text-light);
					margin-bottom: 3rem;
					font-size: 1.1rem;
				}
				/* Testimonials Section */
				.testimonials-section {
					padding: 5rem 0;
					background-color: var(--bg-dark);
					color: white;
				}
				.testimonials-section h2 {
					text-align: center;
					font-size: 2.5rem;
					font-weight: 700;
					margin-bottom: 3rem;
					color: white;
				}
				.testimonials-container {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
					gap: 2rem;
				}
				.testimonial-card {
					background-color: rgba(255, 255, 255, 0.05);
					padding: 2rem;
					border-radius: 8px;
					position: relative;
					overflow: hidden;
				}
				.quote-icon {
					position: absolute;
					top: 1.5rem;
					right: 1.5rem;
					opacity: 0.2;
					color: var(--accent-color);
				}
				.testimonial-text {
					font-size: 1.1rem;
					line-height: 1.7;
					margin-bottom: 2rem;
				}
				.testimonial-author {
					display: flex;
					align-items: center;
				}
				.author-image {
					width: 50px;
					height: 50px;
					border-radius: 50%;
					overflow: hidden;
					margin-right: 1rem;
					border: 2px solid var(--accent-color);
				}
				.author-image img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
				.author-info h4 {
					margin: 0 0 0.25rem 0;
					font-size: 1rem;
					font-weight: 600;
				}
				.author-info p {
					margin: 0 0 0.25rem 0;
					font-size: 0.8rem;
					color: rgba(255, 255, 255, 0.7);
				}
				.author-info span {
					color: var(--accent-color);
					font-size: 0.8rem;
				}
				/* Responsive Styles */
				@media (max-width: 992px) {
					.hero-text h1 {
						font-size: 2.8rem;
					}
					.hero-text-col {
						margin-bottom: 3rem;
					}
					.hero-image-col {
						margin-top: 2rem;
					}
					.stats-container {
						justify-content: center;
					}
					.stat-card {
						min-width: 40%;
					}
				}
				@media (max-width: 768px) {
					.hero-section {
						padding: 6rem 0 4rem;
						min-height: auto;
					}
					.hero-text h1 {
						font-size: 2.2rem;
					}
					.hero-text p {
						font-size: 1rem;
					}
					.hero-stats {
						flex-direction: column;
						gap: 1rem;
						margin-bottom: 2rem;
					}
					.stat-card {
						min-width: 100%;
					}
				}
			`}</style>
		</div>
	);
};

export default AboutSection;
