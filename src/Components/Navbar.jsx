import { useState, useEffect, useRef } from 'react';
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
		return () => document.removeEventListener('mousedown', handleClickOutside);
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
			{/* Desktop Navbar */}
			<header
				className={`fixed top-0 w-full z-50 transition-all duration-300 py-3 ${
					isScrolled ? styleProps.scrolledBg : styleProps.defaultBg
				}`}>
				<div className='max-w-6xl mx-auto px-4 flex items-center justify-between'>
					<Link
						to='/'
						className='flex items-center gap-2'>
						<img
							src={logo_img}
							alt='logo'
							className='h-8 transition-transform duration-300 hover:rotate-[-5deg]'
						/>
						<p
							className='text-base font-medium'
							style={{
								color: isScrolled
									? styleProps.scrolledNavLinkColor
									: styleProps.defaultNavLinkColor,
							}}>
							Faraday&apos;s Projects
						</p>
					</Link>

					{/* Desktop Nav Links */}
					<div className='hidden lg:flex items-center space-x-6'>
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								onClick={() => setIsOpen(false)}
								className='relative text-base font-medium transition-colors duration-300'
								style={{
									color: isScrolled
										? styleProps.scrolledNavLinkColor
										: styleProps.defaultNavLinkColor,
								}}>
								{link.name}
								<span className='absolute left-0 -bottom-1 h-0.5 w-full bg-red-600 scale-x-0 hover:scale-x-100 transition-transform origin-left'></span>
							</Link>
						))}
						<button
							onClick={() => {
								navigate('/contact');
								setIsOpen(false);
							}}
							className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors'>
							Contact Us
						</button>
					</div>

					{/* Mobile Menu Toggle */}
					<div className='lg:hidden'>
						<button
							onClick={toggleNav}
							className='p-2 focus:outline-none'>
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
						</button>
					</div>
				</div>
			</header>

			{/* Off-canvas Mobile Menu */}
			<nav
				ref={offCanvasRef}
				className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} lg:hidden`}>
				<div className='p-4'>
					<div className='flex justify-end'>
						<button
							onClick={toggleNav}
							className='p-2 focus:outline-none'>
							<FaTimes
								size={24}
								color='#000'
							/>
						</button>
					</div>
					<ul className='mt-8 space-y-6'>
						{navLinks.map((link) => (
							<li key={link.path}>
								<Link
									to={link.path}
									onClick={() => setIsOpen(false)}
									className='block text-xl font-medium text-black transition-colors hover:text-red-600'>
									{link.name}
								</Link>
							</li>
						))}
						<li>
							<button
								onClick={() => {
									navigate('/contact');
									setIsOpen(false);
								}}
								className='mt-4 w-full px-4 py-2 bg-red-600 text-white rounded-md text-center hover:bg-red-700 transition-colors'>
								Contact Us
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default OffcanvasNavbar;
