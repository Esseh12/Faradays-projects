// src/data/productsData.js

const products = [
	{
		id: 1,
		name: 'SolarTech Premium 450W Solar Panel',
		category: 'solar-panels',
		price: 299.99,
		rating: 4.8,
		image:
			'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		images: [
			'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		],
		featured: true,
		badge: 'Best Seller',
		specs: {
			power: '450W',
			efficiency: '21.3%',
			warranty: '25 Years',
			dimensions: '1765 × 1048 × 35 mm',
			weight: '20.5 kg',
			cells: '144 Monocrystalline',
			certifications: 'IEC, UL, MCS',
			operatingTemp: '-40°C to +85°C',
		},
		description: `The SolarTech Premium 450W Solar Panel represents the pinnacle of photovoltaic technology. Engineered for maximum energy production and durability, these high-efficiency monocrystalline panels deliver outstanding performance in all conditions.

With industry-leading efficiency ratings and advanced cell technology, these panels generate more power in less space, making them ideal for residential and commercial installations where space optimization matters. The anti-reflective coating and excellent low-light performance ensure reliable energy production throughout the day.

Built to last, these panels undergo rigorous testing for wind, snow loads, and extreme temperatures. The reinforced frame design provides enhanced durability while maintaining a sleek, modern appearance that complements any property.`,
		features: [
			'Industry-leading 21.3% efficiency rate',
			'Enhanced performance in low-light conditions',
			'Advanced temperature coefficient (-0.35% per °C)',
			'High salt mist and ammonia resistance',
			'Anti-reflective glass coating for improved light absorption',
			'PID-resistant cells for long-term reliability',
			'Compatible with all SolarTech mounting solutions',
			'Comprehensive 25-year product and performance warranty',
		],
		reviews: [
			{
				id: 1,
				author: 'Michael T.',
				date: '2025-01-15',
				rating: 5,
				comment:
					'Exceptional performance, easy installation. These panels are consistently outperforming the estimated production values. Highly recommend!',
			},
			{
				id: 2,
				author: 'Sarah J.',
				date: '2024-12-28',
				rating: 4,
				comment:
					'Very pleased with the quality and output. Installation was straightforward with the provided mounting hardware. Only giving 4 stars as they were slightly heavier than expected.',
			},
			{
				id: 3,
				author: 'David L.',
				date: '2024-11-02',
				rating: 5,
				comment:
					"These panels have transformed our energy consumption. We're now producing more electricity than we use most months. The performance in partial shade is notably better than our previous panels.",
			},
		],
		documents: [
			{ name: 'Installation Manual', size: '4.2 MB', type: 'PDF' },
			{ name: 'Warranty Information', size: '1.5 MB', type: 'PDF' },
			{ name: 'Technical Datasheet', size: '2.8 MB', type: 'PDF' },
		],
	},
	{
		id: 2,
		name: 'SolarTech Hybrid 5kW Inverter',
		category: 'inverters',
		price: 1499.99,
		rating: 4.9,
		image:
			'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		images: [
			'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		],
		featured: true,
		badge: 'Top Rated',
		specs: {
			power: '5kW',
			efficiency: '98.2%',
			warranty: '10 Years',
			dimensions: '505 × 380 × 185 mm',
			weight: '23 kg',
			inputVoltage: '80-600V DC',
			outputVoltage: '220-240V AC',
			operatingTemp: '-25°C to +60°C',
		},
		description: `The SolarTech Hybrid 5kW Inverter is a state-of-the-art power conversion solution designed for modern solar installations. This versatile inverter seamlessly integrates with both grid-tied and battery storage systems, offering unmatched flexibility for residential and small commercial applications.

Featuring advanced MPPT technology, this inverter maximizes energy harvest from your solar array under all conditions. The ultra-high 98.2% efficiency rating ensures minimal energy loss during conversion, translating to significant savings over the system's lifetime.

Smart grid capabilities allow for intelligent energy management, peak shaving, and time-of-use optimization. The integrated energy management system enables homeowners to prioritize self-consumption or grid export based on electricity prices and usage patterns.`,
		features: [
			'Dual MPPT tracking for optimal energy harvest',
			'Battery ready with integrated charge controller',
			'Advanced grid support features and reactive power control',
			'Built-in Wi-Fi for remote monitoring and control',
			'LCD display with intuitive user interface',
			'IP65 rated for indoor and outdoor installation',
			'Ultra-quiet operation with passive cooling',
			'Comprehensive protection suite: anti-islanding, over/under voltage, overload',
		],
		reviews: [
			{
				id: 1,
				author: 'Thomas W.',
				date: '2025-02-10',
				rating: 5,
				comment:
					'Simply superb. The monitoring capabilities and efficiency are beyond expectations. Installation was straightforward for my electrician, and the app is incredibly user-friendly.',
			},
			{
				id: 2,
				author: 'Lisa M.',
				date: '2025-01-05',
				rating: 5,
				comment:
					"We added this to our existing solar setup with battery storage. The transition was seamless and we're now able to optimize our energy usage much better than before.",
			},
		],
		documents: [
			{ name: 'Installation Guide', size: '5.7 MB', type: 'PDF' },
			{ name: 'User Manual', size: '3.2 MB', type: 'PDF' },
			{ name: 'Technical Specifications', size: '1.9 MB', type: 'PDF' },
			{ name: 'Wiring Diagram', size: '0.8 MB', type: 'PDF' },
		],
	},
	{
		id: 3,
		name: 'SolarTech PowerWall 10kWh Battery',
		category: 'batteries',
		price: 5999.99,
		rating: 4.7,
		image:
			'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		images: [
			'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/259920/pexels-photo-259920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		],
		featured: true,
		badge: 'Featured',
		specs: {
			capacity: '10kWh',
			cycles: '6000+',
			warranty: '12 Years',
			dimensions: '650 × 540 × 150 mm',
			weight: '150 kg',
			technology: 'Lithium-ion',
			safety: 'Overcharge, Over-discharge, Thermal',
			operatingTemp: '-20°C to +60°C',
		},
		description: `The SolarTech PowerWall 10kWh Battery is engineered for maximum storage and efficiency. Designed to provide a reliable backup power source, it stores surplus energy for use during peak hours or outages.

With a robust design and advanced battery management system, this powerwall ensures long-lasting performance and safety. Ideal for both residential and commercial applications, it integrates seamlessly into your solar ecosystem to maximize energy independence.`,
		features: [
			'High energy density and long cycle life',
			'Integrated battery management system (BMS)',
			'Efficient energy storage with minimal losses',
			'Seamless integration with SolarTech systems',
			'Compact design with robust safety features',
			'Remote monitoring and control capabilities',
		],
		reviews: [
			{
				id: 1,
				author: 'Emily R.',
				date: '2025-03-01',
				rating: 5,
				comment:
					'A game-changer for our home energy management. The battery’s efficiency and smart features make it worth every penny.',
			},
			{
				id: 2,
				author: 'Mark S.',
				date: '2025-02-15',
				rating: 4,
				comment:
					'Reliable performance and easy integration with our solar panels. Would love to see more options for customization.',
			},
		],
		documents: [
			{ name: 'User Guide', size: '6.5 MB', type: 'PDF' },
			{ name: 'Safety Datasheet', size: '2.2 MB', type: 'PDF' },
			{ name: 'Installation Manual', size: '4.8 MB', type: 'PDF' },
		],
	},
	{
		id: 4,
		name: 'SolarTech Monocrystalline 380W Panel',
		category: 'solar-panels',
		price: 249.99,
		rating: 4.6,
		image:
			'https://images.pexels.com/photos/246728/pexels-photo-246728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		images: [
			'https://images.pexels.com/photos/246728/pexels-photo-246728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		],
		featured: false,
		specs: {
			power: '380W',
			efficiency: '19.8%',
			warranty: '20 Years',
			dimensions: '1705 × 1028 × 35 mm',
			weight: '18 kg',
			cellType: 'Monocrystalline',
			durability: 'High wind and snow load resistance',
			operatingTemp: '-30°C to +70°C',
		},
		description: `The SolarTech Monocrystalline 380W Panel offers a balance of performance and affordability. Designed with advanced monocrystalline technology, it delivers reliable power output with an emphasis on durability and ease of installation.

Optimized for both performance and aesthetics, this panel features a sleek design that blends seamlessly with any installation. Rigorous testing under extreme weather conditions ensures this panel stands up to harsh environments.`,
		features: [
			'Reliable 19.8% efficiency',
			'Sleek design for modern installations',
			'High durability in adverse weather conditions',
			'Optimized for residential and commercial use',
			'Low maintenance with consistent performance',
		],
		reviews: [
			{
				id: 1,
				author: 'George P.',
				date: '2025-01-20',
				rating: 4,
				comment:
					'Good performance and easy to install, though the efficiency could be slightly higher.',
			},
		],
		documents: [
			{ name: 'Product Datasheet', size: '3.5 MB', type: 'PDF' },
			{ name: 'Installation Guide', size: '4.0 MB', type: 'PDF' },
		],
	},
	{
		id: 5,
		name: 'SolarTech Off-Grid 3kW Inverter',
		category: 'inverters',
		price: 1199.99,
		rating: 4.5,
		image:
			'https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		images: [
			'https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		],
		featured: false,
		specs: {
			power: '3kW',
			efficiency: '97.5%',
			warranty: '8 Years',
			dimensions: '485 × 360 × 170 mm',
			weight: '20 kg',
			gridType: 'Off-Grid',
			compatibility: 'Ideal for remote installations',
			operatingTemp: '-20°C to +55°C',
		},
		description: `The SolarTech Off-Grid 3kW Inverter is engineered for independent power systems where grid access is unavailable. Its robust design ensures efficient power conversion in remote locations, making it perfect for off-grid solar projects.

Utilizing advanced off-grid technology, it optimizes energy usage and seamlessly integrates with battery storage systems. Durable and weather-resistant, this inverter is a dependable choice for rural installations.`,
		features: [
			'High efficiency tailored for off-grid systems',
			'Robust performance in remote environments',
			'Optimized for battery integration',
			'Durable design for harsh weather conditions',
			'Simple and straightforward installation',
		],
		reviews: [
			{
				id: 1,
				author: 'Karen S.',
				date: '2025-02-05',
				rating: 4,
				comment:
					'Reliable performance in off-grid setups. A solid choice for remote locations.',
			},
		],
		documents: [
			{ name: 'User Manual', size: '4.5 MB', type: 'PDF' },
			{ name: 'Technical Guide', size: '3.8 MB', type: 'PDF' },
		],
	},
	{
		id: 6,
		name: 'SolarTech Mounting System',
		category: 'accessories',
		price: 129.99,
		rating: 4.6,
		image:
			'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		images: [
			'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		],
		featured: false,
		specs: {
			material: 'Aluminum',
			warranty: '15 Years',
			compatibility: 'Compatible with all SolarTech Panels',
			installation: 'Roof/Ground',
			dimensions: 'Varies by system configuration',
			weight: 'Varies with model',
		},
		description: `The SolarTech Mounting System offers a robust and versatile solution for securely installing solar panels on both roofs and ground mounts. Made from high-grade aluminum, this system is engineered for longevity and stability under even the harshest weather conditions.

Its flexible design ensures compatibility with all SolarTech panels, making installation quick and hassle-free. Ideal for both residential and commercial installations, this mounting system provides a secure foundation for optimal energy production.`,
		features: [
			'High-grade aluminum construction for durability',
			'Versatile mounting options for various installation types',
			'Easy installation with comprehensive hardware',
			'Engineered for high wind and heavy snow loads',
			'Optimized for maximum panel stability',
		],
		reviews: [
			{
				id: 1,
				author: 'Daniel K.',
				date: '2025-03-10',
				rating: 5,
				comment:
					'Robust and easy to install. This mounting system secures our panels perfectly, even during storms.',
			},
		],
		documents: [
			{ name: 'Installation Manual', size: '2.8 MB', type: 'PDF' },
			{ name: 'Warranty Details', size: '1.2 MB', type: 'PDF' },
		],
	},
	{
		id: 7,
		name: 'SolarTech Bifacial 500W Solar Panel',
		category: 'solar-panels',
		price: 349.99,
		rating: 4.7,
		image:
			'https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		images: [
			'https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		],
		featured: true,
		badge: 'New',
		specs: {
			power: '500W',
			efficiency: '22.5%',
			warranty: '30 Years',
			dimensions: '1850 × 1100 × 35 mm',
			weight: '22 kg',
			cellType: 'Bifacial Monocrystalline',
			certifications: 'IEC, UL, MCS',
			operatingTemp: '-40°C to +85°C',
		},
		description: `The SolarTech Bifacial 500W Solar Panel maximizes energy production by capturing sunlight on both sides of the panel. Its advanced bifacial design allows for up to 22.5% more energy generation compared to traditional panels, making it ideal for high-performance installations.

Crafted with premium materials and rigorous testing, this panel delivers consistent performance and reliability, even in challenging environments. Its modern design also adds a sleek aesthetic to any installation.`,
		features: [
			'Dual-sided energy capture with bifacial design',
			'High efficiency of 22.5%',
			'Premium construction for durability',
			'Optimized for both residential and commercial applications',
			'Enhanced performance in low-light conditions',
			'Modern, sleek design that complements any setup',
		],
		reviews: [
			{
				id: 1,
				author: 'Olivia H.',
				date: '2025-02-20',
				rating: 5,
				comment:
					'The bifacial technology truly boosts our energy yield. A modern and efficient panel!',
			},
		],
		documents: [
			{ name: 'Technical Datasheet', size: '3.2 MB', type: 'PDF' },
			{ name: 'Installation Guide', size: '4.5 MB', type: 'PDF' },
		],
	},
	{
		id: 8,
		name: 'SolarTech Lithium 5kWh Battery',
		category: 'batteries',
		price: 3299.99,
		rating: 4.5,
		image:
			'https://images.pexels.com/photos/259920/pexels-photo-259920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		images: [
			'https://images.pexels.com/photos/259920/pexels-photo-259920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			'https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		],
		featured: false,
		specs: {
			capacity: '5kWh',
			cycles: '4000+',
			warranty: '10 Years',
			dimensions: '580 × 500 × 140 mm',
			weight: '70 kg',
			technology: 'Lithium-ion',
			safety: 'Overcharge, Over-discharge, Thermal',
			operatingTemp: '-10°C to +55°C',
		},
		description: `The SolarTech Lithium 5kWh Battery is an advanced energy storage solution designed for residential and commercial solar installations. Built on state-of-the-art lithium-ion technology, this battery delivers high energy density and long cycle life, ensuring reliable backup power and energy independence.

Its compact design and intelligent battery management system provide optimal performance and enhanced safety, making it an essential component for modern renewable energy systems.`,
		features: [
			'High energy density for maximum storage',
			'Advanced lithium-ion technology for extended cycle life',
			'Integrated battery management system for optimal performance',
			'Compact and versatile design',
			'Enhanced safety with overcharge and thermal protection',
			'Reliable backup power solution',
		],
		reviews: [
			{
				id: 1,
				author: 'Ethan R.',
				date: '2025-03-05',
				rating: 4,
				comment:
					'Reliable performance and easy integration. The battery has significantly improved our energy management.',
			},
		],
		documents: [
			{ name: 'Product Manual', size: '5.0 MB', type: 'PDF' },
			{ name: 'Safety Instructions', size: '2.0 MB', type: 'PDF' },
			{ name: 'Technical Overview', size: '3.5 MB', type: 'PDF' },
		],
	},
];

export default products;
