import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';

const ProjectHero = () => {
	const [imageLoaded, setImageLoaded] = useState(false);
	const bgImage =
		'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/price-solar-desktop';

	useEffect(() => {
		const img = new Image();
		img.src = bgImage;
		img.onload = () => setImageLoaded(true);
	}, [bgImage]);

	return (
		<section className={`project-hero ${imageLoaded ? 'loaded' : ''}`}>
			<div className='overlay'></div>
			<Container>
				<motion.div
					className='hero-content'
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					<h1>Our Cutting-Edge Projects</h1>
					<p>
						Innovation, sustainability, and excellence drive every project we
						undertake.
					</p>
					<div className='cta-buttons'>
						<button className='primary-btn'>Explore Now</button>
						<button className='secondary-btn'>Learn More</button>
					</div>
				</motion.div>
			</Container>

			<style jsx>{`
				.project-hero {
					position: relative;
					min-height: 90vh;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #000;
					background-image: url('${bgImage}');
					background-size: cover;
					background-position: center;
					transition: filter 1s ease;
				}
				/* Blur effect until image loads */
				.project-hero:not(.loaded) {
					filter: blur(5px);
				}
				.project-hero.loaded {
					filter: blur(0);
				}
				/* Lighter gradient overlay for improved image visibility */
				.overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: linear-gradient(
						135deg,
						rgba(0, 0, 0, 0.5) 0%,
						rgba(0, 0, 0, 0.5) 100%
					);
					z-index: 1;
				}
				.hero-content {
					position: relative;
					z-index: 2;
					text-align: center;
					color: #fff;
				}
				.hero-content h1 {
					font-size: 4rem;
					margin-bottom: 1rem;
				}
				.hero-content p {
					font-size: 1.5rem;
					margin-bottom: 2rem;
				}
				.cta-buttons {
					display: flex;
					gap: 1rem;
					justify-content: center;
				}
				.primary-btn {
					padding: 0.75rem 1.5rem;
					background: #00a3e0;
					border: none;
					border-radius: 5px;
					color: #fff;
					font-size: 1rem;
					cursor: pointer;
					transition: transform 0.3s ease;
				}
				.primary-btn:hover {
					transform: translateY(-3px);
				}
				.secondary-btn {
					padding: 0.75rem 1.5rem;
					background: transparent;
					border: 2px solid #00a3e0;
					border-radius: 5px;
					color: #00a3e0;
					font-size: 1rem;
					cursor: pointer;
					transition: transform 0.3s ease, background 0.3s ease;
				}
				.secondary-btn:hover {
					transform: translateY(-3px);
					background: rgba(0, 163, 224, 0.1);
				}
				@media (max-width: 768px) {
					.hero-content h1 {
						font-size: 2.5rem;
					}
					.hero-content p {
						font-size: 1rem;
					}
				}
			`}</style>
		</section>
	);
};

export default ProjectHero;
