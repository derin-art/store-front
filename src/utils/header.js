import React, {useContext} from "react";
import Mountain from "../public/Mountain1.svg"
import { Try } from "../Tetst/Context";
import SideBar from "./Sidebar";
import { Link } from "react-router-dom";

export default function Header(){
    const [isSideBar, setIsSideBar] = React.useState(false)
    const [scrolledUp, setScrolledUp] = React.useState(false)
    const [scrollPosition, setSrollPosition] = React.useState(0);
    const [isSelected, setISSelected] = React.useState("home")
    const {cartItems} = useContext(Try)
    const handleScroll = () => {
    const position = window.pageYOffset;
   

    setSrollPosition(prev => {
        if(position > prev){
            setScrolledUp(true)
        }
        else{
            setScrolledUp(false)
        }
       return position
    });
};

    React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [])


    const MenuLogo = <svg xmlns="http://www.w3.org/2000/svg" className="fill-black" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg>
    const ShopLogo = <svg xmlns="http://www.w3.org/2000/svg" className="fill-black" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
    return <div className="absolute top-24 w-full overflow-hidden">
        <div className="flex flex-col fixed z-50 -mt-24">
        <div className="flex items-center justify-center p-2 w-screen bg-amber-300">
            <Link to="/">
            <img src={Mountain} className="w-8 h-8"></img>
            </Link>
        </div>
        <div className="w-full font-serif font-thin fixed overflow-hidden h-12 bg-white flex mt-12 justify-center items-center text-black">
        <div className="absolute overflow-hidden left-0 flex z-200 sm:hidden">
           <button onClick={()=>{setIsSideBar(prev => !prev)}}>
           {MenuLogo}
           </button>
            <div className={`absolute -translate-x-48 left-0 -z-20 duration-200 ${isSideBar ? "translate-x-0" : ""}`}>
             <SideBar setIsSideBar={setIsSideBar}/>
            </div>
        </div>
       <div className="flex flex-col pl-4 justify-center font-Prompt items-center">
       D&O
       {!scrolledUp && <div className={`flex -mt-1 font-serif ${scrolledUp ? "animate-fadeOut": "animate-fadeIn"} hidden sm:block`}>

       <Link to="/">
       <button className={`p-2 pt-0 pb-0 hover:border-b ${"home"===isSelected ? "border-b-2 border-amber-400" : ""}`} onClick={()=>{
           setISSelected("home")
       }}>
                
                Home 
              
           </button>
           </Link>

           <Link to="/shirts">
           <button className={`m-2 mt-0 mb-0 hover:border-b ${"shirts"===isSelected ? "border-b-2 border-amber-400" : ""}`} onClick={()=>{
               setISSelected("shirts")
           }} >
               
                Shirts 
             
           </button>
           </Link>

           <Link to="/suits">
           <button className={`p-2 pt-0 pb-0 hover:border-b ${"suits"===isSelected ? "border-b-2 border-amber-400" : ""}`} onClick={()=>{
               setISSelected("suits")
           }}>
                
                Suits
             
           </button>
           </Link>

           <Link to="sweaters">
           <button className={`m-2 mt-0 mb-0 hover:border-b ${"sweaters"===isSelected ? "border-b-2 border-amber-400" : ""}`} onClick={()=>{
               setISSelected("sweaters")
           }}>
          
             Sweaters 
            
           </button>
           </Link>

           <Link to="/jackets">
           <button className={`m-2 mt-0 mb-0 hover:border-b ${"jackets"===isSelected ? "border-b-2 border-amber-400" : ""}`} onClick={()=>{
               setISSelected("jackets")
           }}>
        
          Jackets
          
           </button>
           </Link>
        </div>}
       </div>
       
       <div className="absolute right-1 sm:right-3">
        <Link to="/cart">
        <button className="flex">
         <p className="mr-2 text-amber-400 font-Prompt">{cartItems.length}</p> {ShopLogo}
          </button>
        </Link>
       </div>
   </div>
    </div>
    </div>
}
