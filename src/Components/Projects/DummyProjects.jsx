// dummyProjects.js
// This file exports an array of 15 project posts for Faraday’s project.
// There are 7 Solar projects, 5 Inverter projects, and 3 Battery projects.
// Each project has a unique title, description, image (sourced from Pexels), and content.

const projects = [];

// Curated image IDs from Pexels for each category

// Solar projects: 7 images
const solarImageIds = [
	2113560, // solar panels on roof
	2179035, // array of solar panels
	1499692, // sunlight on solar panels
	1650031, // solar panels in field
	327533, // close-up of solar panel
	2091168, // modern solar installation
	2063597, // solar panels with blue sky
];

// Inverter projects: 5 images
const inverterImageIds = [
	2591804, // inverter device on table
	2099691, // inverter close-up
	3064072, // industrial inverter setup
	2796678, // inverter with digital display
	3015519, // inverter integrated into system
];

// Battery projects: 3 images
const batteryImageIds = [
	3261031, // battery storage facility
	3536683, // modern battery setup
	2968792, // close-up of battery units
];

// Create 7 Solar projects (IDs 1-7)
for (let i = 0; i < 7; i++) {
	const id = i + 1;
	const title = `Solar Installation Project #${i + 1}: Empowering Clean Energy`;
	const category = 'Solar';
	const date = new Date(2024, i % 12, (i % 28) + 1).toISOString().split('T')[0];
	const client = 'Green Horizons Inc.';
	const excerpt = `Faraday provided a state-of-the-art solar installation for a leading renewable energy client. This project enhanced energy efficiency and reduced carbon footprint.`;
	const imageId = solarImageIds[i];
	const image = `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260`;
	const content = `
    <h2>Project Overview</h2>
    <p>In project #${
			i + 1
		}, Faraday engineered a high-performance solar system that harnesses maximum sunlight while maintaining efficiency under variable conditions. The installation involved premium solar panels, optimized layout, and integrated monitoring systems.</p>
    <h3>Key Highlights</h3>
    <p>This project achieved remarkable energy yield improvements and demonstrated the reliability of our solar solutions in a commercial setting.</p>
  `;

	projects.push({
		id,
		title,
		category,
		date,
		client,
		excerpt,
		image,
		content,
		related: [(id % 15) + 1, ((id + 1) % 15) + 1],
	});
}

// Create 5 Inverter projects (IDs 8-12)
for (let i = 0; i < 5; i++) {
	const id = 7 + i + 1; // IDs 8 to 12
	const title = `Inverter Integration Project #${
		i + 1
	}: Optimized Power Conversion`;
	const category = 'Inverter';
	const date = new Date(2024, i % 12, ((i + 2) % 28) + 1)
		.toISOString()
		.split('T')[0];
	const client = 'Innovative Energy Solutions';
	const excerpt = `A comprehensive inverter integration ensured seamless DC to AC conversion, maximizing system performance and reliability.`;
	const imageId = inverterImageIds[i];
	const image = `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260`;
	const content = `
    <h2>Project Details</h2>
    <p>Project #${
			i + 1
		} focused on integrating advanced inverters with existing solar arrays to optimize power conversion efficiency. The work included system tuning and real-time monitoring.</p>
    <h3>Impact</h3>
    <p>The improved inverter system resulted in a notable increase in energy yield and operational stability.</p>
  `;

	projects.push({
		id,
		title,
		category,
		date,
		client,
		excerpt,
		image,
		content,
		related: [(id % 15) + 1, ((id + 1) % 15) + 1],
	});
}

// Create 3 Battery projects (IDs 13-15)
for (let i = 0; i < 3; i++) {
	const id = 12 + i + 1; // IDs 13 to 15
	const title = `Battery Storage Project #${i + 1}: Reliable Energy Backup`;
	const category = 'Battery';
	const date = new Date(2024, i % 12, ((i + 3) % 28) + 1)
		.toISOString()
		.split('T')[0];
	const client = 'Sustainable Future Co.';
	const excerpt = `Faraday delivered robust battery storage solutions to ensure uninterrupted power supply and efficient energy management.`;
	const imageId = batteryImageIds[i];
	const image = `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260`;
	const content = `
    <h2>Project Insight</h2>
    <p>In project #${
			i + 1
		}, our team installed state-of-the-art battery storage systems that provide backup power and enhance energy utilization. The design focused on longevity and safety.</p>
    <h3>Outcomes</h3>
    <p>This project improved energy reliability and offered a scalable solution for future expansion.</p>
  `;

	projects.push({
		id,
		title,
		category,
		date,
		client,
		excerpt,
		image,
		content,
		related: [(id % 15) + 1, ((id + 1) % 15) + 1],
	});
}

export default projects;
