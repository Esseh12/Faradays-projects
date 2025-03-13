import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import news_img from '../../assets/Images/latestnews-vector.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewsSection = () => {
	// Settings for react-slick carousel
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3, // number of cards visible at once
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	// Sample news items
	const newsItems = [
		{
			id: 1,
			title: 'Solar Energy Breakthrough',
			text: 'Discover how solar energy is reshaping the inverter industry.',
			image:
				'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
		{
			id: 2,
			title: 'Innovative Inverter Designs',
			text: 'Latest trends in inverter technology for modern solar solutions.',
			image:
				'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
		{
			id: 3,
			title: 'Renewable Energy Insights',
			text: 'Stay updated with the newest insights and industry news.',
			image:
				'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
		{
			id: 4,
			title: 'New Solar Panel Efficiency',
			text: 'Read about the latest breakthroughs in solar panel efficiency.',
			image:
				'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
	];

	return (
		<section
			id='news'
			className='py-8 bg-gray-100'>
			<Container>
				<div className='flex items-center gap-3 mb-3'>
					<img
						src={news_img}
						alt='News'
						className='h-auto'
					/>
					<h2
						className='text-center fs-1 font-bold mb-6'
						style={{ color: '#d32f2f' }}>
						Latest News
					</h2>
				</div>
				<Slider {...settings}>
					{newsItems.map((item) => (
						<div
							key={item.id}
							className='p-2'>
							<Card>
								<Card.Img
									variant='top'
									src={item.image}
									style={{ height: '200px', objectFit: 'cover' }}
								/>
								<Card.Body>
									<Card.Title className='text-xl font-semibold'>
										{item.title}
									</Card.Title>
									<Card.Text>{item.text}</Card.Text>
								</Card.Body>
							</Card>
						</div>
					))}
				</Slider>
			</Container>
		</section>
	);
};

export default NewsSection;
