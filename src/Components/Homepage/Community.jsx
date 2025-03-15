import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import imageGroup from '../../assets/Images/client-Images.svg';
import communityVector from '../../assets/Images/community-vector.svg';

const CommunitySection = () => {
	return (
		<section
			style={{
				backgroundColor: '#d32f2f',
				color: '#fff',
				position: 'relative',
				overflow: 'hidden',
			}}>
			<Container className='py-5'>
				<Row className='justify-content-center text-center'>
					<Col
						md={10}
						lg={8}>
						<h1
							style={{
								fontWeight: 'bold',
								fontSize: '2.5rem',
								lineHeight: '1.2',
							}}>
							We’re building communities.
						</h1>
						<p
							className='mt-3'
							style={{
								fontSize: '1.1rem',
								maxWidth: '600px',
								margin: '0 auto',
							}}>
							With a mission to revolutionize real estate by delivering
							sustainable and innovative solutions for modern living, we aim to
							create vibrant communities where everyone can thrive.
						</p>
						<div className='mt-4'>
							<Button
								variant='light'
								size='lg'>
								Learn More About Us
							</Button>
						</div>
						{/* Container for images */}
						<div className='d-flex justify-content-center align-items-center mt-4 position-relative'>
							{/* Community vector with animation */}
							<img
								src={communityVector}
								alt='Community Vector'
								style={{
									position: 'absolute',
									width: '400px', // Adjust width as needed
									height: 'auto',
									zIndex: 1,
									left: '50%',
									transform: 'translate(-150%, 30%)',
									animation: 'slideIn 1s ease-out forwards',
								}}
							/>
							{/* Foreground image */}
							<img
								src={imageGroup}
								alt='User group'
								style={{ position: 'relative', zIndex: 2 }}
							/>
						</div>
					</Col>
				</Row>
			</Container>
			{/* Decorative shape & Animation */}
			<style jsx>{`
				section::before {
					content: '';
					position: absolute;
					top: -100px;
					right: -100px;
					width: 300px;
					height: 300px;
					background: rgba(255, 255, 255, 0.1);
					border-radius: 50%;
					z-index: 0;
				}
				@keyframes slideIn {
					0% {
						opacity: 0;
						transform: translate(-150%, 30%);
					}
					100% {
						opacity: 1;
						transform: translate(-50%, 30%);
					}
				}
			`}</style>
		</section>
	);
};

export default CommunitySection;
