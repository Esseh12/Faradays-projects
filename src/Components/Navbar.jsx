import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo_img from '../assets/Images/Faraday Logo - Olusesan Oloruntola 1.svg';

const OffcanvasNavbar = ({
	styleProps = {
		defaultBg: 'bg-transparent',
		scrolledBg: 'bg-[#e5e5e5]',
		defaultNavLinkColor: '#fff',
		scrolledNavLinkColor: '#000',
	},
}) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const offCanvasRef = useRef(null);

	const navigate = useNavigate();
	// Update navbar style based on scroll
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Close offcanvas if clicking outside it when open
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				isOpen &&
				offCanvasRef.current &&
				!offCanvasRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About Us', path: '/about' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Products', path: '/product' },
		{ name: 'Blogs', path: '/blog' },
	];

	return (
		<>
			<Navbar
				collapseOnSelect
				expand='lg'
				className={`py-3 fixed-top ${
					isScrolled ? styleProps.scrolledBg : styleProps.defaultBg
				}`}
				expanded={isOpen}
				onToggle={toggleNav}>
				<Container>
					<Navbar.Brand
						as={Link}
						to='/'
						className='d-flex align-items-center gap-2'>
						<img
							src={logo_img}
							alt='logo'
							style={{ height: '30px' }}
							className='duration-300 hover:rotate-[-5deg] transition-all'
						/>
						<p className='custom-nav-link mb-0'>Faraday's Projects</p>
					</Navbar.Brand>

					<Navbar.Toggle
						aria-controls='responsive-navbar-nav'
						onClick={toggleNav}
						className='border-0'>
						{isOpen ? (
							<FaTimes
								size={24}
								color={
									isScrolled
										? styleProps.scrolledNavLinkColor
										: styleProps.defaultNavLinkColor
								}
							/>
						) : (
							<FaBars
								size={24}
								color={
									isScrolled
										? styleProps.scrolledNavLinkColor
										: styleProps.defaultNavLinkColor
								}
							/>
						)}
					</Navbar.Toggle>

					<Navbar.Collapse
						id='responsive-navbar-nav'
						ref={offCanvasRef}
						className={`${isOpen ? 'menu-open' : ''}`}>
						{/* Close icon within the offcanvas menu */}
						{isOpen && (
							<div
								className='offcanvas-close-icon'
								onClick={toggleNav}>
								<FaTimes
									size={24}
									color={
										isScrolled
											? styleProps.scrolledNavLinkColor
											: styleProps.defaultNavLinkColor
									}
								/>
							</div>
						)}
						<Nav className='text-black gap-2 me-auto ms-auto'>
							{navLinks.map((link) => (
								<Nav.Link
									key={link.path}
									as={Link}
									to={link.path}
									className='position-relative custom-nav-link fw-medium'
									onClick={() => setIsOpen(false)}>
									{link.name}
									<span className='nav-underline'></span>
								</Nav.Link>
							))}
						</Nav>
						<Nav>
							<Nav.Link
								as={Link}
								to='/contact'>
								<Button
									className='btn-hover-effect'
									style={{
										backgroundColor: '#D32F2F',
										borderColor: '#D32F2F',
									}}
									onClick={() => navigate('/contact')}>
									Contact Us
								</Button>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>

				<style
					jsx
					global>{`
					.navbar {
						transition: all 0.3s ease-in-out;
						backdrop-filter: ${isScrolled ? 'blur(10px)' : 'none'};
					}
					.custom-nav-link {
						font-size: 1.1rem;
						color: ${isScrolled
							? styleProps.scrolledNavLinkColor
							: styleProps.defaultNavLinkColor} !important;
						transition: all 0.3s ease;
						padding: 0.5rem 1rem !important;
						position: relative;
					}
					.custom-nav-link:hover,
					.custom-nav-link:active,
					.custom-nav-link.active {
						color: #d32f2f !important;
					}
					.offcanvas-close-icon {
						position: absolute;
						top: 1rem;
						right: 1rem;
						cursor: pointer;
						z-index: 1100;
					}
					@media (max-width: 991px) {
						.navbar-collapse {
							position: fixed;
							top: 0;
							right: -100%;
							width: 300px;
							height: 100vh;
							background: rgba(229, 229, 229, 0.98);
							backdrop-filter: blur(10px);
							transition: right 0.3s ease-in-out;
							padding: 2rem;
							z-index: 1050;
						}
						.menu-open {
							right: 0 !important;
							box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
						}
						.nav-link {
							color: #000 !important;
							padding: 1rem 0 !important;
						}
					}
				`}</style>
			</Navbar>
		</>
	);
};

export default OffcanvasNavbar;
