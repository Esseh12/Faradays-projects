import React from 'react';
import Slider from 'react-slick';
import { Card, Container } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for featured projects
const featuredProjects = [
	{
		id: 1,
		title: 'Modern Villa',
		description: 'An architectural masterpiece with a modern twist.',
		image:
			'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1600',
	},
	{
		id: 2,
		title: 'Eco Community',
		description: 'Sustainable and green living at its finest.',
		image:
			'https://images.pexels.com/photos/157145/pexels-photo-157145.jpeg?auto=compress&cs=tinysrgb&w=1600',
	},
	{
		id: 3,
		title: 'Urban Apartment',
		description: 'Luxury living in the heart of the city.',
		image:
			'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600',
	},
	{
		id: 4,
		title: 'Beachfront Resort',
		description: 'Relax and unwind with stunning ocean views.',
		image:
			'https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&w=1600',
	},
];

const FeaturedProjects = () => {
	// Slider configuration for react-slick
	const settings = {
		dots: false,
		infinite: true,
		speed: 700,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 2 },
			},
			{
				breakpoint: 768,
				settings: { slidesToShow: 1 },
			},
		],
	};

	return (
		<section
			className='py-5'
			style={{ backgroundColor: '#fff' }}>
			<Container>
				{/* Header */}
				<div className='text-center mb-4'>
					<h2 style={{ color: '#000', fontWeight: 'bold' }}>
						Featured Projects
					</h2>
					<p
						className='text-muted mt-2'
						style={{ maxWidth: '600px', margin: '0 auto' }}>
						Discover our latest and most outstanding projects.
					</p>
				</div>
				{/* Slider */}
				<Slider {...settings}>
					{featuredProjects.map((project) => (
						<div
							key={project.id}
							className='px-2'>
							<Card className='project-card border-0 shadow-sm'>
								<div className='img-wrapper'>
									<Card.Img
										variant='top'
										src={project.image}
										style={{ height: '220px', objectFit: 'cover' }}
									/>
								</div>
								<Card.Body className='text-center'>
									<Card.Title
										className='mb-2'
										style={{ color: '#d32f2f', fontWeight: 'bold' }}>
										{project.title}
									</Card.Title>
									<Card.Text className='text-muted'>
										{project.description}
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					))}
				</Slider>
			</Container>
			{/* Inline styles for hover animations */}
			<style jsx>{`
				.project-card {
					transition: transform 0.4s ease, box-shadow 0.4s ease;
					border-radius: 12px;
					overflow: hidden;
				}
				.project-card:hover {
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
				.project-card:hover .img-wrapper::after {
					opacity: 1;
				}
			`}</style>
		</section>
	);
};

export default FeaturedProjects;
