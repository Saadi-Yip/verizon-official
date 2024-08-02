import AccordionSection from "../accordion/AccordionSection";

const FaqSection = () => {
  return (
    <div id="index-1-faq-section" className="faq-area pt-115 pb-120">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-50 mb-lg-0">
        <div className="faq-img mt-150">
          <img src="assets/img/faq/faq.png" alt="map-icon" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="ba-faq-left-content">
          <div className="ba-section-title-wrapper-top pb-40">
            <div className="ba-section-title-wrapper pb-25">
              <h5 className="ba-section-subtitle wow fadeInUp" data-wow-delay=".1s">
                FAQ ASKED
              </h5>
              <h3 className="ba-section-title wow fadeInUp" data-wow-delay=".2s">
              Have questions? We’ve got answers.
              </h3>
            </div>
          </div>
          <AccordionSection/>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default FaqSection;
