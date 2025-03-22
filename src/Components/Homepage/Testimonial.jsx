import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

const Testimonials = () => {
	return (
		<section
			style={{
				background: '#f9f9f9',
				padding: '4rem 0',
			}}>
			<Container>
				{/* Section Title */}
				<div className='text-center mb-5'>
					<h2
						style={{
							color: '#333',
							fontWeight: 700,
							fontSize: '2.5rem',
							marginBottom: '0.5rem',
						}}>
						TESTIMONIALS
					</h2>
					<p
						style={{
							color: '#555',
							maxWidth: '600px',
							margin: '0 auto',
						}}>
						Subscribe to our newsletter for more success stories and energy
						insights
					</p>
				</div>

				{/* Testimonials Grid */}
				<Row className='g-4'>
					{testimonials.map((t) => (
						<Col
							key={t.id}
							xs={12}
							md={6}>
							<div className='h-100 p-4 text-center testimonial-card'>
								{/* Avatar */}
								<div className='avatar-wrapper mb-3 mx-auto'>
									<img
										src={t.image}
										alt={t.name}
										style={{
											width: '100px',
											height: '100px',
											objectFit: 'cover',
											borderRadius: '50%',
											border: '4px solid #fff',
											boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
										}}
									/>
								</div>

								{/* Star Rating */}
								<div className='d-flex justify-content-center gap-2 mb-3'>
									{[...Array(5)].map((_, i) => (
										<FiStar
											key={i}
											style={{
												color: i < t.rating ? '#ffc107' : '#ddd',
												marginRight: '2px',
											}}
										/>
									))}
								</div>

								{/* Testimonial Text */}
								<p
									style={{
										color: '#555',
										fontStyle: 'italic',
										lineHeight: '1.6',
									}}>
									"{t.text}"
								</p>

								{/* Client Info */}
								<h5
									style={{ color: '#333', fontWeight: 600, marginTop: '1rem' }}>
									{t.name}
								</h5>
								<p
									style={{
										color: '#999',
										fontSize: '0.9rem',
										marginTop: '0.25rem',
									}}>
									{t.role}
								</p>
							</div>
						</Col>
					))}
				</Row>
			</Container>

			{/* Custom Styles */}
			<style jsx>{`
				.testimonial-card {
					background: #fff;
					border-radius: 8px;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
					transition: transform 0.3s ease, box-shadow 0.3s ease;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				.testimonial-card:hover {
					transform: translateY(-5px);
					box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
				}

				.avatar-wrapper {
					width: 100px;
					height: 100px;
				}

				@media (max-width: 768px) {
					h2 {
						font-size: 2rem !important;
					}
					.testimonial-card {
						padding: 2rem 1.5rem !important;
					}
				}
			`}</style>
		</section>
	);
};

export default Testimonials;
