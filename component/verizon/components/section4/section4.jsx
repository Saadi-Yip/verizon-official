import React from "react";
import styles from "./section4.module.css";

const Section4 = () => {
  return (
    <div className={styles.main_div}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 d-lg-flex justify-content-lg-end d-md-flex justify-content-md-end d-sm-flex justify-content-sm-center">
            <div className={styles.left_content}>
              <img
                src="./frontier/section4_image.png"
                alt=""
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className={styles.right_content}>
              <h1 className="mt-5 txt-responsive">
                <b>Best Unlimited Internet Plans With No Caps</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
