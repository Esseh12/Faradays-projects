import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo_img from '../assets/Images/Faraday Logo - Olusesan Oloruntola 1.svg';

const OffcanvasNavbar = ({
	styleProps = {
		defaultBg: 'bg-transparent',
		scrolledBg: 'bg-white',
		defaultNavLinkColor: '#fff',
		scrolledNavLinkColor: '#000',
	},
}) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const offCanvasRef = useRef(null);
	const navigate = useNavigate();
	const location = useLocation();

	// Update navbar style based on scroll
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Handle outside clicks to close menu
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

		// Prevent scrolling when mobile menu is open
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	// Close mobile menu when route changes
	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

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

	const isActiveLink = (path) => {
		return location.pathname === path;
	};

	const textColor = isScrolled
		? styleProps.scrolledNavLinkColor
		: styleProps.defaultNavLinkColor;

	return (
		<>
			{/* Overlay for mobile menu */}
			{isOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Desktop Navbar */}
			<header
				className={`fixed top-0 w-full z-40 transition-all duration-300 py-4 ${
					isScrolled
						? `${styleProps.scrolledBg} shadow-md`
						: styleProps.defaultBg
				}`}>
				<div className='max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between'>
					<Link
						to='/'
						className='flex items-center gap-3 group'
						aria-label='Go to home page'>
						<img
							src={logo_img}
							alt="Faraday's Projects Logo"
							className='h-8 md:h-9 transition-transform duration-300 group-hover:rotate-[-5deg]'
						/>
						<p
							className='text-base md:text-lg font-medium'
							style={{ color: textColor }}>
							Faraday's Projects
						</p>
					</Link>

					{/* Desktop Nav Links */}
					<div className='hidden lg:flex items-center space-x-8'>
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`relative text-base font-medium transition-colors duration-300 hover:text-red-600 ${
									isActiveLink(link.path) ? 'text-red-600' : ''
								}`}
								style={{
									color: isActiveLink(link.path) ? '#dc2626' : textColor,
								}}
								aria-current={isActiveLink(link.path) ? 'page' : undefined}>
								{link.name}
								<span
									className={`absolute left-0 -bottom-1 h-0.5 bg-red-600 transition-all duration-300 ${
										isActiveLink(link.path)
											? 'w-full scale-x-100'
											: 'w-full scale-x-0 group-hover:scale-x-100'
									}`}
								/>
							</Link>
						))}
						<button
							onClick={() => navigate('/contact')}
							className='px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all shadow-sm hover:shadow focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:outline-none'>
							Contact Us
						</button>
					</div>

					{/* Mobile Menu Toggle */}
					<button
						onClick={toggleNav}
						className='p-2 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md lg:hidden'
						aria-expanded={isOpen}
						aria-label={isOpen ? 'Close menu' : 'Open menu'}>
						<span className='sr-only'>
							{isOpen ? 'Close menu' : 'Open menu'}
						</span>
						<div className='w-6 flex flex-col items-end justify-center gap-1.5'>
							<span
								className={`block h-0.5 bg-current transition-all duration-300 ${
									isOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'
								}`}
								style={{ backgroundColor: textColor }}
							/>
							<span
								className={`block h-0.5 transition-all duration-300 ${
									isOpen ? 'opacity-0 w-6' : 'opacity-100 w-5'
								}`}
								style={{ backgroundColor: textColor }}
							/>
							<span
								className={`block h-0.5 bg-current transition-all duration-300 ${
									isOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-4'
								}`}
								style={{ backgroundColor: textColor }}
							/>
						</div>
					</button>
				</div>
			</header>

			{/* Off-canvas Mobile Menu */}
			<nav
				ref={offCanvasRef}
				className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} lg:hidden overflow-y-auto`}
				aria-hidden={!isOpen}>
				<div className='p-6'>
					<div className='flex justify-between items-center mb-8'>
						<Link
							to='/'
							className='flex items-center gap-2'
							onClick={() => setIsOpen(false)}>
							<img
								src={logo_img}
								alt="Faraday's Projects Logo"
								className='h-8'
							/>
							<p className='text-base font-medium text-black'>
								Faraday's Projects
							</p>
						</Link>
						<button
							onClick={toggleNav}
							className='p-2 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md'
							aria-label='Close menu'>
							<svg
								className='w-6 h-6 text-gray-600'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'></path>
							</svg>
						</button>
					</div>

					<div className='mt-10'>
						<ul className='space-y-6'>
							{navLinks.map((link) => (
								<li key={link.path}>
									<Link
										to={link.path}
										onClick={() => setIsOpen(false)}
										className={`block text-lg font-medium transition-colors duration-300 hover:text-red-600 ${
											isActiveLink(link.path) ? 'text-red-600' : 'text-gray-800'
										}`}
										aria-current={isActiveLink(link.path) ? 'page' : undefined}>
										{link.name}
										{isActiveLink(link.path) && (
											<span className='ml-2 text-red-600'>•</span>
										)}
									</Link>
								</li>
							))}
						</ul>

						<button
							onClick={() => {
								navigate('/contact');
								setIsOpen(false);
							}}
							className='mt-10 w-full px-4 py-3 bg-red-600 text-white rounded-md text-center hover:bg-red-700 transition-colors font-medium shadow-sm'>
							Contact Us
						</button>
					</div>

					<div className='mt-16 pt-6 border-t border-gray-200'>
						<p className='text-sm text-gray-500'>
							© {new Date().getFullYear()} Faraday's Projects
						</p>
					</div>
				</div>
			</nav>
		</>
	);
};

export default OffcanvasNavbar;
