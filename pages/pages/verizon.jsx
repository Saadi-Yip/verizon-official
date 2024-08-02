import React from "react";
import Header from "../../component/verizon/components/header/header";
import Section2 from "../../component/verizon/components/section2/section2";
import Section3 from "../../component/verizon/components/section3/section3";
import Section4 from "../../component/verizon/components/section4/section4";
import Section5 from "../../component/verizon/components/section5/section5";
import Section6 from "../../component/verizon/components/section6/section6";
import Footer from "../../component/verizon/components/footer/footer";
// import PopUp from "../component/verizon/components";

const Verizon = () => {
  return (
    <div>
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <PopUp
        color="linear-gradient(270deg, rgba(7, 2, 45, 1) 0%, rgba(42, 56, 96, 1) 52%, rgba(0, 212, 255, 1) 100%)"
        url="/verizon/logo.png"
        logoWidth="230px !important"
        number="+1(855)-316-1700"
      /> */}
      <Footer />
    </div>
  );
};

export default Verizon;