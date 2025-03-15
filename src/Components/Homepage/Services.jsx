import React from 'react';
import Slider from 'react-slick';
import { Card, Container } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import star_icon from '../../assets/Images/services-vector.svg';

// Sample images from Pexels (replace with your own)
const services = [
	{
		id: 1,
		title: 'Custom Homes',
		description: 'Tailor-made homes designed to match your vision.',
		image:
			'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1600',
	},
	{
		id: 2,
		title: 'Community Dev',
		description: 'Developing thriving, sustainable communities.',
		image:
			'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1600',
	},
	{
		id: 3,
		title: 'Renovations',
		description: 'Transforming existing spaces into modern havens.',
		image:
			'https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=1600',
	},
	{
		id: 4,
		title: 'Smart Housing',
		description: 'Innovative and automated solutions for modern living.',
		image:
			'https://images.pexels.com/photos/2287329/pexels-photo-2287329.jpeg?auto=compress&cs=tinysrgb&w=1600',
	},
];

const Services = () => {
	// react-slick settings
	const settings = {
		dots: false,
		infinite: true,
		speed: 700,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1200, // large screens
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 992, // medium screens
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576, // small screens
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section
			className='py-5'
			style={{
				backgroundColor: '#f8f9fa', // Light gray background
			}}>
			<Container>
				{/* Heading Section */}
				<div className='text-center mb-4'>
					<div className='d-flex align-items-center justify-content-center'>
						<h2
							style={{
								color: '#000',
								fontWeight: 'bold',
								position: 'relative',
								display: 'inline-block',
							}}>
							Quality service you get
						</h2>
						{/* Star icon next to heading */}
						<img
							src={star_icon}
							alt='Star icon'
							style={{
								width: '24px',
								height: '24px',
								marginLeft: '8px',
								transform: 'translateY(-2px)',
							}}
						/>
					</div>

					<p
						className='text-muted mt-2'
						style={{ maxWidth: '600px', margin: '0 auto' }}>
						A pinnacle of service, with just the right balance of style and
						technology.
					</p>
				</div>

				{/* Carousel Section */}
				<Slider {...settings}>
					{services.map((service) => (
						<div
							key={service.id}
							className='px-2'>
							<Card className='service-card border-0 shadow-sm'>
								<div className='img-wrapper'>
									<Card.Img
										variant='top'
										src={service.image}
										style={{
											height: '220px',
											objectFit: 'cover',
										}}
									/>
								</div>
								<Card.Body className='text-center'>
									<Card.Title
										className='mb-2'
										style={{ color: '#d32f2f', fontWeight: 'bold' }}>
										{service.title}
									</Card.Title>
									<Card.Text className='text-muted'>
										{service.description}
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					))}
				</Slider>
			</Container>

			{/* Animations & Hover Effects */}
			<style jsx>{`
				.service-card {
					transition: transform 0.4s ease, box-shadow 0.4s ease;
					border-radius: 12px;
					overflow: hidden;
				}
				.service-card:hover {
					transform: translateY(-6px) scale(1.02);
					box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
				}
				.img-wrapper {
					overflow: hidden;
					position: relative;
				}
				.img-wrapper::after {
					content: '';
					position: absolute;
					inset: 0;
					background: linear-gradient(
						45deg,
						rgba(211, 47, 47, 0.1),
						rgba(211, 47, 47, 0.3)
					);
					opacity: 0;
					transition: opacity 0.4s ease;
				}
				.service-card:hover .img-wrapper::after {
					opacity: 1;
				}
			`}</style>
		</section>
	);
};

export default Services;
