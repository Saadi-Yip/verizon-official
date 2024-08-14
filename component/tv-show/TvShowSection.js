import { NafiabContext } from "@/context/NafiabContext";
import React, { useContext } from "react";

const TvShowSection = () => {
  const { handleVideoShow } = useContext(NafiabContext)
  return (
    <section id="liveTV-section" className="pt-120 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-heading text-center mb-60">
              <h2 className="ba-section-title section-title">
                Best  Internet 
              </h2>
              
              <p> home internet has all of your internet needs covered. With our fast, simple, and reliable internet service at an affordable price you can do it all. Perks include</p>
            </div>
          </div>
        </div>
        <a href="tel:+1(855)-316-1700" className="custom-btn">
          Call Us
        </a>
      </div>
    </section>
  );
};

export default TvShowSection;
