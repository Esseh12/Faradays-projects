import React from 'react';
import Slider from 'react-slick';
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiSun, FiZap, FiHome, FiCheckCircle } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const solarProjects = [
	{
		id: 1,
		title: 'Residential Solar Array',
		location: 'Lekki, Lagos',
		description: '15kW rooftop installation with battery backup',
		image:
			'https://images.pexels.com/photos/9800036/pexels-photo-9800036.jpeg?auto=compress&cs=tinysrgb&w=600',
		capacity: '25kW/h',
		savings: '80% Energy Reduction',
		type: 'residential',
	},
	{
		id: 2,
		title: 'Commercial Solar Farm',
		location: 'Abuja, FCT',
		description: '500kW ground-mounted solar plant',
		image:
			'https://images.pexels.com/photos/8853541/pexels-photo-8853541.jpeg?auto=compress&cs=tinysrgb&w=600',
		capacity: '500kW/h',
		savings: '1.2M CO² Saved',
		type: 'commercial',
	},
	{
		id: 3,
		title: 'Hybrid Inverter System',
		location: 'Victoria Island, Lagos',
		description: 'Smart energy management with grid-tie functionality',
		image:
			'https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/08/04/2023080418065173.png',
		capacity: '10kW System',
		savings: '24/7 Power Supply',
		type: 'industrial',
	},
	{
		id: 4,
		title: 'Solar Carport Installation',
		location: 'Ikeja, Lagos',
		description: 'Dual-purpose energy generation and shade structure',
		image:
			'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
		capacity: '40kW System',
		savings: '100% Energy Independence',
		type: 'commercial',
	},
];

const getProjectIcon = (type) => {
	switch (type) {
		case 'residential':
			return <FiHome className='project-icon' />;
		case 'commercial':
			return <FiSun className='project-icon' />;
		default:
			return <FiZap className='project-icon' />;
	}
};

const FeaturedProjects = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 2, dots: false },
			},
			{
				breakpoint: 768,
				settings: { slidesToShow: 1, dots: false },
			},
		],
	};

	return (
		<section style={{ backgroundColor: '#f9fafb', padding: '4rem 0' }}>
			<Container>
				<div className='text-center mb-5'>
					<h2
						className='display-5 fw-bold mb-3'
						style={{ color: '#0A2E5A' }}>
						Featured Solar Installations
					</h2>
					<p
						className='lead'
						style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
						Explore our cutting-edge renewable energy projects powering homes
						and businesses across Nigeria.
					</p>
				</div>

				<Slider {...settings}>
					{solarProjects.map((project) => (
						<div
							key={project.id}
							className='px-2'>
							<Card className='border-0 shadow overflow-hidden project-card'>
								<div className='position-relative'>
									<Card.Img
										variant='top'
										src={project.image}
										style={{ height: '280px', objectFit: 'cover' }}
									/>
									<div className='project-overlay'>
										<div className='project-type'>
											{getProjectIcon(project.type)}
											<span className='ms-2'>{project.type.toUpperCase()}</span>
										</div>
										<div className='project-stats'>
											<div className='stat-item'>
												<FiZap size={20} />
												<span>{project.capacity}</span>
											</div>
											<div className='stat-item'>
												<FiCheckCircle size={20} />
												<span>{project.savings}</span>
											</div>
										</div>
									</div>
								</div>

								<Card.Body className='p-4'>
									<div className='d-flex align-items-start justify-content-between mb-3'>
										<div>
											<Card.Title
												className='fw-bold h5 mb-1'
												style={{ color: '#0A2E5A' }}>
												{project.title}
											</Card.Title>
											<small className='text-muted'>{project.location}</small>
										</div>
										<Link to={`/projects/${project.id}`}>
											<Button
												variant='primary'
												size='sm'
												className='rounded-pill px-3'>
												Details
											</Button>
										</Link>
									</div>
									<Card.Text
										className='text-secondary'
										style={{ fontSize: '0.9rem' }}>
										{project.description}
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					))}
				</Slider>
			</Container>

			<style
				jsx
				global>{`
				.project-card {
					transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
						box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					border-radius: 16px !important;
				}
				.project-card:hover {
					transform: translateY(-8px);
					box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15) !important;
				}
				.project-overlay {
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					background: linear-gradient(
						180deg,
						transparent 0%,
						rgba(0, 0, 0, 0.7) 100%
					);
					color: white;
					padding: 1.5rem;
					padding-top: 4rem;
				}
				.project-type {
					display: flex;
					align-items: center;
					position: absolute;
					top: -24px;
					left: 16px;
					background: #d32f2f;
					color: white;
					padding: 8px 16px;
					border-radius: 24px;
					font-weight: 500;
					box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
				}
				.project-icon {
					width: 24px;
					height: 24px;
				}
				.project-stats {
					display: grid;
					gap: 1rem;
					color: rgba(255, 255, 255, 0.9);
					margin-top: 1rem;
				}
				.stat-item {
					display: flex;
					align-items: center;
					gap: 0.5rem;
					font-size: 0.9rem;
				}
				.slick-dots li button:before {
					font-size: 10px !important;
					color: #d32f2f !important;
				}
				.slick-dots li.slick-active button:before {
					color: #d32f2f !important;
				}
			`}</style>
		</section>
	);
};

export default FeaturedProjects;
