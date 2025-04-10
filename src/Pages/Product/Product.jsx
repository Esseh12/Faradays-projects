import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import OffcanvasNavbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import products from '../../Components/Product/productsData';
import * as XLSX from 'xlsx';

const ProductPage = () => {
	const [activeCategory, setActiveCategory] = useState('all');
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	// Product categories
	const categories = [
		{ id: 'all', name: 'All Products' },
		{ id: 'solar-panels', name: 'Solar Panels' },
		{ id: 'inverters', name: 'Inverters' },
		{ id: 'batteries', name: 'Battery Storage' },
		{ id: 'accessories', name: 'Accessories' },
	];

	// Filter products when category changes
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			if (activeCategory === 'all') {
				setFilteredProducts(products);
			} else {
				setFilteredProducts(
					products.filter((product) => product.category === activeCategory)
				);
			}
			setIsLoading(false);
		}, 500); // Simulate loading delay
	}, [activeCategory]);

	// Animation variants
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

	// CTA actions
	const handleRequestConsultation = () => {
		navigate('/contact');
	};

	const handleDownloadCatalog = () => {
		// Map products to only the required fields
		const exportData = products.map((product) => ({
			Name: product.name,
			Category: product.category,
			Price: product.price,
			Specs: JSON.stringify(product.specs),
		}));

		const worksheet = XLSX.utils.json_to_sheet(exportData);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
		const excelBuffer = XLSX.write(workbook, {
			bookType: 'xlsx',
			type: 'array',
		});
		const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
		const url = window.URL.createObjectURL(data);
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', 'product_catalog.xlsx');
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<>
			<OffcanvasNavbar />
			<div className='overflow-x-hidden font-inter text-gray-900'>
				{/* HERO SECTION */}
				<section className='relative h-[80vh] flex items-center justify-center overflow-hidden text-white'>
					<div className='absolute inset-0 z-[-2] overflow-hidden'>
						<img
							src='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/powering-on-desktop'
							alt='Hero'
							loading='lazy'
							className='w-full h-full object-cover'
						/>
						<div className='absolute inset-0 bg-black opacity-80'></div>
					</div>
					<div className='max-w-6xl mx-auto px-4 text-center'>
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}>
							<h1 className='text-3xl md:text-5xl font-bold'>
								Solar Solutions for Every Need
							</h1>
							<p className='mt-4 text-lg md:text-xl'>
								Explore our high-efficiency solar panels, powerful inverters,
								and complete system solutions.
							</p>
						</motion.div>
					</div>
				</section>

				{/* FEATURED PRODUCTS SECTION */}
				<section className='py-20 bg-white'>
					<div className='max-w-6xl mx-auto px-4'>
						<h2 className='text-2xl md:text-3xl font-semibold text-center text-[#004976] mb-12 relative'>
							Featured Products
							<span className='block w-20 h-1 bg-red-600 mx-auto mt-2 rounded'></span>
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
							{products
								.filter((product) => product.featured)
								.map((product, index) => (
									<motion.div
										key={product.id}
										className='bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300'
										initial='hidden'
										whileInView='visible'
										viewport={{ once: true, amount: 0.3 }}
										variants={fadeIn}
										transition={{ delay: index * 0.1 }}>
										<Link
											to={`/product/${product.id}`}
											className='block'>
											<div className='relative h-56 bg-gray-100 overflow-hidden'>
												<img
													src={product.image}
													alt={product.name}
													className='w-full h-full object-cover transition-transform duration-500 ease-in-out'
												/>
												{product.badge && (
													<span className='absolute top-4 right-4 bg-red-600 text-white px-2 py-1 text-xs rounded'>
														{product.badge}
													</span>
												)}
											</div>
											<div className='p-4 flex flex-col'>
												<h3 className='text-lg font-semibold text-[#004976] mb-2'>
													{product.name}
												</h3>
												<div className='flex justify-between mb-2'>
													<span className='font-bold text-lg text-red-600'>
														${product.price.toFixed(2)}
													</span>
													<span className='text-sm text-gray-600 flex items-center gap-1'>
														<span className='text-yellow-400'>★</span>{' '}
														{product.rating}
													</span>
												</div>
												<button className='mt-auto bg-[#0062cc] text-white px-4 py-2 rounded hover:bg-[#004976] transition-colors'>
													View Details
												</button>
											</div>
										</Link>
									</motion.div>
								))}
						</div>
					</div>
				</section>

				{/* PRODUCT CATALOG SECTION */}
				<section className='py-20 bg-gray-100'>
					<div className='max-w-6xl mx-auto px-4'>
						<div className='text-center mb-12'>
							<h2 className='text-2xl md:text-3xl font-semibold text-[#004976] mb-4'>
								Product Catalog
							</h2>
							<div className='flex flex-wrap justify-center gap-4'>
								{categories.map((category) => (
									<button
										key={category.id}
										onClick={() => setActiveCategory(category.id)}
										className={`py-2 px-4 rounded-full transition-colors ${
											activeCategory === category.id
												? 'bg-[#0062cc] text-white'
												: 'bg-transparent text-gray-600'
										}`}>
										{category.name}
									</button>
								))}
							</div>
						</div>
						{isLoading ? (
							<div className='flex flex-col items-center justify-center min-h-[300px]'>
								<div className='w-10 h-10 border-4 border-t-[#0062cc] border-gray-200 rounded-full animate-spin mb-4'></div>
								<p>Loading products...</p>
							</div>
						) : (
							<motion.div
								className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
								variants={staggerContainer}
								initial='hidden'
								animate='visible'>
								{filteredProducts.length > 0 ? (
									filteredProducts.map((product, index) => (
										<motion.div
											key={product.id}
											className='bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 flex flex-col'
											variants={fadeIn}
											transition={{ delay: index * 0.05 }}>
											<Link
												to={`/product/${product.id}`}
												className='block'>
												<div className='relative h-56 bg-gray-100 overflow-hidden'>
													<img
														src={product.image}
														alt={product.name}
														className='w-full h-full object-cover transition-transform duration-500'
													/>
													{product.badge && (
														<span className='absolute top-4 right-4 bg-red-600 text-white px-2 py-1 text-xs rounded'>
															{product.badge}
														</span>
													)}
												</div>
												<div className='p-4 flex flex-col'>
													<h3 className='text-lg font-semibold text-[#004976] mb-2'>
														{product.name}
													</h3>
													<div className='flex justify-between mb-2'>
														<span className='font-bold text-lg text-red-600'>
															${product.price.toFixed(2)}
														</span>
														<span className='text-sm text-gray-600 flex items-center gap-1'>
															<span className='text-yellow-400'>★</span>{' '}
															{product.rating}
														</span>
													</div>
													<div className='flex flex-col mb-2 text-sm text-gray-600'>
														{product.specs &&
															Object.entries(product.specs)
																.slice(0, 2)
																.map(([key, value]) => (
																	<span
																		key={key}
																		className='capitalize'>
																		{key}: {value}
																	</span>
																))}
													</div>
													<button className='mt-auto bg-[#0062cc] text-white px-4 py-2 rounded hover:bg-[#004976] transition-colors'>
														View Details
													</button>
												</div>
											</Link>
										</motion.div>
									))
								) : (
									<div className='text-center py-12 text-gray-600'>
										<p>No products found in this category.</p>
									</div>
								)}
							</motion.div>
						)}
					</div>
				</section>

				{/* CTA SECTION */}
				<section className='py-20 bg-gradient-to-r from-blue-900 to-blue-500 text-white'>
					<div className='max-w-6xl mx-auto px-4'>
						<div className='text-center w-full lg:w-8/12 mx-auto'>
							<h2 className='text-2xl md:text-3xl font-semibold mb-4'>
								Need help choosing the right solar solution?
							</h2>
							<p className='text-lg md:text-xl mb-8'>
								Our team of experts is ready to design a custom system for your
								specific needs.
							</p>
							<div className='flex flex-col md:flex-row justify-center items-center gap-4'>
								<button
									onClick={handleRequestConsultation}
									className='bg-red-600 text-white py-3 px-6 rounded hover:bg-red-700 transition-colors'>
									Request Consultation
								</button>
								<button
									onClick={handleDownloadCatalog}
									className='border border-white text-white py-3 px-6 rounded hover:bg-white hover:text-blue-900 transition-colors'>
									Download Catalog
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default ProductPage;
