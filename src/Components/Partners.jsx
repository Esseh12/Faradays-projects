import React, { useState, useMemo, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import flap_map from '../assets/Images/flat-map.png';

// Sample partners data with logo URLs
const partners = [
	{
		id: 1,
		name: 'Schneider Electric',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/08/10/2023081017413038.png',
	},
	{
		id: 2,
		name: 'ZTE Corporation',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/08/10/2023081016378082.png',
	},
	{
		id: 3,
		name: 'Philips',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/08/10/2023081017422031.png',
	},
	{
		id: 4,
		name: 'SunPower',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/08/10/2023081009582188.png',
	},
	{
		id: 5,
		name: 'Tesla Energy',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/08/10/2023081009573808.png',
	},
	{
		id: 6,
		name: 'LG Solar',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/08/10/2023081016324146.png',
	},
	{
		id: 7,
		name: 'Siemens',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/08/10/2023081016407479.png',
	},
	{
		id: 8,
		name: 'Mitsubishi Electric',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/08/14/2023081413403878.png',
	},
	{
		id: 9,
		name: 'Enphase Energy',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/08/10/2023081009546755.png',
	},
	{
		id: 10,
		name: 'Jinko Solar',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/07/31/2023073118052161.png',
	},
	{
		id: 11,
		name: 'Jinko Solar',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/07/31/2023073118052161.png',
	},
	{
		id: 12,
		name: 'Enphase Energy',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/08/10/2023081009546755.png',
	},
	{
		id: 13,
		name: 'Siemens',
		logo: 'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/08/10/2023081016407479.png',
	},
];

// Simple seeded random function that returns a number between 0 and 1 based on a seed.
function seededRandom(seed) {
	const x = Math.sin(seed) * 10000;
	return x - Math.floor(x);
}

// Returns a position between 10% and 90% for x and y
function getRandomPosition(seed) {
	return {
		x: 15 + seededRandom(seed * 100) * 80,
		y: 3 + seededRandom(seed * 101) * 80,
	};
}

// Check if two positions (in percentage) are too close based on a given minimum distance.
function isOverlapping(pos1, pos2, minDistance = 15) {
	const dx = pos1.x - pos2.x;
	const dy = pos1.y - pos2.y;
	return Math.sqrt(dx * dx + dy * dy) < minDistance;
}

// Generate a non-overlapping position based on the partner id and previously placed positions.
function getNonOverlappingPosition(existingPositions, partnerId) {
	let attempts = 0;
	let pos;
	while (attempts < 10) {
		// Use partner id plus attempt count as seed to vary the outcome
		pos = getRandomPosition(partnerId + attempts);
		const overlapping = existingPositions.some((p) => isOverlapping(p, pos));
		if (!overlapping) return pos;
		attempts++;
	}
	// Fallback: return the last generated position even if overlapping.
	return pos;
}

const PartnersSection = () => {
	const [activePartner, setActivePartner] = useState(null);
	const [isMobile, setIsMobile] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);

	// Calculate non-overlapping positions for all partners
	const positions = useMemo(() => {
		const posArray = [];
		return partners.map((partner) => {
			const pos = getNonOverlappingPosition(posArray, partner.id);
			posArray.push(pos);
			return pos;
		});
	}, []);

	// Check if screen is mobile size
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Set initial value
		handleResize();

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Cleanup
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// Slider logic
	const slidesPerView = isMobile ? 3 : 5;
	const totalSlides = Math.ceil(partners.length / slidesPerView);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % totalSlides);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
	};

	// Get current partners to display in slider
	const getCurrentPartners = () => {
		const start = currentSlide * slidesPerView;
		return partners.slice(start, start + slidesPerView);
	};

	return (
		<section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
			<Container>
				<h2
					style={{
						textAlign: 'center',
						fontSize: isMobile ? '2rem' : '2.8rem',
						fontWeight: 700,
						marginBottom: '1rem',
						color: '#1e3a8a',
					}}>
					Global Partnership Network
				</h2>
				<p
					style={{
						textAlign: 'center',
						color: '#64748b',
						fontSize: isMobile ? '1rem' : '1.1rem',
						marginBottom: '3rem',
					}}>
					Collaborating with industry leaders across the world
				</p>

				{!isMobile ? (
					// Map view for larger screens
					<div
						className='map-container'
						style={{
							position: 'relative',
							height: '600px',
							width: '100%',
							maxWidth: '1200px',
							margin: '0 auto',
						}}>
						<img
							src={flap_map}
							alt='World Map'
							className='map-image'
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								backgroundColor: '#fff',
								opacity: 0.95,
							}}
						/>

						{partners.map((partner, index) => {
							const { x, y } = positions[index];
							return (
								<motion.div
									key={partner.id}
									className='shadow-lg partner-logo'
									style={{
										position: 'absolute',
										left: `${x}%`,
										top: `${y}%`,
										transform: 'translate(-50%, -50%)',
										cursor: 'pointer',
										padding: '10px',
										borderRadius: '50%',
										backgroundColor: '#fff',
									}}
									initial={{ scale: 0, opacity: 0 }}
									animate={{
										scale: activePartner === partner.id ? 1.3 : 1,
										opacity: 1,
									}}
									transition={{ duration: 0.3 }}
									onMouseEnter={() => setActivePartner(partner.id)}
									onMouseLeave={() => setActivePartner(null)}>
									<img
										src={partner.logo}
										alt={partner.name}
										style={{
											width: '50px',
											height: '50px',
											objectFit: 'contain',
											borderRadius: '50%',
										}}
									/>
									{activePartner === partner.id && (
										<div className='tooltip'>{partner.name}</div>
									)}
								</motion.div>
							);
						})}
					</div>
				) : (
					// Slider view for mobile screens
					<div className='partners-slider-container'>
						<button
							className='slider-arrow prev'
							onClick={prevSlide}
							aria-label='Previous partners'>
							&lt;
						</button>

						<div className='partners-slider'>
							{getCurrentPartners().map((partner) => (
								<motion.div
									key={partner.id}
									className='partner-card'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}>
									<div className='partner-logo-container'>
										<img
											src={partner.logo}
											alt={partner.name}
											className='partner-logo-image'
										/>
									</div>
									<p className='partner-name'>{partner.name}</p>
								</motion.div>
							))}
						</div>

						<button
							className='slider-arrow next'
							onClick={nextSlide}
							aria-label='Next partners'>
							&gt;
						</button>

						{/* Pagination dots */}
						<div className='pagination-dots'>
							{Array.from({ length: totalSlides }).map((_, index) => (
								<span
									key={index}
									className={`pagination-dot ${
										currentSlide === index ? 'active' : ''
									}`}
									onClick={() => setCurrentSlide(index)}
								/>
							))}
						</div>
					</div>
				)}
			</Container>

			<style jsx>{`
				.partner-logo {
					transition: transform 0.2s ease;
				}
				.partner-logo .tooltip {
					position: absolute;
					bottom: -30px;
					left: 50%;
					transform: translateX(-50%);
					background: #1e3a8a;
					color: #fff;
					padding: 5px 10px;
					border-radius: 4px;
					font-size: 0.8rem;
					white-space: nowrap;
					opacity: 0;
					pointer-events: none;
					transition: opacity 0.2s ease;
				}
				.partner-logo:hover .tooltip {
					opacity: 1;
				}

				/* Mobile slider styles */
				.partners-slider-container {
					position: relative;
					max-width: 100%;
					padding: 0 40px;
					margin-bottom: 40px;
				}

				.partners-slider {
					display: flex;
					justify-content: space-between;
					align-items: center;
					overflow: hidden;
					gap: 10px;
				}

				.partner-card {
					flex: 1;
					min-width: 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 15px;
					border-radius: 8px;
					background: #f8fafc;
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
				}

				.partner-logo-container {
					width: 70px;
					height: 70px;
					display: flex;
					align-items: center;
					justify-content: center;
					background: white;
					border-radius: 50%;
					margin-bottom: 8px;
					padding: 5px;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
				}

				.partner-logo-image {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}

				.partner-name {
					font-size: 0.8rem;
					font-weight: 500;
					color: #1e3a8a;
					text-align: center;
					margin: 0;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 100%;
				}

				.slider-arrow {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					width: 30px;
					height: 30px;
					background: #1e3a8a;
					color: white;
					border: none;
					border-radius: 50%;
					font-size: 1rem;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
					z-index: 10;
				}

				.slider-arrow.prev {
					left: 0;
				}

				.slider-arrow.next {
					right: 0;
				}

				.pagination-dots {
					display: flex;
					justify-content: center;
					margin-top: 20px;
					gap: 8px;
				}

				.pagination-dot {
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: #cbd5e1;
					cursor: pointer;
				}

				.pagination-dot.active {
					background: #1e3a8a;
				}

				@media (max-width: 576px) {
					.partner-card {
						padding: 10px;
					}

					.partner-logo-container {
						width: 60px;
						height: 60px;
					}

					.partner-name {
						font-size: 0.7rem;
					}
				}
			`}</style>
		</section>
	);
};

export default PartnersSection;
