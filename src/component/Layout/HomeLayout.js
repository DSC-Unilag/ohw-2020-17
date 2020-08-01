import React from "react";
import { MainHeader } from "../Header";
import Footer from "../Footer/Footer";

function HomeLayout(props) {
  const { children, nofooter } = props;
  return (
    <div>
      <MainHeader />
      <div>{children}</div>
      {nofooter && <Footer />}
    </div>
  );
}
export default HomeLayout;
