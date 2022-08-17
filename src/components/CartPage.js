import React, { useContext } from "react";
import { Try } from "../Tetst/Context";

export default function CartPage() {
  const [cartFinalItems, setFinalCartItems] = React.useState([]);
  const [orderSent, setOrderSent] = React.useState(false);
  const { items, setCartItems, cartItems, noForCart, SetNoForSet } =
    useContext(Try);
  const id = [];
  cartItems.forEach((Item) => {
    id.push(Item._id);
  });

  let Total = 0;

  cartItems.forEach((item) => {
    Total = parseInt(item.price) + Total;
  });

  const removeItem = (e) => {
    let firstItem = false;
    let finalArray = [];
    setCartItems((prev) => {
      prev.forEach((item) => {
        if (item._id === e.target.id && !firstItem) {
          const index = prev.indexOf(item);
          finalArray = prev.filter((product) => {
            if (prev.indexOf(product) !== index) {
              return product;
            }
          });
          firstItem = true;
        }
      });
      return finalArray;
    });
  };

  console.log(id);
  React.useEffect(() => {
    const yett = new Set(id);
    console.log(yett);
    setFinalCartItems([]);
    yett.forEach((id) => {
      let origNo = 0;
      cartItems.forEach((item) => {
        if (id === item._id) {
          origNo = 1 + origNo;
        }
      });
      console.log({ id, noofItems: origNo });
      setFinalCartItems((prev) => [...prev, { id, noofItems: origNo }]);
      return { id, noofItems: origNo };
    });
  }, [cartItems]);
  const renderCart = cartItems.map((item) => {
    return <h1>{item.name}</h1>;
  });
  const activeArrray = [];
  cartFinalItems.forEach((item) => {
    let firstTime = false;
    cartItems.forEach((product) => {
      if (item.id === product._id && !firstTime) {
        firstTime = true;
        activeArrray.push(
          <div className="flex p-2 mt-4">
            <img
              src={`data:image/jpeg;base64,${product.img}`}
              className="h-24 md:h-64"
            ></img>
            <div className="flex flex-col ml-2 text-gray-700">
              <p className="font-Prompt text-amber-400">{product.name}</p>
              <p className="font-Prompt">${product.price}</p>
              <p>{item.noofItems}</p>
              <div className="flex">
                Total:{" "}
                <p>${parseInt(product.price) * parseInt(item.noofItems)}</p>
              </div>
            </div>
            <div className="flex items-center ml-4 relative justify-center pr-1">
              <button
                id={product._id}
                onClick={(e) => {
                  removeItem(e);
                }}
                className="border w-16 text-xs p-1 hover:bg-red-500 hover:text-white"
              >
                remove item
              </button>
            </div>
          </div>
        );
      }
    });
  });

  return (
    <div className="h-screen bg-gray-100 mt-24">
      <div className="ml-10 sm:ml-24 mt-12">{activeArrray}</div>
      {activeArrray && (
        <div className="ml-28 mt-12 text-3xl font-Prompt text-gray-700 flex">
          <p className="mr-2">Total:</p>${Total}
        </div>
      )}
      <div>
        {Total ? (
          <button
            className="bg-green-400 ml-28 p-2 text-white"
            onClick={() => {
              setCartItems([]);
              setOrderSent(true);
            }}
          >
            Order
          </button>
        ) : (
          <button className="bg-red-500 text-white ml-28 border p-2" disabled>
            Order
          </button>
        )}
      </div>
      {orderSent ? (
        <div className={`ml-28 ${cartItems.length === 0 ? "block" : "hidden"}`}>
          Order Sent!
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
