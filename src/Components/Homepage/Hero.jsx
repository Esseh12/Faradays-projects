import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import userAvatar from '../../assets/Images/avatar_one.svg';
import avatar from '../../assets/Images/avatar_two.svg';
import star_group from '../../assets/Images/stars_group.svg';

const HeroSection = () => {
	const [activeTestimonial, setActiveTestimonial] = useState(null);
	const [videoLoaded, setVideoLoaded] = useState(false);

	const testimonials = [
		{
			id: 'sustainable',
			content: '"Cut our energy bills by 60%!"',
			author: 'Sarah Johnson, Homeowner',
			avatar: userAvatar,
			position: { top: '30%', left: '20%' },
		},
		{
			id: 'technology',
			content: '"The smart home integration is revolutionary!"',
			author: 'Michael Chen, Architect',
			avatar: avatar,
			position: { top: '50%', right: '20%' },
		},
	];

	useEffect(() => {
		const video = document.createElement('video');
		video.src =
			'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/solar-panels-hero-desktop.mp4';
		video.onloadeddata = () => setVideoLoaded(true);
	}, []);

	return (
		<section
			style={{
				position: 'relative',
				overflow: 'hidden',
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
			}}>
			{/* Video Background with Darker Overlay */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					zIndex: -1,
					overflow: 'hidden',
					backgroundColor: '#000', // Fallback
				}}>
				{videoLoaded && (
					<video
						autoPlay
						loop
						muted
						playsInline
						style={{
							objectFit: 'cover',
							width: '100%',
							height: '100%',
							opacity: 0.8,
							filter: 'brightness(0.7)',
						}}>
						<source
							src='https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/solar-panels-hero-desktop.mp4'
							type='video/mp4'
						/>
					</video>
				)}
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5))',
					}}
				/>
			</div>

			<Container>
				<Row className='justify-content-center text-center'>
					<Col lg={8}>
						<h1
							style={{
								fontSize: '3.5rem',
								fontWeight: '700',
								lineHeight: '1.2',
								color: '#fff',
								textShadow: '0 4px 12px rgba(0,0,0,0.4)',
								cursor: 'default',
							}}>
							Building{' '}
							<span
								className='highlight-word'
								onMouseEnter={() => setActiveTestimonial('sustainable')}
								onMouseLeave={() => setActiveTestimonial(null)}>
								Sustainable
							</span>{' '}
							Futures Through{' '}
							<span
								className='highlight-word'
								onMouseEnter={() => setActiveTestimonial('technology')}
								onMouseLeave={() => setActiveTestimonial(null)}>
								Intelligent Technology
							</span>
						</h1>

						<p
							className='mx-auto my-4'
							style={{
								fontSize: '1.3rem',
								color: 'rgba(255,255,255,0.9)',
								maxWidth: '600px',
							}}>
							Revolutionizing modern living with eco-friendly solutions and
							cutting-edge innovation for smarter, sustainable homes.
						</p>

						<div className='d-flex justify-content-center gap-3'>
							<Button
								variant='light'
								size='lg'
								className='px-5 py-3'
								style={{
									fontWeight: '600',
									transition: 'all 0.3s ease',
								}}>
								Explore Solutions
							</Button>
							<Button
								variant='outline-light'
								size='lg'
								className='px-5 py-3'
								style={{
									fontWeight: '600',
									transition: 'all 0.3s ease',
								}}>
								Watch Demo
							</Button>
						</div>
					</Col>
				</Row>

				{/* Interactive Testimonials */}
				{testimonials.map((testimonial) => (
					<Card
						key={testimonial.id}
						style={{
							position: 'absolute',
							...testimonial.position,
							width: '280px',
							background: 'rgba(255,255,255,0.15)',
							backdropFilter: 'blur(12px)',
							border: '1px solid rgba(255,255,255,0.25)',
							opacity: activeTestimonial === testimonial.id ? 1 : 0,
							transform: `translateY(${
								activeTestimonial === testimonial.id ? '0' : '20px'
							})`,
							transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
							pointerEvents: 'none',
							zIndex: 999,
						}}>
						<Card.Body>
							<div className='d-flex align-items-center gap-3'>
								<img
									src={testimonial.avatar}
									alt='User'
									style={{
										width: '50px',
										height: '50px',
										borderRadius: '50%',
										border: '2px solid rgba(255,255,255,0.3)',
									}}
								/>
								<div>
									<img
										src={star_group}
										alt='rating'
									/>
									<p
										className='text-white mb-0 mt-2'
										style={{ fontSize: '0.95rem' }}>
										{testimonial.content}
									</p>
									<small className='text-white-50'>{testimonial.author}</small>
								</div>
							</div>
						</Card.Body>
					</Card>
				))}
			</Container>

			{/* Scroll Indicator */}
			<div
				style={{
					position: 'absolute',
					bottom: '40px',
					left: '50%',
					transform: 'translateX(-50%)',
				}}>
				<div
					style={{
						width: '40px',
						height: '60px',
						borderRadius: '20px',
						border: '2px solid rgba(255,255,255,0.3)',
						position: 'relative',
						animation: 'bounce 2s infinite',
					}}>
					<div
						style={{
							width: '4px',
							height: '12px',
							backgroundColor: '#fff',
							position: 'absolute',
							left: '50%',
							top: '12px',
							transform: 'translateX(-50%)',
							borderRadius: '2px',
							animation: 'scroll 2s infinite',
						}}
					/>
				</div>
			</div>

			{/* Animations & Responsive Styling */}
			<style
				jsx
				global>{`
				@keyframes bounce {
					0%,
					20%,
					50%,
					80%,
					100% {
						transform: translateY(0);
					}
					40% {
						transform: translateY(-20px);
					}
				}

				@keyframes scroll {
					0% {
						transform: translateY(0);
						opacity: 1;
					}
					100% {
						transform: translateY(20px);
						opacity: 0;
					}
				}

				.highlight-word {
					position: relative;
					color: #ff4d4d;
					transition: all 0.3s ease;
					cursor: pointer;
					padding: 0 4px;
					border-bottom: 2px solid transparent;
				}

				.highlight-word:hover {
					border-bottom-color: #ff4d4d;
				}

				/* Responsive styling for smaller devices */
				@media (max-width: 768px) {
					h1 {
						font-size: 2.5rem !important;
					}
					p.my-4 {
						font-size: 1rem !important;
					}
					.btn {
						font-size: 0.9rem !important;
						padding: 0.5rem 1.5rem !important;
					}
				}
			`}</style>
		</section>
	);
};

export default HeroSection;
