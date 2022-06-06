import React, {useContext} from "react";
import { Try } from "../Tetst/Context";
import ItemCard from "./itemCard";
import axios from "axios";

export default function SweatersPage(){
   /*  const [items, setItems] = React.useState()
    const [SweaterItems, setSweaterItems] = React.useState() */

    const {items} = useContext(Try)

    const remoteBackend = "https://store-crud.herokuapp.com/"
  /*   const getItems = async ()=>{
        const res = await axios.get(`${remoteBackend}storeV1`).catch(err => {
            console.log(err)
        })
        const {data} = res
        const resItems = data.data
        setItems(resItems)
        
    
    } */

    const Sweaters = items.map(item => {
        if(item.name.toLowerCase().includes("sweater")){
            return <div className="mb-24 p-2" key={item._id}>
                <ItemCard img={item.img} key={item._id} id={item._id} description={item.description} comments={item.comments} name={item.name} price={item.price} type={item.type}/>
            </div>
        }
    })

  /*   React.useEffect(()=>{
        getItems()
        if(items){
            const Sweaters = items.map(item => {
                if(item.name.toLowerCase().includes("sweater")){
                    return <div className="mb-24 p-2">
                        <ItemCard img={item.img} key={item._id} id={item._id} description={item.description} comments={item.comments} name={item.name} price={item.price} type={item.type}/>
                    </div>
                }
            })
            setSweaterItems(Sweaters)
        }
    
    }, []) */

  
    return <div>
               
               <div className="mt-24 flex flex-wrap items-center justify-center">
                   {Sweaters}
               </div>
    </div>
}