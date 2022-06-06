import React, {useContext} from "react";
import { Context, Try } from "../Tetst/Context";
import ItemCard from "./itemCard";

export default function Items(){
     
    const {items} = useContext(Try)
    
    
    const Suits = items.map(item => {
        if(item.name.toLowerCase().includes("suit")){
            return <div className="mb-24 p-2">
                <ItemCard img={item.img} key={item._id} description={item.description} comments={item.comments} name={item.name} price={item.price} type={item.type}/>
            </div>
        }
    })
  
    const AllItems = items.map(item => {
        
            return <div className="mb-24 p-2">
                <ItemCard img={item.img} key={item._id} id={item._id} description={item.description} comments={item.comments} name={item.name} price={item.price} type={item.type}/>
            </div>
    })

    const Decoy = [
        <div className="h-80 m-2 duration-75 ease-in-out bg-gray-300 animate-pulse border border-gray-400 w-48">
        </div>, 
        <div className="h-80 m-2 duration-75 ease-in-out bg-gray-300 animate-pulse border border-gray-400 w-48">
        </div>, 
        <div className="h-80 m-2 duration-75 ease-in-out bg-gray-300 animate-pulse border border-gray-400 w-48">
        </div>, 
        <div className="h-80 m-2 duration-75 ease-in-out bg-gray-300 animate-pulse border border-gray-400 w-48">
        </div>, 
        <div className="h-80 m-2 duration-75 ease-in-out bg-gray-300 animate-pulse border border-gray-400 w-48">
        </div>, 
        <div className="h-80 m-2 duration-75 ease-in-out bg-gray-300 animate-pulse border border-gray-400 w-48">
        </div>, 
        <div className="h-80 m-2 duration-75 ease-in-out bg-gray-300 animate-pulse border border-gray-400 w-48">
        </div>

    ]
   
    return <h1>
       <div className="mt-12 flex flex-wrap items-center justify-center overflow-x-hidden">
       <div className={`${AllItems ? "hidden" : ""} flex flex-wrap `}> {Decoy}</div>
        {AllItems ? AllItems : Decoy}
       </div>
    </h1>
}