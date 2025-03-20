import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaStar as StarIcon } from 'react-icons/fa';
import client_group from '../../assets/Images/client-Images.svg';

const CommunitySection = () => {
	const navigate = useNavigate();
	return (
		<section
			style={{
				background: 'linear-gradient(135deg, #001f3f, #003366)',
				color: '#fff',
				padding: '4rem 0',
				position: 'relative',
				overflow: 'hidden',
			}}>
			<Container>
				<Row className='align-items-center'>
					{/* Left Column: Text Content */}
					<Col
						md={6}
						className='mb-4 mb-md-0'>
						<div style={{ zIndex: 2, position: 'relative' }}>
							<h1
								style={{
									fontSize: '2.75rem',
									fontWeight: '700',
									lineHeight: 1.2,
									marginBottom: '1.5rem',
								}}>
								Empowering <span style={{ color: '#66b2ff' }}>Communities</span>
								<br />
								With Renewable Energy
							</h1>
							<p
								style={{
									fontSize: '1.125rem',
									maxWidth: '500px',
									marginBottom: '2rem',
								}}>
								Join us as we transform energy solutions and build a sustainable
								future for everyone.
							</p>
							<div className='d-flex flex-wrap gap-3 mb-4'>
								<Button
									variant='light'
									size='lg'
									className='fw-bold px-4 py-2'
									style={{ color: '#001f3f' }}
									onClick={() => navigate('/about')}>
									Get Started
								</Button>
								<Button
									variant='outline-light'
									size='lg'
									className='fw-bold px-4 py-2'
									onClick={() => navigate('/projects')}>
									Learn More
								</Button>
							</div>
							<div className='d-flex align-items-center gap-2'>
								<div className='d-flex flex-column align-items-center gap-2'>
									<img
										src={client_group}
										alt='Client Group'
									/>
								</div>

								<div className='d-flex flex-column gap-2'>
									<div className='d-flex'>
										{[...Array(5)].map((_, i) => (
											<StarIcon
												key={i}
												style={{ width: '24px', fill: '#ffd700' }}
											/>
										))}
									</div>
									<div className='d-flex align-items-center gap-2'>
										<span style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>
											(4.9/5)
										</span>
										<small
											className='d-block'
											style={{ opacity: 0.9 }}>
											Customer Rating
										</small>
									</div>
								</div>
							</div>
						</div>
					</Col>
					{/* Right Column: Animated Image */}
					<Col md={6}>
						<div style={{ textAlign: 'center' }}>
							<img
								src='https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600'
								alt='Renewable Energy'
								className='rounded shadow animated-image img-fluid'
								style={{ maxWidth: '100%', height: 'auto' }}
							/>
						</div>
					</Col>
				</Row>
			</Container>

			{/* Animation & Responsive Styles */}
			<style
				jsx
				global>{`
				@keyframes float {
					0% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-10px);
					}
					100% {
						transform: translateY(0);
					}
				}
				.animated-image {
					animation: float 3s ease-in-out infinite;
				}
				@media (max-width: 768px) {
					h1 {
						font-size: 2rem !important;
					}
					p {
						font-size: 1rem !important;
					}
					.btn {
						font-size: 0.9rem !important;
						padding: 0.5rem 1rem !important;
					}
				}
			`}</style>
		</section>
	);
};

export default CommunitySection;
