import React from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';
import faq_vector from '../../assets/Images/faq-vector.svg';

const FAQ = () => {
	return (
		<section className='container mx-auto px-4 pt-5 pb-5'>
			<div className='flex items-center gap-3 mb-3'>
				<img
					src={faq_vector}
					alt='FAQ'
					className='h-auto'
				/>
				<h2 className='text-center fs-1 font-bold mb-6'>
					Frequently Asked Questions
				</h2>
			</div>
			<Accordion defaultActiveKey='0'>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>
						What is an inverter and how does it work?
					</Accordion.Header>
					<Accordion.Body>
						An inverter is an electronic device that converts DC (direct
						current) generated from solar panels into AC (alternating current),
						which can be used by your household appliances.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header>
						How does solar energy integrate with an inverter?
					</Accordion.Header>
					<Accordion.Body>
						Solar panels produce DC electricity which is then converted to AC by
						the inverter. This AC power is what you use to run your home
						appliances and charge batteries.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='2'>
					<Accordion.Header>
						What are the benefits of using solar energy?
					</Accordion.Header>
					<Accordion.Body>
						Solar energy is renewable, reduces electricity bills, and helps
						decrease carbon emissions. With an inverter system, you can
						efficiently power your home using clean energy.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</section>
	);
};

export default FAQ;
