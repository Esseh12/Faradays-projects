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
				<div className='text-center mb-4'>
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
				<Row className='g-3'>
					{testimonials.map((t) => (
						<Col
							key={t.id}
							xs={12}
							sm={6}
							lg={3}>
							<div className='h-100 testimonial-card'>
								<div className='card-inner'>
									{/* Avatar and Rating in same row on mobile */}
									<div className='card-header'>
										{/* Avatar */}
										<div className='avatar-wrapper'>
											<img
												src={t.image}
												alt={t.name}
												className='avatar-image'
											/>
										</div>

										{/* Star Rating */}
										<div className='rating-wrapper'>
											{[...Array(5)].map((_, i) => (
												<FiStar
													key={i}
													className={`star-icon ${
														i < t.rating ? 'filled' : ''
													}`}
												/>
											))}
										</div>
									</div>

									{/* Testimonial Text */}
									<p className='testimonial-text'>"{t.text}"</p>

									{/* Client Info */}
									<div className='client-info'>
										<h5 className='client-name'>{t.name}</h5>
										<p className='client-role'>{t.role}</p>
									</div>
								</div>
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
					overflow: hidden;
				}

				.card-inner {
					padding: 1.25rem;
					display: flex;
					flex-direction: column;
					height: 100%;
				}

				.testimonial-card:hover {
					transform: translateY(-5px);
					box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
				}

				.card-header {
					display: flex;
					align-items: center;
					margin-bottom: 0.75rem;
				}

				.avatar-wrapper {
					flex-shrink: 0;
					width: 70px;
					height: 70px;
					margin-right: 0.75rem;
				}

				.avatar-image {
					width: 100%;
					height: 100%;
					object-fit: cover;
					border-radius: 50%;
					border: 3px solid #fff;
					box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
				}

				.rating-wrapper {
					display: flex;
					flex-wrap: wrap;
					gap: 2px;
				}

				.star-icon {
					color: #ddd;
					font-size: 0.85rem;
				}

				.star-icon.filled {
					color: #ffc107;
				}

				.testimonial-text {
					color: #555;
					font-style: italic;
					line-height: 1.5;
					font-size: 0.95rem;
					margin-bottom: 0.75rem;
					flex-grow: 1;
				}

				.client-info {
					margin-top: auto;
				}

				.client-name {
					color: #333;
					font-weight: 600;
					font-size: 1rem;
					margin-bottom: 0.1rem;
				}

				.client-role {
					color: #999;
					font-size: 0.8rem;
					margin: 0;
				}

				/* Media queries for better responsiveness */
				@media (max-width: 991px) {
					.card-inner {
						padding: 1rem;
					}

					h2 {
						font-size: 2rem !important;
					}
				}

				@media (max-width: 767px) {
					.avatar-wrapper {
						width: 60px;
						height: 60px;
					}

					.card-header {
						flex-direction: column;
						align-items: flex-start;
					}

					.rating-wrapper {
						margin-top: 0.5rem;
					}
				}

				@media (max-width: 575px) {
					.card-inner {
						padding: 1.25rem;
					}

					.card-header {
						flex-direction: row;
						align-items: center;
						justify-content: space-between;
					}

					.avatar-wrapper {
						margin-right: 0;
					}

					.rating-wrapper {
						margin-top: 0;
					}
				}
			`}</style>
		</section>
	);
};

export default Testimonials;
