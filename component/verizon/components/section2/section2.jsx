import React from "react";
import styles from "./section2.module.css";

const Section2 = () => {
  return (
    <div className={styles.main_div}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.paragraph1}>
              <p>
                Get ready for <br /> a Verizon
                <br /> FiOS upgrade.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.paragraph2}>
              <p>
                Go further with Verizon FiOS Fiber <br />5 Gig Internet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content_wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className={styles.content_box}>
                <div className={styles.icon_wrapper}>
                  <img
                    src="/assets/img/verizon/features-bg.png"
                    alt="Verizon FiOS Internet"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <p>Unlock unlimited FiOS potential</p>
                <p>
                  Stream, work, and game with no data caps or overage charges on
                  Verizon FiOS.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className={styles.content_box}>
                <div className={styles.icon_wrapper} style={{ width: "60px" }}>
                  <img
                    src="/assets/img/verizon/service-1.svg"
                    alt="Verizon FiOS Internet"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <p>Unlock unlimited FiOS potential</p>
                <p>
                  Stream, work, and game with no data caps or overage charges on
                  Verizon FiOS.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className={styles.content_box}>
                <div className={styles.icon_wrapper} style={{ width: "60px" }}>
                  <img
                    src="assets/img/verizon/service-3.svg"
                    alt="Verizon FiOS Internet"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <p>Unlock unlimited FiOS potential</p>
                <p>
                  Stream, work, and game with no data caps or overage charges on
                  Verizon FiOS.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className={styles.content_box}>
                <div className={styles.icon_wrapper} style={{ width: "50px" }}>
                  <img
                    src="/assets/img/verizon/service-1.svg"
                    alt="Verizon FiOS Internet"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <p>Unlock unlimited FiOS potential</p>
                <p>
                  Stream, work, and game with no data caps or overage charges on
                  Verizon FiOS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
