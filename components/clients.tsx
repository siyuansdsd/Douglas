"use client";

import { useEffect } from "react";
import Image from "next/image";
import Particles from "./particles";

import React from "@/public/images/react-logo.svg";
import Next from "@/public/images/nextjs-logo.svg";
import Angular from "@/public/images/angular-logo.svg";
import Nest from "@/public/images/nest-logo.svg";
import Express from "@/public/images/express-logo.svg";
import PostgreSQL from "@/public/images/postgresql-logo.svg";
import AWS from "@/public/images/aws-logo.svg";
import Docker from "@/public/images/docker-logo.svg";
import MongoDB from "@/public/images/mongodb-logo.svg";

// Import Swiper
import Swiper, { Autoplay } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Autoplay]);

export default function Clients() {
  useEffect(() => {
    const carousel = new Swiper(".clients-carousel", {
      slidesPerView: "auto",
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-900">
              <div className="swiper-wrapper !ease-linear select-none items-center">
                {/* Carousel items */}
                <div className="swiper-slide !w-auto">
                  <Image src={React} alt="React JS" width={110} height={21} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image src={Next} alt="Next JS" width={88} height={55} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    className="mt-1"
                    src={Angular}
                    alt="Angular js"
                    width={107}
                    height={33}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image src={Nest} alt="Nest JS" width={85} height={36} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Express}
                    alt="Express JS"
                    width={100}
                    height={60}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={PostgreSQL}
                    alt="PostgreSQL"
                    width={78}
                    height={34}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image src={AWS} alt="AWS" width={83} height={23} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image src={Docker} alt="Docker" width={98} height={26} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    className="mt-2"
                    src={MongoDB}
                    alt="MongoDB"
                    width={122}
                    height={58}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
