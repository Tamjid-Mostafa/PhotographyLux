import { Button } from "flowbite-react";
import React from "react";
import FoodPhoto from "../DisplaySection/FoodPhoto";
import Services from "../Services/Services";
import Banner from "./Banner";
import Process from "./Process";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Process></Process>
      <FoodPhoto></FoodPhoto>
      
    </>
  );
};

export default Home;
