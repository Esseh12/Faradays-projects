import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = () => {
	const [visibleStats, setVisibleStats] = useState(false);
	const [activePartner, setActivePartner] = useState(null);
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

	// Company achievements data
	const stats = [
		{ value: 500, label: 'MW Enterprise Clients', icon: '⚡' },
		{ value: 120, label: 'Completed Projects', icon: '🏗️' },
		{ value: 80, label: 'Technical Experts', icon: '👩‍💻' },
		{ value: 15, label: 'Industry Awards', icon: '🏆' },
	];

	// Company partners data with locations
	const partners = [
		{
			id: 1,
			name: 'Schneider Electric',
			location: { x: 25, y: 20 },
			region: 'Europe',
		},
		{
			id: 2,
			name: 'ZTE Corporation',
			location: { x: 80, y: 30 },
			region: 'Asia',
		},
		{ id: 3, name: 'Philips', location: { x: 30, y: 22 }, region: 'Europe' },
		{
			id: 4,
			name: 'SunPower',
			location: { x: 15, y: 40 },
			region: 'North America',
		},
		{
			id: 5,
			name: 'Tesla Energy',
			location: { x: 20, y: 38 },
			region: 'North America',
		},
		{ id: 6, name: 'LG Solar', location: { x: 85, y: 28 }, region: 'Asia' },
		{ id: 7, name: 'Siemens', location: { x: 32, y: 25 }, region: 'Europe' },
		{
			id: 8,
			name: 'Mitsubishi Electric',
			location: { x: 88, y: 32 },
			region: 'Asia',
		},
		{
			id: 9,
			name: 'Enphase Energy',
			location: { x: 18, y: 36 },
			region: 'North America',
		},
		{ id: 10, name: 'Jinko Solar', location: { x: 75, y: 33 }, region: 'Asia' },
		{
			id: 11,
			name: 'Enel Green Power',
			location: { x: 35, y: 30 },
			region: 'Europe',
		},
		{
			id: 12,
			name: 'First Solar',
			location: { x: 22, y: 42 },
			region: 'North America',
		},
		{
			id: 13,
			name: 'Hanwha Q Cells',
			location: { x: 82, y: 35 },
			region: 'Asia',
		},
		{ id: 14, name: 'Iberdrola', location: { x: 28, y: 28 }, region: 'Europe' },
		{
			id: 15,
			name: 'NextEra Energy',
			location: { x: 25, y: 39 },
			region: 'North America',
		},
		{ id: 16, name: 'Trina Solar', location: { x: 78, y: 27 }, region: 'Asia' },
		{ id: 17, name: 'ABB', location: { x: 33, y: 18 }, region: 'Europe' },
		{
			id: 18,
			name: 'Canadian Solar',
			location: { x: 23, y: 35 },
			region: 'North America',
		},
		{ id: 19, name: 'Panasonic', location: { x: 90, y: 25 }, region: 'Asia' },
		{ id: 20, name: 'Vestas', location: { x: 38, y: 24 }, region: 'Europe' },
	];

	// Testimonials data
	const testimonials = [
		{
			text: "SRNE's grid solutions have set new industry benchmarks in smart energy management.",
			author: 'Johnathan Blake',
			role: 'CTO, Global Energy Consortium',
			company: 'Schneider Electric',
			image: '/path-to-johnathan-image.jpg',
		},
		{
			text: 'The precision of their photovoltaic systems revolutionized our urban infrastructure.',
			author: 'Dr. Emily Zhou',
			role: 'Director of Sustainability',
			company: 'ZTE Smart Cities',
			image: '/path-to-emily-image.jpg',
		},
	];

	// Animation variants
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	// Stat counter component
	const StatCounter = ({ value, isVisible }) => {
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

		return <span>{count}</span>;
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
									At SolarTech, we're more than energy providers - we're
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
							className='hero-image-col'>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className='hero-image-container'>
								<div className='hero-card'>
									<h3>Our Commitment</h3>
									<p>
										Certified sustainable solutions with industry-leading
										25-year performance guarantees
									</p>
								</div>
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
					<motion.h2
						initial={{ opacity: 0 }}
						animate={visibleStats ? { opacity: 1 } : {}}
						transition={{ duration: 0.6 }}>
						Our Impact
					</motion.h2>

					<div className='stats-container'>
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								className='stat-card'
								initial={{ opacity: 0, y: 20 }}
								animate={visibleStats ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.5, delay: index * 0.1 }}>
								<div className='stat-value'>
									<StatCounter
										value={stat.value}
										isVisible={visibleStats}
									/>
									{index === 0 ? <span>MW</span> : <span>+</span>}
								</div>
								<div className='stat-label'>{stat.label}</div>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Partners Section */}
			<section className='partners-section'>
				<Container fluid>
					<h2>Global Partnership Network</h2>
					<p className='section-subtitle'>
						Collaborating with industry leaders across the world
					</p>

					<div
						className='map-container'
						ref={mapRef}>
						<div className='world-map'>
							{/* Replace with a better map image with transparent background */}
							<img
								src='https://static.vecteezy.com/system/resources/previews/008/089/671/original/world-map-isolated-on-white-background-flat-earth-map-world-map-illustrations-globe-similar-world-map-icon-map-silhouette-for-template-business-free-vector.jpg'
								alt='World Map'
								className='map-image'
							/>
							{/* Partner dots */}
							{partners.map((partner) => (
								<motion.div
									key={partner.id}
									className={`partner-dot ${
										activePartner === partner.id ? 'active' : ''
									}`}
									style={{
										left: `${partner.location.x}%`,
										top: `${partner.location.y}%`,
									}}
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.5, delay: partner.id * 0.05 }}
									onMouseEnter={() => setActivePartner(partner.id)}
									onMouseLeave={() => setActivePartner(null)}>
									<div className='partner-pulse'></div>
									<AnimatePresence>
										{activePartner === partner.id && (
											<motion.div
												className='partner-info'
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: 5 }}
												transition={{ duration: 0.2 }}>
												<h4>{partner.name}</h4>
												<p>{partner.region}</p>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							))}
						</div>
					</div>

					<div className='region-stats'>
						<div className='region-stat'>
							<span className='region-number'>8</span>
							<span className='region-name'>Europe</span>
						</div>
						<div className='region-stat'>
							<span className='region-number'>7</span>
							<span className='region-name'>North America</span>
						</div>
						<div className='region-stat'>
							<span className='region-number'>5</span>
							<span className='region-name'>Asia</span>
						</div>
					</div>
				</Container>
			</section>
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
											d='M6.5 10c-.223 0-.437.034-.65.1-.212.067-.405.162-.578.285-.173.123-.324.266-.452.429-.128.162-.228.34-.3.53h2.98v2.924h-2.98V22H.5v-7.77c0-.855.164-1.642.495-2.363.33-.722.768-1.345 1.313-1.868.545-.523 1.18-.935 1.905-1.235.725-.3 1.478-.45 2.26-.45.568 0 1.026.09 1.372.27.347.18.625.42.835.721.21.3.367.635.47 1.006.103.371.154.772.154 1.204v.808h-2.804v-.401c0-.307-.035-.55-.11-.731-.077-.181-.194-.31-.35-.39-.156-.08-.358-.12-.608-.12zm13.5 0c-.223 0-.437.034-.65.1-.212.067-.405.162-.578.285-.173.123-.324.266-.452.429-.128.162-.228.34-.3.53h2.98v2.924h-2.98V22H14v-7.77c0-.855.164-1.642.495-2.363.33-.722.768-1.345 1.313-1.868.545-.523 1.18-.935 1.905-1.235.725-.3 1.478-.45 2.26-.45.568 0 1.026.09 1.372.27.347.18.625.42.835.721.21.3.367.635.47 1.006.103.371.154.772.154 1.204v.808h-2.804v-.401c0-.307-.035-.55-.11-.731-.077-.181-.194-.31-.35-.39-.156-.08-.358-.12-.608-.12z'
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
					background-image: url('Homepage-SolarPanels-01-Desktop');
					background-size: cover;
					background-position: center;
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
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				.hero-text {
					color: white;
					padding-right: 2rem;
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
				}

				.hero-card {
					background-color: white;
					padding: 2rem;
					border-radius: 8px;
					box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
					max-width: 80%;
					position: relative;
				}

				.hero-card h3 {
					font-size: 1.5rem;
					font-weight: 600;
					margin-bottom: 1rem;
					color: var(--secondary-color);
				}

				.hero-card p {
					color: var(--text-light);
					margin-bottom: 0;
				}

				/* Stats Section */
				.stats-section {
					padding: 5rem 0;
					background-color: var(--bg-light);
				}

				.stats-section h2 {
					text-align: center;
					font-size: 2.5rem;
					font-weight: 700;
					margin-bottom: 3rem;
					color: var(--secondary-color);
				}

				.stats-container {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					gap: 2rem;
				}

				.stat-card {
					background-color: white;
					padding: 2rem;
					border-radius: 8px;
					flex: 1;
					min-width: 200px;
					text-align: center;
					box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
					transition: var(--transition);
				}

				.stat-card:hover {
					transform: translateY(-5px);
					box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
				}

				.stat-card .stat-value {
					font-size: 2.5rem;
					font-weight: 700;
					color: var(--primary-color);
					margin-bottom: 0.5rem;
					line-height: 1;
				}

				.stat-card .stat-label {
					font-size: 1rem;
					color: var(--text-light);
				}

				/* Partners Section */
				.partners-section {
					padding: 5rem 0;
					background-color: white;
				}

				.partners-section h2 {
					text-align: center;
					font-size: 2.5rem;
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

				.map-container {
					position: relative;
					height: 500px;
					margin-bottom: 3rem;
				}

				.world-map {
					position: relative;
					width: 100%;
					height: 100%;
					background-color: #f8f9fa;
					border-radius: 12px;
					overflow: hidden;
				}

				.partner-dot {
					position: absolute;
					width: 12px;
					height: 12px;
					background-color: var(--accent-color);
					border-radius: 50%;
					transform: translate(-50%, -50%);
					z-index: 2;
					cursor: pointer;
				}

				.partner-dot.active {
					background-color: var(--primary-color);
					z-index: 3;
				}

				.partner-pulse {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 30px;
					height: 30px;
					border-radius: 50%;
					background-color: rgba(0, 163, 224, 0.3);
					animation: pulse 2s infinite;
				}

				@keyframes pulse {
					0% {
						transform: translate(-50%, -50%) scale(0.5);
						opacity: 0.8;
					}
					70% {
						transform: translate(-50%, -50%) scale(1.5);
						opacity: 0;
					}
					100% {
						transform: translate(-50%, -50%) scale(0.5);
						opacity: 0;
					}
				}

				.partner-info {
					position: absolute;
					bottom: 100%;
					left: 50%;
					transform: translateX(-50%);
					background-color: white;
					padding: 0.75rem 1rem;
					border-radius: 4px;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
					width: max-content;
					max-width: 200px;
					margin-bottom: 10px;
					pointer-events: none;
				}

				.partner-info:after {
					content: '';
					position: absolute;
					top: 100%;
					left: 50%;
					transform: translateX(-50%);
					border-width: 5px;
					border-style: solid;
					border-color: white transparent transparent transparent;
				}

				.partner-info h4 {
					margin: 0;
					font-size: 0.9rem;
					font-weight: 600;
					color: var(--secondary-color);
				}

				.partner-info p {
					margin: 0;
					font-size: 0.8rem;
					color: var(--text-light);
				}

				.region-stats {
					display: flex;
					justify-content: center;
					gap: 3rem;
					margin-top: 2rem;
				}

				.region-stat {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.region-number {
					font-size: 2rem;
					font-weight: 700;
					color: var(--primary-color);
				}

				.region-name {
					font-size: 0.9rem;
					color: var(--text-light);
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

				/* Partners Section */
				.partners-section {
					padding: 7rem 0; /* Increased padding */
					background-color: white;
					border-top: 1px solid rgba(0, 0, 0, 0.05);
					border-bottom: 1px solid rgba(0, 0, 0, 0.05);
				}

				.partners-section h2 {
					text-align: center;
					font-size: 2.8rem; /* Slightly larger */
					font-weight: 700;
					margin-bottom: 1rem;
					color: var(--secondary-color);
				}

				.section-subtitle {
					text-align: center;
					color: var(--text-light);
					margin-bottom: 4rem; /* Increased spacing */
					font-size: 1.2rem;
					max-width: 600px;
					margin-left: auto;
					margin-right: auto;
				}

				.map-container {
					position: relative;
					height: 600px; /* Increased height */
					margin-bottom: 4rem; /* More space after the map */
					max-width: 1400px;
					margin-left: auto;
					margin-right: auto;
				}

				.world-map {
					position: relative;
					width: 100%;
					height: 100%;
					background-color: transparent;
					border-radius: 16px; /* Slightly rounder corners */
					overflow: hidden;
					display: flex;
					justify-content: center;
					align-items: center;
					box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); /* Subtle shadow */
				}

				.map-image {
					width: 90%; /* Don't stretch to full width */
					height: auto;
					object-fit: contain;
					display: block;
					margin: 0 auto;
					opacity: 0.9; /* Slightly transparent */
				}

				.partner-dot {
					position: absolute;
					width: 16px; /* Slightly larger */
					height: 16px;
					background-color: var(--accent-color);
					border-radius: 50%;
					transform: translate(-50%, -50%);
					z-index: 2;
					cursor: pointer;
					transition: all 0.2s ease; /* Smooth transition */
				}

				.partner-dot.active {
					background-color: var(--primary-color);
					z-index: 10; /* Ensure it's above other dots */
					transform: translate(-50%, -50%) scale(1.3); /* Scale up when active */
				}

				.partner-pulse {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 40px; /* Slightly larger */
					height: 40px;
					border-radius: 50%;
					background-color: rgba(0, 163, 224, 0.2); /* Less opacity */
					animation: pulse 2.5s infinite; /* Slower animation */
				}

				@keyframes pulse {
					0% {
						transform: translate(-50%, -50%) scale(0.5);
						opacity: 0.5;
					}
					70% {
						transform: translate(-50%, -50%) scale(1.8);
						opacity: 0;
					}
					100% {
						transform: translate(-50%, -50%) scale(0.5);
						opacity: 0;
					}
				}

				.partner-info {
					position: absolute;
					bottom: 100%;
					left: 50%;
					transform: translateX(-50%);
					background-color: white;
					padding: 1rem 1.5rem; /* More padding */
					border-radius: 8px;
					box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
					width: max-content;
					max-width: 220px;
					margin-bottom: 15px;
					pointer-events: none;
					z-index: 20; /* Ensure above everything */
				}

				.partner-info:after {
					content: '';
					position: absolute;
					top: 100%;
					left: 50%;
					transform: translateX(-50%);
					border-width: 8px; /* Slightly larger arrow */
					border-style: solid;
					border-color: white transparent transparent transparent;
				}

				.partner-info h4 {
					margin: 0;
					font-size: 1rem;
					font-weight: 600;
					color: var(--secondary-color);
				}

				.partner-info p {
					margin: 5px 0 0;
					font-size: 0.9rem;
					color: var(--accent-color); /* Change color for better distinction */
				}

				.region-stats {
					display: flex;
					justify-content: center;
					gap: 5rem; /* More spacing between stats */
					margin-top: 2rem;
					background-color: var(--bg-light);
					padding: 2rem;
					border-radius: 12px;
					max-width: 800px;
					margin-left: auto;
					margin-right: auto;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
				}

				.region-stat {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 1rem 2rem;
					border-radius: 8px;
					transition: transform 0.3s ease;
				}

				.region-stat:hover {
					transform: translateY(-5px);
				}

				.region-number {
					font-size: 2.5rem; /* Larger */
					font-weight: 700;
					color: var(--primary-color);
				}

				.region-name {
					font-size: 1rem;
					color: var(--text-light);
					margin-top: 5px;
				}
				/* Responsive styles */
				@media (max-width: 992px) {
					.hero-text h1 {
						font-size: 2.8rem;
					}

					.hero-text-col {
						margin-bottom: 3rem;
					}

					.hero-card {
						max-width: 100%;
					}

					.stats-container {
						justify-content: center;
					}

					.stat-card {
						min-width: 40%;
					}
				}

				@media (max-width: 768px) {
					.hero-text h1 {
						font-size: 2.2rem;
					}

					.hero-stats {
						flex-direction: column;
						gap: 1rem;
					}

					.stat-card {
						min-width: 100%;
					}

					.map-container {
						height: 400px;
					}

					.region-stats {
						flex-direction: column;
						gap: 1.5rem;
					}
				}
			`}</style>
		</div>
	);
};

export default AboutSection;
