import React from "react";
import Carousel1 from "../public/Carousel.jpg"
import Carousel2 from "../public/Carousel2.jpg"
import Carousel3 from "../public/Carousel4.jpg"

export default function Carousel(){
    return <div className="h-fit scrollbar-hide">
           <h1 className="font-Paytone absolute -top-8 z-20 h-full">
            <div className="flex flex-col sm:flex-row items-center justify-center w-screen text-5xl h-full pl-2">Yellow <span className="text-amber-400">Mountain</span></div>
            </h1>
        <div className="flex animate-slide sm:animate-slideMedium md:animate-slideSmall scrollbar-hide lg:animate-none -z-10">
            <img src={Carousel1} className=""></img>
            <img src={Carousel2}></img>
            <img src={Carousel3}></img>
        </div>

    </div>
}