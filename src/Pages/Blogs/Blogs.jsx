import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import BlogPostCard from '../../Components/Blogs/BlogPostCard';
import dummyBlogs from '../../Components/Blogs/DummyBlog';

const BlogPage = () => {
	const [activeCategory, setActiveCategory] = useState('all');
	const [blogs, setBlogs] = useState([]);

	// Define categories that reflect the three topics
	const categories = [
		{ id: 'all', name: 'All Topics' },
		{ id: 'Solar', name: 'Solar' },
		{ id: 'Inverter', name: 'Inverter' },
		{ id: 'Battery', name: 'Battery' },
	];

	useEffect(() => {
		// Simulate API call
		setTimeout(() => {
			setBlogs(dummyBlogs);
		}, 500);
	}, []);

	const filteredBlogs =
		activeCategory === 'all'
			? blogs
			: blogs.filter((blog) => blog.category === activeCategory);

	// Magazine fade-in animation variants
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	// Extract the first post as the featured post
	const [featuredPost, ...otherPosts] = filteredBlogs;

	return (
		<div className='blog-page'>
			<section className='header-section'>
				<Container>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8 }}>
						<h1>Faraday Insights</h1>
						<p>
							Your trusted source for solar, inverter, and battery solutions
						</p>
					</motion.div>
				</Container>
			</section>

			<section className='category-filter'>
				<Container>
					{categories.map((category) => (
						<button
							key={category.id}
							className={`filter-btn ${
								activeCategory === category.id ? 'active' : ''
							}`}
							onClick={() => setActiveCategory(category.id)}>
							{category.name}
						</button>
					))}
				</Container>
			</section>

			{featuredPost && (
				<section className='featured-post'>
					<Container>
						<Row>
							<Col md={12}>
								<motion.div
									variants={fadeIn}
									initial='hidden'
									animate='visible'>
									<div className='featured-image'>
										<img
											src={featuredPost.image}
											alt={featuredPost.title}
										/>
									</div>
									<div className='featured-content'>
										<span className='category-badge'>
											{featuredPost.category}
										</span>
										<h2>{featuredPost.title}</h2>
										<div className='meta'>
											<span>{featuredPost.author}</span>
											<span>{featuredPost.date}</span>
										</div>
										<p>{featuredPost.excerpt}</p>
									</div>
								</motion.div>
							</Col>
						</Row>
					</Container>
				</section>
			)}

			<section className='posts-grid'>
				<Container>
					<Row>
						{otherPosts.map((blog) => (
							<Col
								key={blog.id}
								md={6}
								lg={4}
								className='mb-4'>
								<BlogPostCard
									blog={blog}
									fadeIn={fadeIn}
								/>
							</Col>
						))}
					</Row>
				</Container>
			</section>

			<style jsx>{`
				.blog-page {
					--primary-color: #0062cc;
					--secondary-color: #004976;
					--text-color: #333;
					--text-light: #6c757d;
					font-family: 'Inter', sans-serif;
				}
				.header-section {
					background: linear-gradient(
							rgba(0, 66, 118, 0.8),
							rgba(0, 66, 118, 0.8)
						),
						url('https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
							center/cover no-repeat;
					color: white;
					padding: 6rem 0;
					text-align: center;
				}
				.header-section h1 {
					font-size: 3rem;
					margin-bottom: 1rem;
				}
				.header-section p {
					font-size: 1.25rem;
					max-width: 800px;
					margin: 0 auto;
				}
				.category-filter {
					padding: 1rem 0;
					text-align: center;
					background: #f8f9fa;
				}
				.filter-btn {
					background: none;
					border: 2px solid var(--primary-color);
					color: var(--primary-color);
					padding: 0.5rem 1rem;
					border-radius: 30px;
					margin: 0 0.25rem;
					margin-bottom: 0.5rem;
					transition: all 0.3s ease;
				}
				.filter-btn.active,
				.filter-btn:hover {
					background: var(--primary-color);
					color: white;
				}
				.featured-post {
					margin: 2rem 0;
				}
				.featured-image img {
					width: 100%;
					height: 400px;
					object-fit: cover;
					border-radius: 0.5rem;
					margin-bottom: 1rem;
				}
				.featured-content {
					text-align: left;
					padding: 1rem;
				}
				.featured-content h2 {
					font-size: 2rem;
					color: var(--secondary-color);
					margin-bottom: 0.5rem;
				}
				.featured-content .meta {
					color: var(--text-light);
					font-size: 0.9rem;
					margin-bottom: 1rem;
					display: flex;
					justify-content: space-between;
				}
				.posts-grid {
					padding: 2rem 0;
				}
			`}</style>
		</div>
	);
};

export default BlogPage;
