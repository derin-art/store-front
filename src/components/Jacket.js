import React, { useContext } from "react";
import { Try } from "../Tetst/Context";
import ItemCard from "./itemCard";

export default function JacketsPage() {
  const { items } = useContext(Try);

  const Jackets = items.map((item) => {
    if (item.name.toLowerCase().includes("jacket")) {
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
        {Jackets}
      </div>
    </div>
  );
}
