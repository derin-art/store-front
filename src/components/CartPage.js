import React, {useContext} from "react";
import { Try } from "../Tetst/Context";


export default function CartPage(){
    const [cartFinalItems, setFinalCartItems] = React.useState([])
    const {items, setCartItems, cartItems, noForCart, SetNoForSet} = useContext(Try)
    const id = []
    cartItems.forEach(Item => {
        id.push(Item._id)
    })

    console.log(id)
    React.useEffect(()=>{
        const yett = new Set(id)
        console.log(yett)
        yett.forEach(id => {
            let origNo = 0
            cartItems.forEach(item => {
                if(id === item._id){
                    origNo = 1 + origNo
                }
            })
            console.log({id, noofItems: origNo})
            setFinalCartItems(prev => ([...prev, {id, noofItems: origNo} ]))
            return {id, noofItems: origNo}
        })
    }, [])
    const renderCart = cartItems.map(item => {
        return <h1>{item.name}</h1>
    })
    return <div className="h-screen bg-yellow-200 mt-24">
        {renderCart}
    </div>
    
}