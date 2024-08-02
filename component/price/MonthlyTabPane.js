import Link from 'next/link'
import React from 'react'

const MonthlyTabPane = () => {
  return (
    <div className="row justify-content-center">
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30 mb-xl-0">
            <div className="price-section-tab-pane ba-pricing-box text-center bg-default wow fadeInUp" data-wow-delay=".1s">
                <h4 className="ba-pricing-box-title">Broadband & WIFI</h4>
                <h5 className="ba-pricing-box-count pb-20">$120<span>/6 Month</span></h5>
                <div className="ba-pricing-box-icons-wrap pb-50">
                <div className="ba-pricing-box-icon">
                    <i className="fal fa-wifi"></i>
                </div>
                <div className="ba-pricing-box-icon active">
                    <i className="fal fa-broadcast-tower"></i>
                </div>
                <div className="ba-pricing-box-icon">
                    <i className="fal fa-house"></i>
                </div>
                </div>
                <div className="ba-pricing-box-list-wrap">
                <ul className="pb-35">
                    <li className="active"><i className="fal fa-check-circle"></i> <span>Home Broadband</span></li>
                    <li className="active"><i className="fal fa-check-circle"></i> <span>Satellite TV</span></li>
                    <li><i className="fal fa-check-circle"></i> <span>Cell phone connection</span></li>
                    <li><i className="fal fa-check-circle"></i> <span>Home security</span></li>
                    <li><i className="fal fa-check-circle"></i> <span>Single Device Uses</span></li>
                    <li><i className="fal fa-check-circle"></i> <span>Random IP</span></li>
                </ul>
                <Link href="tel:+1(855)-316-1700" className="ba-submit-btn">Call Us</Link>
                </div>
            </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30 mb-xl-0">
            <div className="price-section-tab-pane ba-pricing-box text-center bg-default active wow fadeInUp" data-wow-delay=".2s">
                <h4 className="ba-pricing-box-title">TV Combo Bundle</h4>
                <h5 className="ba-pricing-box-count pb-20">$30<span>/4 Month</span></h5>
                <div className="ba-pricing-box-icons-wrap pb-50">
                <div className="ba-pricing-box-icon">
                    <i className="fal fa-wifi"></i>
                </div>
                <div className="ba-pricing-box-icon active">
                    <i className="fal fa-broadcast-tower"></i>
                </div>
                <div className="ba-pricing-box-icon">
                    <i className="fal fa-house"></i>
                </div>
                </div>
                <div className="ba-pricing-box-list-wrap">
                <ul className="pb-35">
                    <li className="active"><i className="fal fa-check-circle"></i> <span>Home Broadband</span></li>
                    <li className="active"><i className="fal fa-check-circle"></i> <span>Satellite TV</span></li>
                    <li><i className="fal fa-check-circle"></i> <span>Cell phone connection</span></li>
                    <li><i className="fal fa-check-circle"></i> <span>Home security</span></li>
                    <li><i className="fal fa-check-circle"></i> <span>Single Device Uses</span></li>
                    <li><i className="fal fa-check-circle"></i> <span>Random IP</span></li>
                </ul>
                
                <Link href="tel:+1(855)-316-1700" className="ba-submit-btn white-btn">Call Us</Link>
                </div>
            </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30 mb-xl-0">
            <div className="price-section-tab-pane ba-pricing-box text-center bg-default wow fadeInUp" data-wow-delay=".3s">
                <h4 className="ba-pricing-box-title">Internet For Corporate</h4>
                <h5 className="ba-pricing-box-count pb-20">$20<span>/2 Month</span></h5>
                <div className="ba-pricing-box-icons-wrap pb-50">
                <div className="ba-pricing-box-icon">
                    <i className="fal fa-wifi"></i>
                </div>
                <div className="ba-pricing-box-icon active">
                    <i className="fal fa-broadcast-tower"></i>
                </div>
                <div className="ba-pricing-box-icon">
                    <i className="fal fa-house"></i>
                </div>
                </div>
                <div className="ba-pricing-box-list-wrap">
                <ul className="pb-35">
                    <li className="active"><i className="fal fa-check-circle"></i> <span>Home Broadband</span></li>
                    <li className="active"><i className="fal fa-check-circle"></i> <span>Satellite TV</span></li>
                    <li className="active"><i className="fal fa-check-circle"></i> <span>Cell phone connection</span></li>
                    <li className="active"><i className="fal fa-check-circle"></i> <span>Home security</span></li>
                    <li><i className="fal fa-check-circle"></i> <span>Single Device Uses</span></li>
                    <li><i className="fal fa-check-circle"></i> <span>Random IP</span></li>
                </ul>
                <Link href="tel:+1(855)-316-1700" className="ba-submit-btn">Call Us</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MonthlyTabPane