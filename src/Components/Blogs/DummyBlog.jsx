// dummyBlogs.js
// This file exports an array of 50 blog posts for Faraday’s project,
// with 20 Solar posts, 20 Inverter posts, and 10 Battery posts.

const totalPosts = 50;
const solarPostsCount = 20;
const inverterPostsCount = 20;
const batteryPostsCount = 10;

const dummyBlogs = [];

// Create 20 Solar posts (IDs 1-20)
for (let i = 0; i < solarPostsCount; i++) {
	const id = i + 1;
	const title = `Solar Energy Breakthrough #${i + 1}`;
	const category = 'Solar';
	const date = new Date(2024, i % 12, (i % 28) + 1).toISOString().split('T')[0];
	const author = 'Faraday Team';
	const excerpt =
		'Explore innovative solar panel technology designed to maximize energy output and lower electricity bills.';
	// Use image IDs from 101 upward for Solar posts
	const image = `https://images.pexels.com/photos/${101 + i}/pexels-photo-${
		101 + i
	}.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260`;
	const content = `<h2>Solar Innovation in Focus</h2>
<p>Post #${
		i + 1
	} dives into the latest advancements in solar energy systems. Learn how enhanced photovoltaic cells, smarter tracking systems, and robust installation methods are setting new standards for efficiency and sustainability.</p>
<h3>Why It Matters</h3>
<p>Our solar technology breakthroughs help homeowners and businesses reduce energy costs while promoting a greener future.</p>`;

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

// Create 20 Inverter posts (IDs 21-40)
for (let i = 0; i < inverterPostsCount; i++) {
	const id = solarPostsCount + i + 1; // IDs 21 to 40
	const title = `Inverter Insights #${i + 1}`;
	const category = 'Inverter';
	const date = new Date(2024, i % 12, ((i + 1) % 28) + 1)
		.toISOString()
		.split('T')[0];
	const author = 'Faraday Team';
	const excerpt =
		'Gain expert knowledge on inverter selection, maintenance, and optimization to ensure peak performance for your solar system.';
	// Use image IDs from 121 upward for Inverter posts
	const image = `https://images.pexels.com/photos/${121 + i}/pexels-photo-${
		121 + i
	}.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260`;
	const content = `<h2>Understanding Inverter Technology</h2>
<p>Post #${
		i + 1
	} offers an in-depth look into the mechanics of inverters. Discover the differences between string inverters, microinverters, and hybrid systems, and learn how each type contributes to system efficiency.</p>
<h3>Key Benefits</h3>
<p>Reliable DC-to-AC conversion, improved energy yield, and longer system lifespan are at the core of our inverter solutions.</p>`;

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

// Create 10 Battery posts (IDs 41-50)
for (let i = 0; i < batteryPostsCount; i++) {
	const id = solarPostsCount + inverterPostsCount + i + 1; // IDs 41 to 50
	const title = `Battery Storage Solutions #${i + 1}`;
	const category = 'Battery';
	const date = new Date(2024, i % 12, ((i + 2) % 28) + 1)
		.toISOString()
		.split('T')[0];
	const author = 'Faraday Team';
	const excerpt =
		'Discover state-of-the-art battery storage systems that optimize energy retention and deliver reliable performance for your renewable setup.';
	// Use image IDs from 141 upward for Battery posts
	const image = `https://images.pexels.com/photos/${141 + i}/pexels-photo-${
		141 + i
	}.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260`;
	const content = `<h2>Revolutionizing Battery Storage</h2>
<p>Post #${
		i + 1
	} explains the evolution of battery technology in renewable energy. Learn about innovations in energy density, longevity, and safety that are driving the next generation of battery storage solutions.</p>
<h3>Advantages</h3>
<p>Enhanced storage capacity, rapid charge/discharge cycles, and robust system integration make these battery solutions ideal for modern energy demands.</p>`;

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
