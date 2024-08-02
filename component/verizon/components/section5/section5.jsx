import React from "react";
import styles from "./section5.module.css";

const Section5 = () => {
  return (
    <div className={styles.main_div}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className={styles.right_content}>
              <img
                src="/assets/img/verizon/hero-1.jpg"
                alt=""
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12  d-flex justify-content-center">
            <div className={styles.left_content}>
              <h1>
                <b>Do more even faster on verizon</b>
              </h1>
              <p>
                Verizon supercharges your internet so you can work, live and
                play the way you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
