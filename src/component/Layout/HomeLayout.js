import React from "react";
import { MainHeader } from "../Header";
import Footer from "../Footer/Footer";

function HomeLayout(props) {
  const { children, nofooter } = props;
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
    <div style={{flex:1}}>
      <MainHeader />
      <div>{children}</div>
      </div>
      {!nofooter && <Footer />}
    </div>
  );
}
export default HomeLayout;
