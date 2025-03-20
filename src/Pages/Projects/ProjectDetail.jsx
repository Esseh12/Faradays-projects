import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../../Components/Projects/DummyProjects';

const ProjectDetail = () => {
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
		<div className='project-detail'>
			<section className='project-hero'>
				<img
					src={project.image}
					alt={project.title}
				/>
			</section>

			<Container>
				<article className='project-content'>
					<div className='text-center meta'>
						<span className='category'>{project.category}</span>
						<h1>{project.title}</h1>
						<div className='client-date'>
							<span>{project.client}</span>
							<span>{project.date}</span>
						</div>
					</div>

					<div
						className='content'
						dangerouslySetInnerHTML={{ __html: project.content }}
					/>

					<div className='navigation text-center'>
						<Link to='/projects'>Back to Projects</Link>
					</div>
				</article>

				{relatedProjects.length > 0 && (
					<section className='border-top mt-5 pt-3 related-projects'>
						<h2>Related Projects</h2>
						<Row>
							{relatedProjects.map((proj) => (
								<Col
									md={4}
									key={proj.id}>
									<Link
										to={`/projects/${proj.id}`}
										className='related-project'>
										<img
											src={proj.image}
											alt={proj.title}
										/>
										<h3>{proj.title}</h3>
									</Link>
								</Col>
							))}
						</Row>
					</section>
				)}
			</Container>

			<style jsx>{`
				.project-detail {
					padding: 4rem 0;
				}
				.project-hero img {
					width: 100%;
					height: 400px;
					object-fit: cover;
					margin-bottom: 2rem;
				}
				.project-content {
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
				.client-date {
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
				.navigation {
					margin: 2rem 0;
				}
				.navigation a {
					color: var(--primary-color);
					font-weight: bold;
				}
				.related-projects h2 {
					margin-bottom: 1rem;
					color: var(--secondary-color);
				}
				.related-project img {
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

export default ProjectDetail;
