import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import testimonial_vector from '../../assets/Images/testimonial_vector.svg';
import client_image from '../../assets/Images/client-Images.svg';
import stars_group from '../../assets/Images/stars_group.svg';
import client1 from '../../assets/Images/client1.svg';
import client2 from '../../assets/Images/client2.svg';
import client3 from '../../assets/Images/client3.svg';
import client4 from '../../assets/Images/client4.svg';

const Testimonial = () => {
	return (
		<>
			<section className='container mx-auto px-4 pt-5 pb-5'>
				<div className='d-flex flex-column align-items-center'>
					<div className='d-flex align-items-center gap-3 mb-3'>
						<h2 className='text-center fs-1 font-bold mb-6'>
							What Our Clients Say
						</h2>
						<img
							src={testimonial_vector}
							alt='Testimonial'
							className='testimonial-vector'
						/>
					</div>
					<p className='text-center fs-6'>
						At Faradays projects we are not just building structures - we're
						building relationships.
						<br className='hidden md:block' /> Here's what some of our clients
						have to say about their experiences with us.
					</p>
					<div className='d-flex align-items-center gap-3 mb-4'>
						<img
							src={client_image}
							alt='clients'
						/>
						<div className='d-flex flex-column gap-3'>
							<img
								src={stars_group}
								alt='stars rating 4.5'
								className='h-auto'
								style={{ width: '100px' }}
							/>
							<p>4.5/5 Rated by 300+ Professionals</p>
						</div>
					</div>

					<Row>
						{/* Card 1 */}
						<Col
							md={6}
							lg={6}
							className='mb-4'>
							<Card className='p-4 testimonial-card'>
								<Row className='align-items-center'>
									<Col
										xs='auto'
										className='mb-3'>
										<img
											src={client1}
											alt='client 1'
											style={{
												width: '80px',
												height: '80px',
												objectFit: 'cover',
												borderRadius: '50%',
											}}
										/>
									</Col>
									<Col>
										<Card.Title className='fs-5'>John Doe</Card.Title>
										<Card.Subtitle className='mb-2 text-muted fs-6'>
											CEO, XYZ Company
										</Card.Subtitle>
										<Card.Text>
											"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua."
										</Card.Text>
									</Col>
								</Row>
							</Card>
						</Col>

						{/* Card 2 */}
						<Col
							md={6}
							lg={6}
							className='mb-4'>
							<Card className='p-4 testimonial-card'>
								<Row className='align-items-center'>
									<Col
										xs='auto'
										className='mb-3'>
										<img
											src={client2}
											alt='client 2'
											style={{
												width: '80px',
												height: '80px',
												objectFit: 'cover',
												borderRadius: '50%',
											}}
										/>
									</Col>
									<Col>
										<Card.Title className='fs-5'>Jane Smith</Card.Title>
										<Card.Subtitle className='mb-2 text-muted fs-6'>
											CFO, ABC Corp.
										</Card.Subtitle>
										<Card.Text>
											"Pinnacle’s service exceeded our expectations. The
											professionalism and attention to detail were outstanding."
										</Card.Text>
									</Col>
								</Row>
							</Card>
						</Col>

						{/* Card 3 */}
						<Col
							md={6}
							lg={6}
							className='mb-4'>
							<Card className='p-4 testimonial-card'>
								<Row className='align-items-center'>
									<Col
										xs='auto'
										className='mb-3'>
										<img
											src={client3}
											alt='client 3'
											style={{
												width: '80px',
												height: '80px',
												objectFit: 'cover',
												borderRadius: '50%',
											}}
										/>
									</Col>
									<Col>
										<Card.Title className='fs-5'>Robert Lee</Card.Title>
										<Card.Subtitle className='mb-2 text-muted fs-6'>
											COO, LMN Industries
										</Card.Subtitle>
										<Card.Text>
											"Their dedication and innovative approach truly set them
											apart. I highly recommend their services."
										</Card.Text>
									</Col>
								</Row>
							</Card>
						</Col>

						{/* Card 4 */}
						<Col
							md={6}
							lg={6}
							className='mb-4'>
							<Card className='p-4 testimonial-card'>
								<Row className='align-items-center'>
									<Col
										xs='auto'
										className='mb-3'>
										<img
											src={client4}
											alt='client 4'
											style={{
												width: '80px',
												height: '80px',
												objectFit: 'cover',
												borderRadius: '50%',
											}}
										/>
									</Col>
									<Col>
										<Card.Title className='fs-5'>Alice Brown</Card.Title>
										<Card.Subtitle className='mb-2 text-muted fs-6'>
											Director, PQR Solutions
										</Card.Subtitle>
										<Card.Text>
											"The service and support were exceptional, and the results
											were beyond our expectations."
										</Card.Text>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
				</div>
			</section>

			{/* CSS for animations and responsive vector image */}
			<style jsx>{`
				.testimonial-card {
					animation: fadeInUp 0.6s ease-out;
					transition: transform 0.3s ease, box-shadow 0.3s ease;
				}
				.testimonial-card:hover {
					transform: translateY(-8px) scale(1.02);
					box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
				}
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.testimonial-vector {
					max-width: 100%;
					height: auto;
					transition: transform 0.3s ease;
				}
				.testimonial-vector:hover {
					transform: scale(1.1);
				}
			`}</style>
		</>
	);
};

export default Testimonial;
