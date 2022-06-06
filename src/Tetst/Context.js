import React, { Children } from "react";
import Second from "../components/second";
import axios from "axios";
const Try = React.createContext()




function Context(){
    const remoteBackend = "https://store-crud.herokuapp.com/"
    const [items, setItems] = React.useState([])
    const [itemsGot, setItemsGot] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])
    const [noForCart, SetNoForSet] = React.useState(0)

    

    /* const [Suits, setSuits] = React.useState([])

    const [Sweater, setSweater] = React.useState([])

    const [Shirt, setShirt] = React.useState([])

    const [Jacket, setJacket] = React.useState([]) */

    const getItems = async ()=>{
        const res = await axios.get(`${remoteBackend}storeV1`).catch(err => {
            console.log(err)
        })
        const {data} = res
        const resItems = data.data
        setItems(resItems)
        
    
    }

    React.useEffect(()=>{
            getItems()
    }, [])


   
   return  <Try.Provider value={{items, setCartItems, cartItems, noForCart, SetNoForSet}} children={<Second />}>


   </Try.Provider>

}

export {Try, Context}