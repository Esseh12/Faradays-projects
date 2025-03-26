import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import OffcanvasNavbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import projectsData from '../../Components/Projects/DummyProjects';
import { color } from 'framer-motion';

const ProjectDetail = () => {
	const projectDetailStyle = {
		navLinkDefaultColor: '#000', // black link color
		defaultBg: 'bg-[#fff]',
		scrolledBg: 'bg-[#e5e5e5]',
		defaultNavLinkColor: '#000',
	};

	const { id } = useParams();
	const [project, setProject] = useState(null);
	const [relatedProjects, setRelatedProjects] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			const proj = projectsData.find((p) => p.id === parseInt(id));
			setProject(proj);
			if (proj) {
				setRelatedProjects(
					projectsData.filter((p) => proj.related.includes(p.id))
				);
			}
		}, 500);
	}, [id]);

	if (!project) return <div>Loading...</div>;

	return (
		<>
			<OffcanvasNavbar styleProps={projectDetailStyle} />

			<div className='newspaper-project-detail'>
				<Container>
					{/* Masthead */}
					<header className='masthead'>
						<h1 className='project-title'>{project.title}</h1>
						<div className='byline'>
							<span className='category'>{project.category}</span>
							<span className='separator'>|</span>
							<span className='client'>{project.client}</span>
							<span className='separator'>|</span>
							<span className='date'>{project.date}</span>
						</div>
					</header>

					{/* Main Content */}
					<div className='content-wrapper'>
						<div className='main-content'>
							{/* Hero Image */}
							<figure className='hero-image'>
								<img
									src={project.image}
									alt={project.title}
								/>
								<figcaption>{project.title}</figcaption>
							</figure>

							{/* Article Content */}
							<article
								className='project-article'
								dangerouslySetInnerHTML={{ __html: project.content }}
							/>

							{/* Navigation */}
							<div className='article-footer'>
								<Link
									to='/projects'
									className='back-link'>
									← Back to Projects
								</Link>
							</div>
						</div>

						{/* Sidebar */}
						<aside className='sidebar'>
							{relatedProjects.length > 0 && (
								<div className='related-stories'>
									<h3>Related Stories</h3>
									{relatedProjects.map((proj) => (
										<Link
											key={proj.id}
											to={`/projects/${proj.id}`}
											className='related-story'>
											<img
												src={proj.image}
												alt={proj.title}
											/>
											<h4>{proj.title}</h4>
										</Link>
									))}
								</div>
							)}
						</aside>
					</div>
				</Container>

				<style jsx>{`
					/* Newspaper-style Typography and Layout */
					:root {
						--newspaper-text: 'Merriweather', serif;
						--headline-font: 'Playfair Display', serif;
						--primary-text-color: #2c3e50;
						--secondary-text-color: #34495e;
						--accent-color: #2980b9;
						--background-color: #f4f4f4;
						--border-color: #bdc3c7;
					}

					.newspaper-project-detail {
						// font-family: var(--newspaper-text);
						// background-color: var(--background-color);
						// color: var(--primary-text-color);
						// line-height: 1.7;

						/* Add top margin to prevent overlap with sticky/fixed navbar */
						margin-top: 4rem; /* Default top margin for medium+ screens */
						padding-bottom: 3rem;
						padding-top: 3rem;
					}

					/* Masthead */
					.masthead {
						border-bottom: 3px solid black;
						margin-bottom: 2rem;
						padding-bottom: 1rem;
						text-align: center;
					}

					.project-title {
						font-family: var(--headline-font);
						font-size: 3rem;
						color: black;
						margin-bottom: 0.5rem;
					}

					.byline {
						font-size: 0.9rem;
						color: var(--secondary-text-color);
						text-transform: uppercase;
						letter-spacing: 1px;
					}

					.byline .separator {
						margin: 0 10px;
						color: var(--border-color);
					}

					/* Content Wrapper */
					.content-wrapper {
						display: flex;
						gap: 2rem;
					}

					.main-content {
						flex: 3;
					}

					.sidebar {
						flex: 1;
						border-left: 1px solid var(--border-color);
						padding-left: 1rem;
					}

					/* Hero Image */
					.hero-image {
						margin-bottom: 2rem;
					}

					.hero-image img {
						width: 100%;
						height: 400px;
						object-fit: cover;
					}

					.hero-image figcaption {
						font-style: italic;
						text-align: center;
						margin-top: 0.5rem;
						color: var(--secondary-text-color);
					}

					/* Article Styling */
					.project-article {
						column-count: 2;
						column-gap: 2rem;
						font-size: 1rem;
					}

					.project-article p {
						margin-bottom: 1rem;
						text-indent: 1.5rem;
					}

					.project-article p:first-of-type::first-letter {
						float: left;
						font-size: 4rem;
						line-height: 0.8;
						padding-right: 0.5rem;
						color: var(--accent-color);
						font-weight: bold;
					}

					/* Related Stories */
					.related-stories h3 {
						border-bottom: 2px solid black;
						padding-bottom: 0.5rem;
						margin-bottom: 1rem;
					}

					.related-story {
						display: block;
						margin-bottom: 1rem;
						text-decoration: none;
						color: var(--primary-text-color);
					}

					.related-story img {
						width: 100%;
						height: 200px;
						object-fit: cover;
						margin-bottom: 0.5rem;
					}

					.related-story h4 {
						font-size: 1.1rem;
						margin: 0;
					}

					/* Article Footer */
					.article-footer {
						margin-top: 2rem;
						text-align: center;
						border-top: 1px solid var(--border-color);
						padding-top: 1rem;
					}

					.back-link {
						color: var(--accent-color);
						text-decoration: none;
						font-weight: bold;
					}

					/* Responsive Adjustments */
					@media (max-width: 992px) {
						.newspaper-project-detail {
							margin-top: 5rem; /* Slightly smaller margin on tablets */
						}
					}

					@media (max-width: 768px) {
						.newspaper-project-detail {
							margin-top: 4rem; /* Smaller margin on mobile */
						}

						.content-wrapper {
							flex-direction: column;
						}

						.sidebar {
							border-left: none;
							border-top: 1px solid var(--border-color);
							padding-left: 0;
							margin-top: 1rem;
						}

						.project-article {
							column-count: 1;
						}
					}
				`}</style>
			</div>

			<Footer />
		</>
	);
};

export default ProjectDetail;
