import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo_img from '../assets/Images/Faraday Logo - Olusesan Oloruntola 1.svg';

const OffcanvasNavbar = () => {
	return (
		<>
			<Navbar
				collapseOnSelect
				expand='lg'
				className='py-3 shadow bg-[#e5e5e5]'
				variant='light'
				sticky='top'>
				<Container>
					<Navbar.Brand
						href='#home'
						className='d-flex align-items-center gap-2 fw-bold fs-5'
						style={{ color: '#000' }}>
						<img
							src={logo_img}
							alt='logo'
							style={{ height: '30px' }}
						/>
						<p className='mb-0'>Faraday's Projects</p>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto ms-auto text-black gap-2'>
							<Nav.Link
								href='#home'
								className='custom-nav-link fw-medium'>
								Home
							</Nav.Link>
							<Nav.Link
								href='#about-us'
								className='custom-nav-link fw-medium'>
								About Us
							</Nav.Link>
							<Nav.Link
								href='#projects'
								className='custom-nav-link fw-medium'>
								Projects
							</Nav.Link>
							<Nav.Link
								href='#products'
								className='custom-nav-link fw-medium'>
								Products
							</Nav.Link>
							<Nav.Link
								href='#blogs'
								className='custom-nav-link fw-medium'>
								Blogs
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href='#deets'>
								<Button
									style={{
										backgroundColor: '#D32F2F',
										borderColor: '#D32F2F',
									}}>
									Contact Us
								</Button>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<style jsx>{`
				.custom-nav-link {
					font-size: 1.2rem; /* Increased font size */
					color: #000 !important; /* Default color black */
					transition: color 0.3s ease;
				}
				.custom-nav-link:hover,
				.custom-nav-link:active,
				.custom-nav-link.active {
					color: #d32f2f !important; /* Hover and active color */
				}
			`}</style>
		</>
	);
};

export default OffcanvasNavbar;
