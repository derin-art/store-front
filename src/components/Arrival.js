import React from "react"
import Arrival7 from "../public/Arrival7.jpg"
import Mountain from "../public/Mountain1.svg"





export default function Arrival({setStart}){

    return <div className="w-screen h-screen flex justify-center items-center flex-col overflow-y-hidden overflow-x-hidden" style={{backgroundImage: `url(${Arrival7})`}}>
     {/*  <div className="top-2 left-0 absolute">
        <img src={Mountain} className="h-10 w-10"></img>
      </div> */}
      <div className="flex content-between pl-2">
            <div className="text-7xl font-PlayFair w-24 text-slate-300 uppercase font-bold">
                Be that 
                <div className="text-yellow-500 text-8xl">
                  Guy.
                </div>
          </div>

        <div className="ml-32 flex flex-col justify-center md:flex-row">
        <button className="border border-white rounded-lg text-white p-2 text-lg self-center text-right hover:border-amber-200 px-3" onClick={setStart(true)}>
              Shop
          </button>
          <button className="border border-white rounded-lg text-white p-2 text-md mt-2 md:mt-0 md:ml-4 self-center text-right hover:border-amber-200 px-4">
              Contact
          </button>
        </div>

      </div>
    </div>
}