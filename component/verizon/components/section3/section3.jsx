import React from "react";
import styles from "./section3.module.css";

const Section3 = () => {
  return (
    <div className={styles.main_div}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className={styles.left_content}>
              <h1>
                <b>Save $120 on YouTube TV</b>
              </h1>
              <p>
                Get your favorite channels with  Fiber and YouTube TV.
                Save $10/mo. on your first year of YouTube TV. Watch 100+
                channels of live sports, news and shows on our ultra-fast fiber
                internet.Tooltip Icon
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.right_content}>
              <img
                src="/assets/img/verizon/faq.png"
                alt=""
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
