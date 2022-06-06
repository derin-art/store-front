import React from "react";
import StarRatingComponent from "react-star-rating-component"
import { Link } from "react-router-dom";


export default function ItemCard({img, price, name, comments, description, id }){
    const random = ()=>{
       const no = Math.floor(Math.random()*6)
       let finalNo
      if(no < 3){
          finalNo = 3
       }
       else{
          finalNo = no
       }
       return finalNo
    }
    const [startRating, setStarRating] = React.useState(random() || startRating)
    const onStarChange = (nextValue, prevValue, name)=>{
        setStarRating(nextValue)
    }
    return <Link to={`item/${id}`}>
        <div className="h-62 flex flex-col border border-gray-300">
        <div className="w-48 bg-gray-100 border-gray-300">
                    <img  className="w-full" src={`data:image/jpeg;base64,${img}`}></img>
                </div>
        <div className="bg-white font-mono pl-2 w-48">
                    <div className="text-sm  mb-2 uppercase">{name}</div>
                    <div className="text-xs mb-2 ">${price}</div>
                    <StarRatingComponent name="rating" editing={true} starColor="" onStarClick={()=>{onStarChange()}} emptyStarColor="#b2beb5" value={startRating}></StarRatingComponent>
    </div>
    </div>
    </Link>
}