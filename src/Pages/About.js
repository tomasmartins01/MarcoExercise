import React from "react";
import Header from "../Components/Header";
import TextMessage from "../Components/TextMessage";
import Image from "../Components/Image";
import "../Styles/about.less";
import image1 from "../Images/4.jpg";

const About = () => {
  return (
    <>
      <Header title="About" />
      <div className="about">
        <TextMessage classname="text">Este é um cão muito fofo</TextMessage>
        <Image imageSrc={image1} alt="Random image number 1" />
      </div>
    </>
  );
};

export default About;
