import React, { useState } from 'react';
import { FaSun, FaQuestionCircle, FaTools, FaLeaf } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const faqItems = [
		{
			icon: <FaSun className='text-[#d34545] text-xl' />,
			question: 'How do solar panels work?',
			answer:
				'Solar panels convert sunlight into electricity through photovoltaic cells. These cells absorb sunlight, creating an electric field that causes electricity to flow. Inverters then convert this DC electricity into AC electricity for your home or business.',
		},
		{
			icon: <FaQuestionCircle className='text-[#d34545] text-xl' />,
			question: 'What is an inverter and why do I need one?',
			answer:
				'An inverter is a critical component of a solar power system that converts DC electricity from solar panels into AC electricity for your appliances. It also optimizes energy production and provides system monitoring.',
		},
		{
			icon: <FaTools className='text-[#d34545] text-xl' />,
			question: 'How long does installation take?',
			answer:
				'Residential solar installations typically take 1-3 days, depending on system size and complexity. Commercial projects may take 1-2 weeks. Our team will give you a tailored timeline during your consultation.',
		},
		{
			icon: <FaLeaf className='text-[#d34545] text-xl' />,
			question: 'How much maintenance do solar systems require?',
			answer:
				'Solar systems need minimal maintenance. Occasional cleaning and an annual inspection are typically sufficient. Most components come with warranties ranging from 10 to 25 years, and our maintenance packages can further extend your system’s lifespan.',
		},
	];

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div
			className='p-8 w-full'
			style={{
				background: 'linear-gradient(135deg, #001f3f, #003366)',
				padding: '4rem 0',
			}}>
			<div className='max-w-4xl mx-auto'>
				<h2
					className='text-3xl text-center text-white font-bold'
					style={{ marginBottom: '1rem' }}>
					Frequently Asked Questions
				</h2>

				<div className='d-flex flex-column gap-3 space-y-6'>
					{faqItems.map((item, index) => (
						<div
							key={index}
							className={`rounded-lg duration-300 overflow-hidden transition-all ${
								openIndex === index ? 'bg-white' : 'bg-white bg-opacity-10'
							}`}>
							<button
								className={`flex justify-between p-4 w-full duration-200 items-center transition-colors ${
									openIndex === index
										? 'text-gray-900'
										: 'text-white hover:bg-black hover:bg-opacity-5'
								}`}
								onClick={() => toggleFAQ(index)}>
								<div className='flex gap-3 items-center'>
									<span className='mr-3'>{item.icon}</span>
									<span className='text-lg font-medium'>{item.question}</span>
								</div>
								{openIndex === index ? (
									<MdExpandLess className='text-[#d34545] text-xl' />
								) : (
									<MdExpandMore className='text-[#d34545] text-xl' />
								)}
							</button>

							<div
								className={`px-4 transition-all duration-300 overflow-hidden ${
									openIndex === index ? 'max-h-64 pb-4' : 'max-h-0'
								}`}>
								<p
									className={
										openIndex === index ? 'text-gray-900' : 'text-gray-200'
									}>
									{item.answer}
								</p>
							</div>
						</div>
					))}
				</div>

				<div
					className='text-center'
					style={{ marginTop: '1rem' }}>
					<p className='text-gray-300'>
						Still have questions? Contact our team for personalized assistance.
					</p>
					<button
						className='bg-[#d34545] rounded text-gray-900 duration-200 font-medium hover:bg-[#d34545] mt-4 transition-colors'
						style={{ padding: '0.75rem 1.5rem' }}>
						Contact Us
					</button>
				</div>
			</div>
		</div>
	);
};

export default FAQSection;
