import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import OffcanvasNavbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectHero from '../../Components/Projects/ProjectHero';
import projectsData from '../../Components/Projects/DummyProjects';

const ProjectsPage = () => {
	const [activeCategory, setActiveCategory] = useState('all');
	const [projects, setProjects] = useState([]);
	const [imageLoaded, setImageLoaded] = useState(false);
	const bgImage =
		'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/price-solar-desktop';

	useEffect(() => {
		// Simulate API call for projects
		setTimeout(() => {
			setProjects(projectsData);
		}, 500);
	}, []);

	const filteredProjects =
		activeCategory === 'all'
			? projects
			: projects.filter((project) => project.category === activeCategory);

	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	// Use the first project as a featured project if available
	const [featuredProject, ...otherProjects] = filteredProjects;

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
			<div className='projects-page'>
				<ProjectHero />

				<section className='category-filter'>
					<Container>
						{[
							{ id: 'all', name: 'All Projects' },
							{ id: 'Solar', name: 'Solar' },
							{ id: 'Inverter', name: 'Inverter' },
							{ id: 'Battery', name: 'Battery' },
						].map((category) => (
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

				{featuredProject && (
					<section className='featured-project'>
						<Container>
							<Row>
								<Col md={12}>
									<motion.div
										variants={fadeIn}
										initial='hidden'
										animate='visible'>
										<div className='featured-image'>
											<img
												src={featuredProject.image}
												alt={featuredProject.title}
											/>
										</div>
										<div className='featured-content'>
											<span className='category-badge'>
												{featuredProject.category}
											</span>
											<h2>{featuredProject.title}</h2>
											<div className='meta'>
												<span>{featuredProject.client}</span>
												<span>{featuredProject.date}</span>
											</div>
											<p>{featuredProject.excerpt}</p>
											<Link to={`/projects/${featuredProject.id}`}>
												Read More
											</Link>
										</div>
									</motion.div>
								</Col>
							</Row>
						</Container>
					</section>
				)}

				<section className='projects-grid'>
					<Container>
						<Row>
							{otherProjects.map((project) => (
								<Col
									key={project.id}
									md={6}
									lg={4}
									className='mb-4'>
									<motion.div
										variants={fadeIn}
										initial='hidden'
										animate='visible'>
										<div className='project-card'>
											<Link to={`/projects/${project.id}`}>
												<div className='project-image'>
													<img
														src={project.image}
														alt={project.title}
													/>
												</div>
												<div className='card-body'>
													<span className='category-badge'>
														{project.category}
													</span>
													<h3>{project.title}</h3>
													<div className='meta'>
														<span>{project.client}</span>
														<span>{project.date}</span>
													</div>
													<p>{project.excerpt}</p>
												</div>
											</Link>
										</div>
									</motion.div>
								</Col>
							))}
						</Row>
					</Container>
				</section>

				<style jsx>{`
					.projects-page {
						font-family: 'Inter', sans-serif;
					}
					.hero-section {
						position: relative;
						min-height: 100vh;
						display: flex;
						align-items: center;
						padding: 8rem 0 6rem;
						background-color: #0a1929;
						transition: opacity 0.5s ease;
					}
					.hero-section::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background-image: url('${bgImage}');
						background-size: cover;
						background-position: center;
						opacity: 0;
						transition: opacity 1.5s ease;
						z-index: 0;
					}
					.hero-section.image-loaded::before {
						opacity: 0.65;
					}
					.hero-gradient-overlay {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background: linear-gradient(
							to right,
							rgba(0, 25, 50, 0.95) 0%,
							rgba(0, 25, 50, 0.85) 50%,
							rgba(0, 25, 50, 0.75) 100%
						);
						z-index: 1;
					}
					.hero-text {
						position: relative;
						z-index: 2;
						text-align: center;
						color: white;
					}
					.hero-text h1 {
						font-size: 3.75rem;
						font-weight: 800;
						margin-bottom: 1.5rem;
						line-height: 1.1;
						letter-spacing: -0.5px;
					}
					.text-gradient {
						background: linear-gradient(90deg, #00a3e0, #4cd5ff);
						-webkit-background-clip: text;
						background-clip: text;
						color: transparent;
					}
					.hero-subtitle {
						font-size: 1.25rem;
						font-weight: 400;
						margin-bottom: 2.5rem;
						opacity: 0.9;
						max-width: 90%;
						margin-left: auto;
						margin-right: auto;
						line-height: 1.6;
					}
					.category-filter {
						padding: 1rem 0;
						text-align: center;
						background: #f8f9fa;
					}
					.filter-btn {
						background: none;
						border: 2px solid #0062cc;
						color: #0062cc;
						padding: 0.5rem 1rem;
						border-radius: 30px;
						margin: 0 0.25rem 0.5rem;
						transition: all 0.3s ease;
						font-weight: 500;
					}
					.filter-btn.active,
					.filter-btn:hover {
						background: #0062cc;
						color: #fff;
					}
					.featured-project {
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
						color: #004976;
						margin-bottom: 0.5rem;
					}
					.featured-content .meta {
						color: #6c757d;
						font-size: 0.9rem;
						margin-bottom: 1rem;
						display: flex;
						justify-content: space-between;
					}
					.projects-grid {
						padding: 2rem 0;
					}
					.project-card {
						border: none;
						transition: transform 0.3s ease;
						box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
						border-radius: 0.5rem;
						overflow: hidden;
						background: #fff;
					}
					.project-card:hover {
						transform: translateY(-5px);
					}
					.project-image {
						height: 200px;
						overflow: hidden;
					}
					.project-image img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
					.card-body {
						padding: 1rem;
					}
					.category-badge {
						background: #0062cc;
						color: #fff;
						padding: 0.25rem 0.75rem;
						border-radius: 20px;
						font-size: 0.75rem;
						margin-bottom: 0.5rem;
						display: inline-block;
					}
					.meta {
						font-size: 0.8rem;
						color: #6c757d;
						margin-bottom: 0.5rem;
						display: flex;
						justify-content: space-between;
					}
					.project-card h3 {
						font-size: 1.2rem;
						color: #004976;
						margin-bottom: 0.5rem;
					}
					.project-card p {
						font-size: 0.9rem;
						color: #333;
					}
				`}</style>
			</div>
			<Footer />
		</>
	);
};

export default ProjectsPage;
