import React from 'react';
import { Row, Card, Col, Container } from 'react-bootstrap';
import { FiTrendingUp, FiStar } from 'react-icons/fi';

const Testimonial = () => {
	const testimonials = [
		{
			id: 1,
			name: 'John Doe',
			role: 'Homeowner, Lagos',
			text: "Faraday's solar installation transformed our energy consumption. We've cut our electricity bills by 70% while maintaining 24/7 power supply.",
			rating: 5,
			image: 'client1',
		},
		{
			id: 2,
			name: 'Jane Smith',
			role: 'Business Owner, Abuja',
			text: 'The hybrid inverter system has been a game-changer for our operations. Seamless transition between grid and solar power with zero downtime.',
			rating: 5,
			image: 'client2',
		},
		{
			id: 3,
			name: 'Robert Lee',
			role: 'Energy Consultant, Kano',
			text: 'Professional installation with premium components. Their 25-year performance guarantee gave us complete peace of mind.',
			rating: 4,
			image: 'client3',
		},
		{
			id: 4,
			name: 'Alice Brown',
			role: 'Project Manager, Port Harcourt',
			text: 'From consultation to installation, the team demonstrated unmatched expertise. Our solar array outperforms expectations daily.',
			rating: 5,
			image: 'client4',
		},
	];

	return (
		<section
			className='py-5 position-relative'
			style={{ backgroundColor: '#f9fafb' }}>
			{/* Decorative Elements */}
			<div
				className='position-absolute top-0 start-0 w-100 h-100'
				style={{
					background: `linear-gradient(120deg, rgba(211,47,47,0.03) 0%, transparent 100%)`,
					zIndex: 0,
				}}
			/>

			<Container>
				<div className='text-center mb-5 position-relative'>
					<div className='d-inline-block position-relative'>
						<h2
							className='display-5 fw-bold mb-3'
							style={{ color: '#0A2E5A' }}>
							Client Experiences
							<span style={{ color: '#d32f2f', marginLeft: '12px' }}>★</span>
						</h2>
						<div
							className='position-absolute top-n5 end-n3'
							style={{ zIndex: -1 }}>
							<div className='bg-danger rounded-pill p-2 px-3 d-flex align-items-center'>
								<FiStar className='text-white me-1' />
								<span className='text-white small'>4.9/5 Rating</span>
							</div>
						</div>
					</div>
					<p
						className='lead text-muted mx-auto'
						style={{ maxWidth: '600px' }}>
						Join 300+ satisfied clients who've transformed their energy
						consumption with our solar solutions
					</p>
				</div>

				<Row className='g-4'>
					{testimonials.map((testimonial) => (
						<Col
							key={testimonial.id}
							md={6}
							lg={3}>
							<Card className='h-100 border-0 shadow-sm testimonial-card'>
								<Card.Body className='p-4 position-relative'>
									{/* Quote Icon */}
									<FiTrendingUp
										className='position-absolute top-0 end-0 m-3'
										size={24}
										style={{ color: 'rgba(211,47,47,0.2)' }}
									/>

									{/* Client Info */}
									<div className='d-flex align-items-center mb-4'>
										<div className='position-relative me-3'>
											<img
												src={testimonial.image}
												alt={testimonial.name}
												className='rounded-circle'
												style={{
													width: '64px',
													height: '64px',
													objectFit: 'cover',
													border: '2px solid #d32f2f',
												}}
											/>
										</div>
										<div>
											<h5
												className='mb-1'
												style={{ color: '#0A2E5A' }}>
												{testimonial.name}
											</h5>
											<small className='text-muted'>{testimonial.role}</small>
										</div>
									</div>

									{/* Rating */}
									<div className='d-flex gap-1 mb-3'>
										{[...Array(5)].map((_, i) => (
											<FiStar
												key={i}
												size={18}
												style={{
													color: i < testimonial.rating ? '#d32f2f' : '#e0e0e0',
												}}
											/>
										))}
									</div>

									{/* Testimonial Text */}
									<Card.Text
										className='text-secondary'
										style={{ lineHeight: 1.6 }}>
										{testimonial.text}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>

			<style
				jsx
				global>{`
				.testimonial-card {
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					background: #fff;
					border-radius: 16px !important;
					transform: translateY(0);
				}

				.testimonial-card:hover {
					transform: translateY(-8px);
					box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08) !important;
				}

				.testimonial-card::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					height: 4px;
					background: linear-gradient(90deg, #d32f2f 0%, #ff6b6b 100%);
					border-radius: 16px 16px 0 0;
					opacity: 0;
					transition: opacity 0.3s ease;
				}

				.testimonial-card:hover::before {
					opacity: 1;
				}
			`}</style>
		</section>
	);
};

export default Testimonial;
