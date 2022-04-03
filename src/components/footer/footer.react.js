// import external dependencies
import React from 'react';

// import internal dependencies
import { ButtonLink } from '@self/components/button-link';

////////////////////////////////////////////////////////////////////////////////////////////////////

export const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer className="footer">
            <div className="page-width">
                <div className="footer-content">
                    <div className="footer-items">
                        <div className="footer-item">
                            <a className="brand-link" href="#">
                                <img
                                    className="brand-logo"
                                    src="assets/icons/brand-logo-02.svg"
                                    alt="Maverlink Brand Logo"
                                />
                            </a>
                        </div>
                        <div className="footer-item footer-item--grow">
                            <div className="cta">
                                <div className="cta-item">
                                    <p className="cta-text">
                                        Join our MAVERICK COMMUNITY of most
                                        creative and independent people, just
                                        like you! Together we are unstoppable!
                                    </p>
                                </div>
                                <div className="cta-item">
                                    <ButtonLink
                                        href="register"
                                        text="Join"
                                        type="primary"
                                    />
                                </div>
                                <div className="cta-item">
                                    <div className="cta-app">
                                        <a href="#" className="app-store-link">
                                            <img
                                                className="app-store-badge"
                                                src="assets/icons/app-store-badge.svg"
                                                alt="Download on the App Store"
                                            />
                                        </a>
                                        <a href="#" className="app-store-link">
                                            <img
                                                className="app-store-badge"
                                                src="assets/icons/google-play-badge.svg"
                                                alt="Get it on Google Play"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-item">
                            <ul className="nav-list">
                                <li className="nav-list-item">
                                    <a className="nav-link" href="#">
                                        <span className="nav-link-text">About Us</span>
                                    </a>
                                </li>
                                <li className="nav-list-item">
                                    <a className="nav-link" href="#">
                                        <span className="nav-link-text">Help &amp; FAQs</span>
                                    </a>
                                </li>
                                <li className="nav-list-item">
                                    <a className="nav-link" href="#">
                                        <span className="nav-link-text">Testimonials</span>
                                    </a>
                                </li>
                                <li className="nav-list-item">
                                    <a className="nav-link" href="#">
                                        <span className="nav-link-text">Community Rules</span>
                                    </a>
                                </li>
                                <li className="nav-list-item">
                                    <a className="nav-link" href="#">
                                        <span className="nav-link-text">Privacy Policy</span>
                                    </a>
                                </li>
                                <li className="nav-list-item">
                                    <a className="nav-link" href="#">
                                        <span className="nav-link-text">Terms of Use</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <ul className="nav-list">
                                <li className="nav-list-item">
                                    <a className="nav-link" href="#">
                                        <span className="nav-link-icon" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <rect x="0" y="0" width="100%" height="100%" />
                                            </svg>
                                        </span>
                                        <span className="nav-link-text">Instagram</span>
                                    </a>
                                </li>
                                <li className="nav-list-item">
                                    <a className="nav-link" href="#">
                                        <span className="nav-link-icon" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <rect x="0" y="0" width="100%" height="100%" />
                                            </svg>
                                        </span>
                                        <span className="nav-link-text">Twitter</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="copyright">
                        Copyright {year} MAVERLINK. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

Footer.displayName = 'Footer';
