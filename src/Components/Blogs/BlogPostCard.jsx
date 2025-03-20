import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPostCard = ({ blog, fadeIn }) => {
	return (
		<motion.div
			variants={fadeIn}
			initial='hidden'
			animate='visible'>
			<Card className='h-100 shadow-sm blog-card'>
				<Link to={`/blog/${blog.id}`}>
					<div className='blog-image'>
						<img
							src={blog.image}
							alt={blog.title}
						/>
					</div>
					<Card.Body>
						<span className='category-badge'>{blog.category}</span>
						<h3 className='title'>{blog.title}</h3>
						<div className='meta'>
							<span className='author'>{blog.author}</span>
							<span className='date'>{blog.date}</span>
						</div>
						<p className='excerpt'>{blog.excerpt}</p>
					</Card.Body>
				</Link>
			</Card>

			<style jsx>{`
				.blog-card {
					border: none;
					transition: transform 0.3s ease;
				}
				.blog-card:hover {
					transform: translateY(-5px);
				}
				.blog-image {
					height: 200px;
					overflow: hidden;
					border-top-left-radius: 0.25rem;
					border-top-right-radius: 0.25rem;
				}
				.blog-image img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
				.category-badge {
					background: var(--primary-color);
					color: white;
					padding: 0.25rem 1rem;
					border-radius: 20px;
					font-size: 0.75rem;
					margin-bottom: 0.5rem;
					display: inline-block;
				}
				.title {
					font-size: 1.2rem;
					color: var(--secondary-color);
					margin-bottom: 0.5rem;
				}
				.meta {
					font-size: 0.8rem;
					color: var(--text-light);
					margin-bottom: 0.5rem;
					display: flex;
					justify-content: space-between;
				}
				.excerpt {
					font-size: 0.9rem;
					color: var(--text-color);
				}
				:global(:root) {
					--primary-color: #0062cc;
					--secondary-color: #004976;
					--text-color: #333;
					--text-light: #6c757d;
				}
			`}</style>
		</motion.div>
	);
};

export default BlogPostCard;
