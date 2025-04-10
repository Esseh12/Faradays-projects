import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import {
	FaCalendar,
	FaUser,
	FaShareAlt,
	FaTwitter,
	FaFacebook,
	FaLinkedin,
} from 'react-icons/fa';
import dummyBlogs from '../../Components/Blogs/DummyBlog';
import OffcanvasNavbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const BlogDetail = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
		// Simulate an API call delay
		setTimeout(() => {
			const post = dummyBlogs.find((b) => b.id === parseInt(id));
			setBlog(post);
			if (post) {
				setRelatedPosts(dummyBlogs.filter((b) => post.related.includes(b.id)));
			}
		}, 500);
	}, [id]);

	if (!blog) return <div className='loading'>Loading...</div>;

	return (
		<>
			<OffcanvasNavbar />
			<div className='blog-detail'>
				<div className='blog-hero'>
					<img
						src={blog.image.url}
						alt={blog.title}
						className='hero-image'
					/>
				</div>

				<Container>
					<article className='blog-content'>
						<div className='blog-header'>
							<span className='category-tag'>{blog.category}</span>
							<h1 className='blog-title'>{blog.title}</h1>

							<div className='blog-meta'>
								<div className='meta-item'>
									<FaUser />
									<span>{blog.author}</span>
								</div>
								<div className='meta-item'>
									<FaCalendar />
									<span>{blog.date}</span>
								</div>
							</div>
						</div>

						<div
							className='blog-body'
							dangerouslySetInnerHTML={{ __html: blog.content }}
						/>

						<div className='social-share'>
							<h4>Share this article</h4>
							<div className='share-buttons'>
								<button className='share-btn twitter'>
									<FaTwitter />
									<span>Twitter</span>
								</button>
								<button className='share-btn facebook'>
									<FaFacebook />
									<span>Facebook</span>
								</button>
								<button className='share-btn linkedin'>
									<FaLinkedin />
									<span>LinkedIn</span>
								</button>
							</div>
						</div>
					</article>

					{relatedPosts.length > 0 && (
						<section className='related-posts'>
							<h2>More from our blog</h2>
							<Row>
								{relatedPosts.map((post) => (
									<Col
										md={4}
										key={post.id}>
										<Link
											to={`/blog/${post.id}`}
											className='related-post-card'>
											<div className='related-post-image'>
												<img
													src={post.image.url}
													alt={post.title}
												/>
											</div>
											<div className='related-post-content'>
												<h3>{post.title}</h3>
											</div>
										</Link>
									</Col>
								))}
							</Row>
						</section>
					)}
				</Container>
			</div>
			<Footer />

			<style jsx>{`
				:root {
					--color-background: #f4f7f6;
					--color-text-primary: #1a2b3c;
					--color-text-secondary: #4a5568;
					--color-accent: #3182ce;
					--color-accent-light: #e6f2ff;
				}

				.blog-detail {
					background-color: var(--color-background);
					color: var(--color-text-primary);
					font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
						Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
						sans-serif;
				}

				.blog-hero {
					margin-bottom: 2rem;
				}

				.hero-image {
					width: 100%;
					height: 500px;
					object-fit: cover;
					border-radius: 12px;
					box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
				}

				.blog-content {
					background-color: white;
					padding: 3rem;
					border-radius: 12px;
					box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
					margin-top: -100px;
					position: relative;
					z-index: 10;
				}

				.blog-header {
					text-align: center;
					margin-bottom: 2rem;
				}

				.category-tag {
					background-color: var(--color-accent-light);
					color: var(--color-accent);
					padding: 0.5rem 1rem;
					border-radius: 20px;
					font-size: 0.8rem;
					font-weight: 600;
					display: inline-block;
					margin-bottom: 1rem;
				}

				.blog-title {
					font-size: 2.5rem;
					font-weight: 700;
					color: var(--color-text-primary);
					margin-bottom: 1rem;
				}

				.blog-meta {
					display: flex;
					justify-content: center;
					gap: 1.5rem;
					color: var(--color-text-secondary);
				}

				.meta-item {
					display: flex;
					align-items: center;
					gap: 0.5rem;
				}

				.blog-body {
					line-height: 1.8;
					font-size: 1.1rem;
					color: var(--color-text-secondary);
					margin-top: 2rem;
				}

				.social-share {
					text-align: center;
					margin-top: 3rem;
					padding-top: 2rem;
					border-top: 1px solid rgba(0, 0, 0, 0.1);
				}

				.share-buttons {
					display: flex;
					justify-content: center;
					gap: 1rem;
				}

				.share-btn {
					display: flex;
					align-items: center;
					gap: 0.5rem;
					padding: 0.75rem 1.5rem;
					border: none;
					border-radius: 8px;
					font-weight: 600;
					cursor: pointer;
					transition: all 0.3s ease;
				}

				.share-btn.twitter {
					background-color: #1da1f2;
					color: white;
				}
				.share-btn.facebook {
					background-color: #3b5998;
					color: white;
				}
				.share-btn.linkedin {
					background-color: #0077b5;
					color: white;
				}

				.related-posts {
					margin-top: 3rem;
				}

				.related-posts h2 {
					text-align: center;
					margin-bottom: 2rem;
					font-size: 2rem;
				}

				.related-post-card {
					display: block;
					text-decoration: none;
					color: var(--color-text-primary);
					margin-bottom: 1.5rem;
					transition: transform 0.3s ease;
				}

				.related-post-card:hover {
					transform: translateY(-5px);
				}

				.related-post-image img {
					width: 100%;
					height: 250px;
					object-fit: cover;
					border-radius: 12px;
				}

				.related-post-content h3 {
					margin-top: 1rem;
					font-size: 1.2rem;
					font-weight: 600;
				}
			`}</style>
		</>
	);
};

export default BlogDetail;
