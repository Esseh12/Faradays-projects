import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import OffcanvasNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Replace with your own EmailJS details
const SERVICE_ID = 'service_8uzuran';
const TEMPLATE_ID = 'template_y5c9ske';
const USER_ID = 'mQ786bE_HqQUYLj1u';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [status, setStatus] = useState({ message: '', type: '' });
	const [isSending, setIsSending] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	// Hero image loaded state (optional for fade-in effect)
	const [heroLoaded, setHeroLoaded] = useState(false);

	// Ref for the contact form
	const form = useRef();

	useEffect(() => {
		// Preload the hero background image
		const heroImg = new Image();
		heroImg.src =
			'https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_1920/prod/fulfillment/energy/Order/VirtualConsultations/VC_d_v2';
		heroImg.onload = () => setHeroLoaded(true);
	}, []);

	// Handle input changes in the form
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Fade out the alert message after 2 seconds
	const triggerAlertFadeOut = () => {
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
			setTimeout(() => {
				setStatus({ message: '', type: '' });
			}, 1000);
		}, 2000);
	};

	// Handle form submission via EmailJS
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSending(true);

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
			.then(() => {
				setStatus({
					message: 'Your message has been sent successfully!',
					type: 'success',
				});
				swal('Success!', 'Your message has been sent successfully!', 'success');
				triggerAlertFadeOut();
				// Reset form fields
				setFormData({ name: '', email: '', subject: '', message: '' });
				setIsSending(false);
			})
			.catch(() => {
				setStatus({
					message: 'Failed to send message. Please try again.',
					type: 'error',
				});
				swal('Error!', 'Failed to send message. Please try again.', 'error');
				triggerAlertFadeOut();
				setIsSending(false);
			});
	};

	return (
		<>
			{/* <OffcanvasNavbar /> */}

			{/* Hero Section */}
			<div className={`vc-hero ${heroLoaded ? 'image-loaded' : ''}`}>
				<div className='vc-hero-overlay'></div>
				<div className='vc-hero-text'>
					<h1>Virtual Consultation</h1>
					<p>Our Advisors are ready to help you with your energy products.</p>
				</div>
			</div>

			{/* Main Content Section */}
			<div className='vc-page-content'>
				<Container>
					<Row className='gy-5'>
						{/* Left Column: Consultation Details */}
						<Col md={6}>
							<div className='details-card p-4'>
								<h2 className='mb-3'>Schedule Your Consultation</h2>
								<p>
									Speak with our specialists to find the best solutions for your
									home or business. We’ll guide you through product options,
									financing details, and any other questions you may have.
								</p>
								<ul className='checklist mt-4'>
									<li>
										<FaCheck className='check-icon' />
										Understand solar panel systems and battery backups
									</li>
									<li>
										<FaCheck className='check-icon' />
										Discuss installation timelines and costs
									</li>
									<li>
										<FaCheck className='check-icon' />
										Learn about potential energy savings
									</li>
								</ul>
								<p className='mt-4'>
									Ready to get started? Fill out the form, and we’ll reach out
									to schedule your 30-minute consultation.
								</p>
							</div>
						</Col>

						{/* Right Column: Contact Form */}
						<Col md={6}>
							<div className='form-card p-4'>
								<h3 className='mb-4'>Request a Consultation</h3>
								{status.message && (
									<div
										className={`alert ${
											status.type === 'success'
												? 'alert-success'
												: 'alert-danger'
										} ${showAlert ? '' : 'hide'}`}>
										{status.message}
									</div>
								)}
								<Form
									ref={form}
									onSubmit={handleSubmit}>
									<Form.Group className='mb-3'>
										<Form.Label>Your Name</Form.Label>
										<Form.Control
											type='text'
											name='name'
											placeholder='John Doe'
											value={formData.name}
											onChange={handleChange}
											required
										/>
									</Form.Group>

									<Form.Group className='mb-3'>
										<Form.Label>Your Email</Form.Label>
										<Form.Control
											type='email'
											name='email'
											placeholder='john.doe@example.com'
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</Form.Group>

									<Form.Group className='mb-3'>
										<Form.Label>Subject</Form.Label>
										<Form.Control
											type='text'
											name='subject'
											placeholder='Consultation Request'
											value={formData.subject}
											onChange={handleChange}
											required
										/>
									</Form.Group>

									<Form.Group className='mb-4'>
										<Form.Label>Your Message</Form.Label>
										<Form.Control
											as='textarea'
											rows={4}
											name='message'
											placeholder='Let us know how we can help you...'
											value={formData.message}
											onChange={handleChange}
											required
										/>
									</Form.Group>

									<Button
										variant='primary'
										type='submit'
										disabled={isSending}>
										{isSending ? (
											<>
												<Spinner
													as='span'
													animation='border'
													size='sm'
													role='status'
													aria-hidden='true'
												/>{' '}
												Sending...
											</>
										) : (
											<div
												div
												className='d-flex align-items-center gap-2'>
												<FaPaperPlane /> Submit
											</div>
										)}
									</Button>
								</Form>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<Footer />

			<style jsx>{`
				:root {
					--vc-hero-height: 60vh;
					--vc-primary: #3182ce;
					--vc-secondary: #2c5282;
					--vc-bg: #f4f7f6;
					--vc-text-dark: #1a2b3c;
				}

				/* Hero Section */
				.vc-hero {
					position: relative;
					width: 100%;
					min-height: var(--vc-hero-height);
					background: url('https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_1920/prod/fulfillment/energy/Order/VirtualConsultations/VC_d_v2')
						no-repeat center center/cover;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: opacity 0.5s ease;
				}
				.vc-hero-overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: rgba(0, 0, 0, 0.4);
					z-index: 1;
				}
				.vc-hero-text {
					position: relative;
					z-index: 2;
					color: #fff;
					text-align: center;
					animation: slideInUp 1s ease-out;
				}
				.vc-hero-text h1 {
					font-size: 3rem;
					font-weight: 700;
					margin-bottom: 1rem;
				}
				.vc-hero-text p {
					font-size: 1.25rem;
				}
				.vc-hero.image-loaded {
					opacity: 1;
				}

				@keyframes slideInUp {
					0% {
						transform: translateY(20px);
						opacity: 0;
					}
					100% {
						transform: translateY(0);
						opacity: 1;
					}
				}

				/* Page Content */
				.vc-page-content {
					background-color: var(--vc-bg);
					padding: 3rem 0;
					min-height: 40vh;
				}

				/* Left Column: Details Card */
				.details-card {
					background-color: #fff;
					border-radius: 8px;
					box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
				}
				.details-card h2 {
					font-size: 1.8rem;
					margin-bottom: 1rem;
					color: var(--vc-text-dark);
				}
				.details-card p {
					font-size: 1rem;
					margin-bottom: 1rem;
					line-height: 1.6;
					color: #444;
				}
				.checklist {
					list-style: none;
					padding-left: 0;
				}
				.checklist li {
					display: flex;
					align-items: center;
					margin-bottom: 0.75rem;
				}
				.check-icon {
					margin-right: 0.5rem;
					color: var(--vc-primary);
				}

				/* Right Column: Form Card */
				.form-card {
					background-color: #fff;
					border-radius: 8px;
					box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
				}
				.form-card h3 {
					font-size: 1.5rem;
					margin-bottom: 1.5rem;
					color: var(--vc-text-dark);
				}

				/* Alerts */
				.alert {
					transition: opacity 1s ease;
					margin-bottom: 1rem;
				}
				.alert.hide {
					opacity: 0;
				}
				.alert-success {
					background-color: #d4edda;
					color: #155724;
					border-color: #c3e6cb;
				}
				.alert-danger {
					background-color: #f8d7da;
					color: #721c24;
					border-color: #f5c6cb;
				}

				/* Buttons */
				.btn-primary {
					background-color: var(--vc-primary);
					border-color: var(--vc-primary);
				}
				.btn-primary:hover {
					background-color: var(--vc-secondary);
					border-color: var(--vc-secondary);
				}
				.btn-primary:disabled {
					opacity: 0.7;
					cursor: not-allowed;
				}

				@media (max-width: 768px) {
					.vc-page-content {
						padding: 2rem 0;
					}
					.details-card,
					.form-card {
						margin-bottom: 2rem;
					}
				}
			`}</style>
		</>
	);
};

export default Contact;
