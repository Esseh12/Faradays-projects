import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import news_img from '../../assets/Images/latestnews-vector.svg';

const NewsSection = () => {
	return (
		<section
			id='news'
			className='py-8 bg-gray-100'>
			<Container>
				<div className='flex items-center gap-3 mb-3'>
					<img
						src={news_img}
						alt='FAQ'
						className=' h-auto'
					/>
					<h2
						className='text-center fs-1 font-bold mb-6'
						style={{ color: '#d32f2f' }}>
						Latest News
					</h2>
				</div>
				<Carousel
					interval={5000}
					controls={true}
					indicators={true}
					fade={true}>
					{/* News Item 1 */}
					<Carousel.Item>
						<img
							className='d-block w-100 h-auto object-cover'
							src='https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600'
							alt='Solar Panels'
							style={{ maxHeight: '500px' }}
						/>
						<Carousel.Caption className='bg-black bg-opacity-50 p-3 rounded'>
							<h3 className='text-xl font-semibold'>
								Solar Energy Breakthrough
							</h3>
							<p>
								Discover how solar energy is reshaping the inverter industry.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					{/* News Item 2 */}
					<Carousel.Item>
						<img
							className='d-block w-100 h-auto object-cover'
							src='https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600'
							alt='Inverter Technology'
							style={{ maxHeight: '500px' }}
						/>
						<Carousel.Caption className='bg-black bg-opacity-50 p-3 rounded'>
							<h3 className='text-xl font-semibold'>
								Innovative Inverter Designs
							</h3>
							<p>
								Latest trends in inverter technology for modern solar solutions.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					{/* News Item 3 */}
					<Carousel.Item>
						<img
							className='d-block w-100 h-auto object-cover'
							src='https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600'
							alt='Renewable Energy'
							style={{ maxHeight: '500px' }}
						/>
						<Carousel.Caption className='bg-black bg-opacity-50 p-3 rounded'>
							<h3 className='text-xl font-semibold'>
								Renewable Energy Insights
							</h3>
							<p>Stay updated with the newest insights and industry news.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Container>
		</section>
	);
};

export default NewsSection;
