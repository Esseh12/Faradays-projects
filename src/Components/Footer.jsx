import { Row, Col, Container, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/Faraday Logo - Olusesan Oloruntola 1.svg';
import { FaPaperPlane } from 'react-icons/fa6';
import {
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<section
			id='footer'
			className='w-full bg-grey text-black text-center'
			style={{ paddingTop: '2.8rem' }}>
			<Container fluid>
				{/* Top Part: Main Footer Content */}
				<Row className='flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-6'>
					{/* Logo & Newsletter */}
					<Col
						md={3}
						className='mb-4 md:mb-0'>
						<div className='flex flex-col items-center md:items-center gap-4'>
							<span className='flex items-center gap-2'>
								<img
									src={logo}
									alt='logo'
									className='w-12 h-auto'
								/>
								<h4 className='font-black'>Faradays Projects</h4>
							</span>
							<InputGroup
								size='lg'
								className='w-full'>
								<Form.Control
									placeholder='Enter your Email'
									aria-label='Email'
									aria-describedby='email-addon'
									className='border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#d32f2f] transition-all duration-300'
								/>
								<InputGroup.Text
									id='email-addon'
									className='bg-black text-white rounded-r-lg hover:bg-[#d32f2f] transition-all duration-300'>
									<FaPaperPlane />
								</InputGroup.Text>
							</InputGroup>
						</div>
					</Col>

					{/* Navigation */}
					<Col
						md={2}
						className='mb-4 md:mb-0'>
						<h4 className='mb-3'>Navigation</h4>
						<ul className='flex flex-col gap-2 text-center'>
							<li>
								<Link
									to='/about'
									className='text-black py-1 no-underline hover:text-[#d32f2f] transition-all duration-300'>
									About
								</Link>
							</li>
							<li>
								<Link
									to='/projects'
									className='text-black py-1 no-underline hover:text-[#d32f2f] transition-all duration-300'>
									Projects
								</Link>
							</li>
							<li>
								<Link
									to='/blogs'
									className='text-black py-1 no-underline hover:text-[#d32f2f] transition-all duration-300'>
									Blogs
								</Link>
							</li>
						</ul>
					</Col>

					{/* About Us */}
					<Col
						md={2}
						className='mb-4 md:mb-0'>
						<h4 className='mb-3'>About Us</h4>
						<ul className='flex flex-col gap-2'>
							<li>
								<Link
									to='/our-story'
									className='text-black py-1 no-underline hover:text-[#d32f2f] transition-all duration-300'>
									Our Story
								</Link>
							</li>
							<li>
								<Link
									to='/our-values'
									className='text-black py-1 no-underline hover:text-[#d32f2f] transition-all duration-300'>
									Our Values
								</Link>
							</li>
							<li>
								<Link
									to='/our-team'
									className='text-black py-1 no-underline hover:text-[#d32f2f] transition-all duration-300'>
									Our Team
								</Link>
							</li>
						</ul>
					</Col>

					{/* Products */}
					<Col
						md={2}
						className='mb-4 md:mb-0'>
						<h4 className='mb-3'>Products</h4>
						<ul className='flex flex-col gap-2 text-center'>
							<li>
								<Link
									to='/product1'
									className='text-black py-1 no-underline hover:text-[#d32f2f] transition-all duration-300'>
									Product 1
								</Link>
							</li>
							<li>
								<Link
									to='/product2'
									className='text-black py-1 no-underline hover:text-[#d32f2f] transition-all duration-300'>
									Product 2
								</Link>
							</li>
							<li>
								<Link
									to='/product3'
									className='text-black py-1 no-underline hover:text-[#d32f2f] transition-all duration-300'>
									Product 3
								</Link>
							</li>
						</ul>
					</Col>

					{/* Services */}
					<Col md={2}>
						<h4 className='mb-3'>Services</h4>
						<ul className='flex flex-col gap-2'>
							<li>
								<Link
									to='/service1'
									className='text-black py-1 no-underline hover:text-[#d32f2f] transition-all duration-300'>
									Service 1
								</Link>
							</li>
							<li>
								<Link
									to='/service2'
									className='text-black py-1 no-underline hover:text-[#d32f2f] transition-all duration-300'>
									Service 2
								</Link>
							</li>
							<li>
								<Link
									to='/service3'
									className='text-black py-1 no-underline hover:text-[#d32f2f] transition-all duration-300'>
									Service 3
								</Link>
							</li>
						</ul>
					</Col>
				</Row>

				{/* Bottom Footer */}
				<Row className='bg-[#201F1F] text-white text-center p-3 flex flex-col md:flex-row md:justify-between md:items-center'>
					<Col className='mb-2 md:mb-0'>
						<span className='fs-6'>
							&copy; {new Date().getFullYear()} Faradays Projects. All Rights
							Reserved.
						</span>
					</Col>
					<Col>
						<div className='flex gap-3 justify-center'>
							<div className='border border-secondary p-2 rounded hover:scale-110 transition-all duration-300'>
								<FaFacebookF className='text-white' />
							</div>
							<div className='border border-secondary p-2 rounded hover:scale-110 transition-all duration-300'>
								<FaLinkedinIn className='text-white' />
							</div>
							<div className='border border-secondary p-2 rounded hover:scale-110 transition-all duration-300'>
								<FaTwitter className='text-white' />
							</div>
							<div className='border border-secondary p-2 rounded hover:scale-110 transition-all duration-300'>
								<FaYoutube className='text-white' />
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Footer;
