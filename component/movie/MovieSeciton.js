import { NafiabContext } from "@/context/NafiabContext";
import Link from "next/link";
import React, { useContext } from "react";

const MovieSeciton = () => {
  const {handleVideoShow} = useContext(NafiabContext)
  return (
    <section
      className="movie-area bg-default pb-120 pt-110 home-movie-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 pb-50 pb-lg-0">
            <div className="ba-movie-content movie-section__content pr-185">
              <h4
                className="ba-movie-title wow fadeInUp movie-content__title"
                data-wow-delay=".1s"
              >
                <br /> FiOS TV Plans
              </h4>
              <p
                className="wow fadeInUp movie-content__txt"
                data-wow-delay=".2s"
              >
               Access More of Your Favorite Channels
               <br/>
               Enjoy top-quality entertainment with Verizon FiOS, 
                <br/>
                Starting at
              </p>
              <div
                className="ba-movie-price-service-duration-wrap pb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h5 className="ba-movie-price movie-content__price">
                $50/ <span> per Month</span>  
                </h5>
                <div className="ba-movie-service-duration movie-content__duration">
                  <i className="fal fa-router"></i>
                  <span>Reach Out to Us</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="ba-submit-btn wow fadeInUp"
                data-wow-delay=".4s"
              >
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieSeciton;
