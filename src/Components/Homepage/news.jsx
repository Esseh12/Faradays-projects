import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import {
	FaCalendarAlt,
	FaArrowRight,
	FaArrowLeft,
	FaSun,
} from 'react-icons/fa';
import news_img from '../../assets/Images/latestnews-vector.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Next Arrow Component positioned at the bottom right
const NextArrow = ({ onClick, style }) => {
	return (
		<button
			onClick={onClick}
			style={{ ...style, position: 'absolute', bottom: '50%', left: '100%' }}
			className='bg-[#d32f2f] text-white rounded-pill w-10 h-10 d-flex align-items-center justify-content-center  transition-all duration-300 hover:translate-x-2'>
			<FaArrowRight />
		</button>
	);
};

// Custom Prev Arrow Component positioned to the left of the NextArrow
const PrevArrow = ({ onClick, style }) => {
	return (
		<button
			onClick={onClick}
			style={{ ...style, position: 'absolute', bottom: '50%', right: '100%' }}
			className='bg-[#d32f2f] text-white rounded-pill w-10 h-10 d-flex align-items-center justify-content-center transition-all duration-300 hover:-translate-x-2'>
			<FaArrowLeft />
		</button>
	);
};

const NewsSection = () => {
	// Slider settings including autoplay, lazy loading, custom arrows and responsiveness
	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 2000,
		swipeToSlide: true,
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
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
					initialSlide: 1,
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

	// Updated news items focusing on solar and inverter content
	const newsItems = [
		{
			id: 1,
			title: 'Solar Energy Breakthrough',
			brief: 'Solar Update',
			date: 'Aug 20, 2025',
			image:
				'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
		{
			id: 2,
			title: 'Innovative Inverter Designs',
			brief: 'Inverter Innovation',
			date: 'Sep 05, 2025',
			image:
				'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
		{
			id: 3,
			title: 'Renewable Energy Insights',
			brief: 'Tech Trends',
			date: 'Oct 15, 2025',
			image:
				'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
		{
			id: 4,
			title: 'New Solar Panel Efficiency',
			brief: 'Efficiency Update',
			date: 'Nov 02, 2025',
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
						className='h-auto transform transition-transform duration-500 hover:rotate-180'
					/>
					<h2 className='text-center fs-1 font-bold text-black mb-6'>
						Latest News
					</h2>
				</div>
				<div className='flex flex-col md:flex-row md:justify-between md:items-center '>
					<p className='font-medium text-black text-base mb-2 md:mb-0'>
						We deliver exceptional insights on solar power and inverter
						innovations that drive the future of renewable energy.
					</p>
					<button
						className='relative group inline-block overflow-hidden rounded-md px-4 py-2 mt-4 md:mt-0'
						style={{ minWidth: '120px' }}>
						<div className='absolute inset-0 bg-gradient-to-r from-[#d32f2f] to-[#d5d5d5]'></div>
						<div className='absolute inset-0 bg-gradient-to-r from-[#999898] to-[#d32f2f] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500'></div>
						<span className='relative z-10 transition-colors duration-500 group-hover:text-[#d32f2f] text-white'>
							View All
						</span>
					</button>
				</div>
				{/* Wrap the slider in a relative container for proper arrow positioning */}
				<div className='relative'>
					<Slider {...settings}>
						{newsItems.map((item) => (
							<div
								key={item.id}
								className='p-2'>
								<Card>
									<Card.Img
										variant='top'
										src={item.image}
										alt={item.title}
										style={{
											height: '200px',
											objectFit: 'cover',
											backgroundColor: '#d32f2f',
										}}
									/>
									<Card.Body>
										<div className='flex items-center text-sm text-gray-600 gap-1 mb-4'>
											<FaSun className='mr-1 text-lg' />
											{item.brief}
										</div>
										<Card.Title className='text-xl font-semibold'>
											{item.title}
										</Card.Title>
										<div className='flex justify-between items-center '>
											<div className='flex items-center text-gray-500 text-sm gap-1 mt-2'>
												<FaCalendarAlt className='mr-1' />
												<span>{item.date}</span>
											</div>
											<a
												href='#'
												className='flex items-center text-black text-sm hover:text-[#d32f2f] transition-colors duration-300'>
												Read more <FaArrowRight className='ml-1' />
											</a>
										</div>
									</Card.Body>
								</Card>
							</div>
						))}
					</Slider>
				</div>
			</Container>
		</section>
	);
};

export default NewsSection;
