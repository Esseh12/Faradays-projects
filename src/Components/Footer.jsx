import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo_img from '../assets/Images/Faraday Logo - Olusesan Oloruntola 1.svg';
import {
	FiMapPin,
	FiPhone,
	FiMail,
	FiFacebook,
	FiTwitter,
	FiLinkedin,
	FiInstagram,
} from 'react-icons/fi';
import { GoPaperAirplane } from 'react-icons/go';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Footer = () => {
	return (
		<footer className='site-footer'>
			<Container>
				<Row className='g-5'>
					{/* Brand Column */}
					<Col
						md={6}
						lg={4}>
						<div className='footer-brand'>
							<div className='d-flex align-items-center gap-3'>
								<img
									src={logo_img}
									alt='Faraday Project'
									className='footer-logo'
								/>
								<h2 className='text-[#002c59] fs-5 fw-bolder'>
									Faraday's Projects
								</h2>
							</div>
							<p className='footer-tagline mt-3'>
								Powering sustainable futures through innovative solar solutions
							</p>
						</div>
					</Col>

					{/* Navigation Column */}
					<Col
						md={6}
						lg={2}>
						<h4 className='footer-heading'>Solutions</h4>
						<ul className='footer-links'>
							<li>
								<a href='/residential'>Residential</a>
							</li>
							<li>
								<a href='/commercial'>Commercial</a>
							</li>
							<li>
								<a href='/industrial'>Industrial</a>
							</li>
							<li>
								<a href='/hybrid-systems'>Hybrid Systems</a>
							</li>
							<li>
								<a href='/maintenance'>Maintenance</a>
							</li>
						</ul>
					</Col>

					{/* Contact Column */}
					<Col
						md={6}
						lg={3}>
						<h4 className='footer-heading'>Contact</h4>
						<ul className='footer-contact'>
							<li>
								<FiMapPin className='footer-icon' />
								<span>
									12 Energy Drive, Lekki Phase 1<br />
									Lagos, Nigeria
								</span>
							</li>
							<li>
								<FiPhone className='footer-icon' />
								<span>+234 901 234 5678</span>
							</li>
							<li>
								<FiMail className='footer-icon' />
								<span>hello@faradaysolar.ng</span>
							</li>
						</ul>
					</Col>

					{/* Social Column */}
					<Col
						md={6}
						lg={3}>
						<h4 className='footer-heading'>Connect</h4>
						<div className='social-links'>
							<a
								href='#'
								aria-label='Facebook'>
								<FiFacebook />
							</a>
							<a
								href='#'
								aria-label='Twitter'>
								<FiTwitter />
							</a>
							<a
								href='#'
								aria-label='LinkedIn'>
								<FiLinkedin />
							</a>
							<a
								href='#'
								aria-label='Instagram'>
								<FiInstagram />
							</a>
						</div>

						<div className='mt-4 newsletter'>
							<p className='newsletter-text'>Get solar insights:</p>
							{/* <form className='newsletter-form'>
								<input
									type='email'
									placeholder='Email address'
									aria-label='Email address'
								/>
								<button type='submit'>→</button>
							</form> */}{' '}
							<InputGroup className='mb-3'>
								<InputGroup.Text>$</InputGroup.Text>
								<Form.Control aria-label='Amount (to the nearest dollar)' />
								<InputGroup.Text>
									<GoPaperAirplane />
								</InputGroup.Text>
							</InputGroup>
						</div>
					</Col>
				</Row>
			</Container>

			<div className='footer-bottom'>
				<p className='copyright'>
					© {new Date().getFullYear()} Faraday Renewable Solutions.
				</p>
			</div>
			<style jsx>{`
				.site-footer {
					background: #e5e5e5;
					padding: 4rem 0 0rem 0rem;
					border-top: 1px solid #e2e8f0;
				}

				.footer-logo {
					width: 2.5rem;
					height: auto;
				}

				.footer-tagline {
					color: #64748b;
					line-height: 1.6;
					max-width: 280px;
				}

				.trust-badges {
					display: flex;
					gap: 1rem;
					flex-wrap: wrap;
				}

				.trust-badge {
					height: 40px;
					width: auto;
				}

				.footer-heading {
					color: #0f3a68;
					font-size: 1rem;
					font-weight: 600;
					text-transform: uppercase;
					letter-spacing: 0.5px;
					margin-bottom: 1.5rem;
				}

				.footer-links {
					list-style: none;
					padding: 0;
					margin: 0;

					li {
						margin-bottom: 0.75rem;
					}

					a {
						color: #475569;
						text-decoration: none;
						transition: color 0.3s ease;

						&:hover {
							color: #002c59;
						}
					}
				}

				.footer-contact {
					list-style: none;
					padding: 0;
					margin: 0;

					li {
						display: flex;
						align-items: flex-start;
						gap: 1rem;
						margin-bottom: 1.25rem;
					}

					.footer-icon {
						flex-shrink: 0;
						color: #002c59;
						margin-top: 3px;
					}

					span {
						color: #475569;
						line-height: 1.5;
					}
				}

				.social-links {
					display: flex;
					gap: 1.5rem;

					a {
						color: #64748b;
						font-size: 1.25rem;
						transition: color 0.3s ease;

						&:hover {
							color: #002c59;
						}
					}
				}

				.newsletter {
					border-top: 1px solid #e2e8f0;
					padding-top: 1.5rem;
					margin-top: 1.5rem;

					&-text {
						color: #475569;
						margin-bottom: 0.75rem;
					}

					&-form {
						display: flex;
						border: 1px solid #cbd5e1;
						border-radius: 8px;
						overflow: hidden;

						input {
							flex: 1;
							border: 0;
							padding: 0.75rem;
							font-size: 0.9rem;

							&:focus {
								outline: none;
								box-shadow: 0 0 0 2px #bae6fd;
							}
						}

						button {
							background: #0ea5e9;
							color: white;
							border: 0;
							padding: 0 1.25rem;
							cursor: pointer;
							transition: background 0.3s ease;

							&:hover {
								background: #0284c7;
							}
						}
					}
				}

				.footer-bottom {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 4rem;
					padding: 1rem;
					border-top: 1px solid #e2e8f0;
					text-align: center;

					background: linear-gradient(135deg, #001f3f, #003366);
				}

				.legal-links {
					margin-bottom: 1rem;

					a {
						color: #64748b;
						text-decoration: none;
						margin: 0 1rem;
						font-size: 0.9rem;

						&:hover {
							color: #0ea5e9;
						}
					}
				}

				.copyright {
					color: #64748b;
					font-size: 1rem;
					line-height: 1.6;
					margin: 1rem 0 0;
				}

				@media (max-width: 768px) {
					.site-footer {
						padding: 0rem 0.7rem;
						padding-top: 3rem;
					}

					.footer-brand {
						text-align: left;
						margin-bottom: 1.5rem;
					}

					.footer-tagline {
						max-width: none;
					}

					.trust-badges {
						justify-content: center;
					}

					.footer-heading {
						text-align: center;
					}

					.footer-links {
						text-align: center;
					}

					.footer-contact li {
						justify-content: center;
						text-align: center;
					}

					.social-links {
						justify-content: center;
					}

					.legal-links a {
						display: block;
						margin: 0.5rem 0;
					}
				}
			`}</style>
		</footer>
	);
};

export default Footer;
