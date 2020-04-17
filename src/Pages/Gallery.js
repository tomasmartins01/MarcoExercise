import React from "react";
import Header from "../Components/Header";
import Image from "../Components/Image";
import "../Styles/gallery.less";
import img1 from "../Images/1.jpg";
import img2 from "../Images/2.jpg";
import img3 from "../Images/3.jpg";
import img4 from "../Images/4.jpg";

const Gallery = () => {
  return (
    <>
      <Header title="Gallery" />
      <div className="image-gallery">
        <Image imageSrc={img1} />
        <Image imageSrc={img2} />
        <Image imageSrc={img3} />
        <Image imageSrc={img4} />
      </div>
    </>
  );
};

export default Gallery;
