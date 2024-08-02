import Link from 'next/link'
import React from 'react'

const FooterSection = () => {
    return (
        <footer id="footer-section">
            <div className="container">
                <div className="footer-two">
                    <div className="row justify-content-xl-between justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="company-info">
                                <img src="assets/img/logo/logo-3.png" alt="logo" className="footer-two__logo" />

                                <div className="company-info__txt">
                                    <span>312 W 2ND ST STE#5083, CASPER WY 82601, USA </span>

                                    <div className="company__numbers">
                                        <a href="tel:+1(855)-316-1700">+1(855)-316-1700</a>
                                    </div>

                                    <span>info@verizonofficial.com</span>
                                    <span>Sunday - Friday</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-6">
                            <div className="ba-footer-widget footer-two-widget">
                                <h3 className="ba-footer-widget-title footer-two-widget__title">Help?</h3>
                                <ul>
                                    <Link href="policies/terms-of-service">
                                        Terms Of Service
                                    </Link>
                                    <Link href="pages/disclaimer">
                                        Disclaimer
                                    </Link>
                                    <Link href="policies/privacy-policy">
                                        Privacy Policy
                                    </Link>

                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-8">
                            <div className="ba-footer-widget footer-two-widget footer-two-widget--last pr-50">
                                <h3 className="ba-footer-widget-title footer-two-widget__title">Working Hours</h3>
                                <div className="ba-footer-widget-working-hours-list footer-two-widget__working-hours">
                                    <ul>
                                        <li>
                                            <span className="label">Monday</span>
                                            <span className="value">6:00 – 4:00</span>
                                        </li>
                                        <li>
                                            <span className="label">Tusday</span>
                                            <span className="value">6:00 – 4:00</span>
                                        </li>
                                        <li>
                                            <span className="label">Wedesday</span>
                                            <span className="value">6:00 – 4:00</span>
                                        </li>
                                        <li>
                                            <span className="label">Thursday</span>
                                            <span className="value">6:00 – 4:00</span>
                                        </li>
                                        <li>
                                            <span className="label">Friday</span>
                                            <span className="value">6:00 – 4:00</span>
                                        </li>
                                        <li>
                                            <span className="label">Saturday</span>
                                            <span className="value">6:00 – 4:00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-three pt-35 pb-40">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="ba-footer-copyright-text footer-three__copyright-text">Copyright &copy; 2022 All rights reserved.</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                            <img src="assets/img/payment-method/payment-method.png" alt="logo" className="payment-methods" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection