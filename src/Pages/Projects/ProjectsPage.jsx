import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projectsData from '../../Components/Projects/DummyProjects';

const ProjectsPage = () => {
	const [activeCategory, setActiveCategory] = useState('all');
	const [projects, setProjects] = useState([]);

	// Define categories for Faraday’s projects
	const categories = [
		{ id: 'all', name: 'All Projects' },
		{ id: 'Solar', name: 'Solar' },
		{ id: 'Inverter', name: 'Inverter' },
		{ id: 'Battery', name: 'Battery' },
	];

	useEffect(() => {
		// Simulate API call
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
		<div className='projects-page'>
			<section className='header-section'>
				<Container>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8 }}>
						<h1>Faraday Projects</h1>
						<p>
							Showcasing our expertise in solar, inverter, and battery
							solutions.
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
						url('https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260')
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
					background: var(--primary-color);
					color: white;
					padding: 0.25rem 0.75rem;
					border-radius: 20px;
					font-size: 0.75rem;
					margin-bottom: 0.5rem;
					display: inline-block;
				}
				.meta {
					font-size: 0.8rem;
					color: var(--text-light);
					margin-bottom: 0.5rem;
					display: flex;
					justify-content: space-between;
				}
				.project-card h3 {
					font-size: 1.2rem;
					color: var(--secondary-color);
					margin-bottom: 0.5rem;
				}
				.project-card p {
					font-size: 0.9rem;
					color: var(--text-color);
				}
			`}</style>
		</div>
	);
};

export default ProjectsPage;
