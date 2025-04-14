import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PartnersSection from '../Partners';
import FeaturedProjects from '../Homepage/Featured';
import avatar_one from '../../assets/Images/avatar_one.svg';
import avatar_two from '../../assets/Images/avatar_two.svg';

const AboutSection = () => {
	const [visibleStats, setVisibleStats] = useState(false);
	const [animateImage, setAnimateImage] = useState(false);
	const statsObserverRef = useRef(null);
	const imageObserverRef = useRef(null);

	// Combine Intersection Observers for better performance
	useEffect(() => {
		const statsSection = document.getElementById('stats-section');
		const imageSection = document.getElementById('hero-image');

		// Use a single observer with multiple targets
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.id === 'stats-section') {
							setVisibleStats(true);
							observer.unobserve(entry.target); // Stop observing once visible
						} else if (entry.target.id === 'hero-image') {
							setAnimateImage(true);
							observer.unobserve(entry.target); // Stop observing once visible
						}
					}
				});
			},
			{ threshold: 0.3 }
		);

		if (statsSection) observer.observe(statsSection);
		if (imageSection) observer.observe(imageSection);

		// Save refs for cleanup
		statsObserverRef.current = statsSection;
		imageObserverRef.current = imageSection;

		return () => {
			if (statsObserverRef.current)
				observer.unobserve(statsObserverRef.current);
			if (imageObserverRef.current)
				observer.unobserve(imageObserverRef.current);
		};
	}, []);

	// Company achievements data - Moved outside component for static reference
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

	// Additional stats
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

	// Simplified counter component with reduced re-renders
	const StatCounter = ({ value, isVisible, suffix = '+' }) => {
		const [count, setCount] = useState(0);

		useEffect(() => {
			if (!isVisible) return;

			// Less granular updates for better performance
			let start = 0;
			const duration = 1500; // Shorter animation
			const steps = 20; // Fewer steps
			const increment = value / steps;
			const interval = duration / steps;

			const timer = setInterval(() => {
				start += increment;
				if (start >= value) {
					setCount(value);
					clearInterval(timer);
				} else {
					setCount(Math.floor(start));
				}
			}, interval);

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
			{/* Hero Section - Simplified animation */}
			<section className='hero-section'>
				<div className='hero-overlay'></div>
				<Container>
					<Row className='hero-content-row'>
						<Col
							lg={6}
							md={12}
							className='hero-text-col'>
							<div className={`hero-text ${animateImage ? 'animate' : ''}`}>
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
							</div>
						</Col>
						<Col
							lg={6}
							md={12}
							className='hero-image-col'>
							<div
								id='hero-image'
								className={`hero-image-container ${
									animateImage ? 'animate' : ''
								}`}>
								<div className='image-wrapper'>
									{/* Use lower resolution image or responsive image solutions */}
									<img
										src='https://images.pexels.com/photos/19895880/pexels-photo-19895880/free-photo-of-man-standing-among-solar-panels.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
										alt='Man standing among solar panels'
										className='hero-image'
										loading='lazy'
										width='400'
										height='300'
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
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Stats Section - Simplified animations */}
			<section
				id='stats-section'
				className='stats-section'>
				<Container>
					<div className='stats-header'>
						<h2 className={visibleStats ? 'visible' : ''}>Our Impact</h2>
						<p className={`stats-subtitle ${visibleStats ? 'visible' : ''}`}>
							Transforming the renewable energy landscape with sustainable
							innovation and measurable results.
						</p>
					</div>

					<div className='stats-container primary-stats'>
						{stats.map((stat, index) => (
							<div
								key={index}
								className={`stat-card ${visibleStats ? 'visible' : ''}`}
								style={{ animationDelay: `${index * 100}ms` }}>
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
							</div>
						))}
					</div>

					<div className={`stats-divider ${visibleStats ? 'visible' : ''}`} />

					<div className='stats-container additional-stats'>
						{additionalStats.map((stat, index) => (
							<div
								key={index}
								className={`stat-card secondary ${
									visibleStats ? 'visible' : ''
								}`}
								style={{ animationDelay: `${700 + index * 100}ms` }}>
								<div className='stat-value'>
									<StatCounter
										value={stat.value}
										isVisible={visibleStats}
										suffix={stat.suffix}
									/>
								</div>
								<div className='stat-label'>{stat.label}</div>
								<div className='stat-description'>{stat.description}</div>
							</div>
						))}
					</div>
				</Container>
			</section>

			<FeaturedProjects />

			{/* Partners Section */}
			<PartnersSection />

			{/* Testimonials Section - Simplified animations */}
			<section className='testimonials-section'>
				<Container>
					<h2>What Our Partners Say</h2>
					<div className='testimonials-container'>
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className='testimonial-card'>
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
											loading='lazy'
											width='50'
											height='50'
										/>
									</div>
									<div className='author-info'>
										<h4>{testimonial.author}</h4>
										<p>{testimonial.role}</p>
										<span>{testimonial.company}</span>
									</div>
								</div>
							</div>
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
					padding: 4rem 0; /* Reduced padding */
					background-color: #0a1929;
					overflow: hidden;
					min-height: 60vh; /* Reduced height */
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
					padding-right: 1rem; /* Reduced padding */
				}
				.hero-text {
					color: white;
					opacity: 0;
					transform: translateX(-20px);
					transition: opacity 0.5s ease, transform 0.5s ease;
				}
				.hero-text.animate {
					opacity: 1;
					transform: translateX(0);
				}
				.hero-text h1 {
					font-size: 2.8rem; /* Smaller font */
					font-weight: 700;
					margin-bottom: 1.2rem;
					line-height: 1.2;
				}
				.hero-text h1 span {
					color: var(--accent-color);
				}
				.hero-text p {
					font-size: 1rem; /* Smaller font */
					margin-bottom: 1.5rem;
					opacity: 0.9;
				}
				.hero-stats {
					display: flex;
					gap: 1.5rem; /* Reduced gap */
					margin-bottom: 2rem;
				}
				.hero-stat {
					display: flex;
					flex-direction: column;
				}
				.stat-number {
					font-size: 2.2rem; /* Smaller font */
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
					padding: 0.8rem 1.8rem; /* Reduced padding */
					font-size: 1rem;
					font-weight: 600;
					border-radius: 4px;
					cursor: pointer;
					transition: var(--transition);
					box-shadow: 0 4px 8px rgba(0, 163, 224, 0.3); /* Lighter shadow */
				}
				.hero-cta:hover {
					background-color: #0089bd;
					transform: translateY(-2px);
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
					min-height: 250px; /* Reduced height */
					display: flex;
					align-items: center;
					justify-content: center;
					opacity: 0;
					transform: scale(0.95);
					transition: opacity 0.6s ease, transform 0.6s ease;
				}
				.hero-image-container.animate {
					opacity: 1;
					transform: scale(1);
				}
				.image-wrapper {
					position: relative;
					width: 90%;
					max-width: 400px; /* Reduced size */
					border-radius: 10px;
					overflow: hidden;
					box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Lighter shadow */
				}
				.hero-image {
					width: 100%;
					height: auto;
					display: block;
					transition: transform 0.5s ease;
				}
				.image-wrapper:hover .hero-image {
					transform: scale(1.03); /* Reduced animation */
				}
				.image-overlay {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
					padding: 1.5rem 1.2rem 1.2rem; /* Reduced padding */
				}
				.overlay-content h3 {
					color: white;
					font-size: 1.3rem; /* Smaller font */
					font-weight: 600;
					margin: 0 0 0.5rem;
				}
				.overlay-content p {
					color: rgba(255, 255, 255, 0.9);
					font-size: 0.85rem; /* Smaller font */
					margin: 0;
				}

				/* Stats Section */
				.stats-section {
					padding: 4rem 0; /* Reduced padding */
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
					opacity: 0.3; /* Reduced opacity */
				}
				.stats-header {
					text-align: center;
					margin-bottom: 2.5rem; /* Reduced margin */
					position: relative;
				}
				.stats-section h2 {
					font-size: 2.4rem; /* Smaller font */
					font-weight: 700;
					margin-bottom: 0.8rem;
					color: var(--secondary-color);
					opacity: 0;
					transform: translateY(20px);
					transition: opacity 0.5s ease, transform 0.5s ease;
				}
				.stats-section h2.visible {
					opacity: 1;
					transform: translateY(0);
				}
				.stats-subtitle {
					font-size: 1.1rem; /* Smaller font */
					color: var(--text-light);
					max-width: 700px;
					margin: 0 auto;
					text-align: center;
					opacity: 0;
					transform: translateY(20px);
					transition: opacity 0.5s ease, transform 0.5s ease;
					transition-delay: 0.2s;
				}
				.stats-subtitle.visible {
					opacity: 1;
					transform: translateY(0);
				}
				.stats-container {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					gap: 1.5rem; /* Reduced gap */
				}
				.stats-divider {
					height: 2px;
					background: linear-gradient(
						to right,
						transparent,
						var(--accent-color),
						transparent
					);
					margin: 2.5rem auto; /* Reduced margin */
					width: 80%;
					max-width: 600px;
					transform: scaleX(0);
					transition: transform 0.8s ease;
				}
				.stats-divider.visible {
					transform: scaleX(1);
				}
				.additional-stats {
					margin-top: 0.5rem; /* Reduced margin */
				}
				.stat-card {
					background-color: white;
					padding: 1.5rem; /* Reduced padding */
					border-radius: 10px;
					flex: 1;
					min-width: 200px; /* Reduced size */
					max-width: 240px; /* Reduced size */
					text-align: center;
					box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); /* Lighter shadow */
					transition: transform 0.4s ease, box-shadow 0.4s ease;
					display: flex;
					flex-direction: column;
					align-items: center;
					position: relative;
					opacity: 0;
					transform: translateY(20px);
					animation-fill-mode: forwards;
				}
				.stat-card.visible {
					animation: fadeInUp 0.5s ease forwards;
				}
				@keyframes fadeInUp {
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.stat-card::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 3px;
					height: 100%;
					background-color: var(--primary-color);
					opacity: 0;
					transition: opacity 0.3s ease;
				}
				.stat-card:hover {
					transform: translateY(-5px); /* Reduced animation */
					box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); /* Lighter shadow */
				}
				.stat-card:hover::before {
					opacity: 1;
				}
				.stat-card.secondary {
					background-color: rgba(255, 255, 255, 0.7);
				}
				.stat-card.secondary::before {
					background-color: var(--accent-color);
				}
				.stat-icon {
					font-size: 1.8rem; /* Smaller font */
					margin-bottom: 0.8rem;
					background-color: rgba(0, 98, 204, 0.1);
					width: 50px; /* Smaller size */
					height: 50px; /* Smaller size */
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
				}
				.stat-value {
					font-size: 2.2rem; /* Smaller font */
					font-weight: 700;
					color: var(--primary-color);
					margin-bottom: 0.4rem;
					line-height: 1;
				}
				.stat-label {
					font-size: 1rem; /* Smaller font */
					font-weight: 600;
					color: var(--secondary-color);
					margin-bottom: 0.6rem;
				}
				.stat-description {
					font-size: 0.85rem; /* Smaller font */
					color: var(--text-light);
					line-height: 1.4;
				}

				/* Testimonials Section */
				.testimonials-section {
					padding: 4rem 0; /* Reduced padding */
					background-color: var(--bg-dark);
					color: white;
				}
				.testimonials-section h2 {
					text-align: center;
					font-size: 2.2rem; /* Smaller font */
					font-weight: 700;
					margin-bottom: 2.5rem; /* Reduced margin */
					color: white;
				}
				.testimonials-container {
					display: grid;
					grid-template-columns: repeat(
						auto-fit,
						minmax(280px, 1fr)
					); /* Smaller min-width */
					gap: 1.5rem; /* Reduced gap */
				}
				.testimonial-card {
					background-color: rgba(255, 255, 255, 0.05);
					padding: 1.5rem; /* Reduced padding */
					border-radius: 8px;
					position: relative;
					overflow: hidden;
				}
				.quote-icon {
					position: absolute;
					top: 1.2rem;
					right: 1.2rem;
					opacity: 0.2;
					color: var(--accent-color);
				}
				.testimonial-text {
					font-size: 1rem; /* Smaller font */
					line-height: 1.6;
					margin-bottom: 1.5rem; /* Reduced margin */
				}
				.testimonial-author {
					display: flex;
					align-items: center;
				}
				.author-image {
					width: 45px; /* Smaller size */
					height: 45px; /* Smaller size */
					border-radius: 50%;
					overflow: hidden;
					margin-right: 0.8rem; /* Reduced margin */
					border: 2px solid var(--accent-color);
				}
				.author-image img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
				.author-info h4 {
					margin: 0 0 0.2rem 0;
					font-size: 0.95rem; /* Smaller font */
					font-weight: 600;
				}
				.author-info p {
					margin: 0 0 0.2rem 0;
					font-size: 0.75rem; /* Smaller font */
					color: rgba(255, 255, 255, 0.7);
				}
				.author-info span {
					color: var(--accent-color);
					font-size: 0.75rem; /* Smaller font */
				}

				/* Responsive Styles */
				@media (max-width: 992px) {
					.hero-text h1 {
						font-size: 2.4rem; /* Further reduced */
					}
					.hero-text-col {
						margin-bottom: 2rem; /* Reduced */
					}
					.hero-image-col {
						margin-top: 1.5rem; /* Reduced */
					}
				}
				@media (max-width: 768px) {
					.hero-section {
						padding: 3rem 0; /* Further reduced */
					}
					.hero-text h1 {
						font-size: 2rem; /* Further reduced */
					}
					.hero-text p {
						font-size: 0.95rem; /* Further reduced */
					}
					.stats-section h2 {
						font-size: 2.2rem; /* Further reduced */
					}
				}
				@media (max-width: 576px) {
					.hero-section {
						padding: 2rem 0; /* Even smaller for mobile */
					}
					.hero-text h1 {
						font-size: 1.8rem; /* Even smaller for mobile */
					}
					.stat-card {
						min-width: 100%; /* Full width on smallest screens */
					}
				}
			`}</style>
		</div>
	);
};

export default AboutSection;
