import React,{useEffect} from "react";
import { Banner } from "./components";
import GymList from "../../component/GymList";
import { HomeLayout } from "../../component/Layout";
import  Glide   from "@glidejs/glide"
function Home() {
  useEffect(()=>{
  //   new Glide('.glide', {
  //     type: 'carousel',
  //     startAt: 0,
  //     perView: 3.01,
  //     autoplay: 2000,
  //     gap: 20,
  //     breakpoints: {
  //         991: {
  //             perView: 3
  //         },
  //         825: {
  //             perView: 1
  //         }

  //     }

  // }).mount()
  },[])
  return (
    <HomeLayout value={{ nofooter: true }}>
      <Banner />
      <GymList />
    </HomeLayout>
  );
}

export default Home;
