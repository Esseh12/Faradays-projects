import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import dummyBlogs from '../../Components/Blogs/DummyBlog';

const BlogDetail = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			const post = dummyBlogs.find((b) => b.id === parseInt(id));
			setBlog(post);
			if (post) {
				setRelatedPosts(dummyBlogs.filter((b) => post.related.includes(b.id)));
			}
		}, 500);
	}, [id]);

	if (!blog) return <div>Loading...</div>;

	return (
		<div className='blog-detail'>
			<section className='post-hero'>
				<img
					src={blog.image}
					alt={blog.title}
				/>
			</section>

			<Container>
				<article className='post-content'>
					<div className='text-center meta'>
						<span className='category'>{blog.category}</span>
						<h1>{blog.title}</h1>
						<div className='author-date'>
							<span>By {blog.author}</span>
							<span>{blog.date}</span>
						</div>
					</div>

					<div
						className='content'
						dangerouslySetInnerHTML={{ __html: blog.content }}
					/>

					<div className='text-center social-sharing'>
						<h4>Share this post:</h4>
						<div className='buttons'>
							<button>Twitter</button>
							<button>Facebook</button>
							<button>LinkedIn</button>
						</div>
					</div>
				</article>

				{relatedPosts.length > 0 && (
					<section className='border-top mt-5 pt-3 related-posts'>
						<h2>Related Articles</h2>
						<Row>
							{relatedPosts.map((post) => (
								<Col
									md={4}
									key={post.id}>
									<Link
										to={`/blog/${post.id}`}
										className='related-post'>
										<img
											src={post.image}
											alt={post.title}
										/>
										<h3>{post.title}</h3>
									</Link>
								</Col>
							))}
						</Row>
					</section>
				)}
			</Container>

			<style jsx>{`
				.blog-detail {
					padding: 4rem 0;
				}
				.post-hero img {
					width: 100%;
					height: 400px;
					object-fit: cover;
					margin-bottom: 2rem;
				}
				.post-content {
					max-width: 800px;
					margin: 0 auto;
				}
				.meta .category {
					background: var(--primary-color);
					color: white;
					padding: 0.5rem 1rem;
					border-radius: 30px;
					font-size: 0.9rem;
					margin-bottom: 1rem;
				}
				h1 {
					font-size: 2.5rem;
					margin: 1.5rem 0;
					color: var(--secondary-color);
				}
				.author-date {
					display: flex;
					justify-content: center;
					gap: 1rem;
					color: var(--text-light);
					font-size: 0.9rem;
				}
				.content {
					line-height: 1.7;
					font-size: 1.1rem;
					color: var(--text-color);
				}
				.social-sharing h4 {
					margin-bottom: 1rem;
				}
				.related-posts h2 {
					margin-bottom: 1rem;
					color: var(--secondary-color);
				}
				.related-post img {
					height: 200px;
					width: 100%;
					object-fit: cover;
					border-radius: 0.5rem;
					margin-bottom: 0.5rem;
				}
				:global(:root) {
					--primary-color: #0062cc;
					--secondary-color: #004976;
					--text-color: #333;
					--text-light: #6c757d;
				}
			`}</style>
		</div>
	);
};

export default BlogDetail;
