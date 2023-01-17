import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import HeroImage1 from "../images/orange-living-room-accent-wall.jpg";
import HeroImage2 from "../images/orange-living-room-accent-wall2.jpg";
import HeroImage3 from "../images/orange-living-room-accent-wall3.jpg";

export default function HeroCarousel() {
  return (
    <div className="w-screen h-[300px] max-h-[720px]">
      <div className="relative">
        <h1 className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 text-white lg:text-6xl px-[15vw] lg:px-0 font-semibold text-center mx-auto mt-[40vh] md:mt-[23rem] w-full max-w-4xl">
          Service de NETTOYAGE et de PEINTURE RÉSIDENTIEL
        </h1>
      </div>

      <Carousel fade interval={3000}>
        <Carousel.Item>
          <div className="absolute w-screen h-[80vh] md:h-[720px] bg-gradient-to-t from-transparent to-black opacity-50"></div>
          <Image
            src={HeroImage1}
            alt=""
            className="h-[80vh] md:h-[720px] w-screen object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="absolute w-screen h-[80vh] md:h-[720px] bg-gradient-to-t from-transparent to-black opacity-50"></div>
          <Image
            src={HeroImage2}
            alt=""
            className="h-[80vh] md:h-[720px] w-screen object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="absolute w-screen h-[80vh] md:h-[720px] bg-gradient-to-t from-transparent to-black opacity-50"></div>
          <Image
            src={HeroImage3}
            alt=""
            className="h-[80vh] md:h-[720px] w-screen object-cover"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
