import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
	FiSun,
	FiZap,
	FiTool,
	FiShield,
	FiBarChart,
	FiBattery,
} from 'react-icons/fi';

const solarServices = [
	{
		icon: <FiSun />,
		title: 'Solar Installation',
		features: [
			'Residential & Commercial',
			'Grid-Tie Systems',
			'25-Year Warranty',
		],
		color: '#ff6b6b',
	},
	{
		icon: <FiZap />,
		title: 'Inverter Solutions',
		features: ['Hybrid Systems', 'Battery Backup', 'Smart Monitoring'],
		color: '#4ecdc4',
	},
	{
		icon: <FiBattery />,
		title: 'Energy Storage',
		features: ['Lithium-Ion Solutions', 'Off-Grid Ready', 'Load Management'],
		color: '#45b7d1',
	},
	{
		icon: <FiTool />,
		title: 'Maintenance',
		features: ['Performance Checks', 'Panel Cleaning', 'System Updates'],
		color: '#ff9f43',
	},
	{
		icon: <FiShield />,
		title: 'Warranty',
		features: ['Equipment Guarantee', 'Damage Protection', 'Priority Support'],
		color: '#a55eea',
	},
	{
		icon: <FiBarChart />,
		title: 'Consulting',
		features: ['Energy Audits', 'ROI Analysis', 'Custom Solutions'],
		color: '#2ecc71',
	},
];

const Services = () => {
	return (
		<section
			className='py-5'
			style={{
				background: 'linear-gradient(135deg, #001f3f, #003366)',
				padding: '4rem 0',
			}}>
			<Container>
				<div className='text-center mb-5'>
					<h2
						className='display-5 fw-bold mb-3'
						style={{ color: '#e5e5e5' }}>
						Premium Solar Services
					</h2>
					<p
						className='text-[#e5e5e5] lead'
						style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
						Comprehensive solar solutions backed by industry-leading expertise
						and cutting-edge technology.
					</p>
				</div>

				<Row className='g-4'>
					{solarServices.map((service, index) => (
						<Col
							key={index}
							md={6}
							lg={4}>
							<Card className='border-0 h-100 position-relative overflow-hidden service-card'>
								{/* Decorative Corner Element */}
								<div className='position-absolute end-0 top-0'>
									<svg
										width='80'
										height='80'
										viewBox='0 0 100 100'
										style={{ color: service.color }}>
										<path
											fill='currentColor'
											opacity='0.1'
											d='M100,0 L100,100 L0,100 Z'
										/>
									</svg>
								</div>

								<Card.Body className='p-4'>
									<div className='d-flex align-items-start mb-3'>
										{/* Icon Container */}
										<div
											className='p-3 rounded-4 me-3 service-icon'
											style={{
												background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}33 100%)`,
												boxShadow: `0 4px 12px ${service.color}33`,
											}}>
											{React.cloneElement(service.icon, {
												size: 24,
												style: { color: 'white' },
											})}
										</div>

										<div>
											<h5
												className='position-relative mb-2'
												style={{
													color: '#0A2E5A',
													fontWeight: '500',
													paddingBottom: '8px',
												}}>
												{service.title}
												<span
													className='title-underline'
													style={{ backgroundColor: service.color }}
												/>
											</h5>
											<ul
												className='list-unstyled mb-0'
												style={{ fontSize: '0.9rem' }}>
												{service.features.map((feature, idx) => (
													<li
														key={idx}
														className='d-flex align-items-center mb-2'
														style={{ color: '#64748b' }}>
														<span
															className='rounded-circle me-2'
															style={{
																width: '6px',
																height: '6px',
																backgroundColor: service.color,
															}}
														/>
														{feature}
													</li>
												))}
											</ul>
										</div>
									</div>

									{/* Feature Count Badge */}
									<div
										className='badge m-3 position-absolute rounded-pill end-0 top-0'
										style={{
											backgroundColor: service.color,
											color: 'white',
											fontSize: '0.75rem',
											padding: '4px 8px',
										}}>
										{service.features.length} Features
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>

			{/* Global Styles */}
			<style
				jsx
				global>{`
				.service-card {
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					background: white;
					border-radius: 16px !important;
					box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
					transform: translateY(0);
				}

				.service-card:hover {
					transform: translateY(-8px);
					box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
				}

				.service-icon {
					transition: all 0.3s ease;
				}

				.service-card:hover .service-icon {
					transform: rotate(8deg) scale(1.1);
				}

				.title-underline {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 0;
					height: 2px;
					transition: width 0.3s ease;
				}

				.service-card:hover .title-underline {
					width: 48px;
				}

				.service-card::before {
					content: '';
					position: absolute;
					top: -1px;
					left: -1px;
					right: -1px;
					bottom: -1px;
					border-radius: 16px;
					z-index: -1;
					background: linear-gradient(45deg, #ff6b6b33, transparent 50%);
					opacity: 0;
					transition: opacity 0.3s ease;
				}

				.service-card:hover::before {
					opacity: 1;
				}

				@media (max-width: 768px) {
					section.py-5 {
						padding: 2rem 0;
					}
					h3 {
						font-size: 1.75rem !important;
					}
					p {
						font-size: 0.85rem !important;
					}
				}
			`}</style>
		</section>
	);
};

export default Services;
