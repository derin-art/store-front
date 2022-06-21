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
        
            return <div className="mb-24 p-2" key={item._id}>
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
   
    return <div>
       <div className="mt-12 flex flex-wrap items-center justify-center">
       <div className={`${items.length? "hidden" : "block"} flex flex-wrap w-full scrollbar-hide`}> {Decoy}</div>
        {AllItems}
       </div>
    </div>
}

/* mt-24 flex flex-wrap items-center justify-center */

/* mt-12 flex flex-wrap items-center justify-center w-full scrollbar-hide */