import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OffcanvasNavbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import products from '../../Components/Product/productsData';

const ProductPage = () => {
	const [activeCategory, setActiveCategory] = useState('all');
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<>
			<OffcanvasNavbar />
			<div className='product-page'>
				<section className='product-hero'>
					<div className='hero-image-container'>
						<img
							src='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/powering-on-desktop'
							alt='Hero'
							loading='lazy'
							className='hero-image'
						/>
						<div className='hero-overlay'></div>
					</div>
					<Container>
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className='hero-text'>
							<h1>Solar Solutions for Every Need</h1>
							<p>
								Explore our high-efficiency solar panels, powerful inverters,
								and complete system solutions.
							</p>
						</motion.div>
					</Container>
				</section>

				<section className='featured-products'>
					<Container>
						<h2>Featured Products</h2>
						<Row className='featured-slider'>
							{products
								.filter((product) => product.featured)
								.map((product, index) => (
									<Col
										lg={4}
										md={6}
										sm={12}
										key={product.id}>
										<motion.div
											className='featured-product-card'
											initial='hidden'
											whileInView='visible'
											viewport={{ once: true, amount: 0.3 }}
											variants={fadeIn}
											transition={{ delay: index * 0.1 }}>
											<Link
												to={`/product/${product.id}`}
												className='product-link'>
												<div className='product-image'>
													<img
														src={product.image}
														alt={product.name}
													/>
													{product.badge && (
														<span className='product-badge'>
															{product.badge}
														</span>
													)}
												</div>
												<div className='product-info'>
													<h3>{product.name}</h3>
													<div className='product-meta'>
														<span className='product-price'>
															${product.price.toFixed(2)}
														</span>
														<span className='product-rating'>
															<i className='star-icon'>★</i> {product.rating}
														</span>
													</div>
													<button className='view-details-btn'>
														View Details
													</button>
												</div>
											</Link>
										</motion.div>
									</Col>
								))}
						</Row>
					</Container>
				</section>

				<section className='product-catalog'>
					<Container>
						<div className='catalog-header'>
							<h2>Product Catalog</h2>
							<div className='category-filter'>
								{categories.map((category) => (
									<button
										key={category.id}
										className={`category-btn ${
											activeCategory === category.id ? 'active' : ''
										}`}
										onClick={() => setActiveCategory(category.id)}>
										{category.name}
										{activeCategory === category.id && (
											<motion.div
												className='active-indicator'
												layoutId='activeCategory'
											/>
										)}
									</button>
								))}
							</div>
						</div>
						{isLoading ? (
							<div className='loading-container'>
								<div className='loading-spinner'></div>
								<p>Loading products...</p>
							</div>
						) : (
							<motion.div
								className='products-grid'
								variants={staggerContainer}
								initial='hidden'
								animate='visible'>
								{filteredProducts.length > 0 ? (
									filteredProducts.map((product, index) => (
										<motion.div
											key={product.id}
											className='product-card'
											variants={fadeIn}
											transition={{ delay: index * 0.05 }}>
											<Link
												to={`/product/${product.id}`}
												className='product-link'>
												<div className='product-image'>
													<img
														src={product.image}
														alt={product.name}
													/>
													{product.badge && (
														<span className='product-badge'>
															{product.badge}
														</span>
													)}
												</div>
												<div className='product-info'>
													<h3>{product.name}</h3>
													<div className='product-meta'>
														<span className='product-price'>
															${product.price.toFixed(2)}
														</span>
														<span className='product-rating'>
															<i className='star-icon'>★</i> {product.rating}
														</span>
													</div>
													<div className='product-specs'>
														{product.specs &&
															Object.entries(product.specs)
																.slice(0, 2)
																.map(([key, value]) => (
																	<span
																		key={key}
																		className='spec-item'>
																		{key}: {value}
																	</span>
																))}
													</div>
													<button className='view-details-btn'>
														View Details
													</button>
												</div>
											</Link>
										</motion.div>
									))
								) : (
									<div className='no-products'>
										<p>No products found in this category.</p>
									</div>
								)}
							</motion.div>
						)}
					</Container>
				</section>

				<section className='cta-section'>
					<Container>
						<Row>
							<Col
								lg={8}
								className='text-center mx-auto'>
								<h2>Need help choosing the right solar solution?</h2>
								<p>
									Our team of experts is ready to design a custom system for
									your specific needs.
								</p>
								<div className='cta-buttons'>
									<button className='primary-btn'>Request Consultation</button>
									<button className='secondary-btn'>Download Catalog</button>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				<style jsx>{`
					.product-page {
						--primary-color: #0062cc;
						--secondary-color: #004976;
						--accent-color: #00a3e0;
						--accent-red: #d32f2f;
						--text-color: #333;
						--text-light: #6c757d;
						--bg-light: #f8f9fa;
						--bg-dark: #0a1929;
						--card-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
						--transition: all 0.3s ease;
						font-family: 'Inter', sans-serif;
						color: var(--text-color);
					}

					/* Hero Section */
					.product-hero {
						position: relative;
						height: 80vh;
						display: flex;
						align-items: center;
						justify-content: center;
						overflow: hidden;
						color: white;
					}
					.hero-image-container {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						z-index: -2;
						overflow: hidden;
					}
					.hero-image {
						width: 100%;
						height: 100%;
						object-fit: cover;
						display: block;
					}
					.hero-overlay {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background: rgba(0, 0, 0, 0.5);
						z-index: -1;
					}
					.hero-text {
						position: relative;
						text-align: center;
						z-index: 1;
					}
					.hero-text h1 {
						font-size: 3rem;
						font-weight: 700;
						margin-bottom: 1rem;
					}
					.hero-text p {
						font-size: 1.2rem;
						max-width: 700px;
						margin: 0 auto;
						opacity: 0.9;
					}

					/* Featured Products Section */
					.featured-products {
						padding: 5rem 0;
						background-color: white;
					}
					.featured-products h2 {
						text-align: center;
						font-size: 2.2rem;
						font-weight: 600;
						margin-bottom: 3rem;
						color: var(--secondary-color);
						position: relative;
					}
					.featured-products h2:after {
						content: '';
						display: block;
						width: 80px;
						height: 4px;
						background: var(--accent-red);
						margin: 1rem auto 0;
						border-radius: 2px;
					}
					.featured-slider {
						margin-bottom: 2rem;
					}
					.featured-product-card {
						background-color: white;
						border-radius: 12px;
						overflow: hidden;
						box-shadow: var(--card-shadow);
						margin-bottom: 2rem;
						transition: var(--transition);
						height: 420px;
					}
					.featured-product-card:hover {
						transform: translateY(-8px);
						box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
					}

					/* Product Catalog Section */
					.product-catalog {
						padding: 5rem 0;
						background-color: var(--bg-light);
					}
					.catalog-header {
						text-align: center;
						margin-bottom: 3rem;
					}
					.catalog-header h2 {
						font-size: 2.2rem;
						font-weight: 600;
						margin-bottom: 2rem;
						color: var(--secondary-color);
					}
					.category-filter {
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						gap: 1rem;
						margin-bottom: 2rem;
					}
					.category-btn {
						background: none;
						border: none;
						padding: 0.6rem 1.2rem;
						font-size: 1rem;
						color: var(--text-light);
						border-radius: 30px;
						cursor: pointer;
						position: relative;
						transition: var(--transition);
					}
					.category-btn.active {
						color: white;
						background-color: var(--primary-color);
						font-weight: 500;
					}
					.active-indicator {
						position: absolute;
						bottom: -2px;
						left: 0;
						right: 0;
						height: 2px;
						background-color: var(--accent-color);
					}
					.products-grid {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
						gap: 2rem;
					}
					.product-card {
						background-color: white;
						border-radius: 12px;
						overflow: hidden;
						box-shadow: var(--card-shadow);
						transition: var(--transition);
						height: 450px;
					}
					.product-card:hover {
						transform: translateY(-8px);
						box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
					}
					.product-link {
						text-decoration: none;
						color: inherit;
						display: block;
						height: 100%;
					}
					.product-image {
						position: relative;
						height: 220px;
						background-color: #f5f5f5;
						overflow: hidden;
					}
					.product-image img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						transition: transform 0.5s ease;
					}
					.product-card:hover .product-image img {
						transform: scale(1.05);
					}
					.product-badge {
						position: absolute;
						top: 15px;
						right: 15px;
						background-color: var(--accent-red);
						color: white;
						padding: 0.25rem 0.75rem;
						border-radius: 20px;
						font-size: 0.75rem;
						font-weight: 600;
					}
					.product-info {
						padding: 1.5rem;
						display: flex;
						flex-direction: column;
						height: calc(100% - 220px);
					}
					.product-info h3 {
						margin: 0 0 1rem;
						font-size: 1.1rem;
						font-weight: 600;
						color: var(--secondary-color);
						line-height: 1.4;
					}
					.product-meta {
						display: flex;
						justify-content: space-between;
						margin-bottom: 0.75rem;
					}
					.product-price {
						font-weight: 700;
						font-size: 1.2rem;
						color: var(--accent-red);
					}
					.product-rating {
						color: var(--text-light);
						font-size: 0.9rem;
						display: flex;
						align-items: center;
						gap: 0.25rem;
					}
					.star-icon {
						color: #ffd700;
						display: inline-block;
						margin-right: 2px;
					}
					.product-specs {
						display: flex;
						flex-direction: column;
						margin-bottom: 1rem;
						flex-grow: 1;
					}
					.spec-item {
						font-size: 0.85rem;
						color: var(--text-light);
						margin-bottom: 0.35rem;
						text-transform: capitalize;
					}
					.view-details-btn {
						background-color: var(--primary-color);
						color: white;
						border: none;
						padding: 0.75rem 1rem;
						border-radius: 6px;
						font-weight: 500;
						cursor: pointer;
						transition: var(--transition);
						width: 100%;
						margin-top: auto;
					}
					.view-details-btn:hover {
						background-color: var(--secondary-color);
					}
					.loading-container {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						min-height: 300px;
					}
					.loading-spinner {
						width: 40px;
						height: 40px;
						border: 4px solid rgba(0, 98, 204, 0.1);
						border-radius: 50%;
						border-top-color: var(--primary-color);
						animation: spin 1s ease-in-out infinite;
						margin-bottom: 1rem;
					}
					@keyframes spin {
						to {
							transform: rotate(360deg);
						}
					}
					.no-products {
						text-align: center;
						padding: 3rem;
						color: var(--text-light);
						width: 100%;
					}

					/* CTA Section */
					.cta-section {
						padding: 5rem 0;
						background: linear-gradient(135deg, #004976 0%, #00a3e0 100%);
						color: white;
					}
					.cta-section h2 {
						font-size: 2.5rem;
						font-weight: 600;
						margin-bottom: 1rem;
					}
					.cta-section p {
						font-size: 1.1rem;
						margin-bottom: 2rem;
						opacity: 0.9;
					}
					.cta-buttons {
						display: flex;
						justify-content: center;
						gap: 1.5rem;
					}
					.primary-btn {
						background-color: var(--accent-red);
						color: white;
						border: none;
						padding: 1rem 2rem;
						border-radius: 6px;
						font-weight: 600;
						cursor: pointer;
						transition: var(--transition);
					}
					.primary-btn:hover {
						background-color: #b71c1c;
						transform: translateY(-2px);
					}
					.secondary-btn {
						background-color: transparent;
						color: white;
						border: 2px solid white;
						padding: 1rem 2rem;
						border-radius: 6px;
						font-weight: 600;
						cursor: pointer;
						transition: var(--transition);
					}
					.secondary-btn:hover {
						background-color: rgba(255, 255, 255, 0.1);
						transform: translateY(-2px);
					}

					/* Responsive styles */
					@media (max-width: 992px) {
						.hero-text h1 {
							font-size: 2.5rem;
						}
						.cta-section h2 {
							font-size: 2rem;
						}
						.products-grid {
							grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
						}
					}
					@media (max-width: 768px) {
						.hero-text h1 {
							font-size: 2rem;
						}
						.hero-text p {
							font-size: 1rem;
						}
						.cta-buttons {
							flex-direction: column;
							gap: 1rem;
							max-width: 300px;
							margin: 0 auto;
						}
						.category-filter {
							gap: 0.5rem;
						}
						.category-btn {
							padding: 0.5rem 1rem;
							font-size: 0.9rem;
						}
					}
					@media (max-width: 576px) {
						.products-grid {
							grid-template-columns: 1fr;
						}
						.product-card {
							height: auto;
						}
						.product-image {
							height: 200px;
						}
					}
				`}</style>
			</div>
			<Footer />
		</>
	);
};

export default ProductPage;
