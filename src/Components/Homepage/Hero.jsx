import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// Replace these with your actual images
import buildingImg from '../../assets/Images/pinnacle.svg';
import userAvatar from '../../assets/Images/avatar_one.svg';
import { FaStar } from 'react-icons/fa';

const HeroSection = () => {
	return (
		<section
			style={{
				position: 'relative',
				overflow: 'hidden',
				background: 'linear-gradient(to right, #fde7e7 0%, #ffffff 50%)',
				padding: '3rem 0',
			}}>
			<Container>
				<Row className='align-items-center'>
					{/* Left Column: Text & CTA */}
					<Col
						md={6}
						className='text-center text-md-start'>
						<h1
							style={{
								fontSize: '2.5rem',
								fontWeight: 'bold',
								lineHeight: '1.2',
								color: '#000',
							}}>
							Creating a Better Tomorrow,
							<br />
							One Home at a Time
						</h1>
						<p
							className='mt-3 mb-4'
							style={{ fontSize: '1.1rem', color: '#555', maxWidth: '550px' }}>
							We’ve built a reputation for delivering exceptional results and
							exceeding our clients’ expectations. From luxurious residential
							homes to state-of-the-art commercial properties, our team of
							experts is dedicated to bringing your vision to life.
						</p>
						<Button
							variant='danger'
							size='lg'>
							Discover Our Projects
						</Button>
					</Col>

					{/* Right Column: Building Image */}
					<Col
						md={6}
						className='text-center mt-4 mt-md-0'>
						<div style={{ position: 'relative', display: 'inline-block' }}>
							<img
								src={buildingImg}
								alt='Building'
								style={{
									width: '100%',
									maxWidth: '400px',
									height: 'auto',
								}}
							/>

							{/* Floating Testimonial Card */}
							<Card
								style={{
									position: 'absolute',
									top: '15%',
									right: '-10%',
									width: '220px',
									boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
									border: 'none',
									borderRadius: '12px',
									transform: 'translateX(50%)',
								}}>
								<Card.Body>
									<div className='d-flex align-items-center mb-2'>
										<img
											src={userAvatar}
											alt='User'
											style={{
												width: '40px',
												height: '40px',
												borderRadius: '50%',
												objectFit: 'cover',
												marginRight: '0.5rem',
											}}
										/>
										<div>
											<strong style={{ fontSize: '0.9rem' }}>John Doe</strong>
											<br />
											<span style={{ fontSize: '0.8rem', color: '#999' }}>
												Homeowner
											</span>
										</div>
									</div>
									<p style={{ fontSize: '0.85rem', color: '#555' }}>
										“Working with them was a dream come true!”
									</p>
									<div>
										{/* Example star rating */}
										<FaStar color='#ffc107' />
										<FaStar color='#ffc107' />
										<FaStar color='#ffc107' />
										<FaStar color='#ffc107' />
										<FaStar color='#ddd' />
									</div>
								</Card.Body>
							</Card>
						</div>
					</Col>
				</Row>
			</Container>

			{/* Optional decorative arcs/shapes */}
			<style jsx>{`
				/* Example shape on the left side */
				section::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 600px;
					height: 600px;
					background: radial-gradient(
						circle at top left,
						rgba(255, 0, 0, 0.1),
						transparent 60%
					);
					z-index: 0;
				}
			`}</style>
		</section>
	);
};

export default HeroSection;
