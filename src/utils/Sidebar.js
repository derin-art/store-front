import React from "react";
import { Link } from "react-router-dom";

export default function SideBar({ setIsSideBar }) {
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" />
    </svg>
  );
  return (
    <div className="h-screen w-[200px] bg-white font-Prompt text-black z-50 flex flex-col p-1 pr-8">
      <div className="flex items-center justify-center ml-4 hidden">
        <input
          className="border border-black p-2 mt-8 outline-none w-32 "
          placeholder="search"
          type="text"
        ></input>{" "}
        <button className="mt-8 ml-2">{searchIcon}</button>
      </div>
      <button
        onClick={() => {
          setIsSideBar(false);
        }}
        className="pt-8"
      >
        <Link to="/">Home</Link>
      </button>

      <button
        onClick={() => {
          setIsSideBar(false);
        }}
      >
        <Link to="/jackets">Jacket</Link>
      </button>

      <button
        onClick={() => {
          setIsSideBar(false);
        }}
      >
        <Link to="/suits">Suit</Link>
      </button>

      <button
        onClick={() => {
          setIsSideBar(false);
        }}
      >
        <Link to="/sweaters">Sweater</Link>
      </button>

      <button
        onClick={() => {
          setIsSideBar(false);
        }}
      >
        <Link to="/shirts">Shirt</Link>
      </button>
    </div>
  );
}
