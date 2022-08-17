import React, { useContext } from "react";
import ItemCard from "./itemCard";
import { Try } from "../Tetst/Context";

export default function SuitsPage() {
  const { items } = useContext(Try);

  const Suits = items.map((item) => {
    if (item.name.toLowerCase().includes("suit")) {
      return (
        <div className="mb-24 p-2" key={item._id}>
          <ItemCard
            img={item.img}
            key={item._id}
            id={item._id}
            description={item.description}
            comments={item.comments}
            name={item.name}
            price={item.price}
            type={item.type}
          />
        </div>
      );
    }
  });

  return (
    <div>
      <div className="mt-24 flex flex-wrap items-center justify-center">
        {Suits}
      </div>
    </div>
  );
}
