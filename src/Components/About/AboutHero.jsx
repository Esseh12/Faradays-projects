import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const AboutHero = () => {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src =
			'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop';
		img.onload = () => setImageLoaded(true);
	}, []);

	return (
		<section className={`hero-section ${imageLoaded ? 'image-loaded' : ''}`}>
			<div className='hero-gradient-overlay'></div>

			<Container>
				<Row className='hero-content-row'>
					<Col
						lg={7}
						className='hero-text-col'>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className='hero-text'>
							<h1>
								Empowering The World With{' '}
								<span className='text-gradient'>Solar Innovation</span>
							</h1>
							<p className='hero-subtitle'>
								Creating sustainable energy solutions for a brighter tomorrow.
								Our cutting-edge solar technology delivers unmatched performance
								and reliability.
							</p>

							<div className='hero-stats'>
								<div className='hero-stat'>
									<div className='stat-icon'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<circle
												cx='12'
												cy='12'
												r='10'></circle>
											<polyline points='12 6 12 12 16 14'></polyline>
										</svg>
									</div>
									<div className='stat-content'>
										<span className='stat-number'>15+</span>
										<span className='stat-label'>Years Experience</span>
									</div>
								</div>
								<div className='hero-stat'>
									<div className='stat-icon'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'></path>
											<path d='m9 12 2 2 4-4'></path>
										</svg>
									</div>
									<div className='stat-content'>
										<span className='stat-number'>25k+</span>
										<span className='stat-label'>Systems Installed</span>
									</div>
								</div>
							</div>

							<div className='hero-cta-container'>
								<button className='hero-cta primary-btn'>
									Explore Solutions
								</button>
								<button className='hero-cta secondary-btn'>Contact Us</button>
							</div>
						</motion.div>
					</Col>

					<Col
						lg={5}
						className='hero-card-col'>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className='hero-card-wrapper'>
							<div className='hero-highlight-card'>
								<div className='card-icon'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='32'
										height='32'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<path d='M12 2v2'></path>
										<path d='m4.93 4.93 1.41 1.41'></path>
										<path d='M20 12h2'></path>
										<path d='m19.07 4.93-1.41 1.41'></path>
										<path d='M15.947 12.65a4 4 0 1 0-7.894 0'></path>
										<path d='M12 16v-4'></path>
										<path d='M8 20h8'></path>
										<path d='M3 20h2'></path>
										<path d='M19 20h2'></path>
									</svg>
								</div>
								<h3>Our Commitment</h3>
								<p>
									Industry-leading 25-year performance guarantee with
									sustainable, eco-friendly solutions
								</p>
								<div className='card-badges'>
									<span className='badge'>ISO Certified</span>
									<span className='badge'>Carbon Neutral</span>
								</div>
							</div>
						</motion.div>
					</Col>
				</Row>
			</Container>

			<div className='scroll-indicator'>
				<div className='scroll-text'>Scroll to explore</div>
				<div className='scroll-arrow'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'>
						<path d='m6 9 6 6 6-6'></path>
					</svg>
				</div>
			</div>

			<style jsx>{`
				.hero-section {
					position: relative;
					min-height: 100vh;
					display: flex;
					align-items: center;
					padding: 8rem 0 6rem;
					background-color: #0a1929; /* Fallback color before image loads */
					transition: opacity 0.5s ease;
				}

				.hero-section::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-image: url('https://your-image-url.com/solar-panels-hero.jpg'); /* Replace with your actual image */
					background-size: cover;
					background-position: center;
					opacity: 0;
					transition: opacity 1.5s ease;
					z-index: 0;
				}

				.hero-section.image-loaded::before {
					opacity: 0.65;
				}

				.hero-gradient-overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: linear-gradient(
						to right,
						rgba(0, 25, 50, 0.95) 0%,
						rgba(0, 25, 50, 0.85) 50%,
						rgba(0, 25, 50, 0.75) 100%
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
					font-size: 3.75rem;
					font-weight: 800;
					margin-bottom: 1.5rem;
					line-height: 1.1;
					letter-spacing: -0.5px;
				}

				.text-gradient {
					background: linear-gradient(90deg, #00a3e0, #4cd5ff);
					-webkit-background-clip: text;
					background-clip: text;
					color: transparent;
					display: inline-block;
				}

				.hero-subtitle {
					font-size: 1.25rem;
					font-weight: 400;
					margin-bottom: 2.5rem;
					opacity: 0.9;
					max-width: 90%;
					line-height: 1.6;
				}

				.hero-stats {
					display: flex;
					gap: 2.5rem;
					margin-bottom: 3rem;
				}

				.hero-stat {
					display: flex;
					align-items: center;
					gap: 1rem;
				}

				.stat-icon {
					width: 48px;
					height: 48px;
					border-radius: 12px;
					background: rgba(0, 163, 224, 0.15);
					display: flex;
					align-items: center;
					justify-content: center;
					color: #00a3e0;
				}

				.stat-content {
					display: flex;
					flex-direction: column;
				}

				.stat-number {
					font-size: 1.75rem;
					font-weight: 700;
					color: white;
					line-height: 1;
				}

				.stat-label {
					font-size: 0.9rem;
					color: rgba(255, 255, 255, 0.7);
					margin-top: 0.25rem;
				}

				.hero-cta-container {
					display: flex;
					gap: 1rem;
				}

				.hero-cta {
					padding: 0.875rem 1.75rem;
					font-size: 1rem;
					font-weight: 600;
					border-radius: 8px;
					cursor: pointer;
					transition: all 0.3s ease;
					border: none;
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 0.5rem;
				}

				.primary-btn {
					background: linear-gradient(90deg, #00a3e0, #0089bd);
					color: white;
					box-shadow: 0 8px 20px rgba(0, 163, 224, 0.3);
				}

				.primary-btn:hover {
					transform: translateY(-3px);
					box-shadow: 0 12px 24px rgba(0, 163, 224, 0.4);
				}

				.secondary-btn {
					background: transparent;
					color: white;
					border: 1px solid rgba(255, 255, 255, 0.3);
				}

				.secondary-btn:hover {
					background: rgba(255, 255, 255, 0.1);
					border-color: rgba(255, 255, 255, 0.5);
				}

				.hero-card-col {
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.hero-card-wrapper {
					width: 100%;
					display: flex;
					justify-content: center;
				}

				.hero-highlight-card {
					background: rgba(255, 255, 255, 0.03);
					backdrop-filter: blur(10px);
					border: 1px solid rgba(255, 255, 255, 0.1);
					border-radius: 16px;
					padding: 2.5rem;
					width: 100%;
					max-width: 380px;
					box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
					position: relative;
					overflow: hidden;
				}

				.hero-highlight-card::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 5px;
					background: linear-gradient(90deg, #00a3e0, #4cd5ff);
				}

				.card-icon {
					width: 64px;
					height: 64px;
					border-radius: 16px;
					background: rgba(0, 163, 224, 0.15);
					display: flex;
					align-items: center;
					justify-content: center;
					color: #00a3e0;
					margin-bottom: 1.5rem;
				}

				.hero-highlight-card h3 {
					font-size: 1.75rem;
					font-weight: 700;
					margin-bottom: 1rem;
					color: white;
				}

				.hero-highlight-card p {
					color: rgba(255, 255, 255, 0.7);
					margin-bottom: 1.5rem;
					font-size: 1.1rem;
					line-height: 1.6;
				}

				.card-badges {
					display: flex;
					gap: 0.75rem;
					flex-wrap: wrap;
				}

				.badge {
					padding: 0.5rem 1rem;
					background: rgba(255, 255, 255, 0.1);
					border-radius: 50px;
					font-size: 0.85rem;
					color: white;
				}

				.scroll-indicator {
					position: absolute;
					bottom: 2rem;
					left: 50%;
					transform: translateX(-50%);
					display: flex;
					flex-direction: column;
					align-items: center;
					color: rgba(255, 255, 255, 0.7);
					z-index: 2;
					animation: bounce 2s infinite;
				}

				.scroll-text {
					font-size: 0.875rem;
					margin-bottom: 0.5rem;
				}

				.scroll-arrow {
					display: flex;
					opacity: 0.7;
				}

				@keyframes bounce {
					0%,
					20%,
					50%,
					80%,
					100% {
						transform: translateY(0) translateX(-50%);
					}
					40% {
						transform: translateY(-10px) translateX(-50%);
					}
					60% {
						transform: translateY(-5px) translateX(-50%);
					}
				}

				/* Responsive styles */
				@media (max-width: 992px) {
					.hero-text h1 {
						font-size: 3rem;
					}

					.hero-card-col {
						margin-top: 3rem;
					}

					.hero-text {
						padding-right: 0;
					}
				}

				@media (max-width: 768px) {
					.hero-section {
						padding: 6rem 0 4rem;
						min-height: auto;
					}

					.hero-text h1 {
						font-size: 2.5rem;
					}

					.hero-subtitle {
						font-size: 1.1rem;
						max-width: 100%;
					}

					.hero-stats {
						flex-direction: column;
						gap: 1.5rem;
						margin-bottom: 2rem;
					}

					.hero-cta-container {
						flex-direction: column;
						width: 100%;
					}

					.hero-cta {
						width: 100%;
					}

					.scroll-indicator {
						display: none;
					}
				}
			`}</style>
		</section>
	);
};

export default AboutHero;
