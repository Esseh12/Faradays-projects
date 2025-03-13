import faq_vector from '../../assets/Images/faq-vector.svg';

const FAQ = () => {
	return (
		<section className='container mx-auto px-4 pt-5 pb-5'>
			<div className='flex items-center gap-3 mb-3'>
				<img
					src={faq_vector}
					alt='FAQ'
					className=' h-auto'
				/>
				<h2 className='text-center fs-1 font-bold mb-6'>
					Frequently Asked Questions
				</h2>
			</div>

			<div
				className='accordion'
				id='faqAccordion'>
				{/* FAQ Item 1 */}
				<div className='accordion-item mb-3 border rounded shadow'>
					<h2
						className='accordion-header'
						id='headingOne'>
						<button
							className='accordion-button collapsed bg-white text-gray-800 font-medium hover:bg-gray-100 transition-all duration-300'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseOne'
							aria-expanded='false'
							aria-controls='collapseOne'>
							What is an inverter and how does it work?
						</button>
					</h2>
					<div
						id='collapseOne'
						className='accordion-collapse collapse'
						aria-labelledby='headingOne'
						data-bs-parent='#faqAccordion'>
						<div className='accordion-body bg-gray-50 text-gray-700'>
							An inverter is an electronic device that converts DC (direct
							current) generated from solar panels into AC (alternating
							current), which can be used by your household appliances.
						</div>
					</div>
				</div>

				{/* FAQ Item 2 */}
				<div className='accordion-item mb-3 border rounded shadow'>
					<h2
						className='accordion-header'
						id='headingTwo'>
						<button
							className='accordion-button collapsed bg-white text-gray-800 font-medium hover:bg-gray-100 transition-all duration-300'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'>
							How does solar energy integrate with an inverter?
						</button>
					</h2>
					<div
						id='collapseTwo'
						className='accordion-collapse collapse'
						aria-labelledby='headingTwo'
						data-bs-parent='#faqAccordion'>
						<div className='accordion-body bg-gray-50 text-gray-700'>
							Solar panels produce DC electricity which is then converted to AC
							by the inverter. This AC power is what you use to run your home
							appliances and charge batteries.
						</div>
					</div>
				</div>

				{/* FAQ Item 3 */}
				<div className='accordion-item mb-3 border rounded shadow'>
					<h2
						className='accordion-header'
						id='headingThree'>
						<button
							className='accordion-button collapsed bg-white text-gray-800 font-medium hover:bg-gray-100 transition-all duration-300'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseThree'
							aria-expanded='false'
							aria-controls='collapseThree'>
							What are the benefits of using solar energy?
						</button>
					</h2>
					<div
						id='collapseThree'
						className='accordion-collapse collapse'
						aria-labelledby='headingThree'
						data-bs-parent='#faqAccordion'>
						<div className='accordion-body bg-gray-50 text-gray-700'>
							Solar energy is renewable, reduces electricity bills, and helps
							decrease carbon emissions. With an inverter system, you can
							efficiently power your home using clean energy.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
