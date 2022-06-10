import React from "react";
import MainPage from "./firstpage";
import Header from "../utils/header";
import Carousel from "../utils/Carousel";
import { useLocation } from "react-router-dom";
import Arrival from "./Arrival";





export default function Second(){
    const [start, setStart] = React.useState(false)
    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
      }

    const [bg, setBg] = React.useState(usePathname())



    
    console.log(usePathname())
    return  <div className={`h-full w-screen bg-gray-100 ${bg === "/jackets" || "/sweaters"? "h-screen": "h-full"}`}>
    <Header />
    <MainPage />
   
   
</div> 
}
