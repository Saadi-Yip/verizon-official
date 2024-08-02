import Link from 'next/link'
import React from 'react'

const ServiceSection = () => {
    return (
        <div className="like-us-area p-rel pt-100 pb-110 about-service-section">
            <div className="ba-like-us-section-img-50">
                <img src="assets/img/about/like-us.jpg" alt="about image" />
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xxl-6 col-xl-6 col-lg-12">
                        <div className="pl-50 ba-like-content-space">
                            <div className="ba-like-us-content">
                                <h2 className="ba-like-us-title white-text mb-15 wow fadeInUp" data-wow-delay=".1s">312 W 2ND ST STE#5083, CASPER WY 82601, USA</h2>
                                <div className="ba-like-list-wrapper pr-185">
                                    <ul>
                                        <li className="wow fadeInUp" data-wow-delay=".3s">
                                            <div className="icon soft-white-text pr-20">
                                            <i className="fal fa-mobile"></i>
                                            </div>
                                            <div className="content">
                                                <h5 className="title white-text">+1(855)-316-1700</h5>
                                            </div>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay=".4s">
                                            <div className="icon soft-white-text pr-20">
                                            <i className="fal fa-envelope"></i>
                                            </div>
                                            <div className="content">
                                                <h5 className="title white-text">info@verizonofficial.com</h5>
                                            </div>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay=".5s">
                                            <div className="icon soft-white-text pr-20">
                                                <i className="fal fa-phone"></i>
                                            </div>
                                            <div className="ba-about-right-actions wow fadeInUp" data-wow-delay=".6s">
                                                <Link href="tel:+1(855)-316-1700" className="ba-submit-btn">Call us</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection