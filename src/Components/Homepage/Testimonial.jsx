import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiStar } from 'react-icons/fi';

// Sample testimonials data
const testimonials = [
	{
		id: 1,
		name: 'Aisha Bello',
		role: 'Homeowner, Lagos',
		text: 'Switching to solar with this company was our best decision. Our energy bills dropped 80% with 24/7 reliable power.',
		rating: 5,
		image: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		id: 2,
		name: 'Chike Obi',
		role: 'Business Owner, Abuja',
		text: 'The hybrid inverter system eliminated our downtime. Flawless transition between grid and solar power.',
		rating: 5,
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		id: 3,
		name: 'Funke Adeola',
		role: 'School Administrator',
		text: 'Professional installation with premium components. Our solar array consistently outperforms expectations.',
		rating: 4,
		image: 'https://randomuser.me/api/portraits/women/65.jpg',
	},
	{
		id: 4,
		name: 'Emeka Nwankwo',
		role: 'Factory Manager',
		text: 'Cut energy costs by 60% while maintaining full production capacity. Remarkable ROI in just 18 months.',
		rating: 5,
		image: 'https://randomuser.me/api/portraits/men/45.jpg',
	},
];

const TestimonialsGrid = () => {
	return (
		<section
			className='py-6 testimonial-section'
			style={{
				background: 'linear-gradient(150deg, #f0f8ff 0%, #e6f0ff 100%)',
				position: 'relative',
				overflow: 'hidden',
				padding: '4rem 0',
			}}>
			<Container>
				{/* Section Header */}
				<div className='text-center mb-5'>
					<h2
						className='mb-3 section-title'
						style={{
							color: '#1e3a8a',
							fontWeight: 700,
							fontSize: '2.5rem',
							letterSpacing: '-0.8px',
						}}>
						Powering Nigerian Homes & Businesses
					</h2>
					<p
						className='section-subtitle'
						style={{
							color: '#475569',
							fontSize: '1.1rem',
							maxWidth: '700px',
							margin: '0 auto',
						}}>
						Join 800+ satisfied clients in Nigeria's solar revolution
					</p>
				</div>

				{/* Testimonials Grid */}
				<Row className='g-4'>
					{testimonials.map((testimonial) => (
						<Col
							key={testimonial.id}
							xs={12}
							md={6}
							lg={3}>
							<Card className='border-0 h-100 shadow-hover testimonial-card'>
								<Card.Body className='p-4'>
									{/* Client Image & Info */}
									<div className='d-flex align-items-center mb-3'>
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className='client-avatar'
											style={{
												width: '72px',
												height: '72px',
												objectFit: 'cover',
												borderRadius: '50%',
												border: '3px solid #fff',
												boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
											}}
										/>
										<div className='ms-3'>
											<h5 className='text-primary fw-bold mb-0'>
												{testimonial.name}
											</h5>
											<p className='text-muted mb-0 small'>
												{testimonial.role}
											</p>
										</div>
									</div>

									{/* Star Rating */}
									<div
										className='mb-3 rating-stars'
										style={{
											display: 'flex',
											justifyContent: 'center',
											gap: '0.25rem',
											marginBottom: '1.5rem',
											color: '#cbd5e1',
										}}>
										{[...Array(5)].map((_, i) => (
											<FiStar
												key={i}
												className={i < testimonial.rating ? 'filled' : ''}
												style={
													i < testimonial.rating
														? { color: '#f59e0b', marginRight: '2px' }
														: { marginRight: '2px' }
												}
											/>
										))}
									</div>

									{/* Testimonial Text */}
									<p
										className='testimonial-text'
										style={{
											color: '#475569',
											lineHeight: 1.7,
											fontSize: '1rem',
											margin: 0,
											textAlign: 'left',
										}}>
										"{testimonial.text}"
									</p>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>

			{/* Component Styles */}
			<style jsx>{`
				.testimonial-section {
					background: linear-gradient(150deg, #f0f8ff 0%, #e6f0ff 100%);
				}
				.testimonial-card {
					background: white;
					border-radius: 1.5rem;
					padding: 2rem;
					height: 100%;
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
					position: relative;
					overflow: hidden;
				}
				.testimonial-card:hover {
					transform: translateY(-8px);
					box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
				}
				@media (max-width: 992px) {
					.client-avatar {
						height: 200px;
					}
				}
				@media (max-width: 768px) {
					.section-title {
						font-size: 2rem;
					}
					.testimonial-card {
						border-radius: 1rem;
						padding: 1.5rem;
					}
					.client-avatar {
						height: 180px;
					}
					.testimonial-text {
						font-size: 0.95rem;
					}
				}
				@media (max-width: 576px) {
					.client-avatar {
						height: 160px;
					}
				}
			`}</style>
		</section>
	);
};

export default TestimonialsGrid;
