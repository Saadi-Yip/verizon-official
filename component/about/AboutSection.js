import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="pt-120 pb-120 position-relative overflow-hidden"
    >
      <span className="circle-animation dir-top-left">
        <img src="assets/img/vector/circle-vector.png" alt="circle" />
      </span>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="about-img">
              <img src="assets/img/about/about.jpg" alt="people watcing tv" />
              <div className="about-img__txt">
                <p>Live Sport and TV-shows for best friends</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-11">
            <div className="about-content">
              <h6 className="ba-section-subtitle section-subtitle">
                 Internet and Cable TV
              </h6>
              <h2 className="ba-section-title section-title">
                We Provide Best Broadband &  Internet Service Provider
              </h2>

              <p className="about__txt">
                We pride ourselves on being the leading provider of broadband and internet services, including , offering unparalleled connectivity solutions tailored to meet your needs. Our commitment to delivering exceptional service
              </p>

              <div className="highlighted d-flex align-items-center">
                <img
                  src="assets/img/about/about-4.jpg"
                  alt="2 people watching tv"
                  width={"125px"}
                  height={"100px"}
                />
                <div className="free-install-question">
                  <h6>free installation</h6>
                  <ul>
                    <li>
                      <a href="#">How does industrial process work?</a>
                    </li>
                    <li>
                      <a href="#">Optimal alignments for tuitive?</a>
                    </li>
                    <li>
                      <a href="#">Problems require the assistance?</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="about-statics ">
                <div className="single-statics ">
                  <img
                    src="assets/img/icons/about-icon-1.png"
                    alt="client icon"
                    className="single-statics__img"
                  />
                  <div className="single-statics__details">
                    <h6 className="single-statics__number">120+</h6>
                    <span className="single-statics__label">Happy clients</span>
                  </div>
                </div>

                <div className="single-statics">
                  <img
                    src="assets/img/icons/about-icon-2.png"
                    alt="Channels icon"
                    className="single-statics__img"
                  />
                  <div className="single-statics__details">
                    <h6 className="single-statics__number">130+</h6>
                    <span className="single-statics__label">
                      Online Channels
                    </span>
                  </div>
                </div>
              </div>

              <a href="tel:+1(855)-316-1700" className="ba-submit-btn">
                Call US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
