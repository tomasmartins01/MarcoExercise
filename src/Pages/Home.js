import React from "react";
import Header from "../Components/Header";
import TextMessage from "../Components/TextMessage";
import "../Styles/home.less";

const Home = () => {
  return (
    <>
      <Header id="title" title="Home" />
      <TextMessage classname="home-text">
        Olá!!! Eu Sou um texto que está centrado, e tu como estás?
      </TextMessage>
    </>
  );
};

export default Home;
