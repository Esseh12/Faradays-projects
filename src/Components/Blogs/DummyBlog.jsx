// dummyBlogs.js
// This file exports an array of 15 blog posts for Faraday’s project.
// There are 6 Solar posts, 6 Inverter posts, and 3 Battery posts.
// Each blog post has a unique title, excerpt, image (sourced from Pexels), and HTML content.

const totalPosts = 15;
const solarPostsCount = 6;
const inverterPostsCount = 6;
const batteryPostsCount = 3;

const dummyBlogs = [];

// Curated image IDs from Pexels for each category
const solarImageIds = [
	2113560, 2179035, 1499692, 1650031, 327533, 2091168, 2063597,
];
const inverterImageIds = [2591804, 2099691, 3064072, 2796678, 3015519];
const batteryImageIds = [3261031, 3536683, 2968792];

// Helper to generate Pexels image URL using a guided format
const generateImageUrl = (imageId) =>
	`https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;

// Create 6 Solar blog posts (IDs 1-6)
for (let i = 0; i < solarPostsCount; i++) {
	const id = i + 1;
	const title = `Solar Energy Spotlight #${i + 1}: Harnessing the Sun`;
	const category = 'Solar';
	const date = new Date(2024, i % 12, (i % 28) + 1).toISOString().split('T')[0];
	const author = 'Faraday Blog Team';
	const excerpt = `Solar Blog #${
		i + 1
	}: In this post, we discuss breakthrough solar panel technologies that enhance efficiency and reduce costs.`;
	// Cycle through the curated solar image IDs
	const imageId = solarImageIds[i % solarImageIds.length];
	const image = {
		url: generateImageUrl(imageId),
		alt: `Solar panels illuminated by sunlight - Image ${i + 1}`,
	};
	const content = `
    <h2>Solar Innovation ${i + 1}</h2>
    <p>This blog post explores innovative photovoltaic designs and energy capture techniques. Post #${
			i + 1
		} dives into real-world applications of solar technology and its sustainable impact on the environment.</p>
  `;

	dummyBlogs.push({
		id,
		title,
		category,
		date,
		author,
		excerpt,
		image,
		content,
		related: [(id % totalPosts) + 1, ((id + 1) % totalPosts) + 1],
	});
}

// Create 6 Inverter blog posts (IDs 7-12)
for (let i = 0; i < inverterPostsCount; i++) {
	const id = solarPostsCount + i + 1; // IDs 7 to 12
	const title = `Inverter Insights #${i + 1}: Optimizing Power Conversion`;
	const category = 'Inverter';
	const date = new Date(2024, i % 12, ((i + 1) % 28) + 1)
		.toISOString()
		.split('T')[0];
	const author = 'Faraday Blog Team';
	const excerpt = `Inverter Blog #${
		i + 1
	}: Learn about advanced inverter systems that efficiently convert DC to AC power and improve overall system performance.`;
	// Cycle through the curated inverter image IDs
	const imageId = inverterImageIds[i % inverterImageIds.length];
	const image = {
		url: generateImageUrl(imageId),
		alt: `Inverter technology highlighted - Image ${i + 1}`,
	};
	const content = `
    <h2>Inverter Technology ${i + 1}</h2>
    <p>This article focuses on how smart inverter designs and digital features are setting new benchmarks in power conversion. Post #${
			i + 1
		} provides insights into system tuning and performance improvements.</p>
  `;

	dummyBlogs.push({
		id,
		title,
		category,
		date,
		author,
		excerpt,
		image,
		content,
		related: [(id % totalPosts) + 1, ((id + 1) % totalPosts) + 1],
	});
}

// Create 3 Battery blog posts (IDs 13-15)
for (let i = 0; i < batteryPostsCount; i++) {
	const id = solarPostsCount + inverterPostsCount + i + 1; // IDs 13 to 15
	const title = `Battery Breakthrough #${i + 1}: Advancing Energy Storage`;
	const category = 'Battery';
	const date = new Date(2024, i % 12, ((i + 2) % 28) + 1)
		.toISOString()
		.split('T')[0];
	const author = 'Faraday Blog Team';
	const excerpt = `Battery Blog #${
		i + 1
	}: Explore innovative battery storage solutions that offer improved energy density and longer life spans.`;
	// Cycle through the curated battery image IDs
	const imageId = batteryImageIds[i % batteryImageIds.length];
	const image = {
		url: generateImageUrl(imageId),
		alt: `Advanced battery storage in focus - Image ${i + 1}`,
	};
	const content = `
    <h2>Battery Innovation ${i + 1}</h2>
    <p>This post examines cutting-edge battery technology and its role in supporting renewable energy systems. Post #${
			i + 1
		} highlights unique design aspects and performance enhancements that drive reliability and scalability.</p>
  `;

	dummyBlogs.push({
		id,
		title,
		category,
		date,
		author,
		excerpt,
		image,
		content,
		related: [(id % totalPosts) + 1, ((id + 1) % totalPosts) + 1],
	});
}

export default dummyBlogs;
