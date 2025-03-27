import React, { useState, useMemo } from 'react';
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

	// Calculate non-overlapping positions for all partners
	const positions = useMemo(() => {
		const posArray = [];
		return partners.map((partner) => {
			const pos = getNonOverlappingPosition(posArray, partner.id);
			posArray.push(pos);
			return pos;
		});
	}, []);

	return (
		<section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
			<Container>
				<h2
					style={{
						textAlign: 'center',
						fontSize: '2.8rem',
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
						fontSize: '1.1rem',
						marginBottom: '3rem',
					}}>
					Collaborating with industry leaders across the world
				</p>

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
				@media (max-width: 768px) {
					.map-container {
						height: 300px;
					}
				}
			`}</style>
		</section>
	);
};

export default PartnersSection;
