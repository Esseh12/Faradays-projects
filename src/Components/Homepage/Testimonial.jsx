import React from 'react';
import { FiStar } from 'react-icons/fi';

// Sample testimonials data
const testimonials = [
	{
		id: 1,
		name: 'Aisha Bello',
		role: 'Homeowner, Lagos',
		text: 'Switching to solar with this company was our best decision. Our energy bills dropped 80% with 24/7 reliable power.',
		rating: 5,
		image: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		id: 2,
		name: 'Chike Obi',
		role: 'Business Owner, Abuja',
		text: 'The hybrid inverter system eliminated our downtime. Flawless transition between grid and solar power.',
		rating: 5,
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		id: 3,
		name: 'Funke Adeola',
		role: 'School Administrator',
		text: 'Professional installation with premium components. Our solar array consistently outperforms expectations.',
		rating: 4,
		image: 'https://randomuser.me/api/portraits/women/65.jpg',
	},
	{
		id: 4,
		name: 'Emeka Nwankwo',
		role: 'Factory Manager',
		text: 'Cut energy costs by 60% while maintaining full production capacity. Remarkable ROI in just 18 months.',
		rating: 5,
		image: 'https://randomuser.me/api/portraits/men/45.jpg',
	},
];

const Testimonials = () => {
	return (
		<section className='bg-gradient-to-r from-blue-50 to-indigo-50 py-20'>
			<div className='max-w-6xl mx-auto px-6'>
				{/* Section Title */}
				<div className='text-center mb-16'>
					<h2 className='text-5xl font-extrabold text-gray-800 mb-4'>
						What Our Clients Say
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Our trusted clients share how our innovative energy solutions have
						transformed their day-to-day operations and empowered their
						businesses.
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12'>
					{testimonials.map((t) => (
						<div
							key={t.id}
							className='bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105'>
							<div className='p-8 flex flex-col items-center'>
								{/* Avatar */}
								<img
									src={t.image}
									alt={t.name}
									className='w-28 h-28 rounded-full border-4 border-gray-100 shadow-md mb-6'
								/>

								{/* Star Rating */}
								<div className='flex mb-4'>
									{[...Array(5)].map((_, i) => (
										<FiStar
											key={i}
											className={`mx-1 ${
												i < t.rating ? 'text-yellow-400' : 'text-gray-300'
											}`}
										/>
									))}
								</div>

								{/* Testimonial Text */}
								<p className='text-gray-700 italic text-center mb-6'>
									"{t.text}"
								</p>

								{/* Client Info */}
								<div className='text-center'>
									<h5 className='text-xl font-semibold text-gray-800'>
										{t.name}
									</h5>
									<p className='text-sm text-gray-500'>{t.role}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
