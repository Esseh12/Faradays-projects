import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const ProductDetailPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [quantity, setQuantity] = useState(1);
	const [activeTab, setActiveTab] = useState('specs');
	const [relatedProducts, setRelatedProducts] = useState([]);
	const [currentImage, setCurrentImage] = useState(0);

	// Dummy product data
	const products = [
		{
			id: 1,
			name: 'SolarTech Premium 450W Solar Panel',
			category: 'solar-panels',
			price: 299.99,
			rating: 4.8,
			image: '/images/products/solar-panel-1.jpg',
			images: [
				'/images/products/solar-panel-1.jpg',
				'/images/products/solar-panel-1-alt.jpg',
				'/images/products/solar-panel-1-detail.jpg',
			],
			featured: true,
			badge: 'Best Seller',
			specs: {
				power: '450W',
				efficiency: '21.3%',
				warranty: '25 Years',
				dimensions: '1765 × 1048 × 35 mm',
				weight: '20.5 kg',
				cells: '144 Monocrystalline',
				certifications: 'IEC, UL, MCS',
				operatingTemp: '-40°C to +85°C',
			},
			description: `The SolarTech Premium 450W Solar Panel represents the pinnacle of photovoltaic technology. Engineered for maximum energy production and durability, these high-efficiency monocrystalline panels deliver outstanding performance in all conditions. 

      With industry-leading efficiency ratings and advanced cell technology, these panels generate more power in less space, making them ideal for residential and commercial installations where space optimization matters. The anti-reflective coating and excellent low-light performance ensure reliable energy production throughout the day.
      
      Built to last, these panels undergo rigorous testing for wind, snow loads, and extreme temperatures. The reinforced frame design provides enhanced durability while maintaining a sleek, modern appearance that complements any property.`,
			features: [
				'Industry-leading 21.3% efficiency rate',
				'Enhanced performance in low-light conditions',
				'Advanced temperature coefficient (-0.35% per °C)',
				'High salt mist and ammonia resistance',
				'Anti-reflective glass coating for improved light absorption',
				'PID-resistant cells for long-term reliability',
				'Compatible with all SolarTech mounting solutions',
				'Comprehensive 25-year product and performance warranty',
			],
			reviews: [
				{
					id: 1,
					author: 'Michael T.',
					date: '2025-01-15',
					rating: 5,
					comment:
						'Exceptional performance, easy installation. These panels are consistently outperforming the estimated production values. Highly recommend!',
				},
				{
					id: 2,
					author: 'Sarah J.',
					date: '2024-12-28',
					rating: 4,
					comment:
						'Very pleased with the quality and output. Installation was straightforward with the provided mounting hardware. Only giving 4 stars as they were slightly heavier than expected.',
				},
				{
					id: 3,
					author: 'David L.',
					date: '2024-11-02',
					rating: 5,
					comment:
						"These panels have transformed our energy consumption. We're now producing more electricity than we use most months. The performance in partial shade is notably better than our previous panels.",
				},
			],
			documents: [
				{ name: 'Installation Manual', size: '4.2 MB', type: 'PDF' },
				{ name: 'Warranty Information', size: '1.5 MB', type: 'PDF' },
				{ name: 'Technical Datasheet', size: '2.8 MB', type: 'PDF' },
			],
		},
		{
			id: 2,
			name: 'SolarTech Hybrid 5kW Inverter',
			category: 'inverters',
			price: 1499.99,
			rating: 4.9,
			image: '/images/products/inverter-1.jpg',
			images: [
				'/images/products/inverter-1.jpg',
				'/images/products/inverter-1-back.jpg',
				'/images/products/inverter-1-install.jpg',
			],
			featured: true,
			badge: 'Top Rated',
			specs: {
				power: '5kW',
				efficiency: '98.2%',
				warranty: '10 Years',
				dimensions: '505 × 380 × 185 mm',
				weight: '23 kg',
				inputVoltage: '80-600V DC',
				outputVoltage: '220-240V AC',
				operatingTemp: '-25°C to +60°C',
			},
			description: `The SolarTech Hybrid 5kW Inverter is a state-of-the-art power conversion solution designed for modern solar installations. This versatile inverter seamlessly integrates with both grid-tied and battery storage systems, offering unmatched flexibility for residential and small commercial applications.

      Featuring advanced MPPT technology, this inverter maximizes energy harvest from your solar array under all conditions. The ultra-high 98.2% efficiency rating ensures minimal energy loss during conversion, translating to significant savings over the system's lifetime.
      
      Smart grid capabilities allow for intelligent energy management, peak shaving, and time-of-use optimization. The integrated energy management system enables homeowners to prioritize self-consumption or grid export based on electricity prices and usage patterns.`,
			features: [
				'Dual MPPT tracking for optimal energy harvest',
				'Battery ready with integrated charge controller',
				'Advanced grid support features and reactive power control',
				'Built-in Wi-Fi for remote monitoring and control',
				'LCD display with intuitive user interface',
				'IP65 rated for indoor and outdoor installation',
				'Ultra-quiet operation with passive cooling',
				'Comprehensive protection suite: anti-islanding, over/under voltage, overload',
			],
			reviews: [
				{
					id: 1,
					author: 'Thomas W.',
					date: '2025-02-10',
					rating: 5,
					comment:
						'Simply superb. The monitoring capabilities and efficiency are beyond expectations. Installation was straightforward for my electrician, and the app is incredibly user-friendly.',
				},
				{
					id: 2,
					author: 'Lisa M.',
					date: '2025-01-05',
					rating: 5,
					comment:
						"We added this to our existing solar setup with battery storage. The transition was seamless and we're now able to optimize our energy usage much better than before.",
				},
			],
			documents: [
				{ name: 'Installation Guide', size: '5.7 MB', type: 'PDF' },
				{ name: 'User Manual', size: '3.2 MB', type: 'PDF' },
				{ name: 'Technical Specifications', size: '1.9 MB', type: 'PDF' },
				{ name: 'Wiring Diagram', size: '0.8 MB', type: 'PDF' },
			],
		},
		// More products similar to the sample ones above...
	];

	// Fetch product data when id changes
	useEffect(() => {
		setLoading(true);
		// Simulate API request with timeout
		setTimeout(() => {
			const selectedProduct = products.find((p) => p.id === parseInt(id));
			setProduct(selectedProduct);

			// Get related products from the same category
			if (selectedProduct) {
				const related = products
					.filter(
						(p) =>
							p.category === selectedProduct.category && p.id !== parseInt(id)
					)
					.slice(0, 3);
				setRelatedProducts(related);
			}

			setLoading(false);
		}, 800);
	}, [id]);

	// Handle quantity changes
	const handleQuantityChange = (change) => {
		const newQuantity = quantity + change;
		if (newQuantity >= 1) {
			setQuantity(newQuantity);
		}
	};

	// Handle image change
	const handleImageChange = (index) => {
		setCurrentImage(index);
	};

	// Animation variants
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	if (loading) {
		return (
			<div className='loading-container'>
				<div className='loading-spinner'></div>
				<p>Loading product details...</p>
			</div>
		);
	}

	if (!product) {
		return (
			<Container className='not-found'>
				<h2>Product Not Found</h2>
				<p>The product you're looking for doesn't exist or has been removed.</p>
				<Link
					to='/products'
					className='back-to-products'>
					Back to All Products
				</Link>
			</Container>
		);
	}

	// Calculate average rating
	const averageRating =
		product.reviews.reduce((acc, review) => acc + review.rating, 0) /
		product.reviews.length;

	return (
		<div className='product-detail-page'>
			<Container>
				<motion.div
					className='breadcrumb'
					initial='hidden'
					animate='visible'
					variants={fadeIn}>
					<Link to='/products'>Products</Link> /{' '}
					<Link to={`/products/${product.category}`}>
						{product.category
							.split('-')
							.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
							.join(' ')}
					</Link>{' '}
					/ <span>{product.name}</span>
				</motion.div>

				<Row className='product-main'>
					<Col lg={6}>
						<motion.div
							className='product-gallery'
							initial='hidden'
							animate='visible'
							variants={fadeIn}>
							<div className='main-image'>
								<img
									src={product.images[currentImage]}
									alt={product.name}
								/>
								{product.badge && (
									<span className='product-badge'>{product.badge}</span>
								)}
							</div>
							<div className='thumbnail-container'>
								{product.images.map((image, index) => (
									<div
										key={index}
										className={`thumbnail ${
											currentImage === index ? 'active' : ''
										}`}
										onClick={() => handleImageChange(index)}>
										<img
											src={image}
											alt={`${product.name} view ${index + 1}`}
										/>
									</div>
								))}
							</div>
						</motion.div>
					</Col>
					<Col lg={6}>
						<motion.div
							className='product-info'
							initial='hidden'
							animate='visible'
							variants={fadeIn}
							transition={{ delay: 0.2 }}>
							<h1>{product.name}</h1>

							<div className='product-meta'>
								<div className='product-rating'>
									<div className='stars'>
										{[...Array(5)].map((_, i) => (
											<i
												key={i}
												className={`star-icon ${
													i < Math.round(averageRating) ? 'filled' : ''
												}`}>
												★
											</i>
										))}
									</div>
									<span>
										{averageRating.toFixed(1)} ({product.reviews.length}{' '}
										reviews)
									</span>
								</div>
								<div className='product-price'>${product.price.toFixed(2)}</div>
							</div>

							<div className='product-short-desc'>
								<p>{product.description.split('\n')[0]}</p>
							</div>

							<div className='key-specs'>
								<h3>Key Specifications</h3>
								<ul>
									{Object.entries(product.specs)
										.slice(0, 4)
										.map(([key, value]) => (
											<li key={key}>
												<span className='spec-label'>
													{key
														.replace(/([A-Z])/g, ' $1')
														.replace(/^./, (str) => str.toUpperCase())}
												</span>
												<span className='spec-value'>{value}</span>
											</li>
										))}
								</ul>
							</div>

							<div className='purchase-options'>
								<div className='quantity-selector'>
									<span>Quantity:</span>
									<div className='quantity-controls'>
										<button
											onClick={() => handleQuantityChange(-1)}
											disabled={quantity <= 1}>
											-
										</button>
										<span>{quantity}</span>
										<button onClick={() => handleQuantityChange(1)}>+</button>
									</div>
								</div>
								<div className='action-buttons'>
									<button className='add-to-cart'>Add to Cart</button>
									<button className='buy-now'>Buy Now</button>
								</div>
							</div>

							<div className='product-actions'>
								<button className='action-btn'>
									<i className='icon'>♡</i> Add to Wishlist
								</button>
								<button className='action-btn'>
									<i className='icon'>↔</i> Compare
								</button>
							</div>
						</motion.div>
					</Col>
				</Row>

				<motion.div
					className='product-details'
					initial='hidden'
					animate='visible'
					variants={fadeIn}
					transition={{ delay: 0.4 }}>
					<Tab.Container
						id='product-tabs'
						defaultActiveKey='specs'>
						<Nav
							variant='tabs'
							className='product-tabs'>
							<Nav.Item>
								<Nav.Link
									eventKey='specs'
									onClick={() => setActiveTab('specs')}>
									Specifications
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									eventKey='features'
									onClick={() => setActiveTab('features')}>
									Features
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									eventKey='reviews'
									onClick={() => setActiveTab('reviews')}>
									Reviews ({product.reviews.length})
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									eventKey='documents'
									onClick={() => setActiveTab('documents')}>
									Documents
								</Nav.Link>
							</Nav.Item>
						</Nav>
						<Tab.Content>
							<Tab.Pane eventKey='specs'>
								<div className='specs-table'>
									<h3>Technical Specifications</h3>
									<table>
										<tbody>
											{Object.entries(product.specs).map(([key, value]) => (
												<tr key={key}>
													<td>
														{key
															.replace(/([A-Z])/g, ' $1')
															.replace(/^./, (str) => str.toUpperCase())}
													</td>
													<td>{value}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
								<div className='full-description'>
									<h3>Product Description</h3>
									{product.description.split('\n\n').map((paragraph, index) => (
										<p key={index}>{paragraph.trim()}</p>
									))}
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey='features'>
								<div className='features-list'>
									<h3>Key Features</h3>
									<ul>
										{product.features.map((feature, index) => (
											<li key={index}>{feature}</li>
										))}
									</ul>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey='reviews'>
								<div className='reviews-section'>
									<div className='review-summary'>
										<div className='average-rating'>
											<div className='rating-number'>
												{averageRating.toFixed(1)}
											</div>
											<div className='rating-stars'>
												{[...Array(5)].map((_, i) => (
													<i
														key={i}
														className={`star-icon ${
															i < Math.round(averageRating) ? 'filled' : ''
														}`}>
														★
													</i>
												))}
											</div>
											<div className='rating-count'>
												Based on {product.reviews.length} reviews
											</div>
										</div>
									</div>
									<div className='review-list'>
										<h3>Customer Reviews</h3>
										{product.reviews.map((review) => (
											<div
												key={review.id}
												className='review-item'>
												<div className='review-header'>
													<div className='review-author'>{review.author}</div>
													<div className='review-date'>{review.date}</div>
												</div>
												<div className='review-rating'>
													{[...Array(5)].map((_, i) => (
														<i
															key={i}
															className={`star-icon ${
																i < review.rating ? 'filled' : ''
															}`}>
															★
														</i>
													))}
												</div>
												<div className='review-content'>{review.comment}</div>
											</div>
										))}
									</div>
									<div className='write-review'>
										<button className='review-btn'>Write a Review</button>
									</div>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey='documents'>
								<div className='documents-section'>
									<h3>Product Documents</h3>
									<div className='document-list'>
										{product.documents.map((doc, index) => (
											<div
												key={index}
												className='document-item'>
												<div className='document-icon'>
													{doc.type === 'PDF' ? '📄' : '📑'}
												</div>
												<div className='document-info'>
													<div className='document-name'>{doc.name}</div>
													<div className='document-meta'>
														{doc.type} • {doc.size}
													</div>
												</div>
												<button className='download-btn'>Download</button>
											</div>
										))}
									</div>
								</div>
							</Tab.Pane>
						</Tab.Content>
					</Tab.Container>
				</motion.div>

				{relatedProducts.length > 0 && (
					<motion.div
						className='related-products'
						initial='hidden'
						animate='visible'
						variants={fadeIn}
						transition={{ delay: 0.6 }}>
						<h2>Related Products</h2>
						<Row>
							{relatedProducts.map((relatedProduct) => (
								<Col
									lg={4}
									md={6}
									key={relatedProduct.id}>
									<Link
										to={`/product/${relatedProduct.id}`}
										className='related-product-card'>
										<div className='related-product-image'>
											<img
												src={relatedProduct.image}
												alt={relatedProduct.name}
											/>
											{relatedProduct.badge && (
												<span className='product-badge'>
													{relatedProduct.badge}
												</span>
											)}
										</div>
										<div className='related-product-info'>
											<h3>{relatedProduct.name}</h3>
											<div className='related-product-meta'>
												<span className='related-product-price'>
													${relatedProduct.price.toFixed(2)}
												</span>
												<span className='related-product-rating'>
													<i className='star-icon'>★</i> {relatedProduct.rating}
												</span>
											</div>
										</div>
									</Link>
								</Col>
							))}
						</Row>
					</motion.div>
				)}
			</Container>

			<style jsx>{`
				.product-detail-page {
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
					padding: 3rem 0;
				}

				.loading-container {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					min-height: 500px;
				}

				.loading-spinner {
					width: 50px;
					height: 50px;
					border: 5px solid rgba(0, 98, 204, 0.1);
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

				.not-found {
					text-align: center;
					padding: 5rem 0;
				}

				.back-to-products {
					display: inline-block;
					margin-top: 1rem;
					padding: 0.75rem 1.5rem;
					background-color: var(--primary-color);
					color: white;
					text-decoration: none;
					border-radius: 6px;
					font-weight: 500;
					transition: var(--transition);
				}

				.back-to-products:hover {
					background-color: var(--secondary-color);
				}

				.breadcrumb {
					margin-bottom: 2rem;
					font-size: 0.9rem;
					color: var(--text-light);
				}

				.breadcrumb a {
					color: var(--text-light);
					text-decoration: none;
					transition: var(--transition);
				}

				.breadcrumb a:hover {
					color: var(--primary-color);
				}

				.product-main {
					margin-bottom: 3rem;
				}

				.product-gallery {
					margin-bottom: 2rem;
				}

				.main-image {
					position: relative;
					border-radius: 12px;
					overflow: hidden;
					box-shadow: var(--card-shadow);
					margin-bottom: 1rem;
					height: 400px;
				}

				.main-image img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				.product-badge {
					position: absolute;
					top: 15px;
					right: 15px;
					background-color: var(--accent-red);
					color: white;
					padding: 0.25rem 0.75rem;
					border-radius: 20px;
					font-size: 0.85rem;
					font-weight: 600;
				}

				.thumbnail-container {
					display: flex;
					gap: 1rem;
					overflow-x: auto;
					padding-bottom: 0.5rem;
				}

				.thumbnail {
					width: 80px;
					height: 80px;
					border-radius: 8px;
					overflow: hidden;
					cursor: pointer;
					border: 2px solid transparent;
					transition: var(--transition);
				}

				.thumbnail.active {
					border-color: var(--primary-color);
				}

				.thumbnail img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				.product-info h1 {
					font-size: 2.2rem;
					font-weight: 600;
					margin-bottom: 1rem;
					color: var(--secondary-color);
				}

				.product-meta {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 1.5rem;
				}

				.product-rating {
					display: flex;
					align-items: center;
				}

				.stars {
					margin-right: 0.5rem;
				}

				.star-icon {
					color: #ccc;
					font-size: 1.2rem;
				}

				.star-icon.filled {
					color: #ffd700;
				}

				.product-price {
					font-size: 1.8rem;
					font-weight: 700;
					color: var(--accent-red);
				}

				.product-short-desc {
					margin-bottom: 1.5rem;
					line-height: 1.6;
				}

				.key-specs {
					margin-bottom: 2rem;
					padding: 1.5rem;
					background-color: var(--bg-light);
					border-radius: 8px;
				}

				.key-specs h3 {
					font-size: 1.2rem;
					margin-bottom: 1rem;
					color: var(--secondary-color);
				}

				.key-specs ul {
					padding: 0;
					list-style: none;
				}

				.key-specs li {
					display: flex;
					justify-content: space-between;
					padding: 0.5rem 0;
					border-bottom: 1px solid #e9ecef;
				}

				.key-specs li:last-child {
					border-bottom: none;
				}

				.spec-label {
					color: var(--text-light);
				}

				.spec-value {
					font-weight: 500;
				}

				.purchase-options {
					margin-bottom: 1.5rem;
				}

				.quantity-selector {
					display: flex;
					align-items: center;
					margin-bottom: 1rem;
				}

				.quantity-selector span {
					margin-right: 1rem;
				}

				.quantity-controls {
					display: flex;
					align-items: center;
					border: 1px solid #dee2e6;
					border-radius: 4px;
				}

				.quantity-controls button {
					background: none;
					border: none;
					padding: 0.5rem 1rem;
					font-size: 1.2rem;
					cursor: pointer;
				}

				.quantity-controls button:disabled {
					opacity: 0.5;
					cursor: not-allowed;
				}

				.quantity-controls span {
					padding: 0 1rem;
					min-width: 40px;
					text-align: center;
				}

				.action-buttons {
					display: flex;
					gap: 1rem;
				}

				.add-to-cart,
				.buy-now {
					padding: 0.75rem 1.5rem;
					border: none;
					border-radius: 6px;
					font-weight: 600;
					cursor: pointer;
					transition: var(--transition);
					flex: 1;
				}

				.add-to-cart {
					background-color: var(--primary-color);
					color: white;
				}

				.add-to-cart:hover {
					background-color: var(--secondary-color);
				}

				.buy-now {
					background-color: var(--accent-red);
					color: white;
				}

				.buy-now:hover {
					background-color: #b71c1c;
				}

				.product-actions {
					display: flex;
					gap: 1rem;
				}

				.action-btn {
					background: none;
					border: none;
					color: var(--text-light);
					font-size: 0.9rem;
					cursor: pointer;
					transition: var(--transition);
					display: flex;
					align-items: center;
				}

				.action-btn:hover {
					color: var(--primary-color);
				}

				.action-btn .icon {
					margin-right: 0.5rem;
				}

				.product-details {
					margin-bottom: 3rem;
				}

				.product-tabs {
					border-bottom: 1px solid #dee2e6;
					margin-bottom: 2rem;
				}

				.nav-link {
					color: var(--text-light);
					border: none;
					border-bottom: 3px solid transparent;
					padding: 1rem 1.5rem;
					font-weight: 500;
					transition: var(--transition);
				}

				.nav-link.active {
					color: var(--primary-color);
					border-bottom-color: var(--primary-color);
				}

				.tab-content {
					padding: 1rem 0;
				}

				.specs-table h3,
				.full-description h3,
				.features-list h3,
				.reviews-section h3,
				.documents-section h3 {
					font-size: 1.5rem;
					margin-bottom: 1.5rem;
					color: var(--secondary-color);
				}

				.specs-table table {
					width: 100%;
					border-collapse: collapse;
					margin-bottom: 2rem;
				}

				.specs-table tr {
					border-bottom: 1px solid #e9ecef;
				}

				.specs-table td {
					padding: 0.75rem 0;
				}

				.specs-table td:first-child {
					font-weight: 500;
					width: 40%;
				}

				.full-description p {
					margin-bottom: 1rem;
					line-height: 1.7;
				}

				.features-list ul {
					padding-left: 1.5rem;
				}

				.features-list li {
					margin-bottom: 1rem;
					line-height: 1.6;
				}

				.reviews-section {
					margin-bottom: 2rem;
				}

				.review-summary {
					display: flex;
					margin-bottom: 2rem;
				}

				.average-rating {
					text-align: center;
					padding: 1.5rem;
					background-color: var(--bg-light);
					border-radius: 8px;
					margin-right: 2rem;
				}

				.rating-number {
					font-size: 3rem;
					font-weight: 700;
					color: var(--secondary-color);
					line-height: 1;
					margin-bottom: 0.5rem;
				}

				.rating-stars {
					margin-bottom: 0.5rem;
				}

				.rating-count {
					font-size: 0.9rem;
					color: var(--text-light);
				}

				.review-list {
					margin-bottom: 2rem;
				}

				.review-item {
					padding: 1.5rem;
					border-bottom: 1px solid #e9ecef;
				}

				.review-header {
					display: flex;
					justify-content: space-between;
					margin-bottom: 0.5rem;
				}

				.review-author {
					font-weight: 600;
				}

				.review-date {
					color: var(--text-light);
					font-size: 0.9rem;
				}

				.review-content {
					margin-top: 0.5rem;
					line-height: 1.6;
				}

				.write-review {
					margin-top: 2rem;
					text-align: center;
				}

				.review-btn {
					background-color: var(--primary-color);
					color: white;
					border: none;
					padding: 0.75rem 1.5rem;
					border-radius: 6px;
					cursor: pointer;
					transition: var(--transition);
				}

				.review-btn:hover {
					background-color: var(--secondary-color);
				}

				.documents-section h3 {
					margin-bottom: 1.5rem;
				}

				.document-list {
					border-radius: 8px;
					overflow: hidden;
				}

				.document-item {
					display: flex;
					align-items: center;
					padding: 1rem;
					background-color: white;
					border: 1px solid #e9ecef;
					margin-bottom: 0.5rem;
				}

				.document-icon {
					font-size: 1.5rem;
					margin-right: 1rem;
				}

				.document-info {
					flex: 1;
				}

				.document-name {
					font-weight: 500;
					margin-bottom: 0.25rem;
				}

				.document-meta {
					color: var(--text-light);
					font-size: 0.85rem;
				}

				.download-btn {
					background: none;
					border: 1px solid var(--primary-color);
					color: var(--primary-color);
					padding: 0.5rem 1rem;
					border-radius: 4px;
					cursor: pointer;
					transition: var(--transition);
				}

				.download-btn:hover {
					background-color: var(--primary-color);
					color: white;
				}

				.related-products h2 {
					margin-bottom: 2rem;
					color: var(--secondary-color);
				}

				.related-product-card {
					display: block;
					text-decoration: none;
					color: inherit;
					background-color: white;
					border-radius: 8px;
					overflow: hidden;
					box-shadow: var(--card-shadow);
					transition: var(--transition);
				}

				.related-product-card:hover {
					transform: translateY(-5px);
				}

				.related-product-image {
					position: relative;
					height: 200px;
				}

				.related-product-image img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				.related-product-info {
					padding: 1rem;
				}

				.related-product-info h3 {
					font-size: 1.1rem;
					margin-bottom: 0.5rem;
				}

				.related-product-meta {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.related-product-price {
					font-weight: 600;
					color: var(--accent-red);
				}

				.related-product-rating {
					display: flex;
					align-items: center;
					gap: 0.25rem;
				}
			`}</style>
		</div>
	);
};

export default ProductDetailPage;
