import React from "react";
import styles from "./section2.module.css";
import service3 from "../../../../public/assets/img//service-3.svg";
const Section2 = () => {
  return (
    <div className={styles.main_div}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.paragraph1}>
              <p>
                Get ready for <br /> a 
                <br />  upgrade.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.paragraph2}>
              <p>
                Go further with  Fiber <br />5 Gig Internet.
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
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img//features-bg.png"
                    alt=" Internet"
                  />
                </div>
                <p>Unlock unlimited  potential</p>
                <p>
                  Stream, work, and game with no data caps or overage charges on
                  .
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className={styles.content_box}>
                <div className={styles.icon_wrapper}>
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img//service-1.svg"
                    alt=" Internet"
                  />
                </div>
                <p>Unlock unlimited  potential</p>
                <p>
                  Stream, work, and game with no data caps or overage charges on
                  .
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className={styles.content_box}>
                <div className={styles.icon_wrapper}>
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img//service-3.svg"
                    alt=" Internet"
                  />
                </div>
                <p>Unlock unlimited  potential</p>
                <p>
                  Stream, work, and game with no data caps or overage charges on
                  .
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className={styles.content_box}>
                <div className={styles.icon_wrapper}>
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img//service-1.svg"
                    alt=" Internet"
                  />
                </div>
                <p>Unlock unlimited  potential</p>
                <p>
                  Stream, work, and game with no data caps or overage charges on
                  .
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
