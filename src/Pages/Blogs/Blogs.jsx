import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OffcanvasNavbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import dummyBlogs from '../../Components/Blogs/DummyBlog';

const BlogPage = () => {
	const [activeCategory, setActiveCategory] = useState('all');
	const [blogs, setBlogs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [imageLoaded, setImageLoaded] = useState(false);

	const categories = [
		{ id: 'all', name: 'All Topics' },
		{ id: 'Solar', name: 'Solar' },
		{ id: 'Inverter', name: 'Inverter' },
		{ id: 'Battery', name: 'Battery' },
	];

	useEffect(() => {
		const heroImage = new Image();
		heroImage.src =
			'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/price-solar-desktop';
		heroImage.onload = () => setImageLoaded(true);

		const fetchBlogs = async () => {
			setIsLoading(true);
			try {
				await new Promise((resolve) => setTimeout(resolve, 500));
				setBlogs(dummyBlogs);
			} catch (err) {
				console.error('Error fetching blogs:', err);
			}
			setIsLoading(false);
		};

		fetchBlogs();
	}, []);

	const filteredBlogs =
		activeCategory === 'all'
			? blogs
			: blogs.filter((blog) => blog.category === activeCategory);

	const [featuredPost, ...otherPosts] = filteredBlogs;

	return (
		<>
			{/* Global style to prevent horizontal overflow */}
			<style
				jsx
				global>{`
				html,
				body {
					overflow-x: hidden;
					margin: 0;
					padding: 0;
				}
			`}</style>
			<OffcanvasNavbar />

			{/* Hero Section */}
			<div className={`hero-section ${imageLoaded ? 'image-loaded' : ''}`}>
				<div className='hero-overlay'></div>
				<div className='hero-text'>
					<h1>Faraday Insights</h1>
					<p>Illuminating the Future of Energy Technology</p>
				</div>
			</div>

			{/* Blog Content */}
			<div className='max-w-7xl mx-auto px-4 bg-white font-serif pb-10'>
				{/* Category Filter */}
				<nav className='border-b py-5'>
					<div className='flex justify-center gap-6'>
						{categories.map(({ id, name }) => (
							<button
								key={id}
								onClick={() => setActiveCategory(id)}
								className={`uppercase text-sm font-semibold px-4 py-2 ${
									activeCategory === id
										? 'text-black border-b-2 border-black'
										: 'text-gray-500 hover:text-black'
								}`}>
								{name}
							</button>
						))}
					</div>
				</nav>

				{/* Featured Blog */}
				<section className='my-12'>
					{isLoading ? (
						<div className='grid md:grid-cols-2 gap-8 animate-pulse'>
							<div className='h-96 bg-gray-300 rounded'></div>
							<div className='space-y-4'>
								<div className='h-6 w-1/3 bg-gray-300 rounded'></div>
								<div className='h-10 bg-gray-300 rounded'></div>
								<div className='h-4 w-1/2 bg-gray-300 rounded'></div>
								<div className='h-4 bg-gray-300 rounded'></div>
								<div className='h-8 w-32 bg-gray-300 rounded'></div>
							</div>
						</div>
					) : (
						featuredPost && (
							<div className='grid md:grid-cols-2 gap-8'>
								<img
									src={featuredPost.image.url}
									alt={featuredPost.title}
									className='h-96 w-full object-cover rounded transform hover:scale-105 transition duration-300'
								/>
								<div className='flex flex-col justify-center'>
									<span className='text-sm uppercase text-red-600 font-bold'>
										{featuredPost.category}
									</span>
									<h2 className='text-3xl font-bold mt-2'>
										{featuredPost.title}
									</h2>
									<p className='text-gray-600 text-sm my-2'>
										{featuredPost.author} &middot; {featuredPost.date}
									</p>
									<p className='text-lg text-gray-800'>
										{featuredPost.excerpt}
									</p>
									<Link
										to={`/blog/${featuredPost.id}`}
										className='text-blue-600 mt-4 hover:underline'>
										View Blog →
									</Link>
								</div>
							</div>
						)
					)}
				</section>

				{/* Latest Posts */}
				<section>
					<h3 className='text-2xl font-bold mb-6'>Latest Stories</h3>
					<div className='grid md:grid-cols-3 gap-8'>
						{isLoading
							? Array.from({ length: 6 }).map((_, i) => (
									<div
										key={i}
										className='space-y-3 animate-pulse'>
										<div className='h-48 bg-gray-300 rounded'></div>
										<div className='h-4 w-1/3 bg-gray-300 rounded'></div>
										<div className='h-6 w-3/4 bg-gray-300 rounded'></div>
										<div className='h-4 w-full bg-gray-300 rounded'></div>
									</div>
							  ))
							: otherPosts.map((blog) => (
									<Link
										to={`/blog/${blog.id}`}
										key={blog.id}>
										<article className='group p-4 border-b hover:shadow-lg transition'>
											<img
												src={blog.image.url}
												alt={blog.title}
												className='h-48 w-full object-cover rounded mb-4 group-hover:scale-105 transition-transform'
											/>
											<span className='text-xs uppercase text-gray-500'>
												{blog.category}
											</span>
											<h4 className='text-lg font-semibold mt-1 group-hover:text-blue-600'>
												{blog.title}
											</h4>
											<p className='text-sm text-gray-600 my-1'>
												{blog.author} &middot; {blog.date}
											</p>
											<p className='text-gray-700 line-clamp-3'>
												{blog.excerpt}
											</p>
										</article>
									</Link>
							  ))}
					</div>
				</section>
			</div>

			<Footer />

			<style jsx>{`
				.hero-section {
					position: relative;
					min-height: 50vh;
					background: url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/price-solar-desktop')
						center/cover no-repeat;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.hero-overlay {
					position: absolute;
					inset: 0;
					background-color: rgba(0, 0, 0, 0.5);
					z-index: 1;
				}
				.hero-text {
					position: relative;
					z-index: 2;
					color: white;
					text-align: center;
					animation: fadeInUp 1s ease-out;
				}
				@keyframes fadeInUp {
					from {
						transform: translateY(20px);
						opacity: 0;
					}
					to {
						transform: translateY(0);
						opacity: 1;
					}
				}
			`}</style>
		</>
	);
};

export default BlogPage;
