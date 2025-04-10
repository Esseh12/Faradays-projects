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
		// Preload hero background image and update state when loaded
		const img = new Image();
		img.src =
			'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/price-solar-desktop';
		img.onload = () => setImageLoaded(true);

		// Simulate API call for blogs
		const fetchBlogs = async () => {
			setIsLoading(true);
			try {
				await new Promise((resolve) => setTimeout(resolve, 500));
				setBlogs(dummyBlogs);
				setIsLoading(false);
			} catch (error) {
				console.error('Failed to fetch blogs');
				setIsLoading(false);
			}
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
			<OffcanvasNavbar />

			{/* Hero Section spanning full width with dark overlay */}
			<div className={`hero-section ${imageLoaded ? 'image-loaded' : ''}`}>
				<div className='hero-overlay'></div>
				<div className='hero-text'>
					<h1>Faraday Insights</h1>
					<p>Illuminating the Future of Energy Technology</p>
				</div>
			</div>

			{/* Main content container */}
			<div className='bg-white font-serif max-w-7xl mx-auto px-4 pb-5'>
				{/* Navigation/Category Filter */}
				<nav className='border-b py-4'>
					<div className='flex justify-center space-x-6'>
						{categories.map((category) => (
							<button
								key={category.id}
								className={`
                  uppercase text-sm font-semibold tracking-wider px-4 py-2
                  ${
										activeCategory === category.id
											? 'text-black border-b-2 border-black'
											: 'text-gray-500 hover:text-black'
									}
                `}
								onClick={() => setActiveCategory(category.id)}>
								{category.name}
							</button>
						))}
					</div>
				</nav>

				{/* Featured Story */}
				<section className='my-12'>
					{isLoading ? (
						<div className='grid md:grid-cols-2 gap-8'>
							{/* Featured image skeleton */}
							<div className='h-96 bg-gray-300 animate-pulse rounded'></div>
							{/* Featured text skeleton */}
							<div className='space-y-4'>
								<div className='h-6 w-1/3 bg-gray-300 animate-pulse rounded'></div>
								<div className='h-10 w-full bg-gray-300 animate-pulse rounded'></div>
								<div className='h-4 w-1/2 bg-gray-300 animate-pulse rounded'></div>
								<div className='h-4 w-full bg-gray-300 animate-pulse rounded'></div>
								<div className='h-4 w-full bg-gray-300 animate-pulse rounded'></div>
								<div className='h-8 w-32 bg-gray-300 animate-pulse rounded'></div>
							</div>
						</div>
					) : (
						featuredPost && (
							<div className='grid md:grid-cols-2 gap-8'>
								<div className='overflow-hidden'>
									<img
										src={featuredPost.image.url}
										alt={featuredPost.title}
										className='w-full h-96 object-cover transform hover:scale-105 transition-transform duration-300'
									/>
								</div>
								<div className='d-flex flex-col justify-center'>
									<span className='text-sm uppercase text-red-600 font-bold tracking-wider'>
										{featuredPost.category}
									</span>
									<h2 className='text-3xl font-bold mt-2 mb-4 leading-tight'>
										{featuredPost.title}
									</h2>
									<div className='text-gray-600 mb-4 flex items-center space-x-4 gap-2'>
										<span>{featuredPost.author}</span>
										<span className='h-4 w-px bg-gray-300'></span>
										<span>{featuredPost.date}</span>
									</div>
									<p className='text-lg text-gray-800 leading-relaxed'>
										{featuredPost.excerpt}
									</p>
									<Link
										to={`/blog/${featuredPost.id}`}
										className='mt-4 inline-block text-blue-600 hover:underline'>
										View Blog →
									</Link>
								</div>
							</div>
						)
					)}
				</section>

				{/* Latest Stories Grid */}
				<section>
					<h3 className='text-2xl font-bold border-b-2 border-black pb-2 mb-8 mt-5'>
						Latest Stories
					</h3>
					{isLoading ? (
						<div className='grid md:grid-cols-3 gap-8'>
							{Array.from({ length: 6 }).map((_, index) => (
								<div
									key={index}
									className='group border-b pb-6 last:border-b-0'>
									<div className='mb-4'>
										<div className='w-full h-48 bg-gray-300 animate-pulse rounded'></div>
									</div>
									<div className='space-y-2'>
										<div className='h-4 w-20 bg-gray-300 animate-pulse rounded'></div>
										<div className='h-6 w-full bg-gray-300 animate-pulse rounded'></div>
										<div className='h-4 w-32 bg-gray-300 animate-pulse rounded'></div>
										<div className='h-4 w-full bg-gray-300 animate-pulse rounded'></div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className='grid md:grid-cols-3 gap-8'>
							{otherPosts.map((blog) => (
								<Link
									to={`/blog/${blog.id}`}
									key={blog.id}>
									<article className='group border-b pb-6 last:border-b-0 hover:shadow-lg transition-shadow duration-300 p-4 m-2'>
										<div className='overflow-hidden mb-4'>
											<img
												src={blog.image.url}
												alt={blog.title}
												className='w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300'
											/>
										</div>
										<span className='text-xs uppercase text-gray-500 tracking-wider'>
											{blog.category}
										</span>
										<h4 className='text-xl font-bold mt-2 mb-3 group-hover:text-blue-600 transition-colors'>
											{blog.title}
										</h4>
										<div className='text-sm text-gray-600 mb-3 flex items-center space-x-3 gap-2'>
											<span>{blog.author}</span>
											<span className='h-3 w-px bg-gray-300'></span>
											<span>{blog.date}</span>
										</div>
										<p className='text-gray-700 line-clamp-3'>{blog.excerpt}</p>
										<div className='mt-4'>
											<span className='text-blue-600 hover:underline font-semibold'>
												View Blog →
											</span>
										</div>
									</article>
								</Link>
							))}
						</div>
					)}
				</section>
			</div>

			<Footer />

			<style jsx>{`
				.hero-section {
					position: relative;
					min-height: 50vh;
					width: 100%;
					background-image: url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/price-solar-desktop');
					background-size: cover;
					background-position: center;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 4rem 0;
					transition: opacity 0.5s ease;
				}
				.hero-section.image-loaded {
					opacity: 1;
				}
				.hero-overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: rgba(0, 0, 0, 0.55);
					z-index: 1;
				}
				.hero-text {
					position: relative;
					z-index: 2;
					text-align: center;
					color: white;
					animation: slideInUp 1s ease-out;
				}
				@keyframes slideInUp {
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
