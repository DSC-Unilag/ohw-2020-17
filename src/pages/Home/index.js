import React from "react";
import { Banner } from "./components";
import GymList from "../../component/GymList";
import { HomeLayout } from "../../component/Layout";

function Home() {
  return (
    <HomeLayout value={{ nofooter: true }}>
      <Banner />
      <GymList />
    </HomeLayout>
  );
}

export default Home;
