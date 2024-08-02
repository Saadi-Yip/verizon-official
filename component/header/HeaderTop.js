import React from 'react'

const HeaderTop = () => {
  return (
    <div className="header-top">
        <div className="row justify-content-between">
            <div className="col-md-6">
                <span className="header-top-address">
                    <i className="fal fa-map-marker-alt"></i> 312 W 2ND ST STE#5083, CASPER WY 82601, USA
                </span>
            </div>

            <div className="col-md-6">
                <div className="header-top-contact">
                    <span className="header-top-conatact__phone">
                        <a href="tel:+1(855)-316-1700"><i className="fal fa-phone-alt"></i>+1(855)-316-1700</a>
                    </span>

                    <span className="header-top-conatact__email">
                        <a href="mailto:info@verizonofficial.com"><i className="fal fa-envelope"></i> info@verizonofficial.com</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop