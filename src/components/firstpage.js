import React, { useContext } from "react";
import {Try, Context} from "../Tetst/Context";
import Carousel from "../utils/Carousel";
import Items from "./Items";
import {Route, Routes } from "react-router-dom";
import JacketsPage from "./Jacket";
import ShirtsPage from "./Shirts";
import SuitsPage from "./Suits";
import SweatersPage from "./Sweater";
import ItemPage from "./ItemPage";
import CartPage from "./CartPage";


export default function First(){

  
     
    
    return <div className="scrollbar-hide">
      

           <Routes>

               <Route element={
               <div className="max-w-screen">
                 <div className="mt-24 overflow-hidden w-full">
                 <Carousel />
                 </div>
                 <div className="sm:mt-24 mt-6 overflow-x-hidden w-full scrollbar-hide">
                 <Items/>
                 </div>
              
               </div>
               } path="/">

               </Route>

               <Route element={<JacketsPage />} path="/jackets">

               </Route>
               <Route element={<ShirtsPage />} path="/shirts">

               </Route>
               <Route element={<SuitsPage />} path="/suits">

               </Route>
               <Route element={<SweatersPage />} path="/sweaters">

               </Route>
               <Route element={<ItemPage />} path="/item/:id">

               </Route>
               <Route element={<ItemPage />} path="sweaters/item/:id">

               </Route>
               <Route element={<ItemPage />} path="suits/item/:id">

               </Route>
               <Route element={<ItemPage />} path="shirts/item/:id">

               </Route>
               <Route element={<ItemPage />} path="jackets/item/:id">

               </Route>
               <Route element={<CartPage />} exact path="/cart">

               </Route>
           </Routes>
    </div>
}