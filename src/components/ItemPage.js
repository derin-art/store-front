import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Try } from "../Tetst/Context";
import axios from "axios";

export default function ItemPage() {
  const { items, setCartItems, cartItems, noForCart, SetNoForSet } =
    useContext(Try);
  const [noOfItems, setNoOfItems] = React.useState(0);
  const [requestedItem, setRequestedItem] = React.useState();
  const { id } = useParams();
  const [userComments, setUserComments] = React.useState("");
  const itemBuy = items.filter((item) => {
    if (item._id === id) {
      return item;
    }
  });
  console.log(cartItems);
  const remoteBackend = "https://store-crud.herokuapp.com/";
  const addCommentRequest = async () => {
    console.log("heyy");
    const formData = new FormData();

    formData.append("comments", [...itemBuy[0].comments, userComments]);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    const patchedItem = await axios
      .patch(`${remoteBackend}storeV1/${id}`, formData, config)
      .catch((err) => {
        console.log(err);
        return;
      });

    console.log(patchedItem);
  };

  const getItem = async () => {
    console.log("try");
    const singleItem = await axios
      .get(`${remoteBackend}storeV1/${id}`)
      .catch((err) => {
        console.log(err);
        return;
      });
    const { data } = singleItem;
    const finalItem = data.data;
    setRequestedItem(finalItem);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    getItem();
  }, []);

  const addCart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="12"
      height="12"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
  );
  const addComment = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="hover:fill-amber-400"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM13 11h3l-4-4-4 4h3v4h2v-4z" />
    </svg>
  );

  return (
    <div>
      {requestedItem ? (
        <div className="">
          <div className="bg-white text-white h-screen">
            <div className="text-white h-fit mt-24 mb-12">
              <div className="flex">
                <div className="h-fit mr-8 md:mr-4">
                  <img
                    src={`data:image/jpeg;base64,${requestedItem.img}`}
                    className="w-full h-4/6 rounded-b-lg -ml-4 lg:w-[500px]"
                    style={{ maxWidth: "500px" }}
                  ></img>
                </div>
                <div>
                  <h1 className="text-amber-400 text-3xl -ml-2 pr-2 font-Prompt sm:text-5xl">
                    {requestedItem.name}
                  </h1>
                  <h1 className="text-gray-700 text-2xl sm:text-4xl font-Prompt mt-4 -ml-2">
                    ${requestedItem.price}
                  </h1>
                  <div className="font-prompt text-gray-600 -ml-2 mt-2 sm:mt-6 flex flex-col sm:flex-row sm:items-center items-start">
                    <div>
                      {" "}
                      quantity:
                      <p className="ml-2 inline text-gray-600">{noOfItems}</p>
                    </div>
                    <button
                      className={`p-2 border text-xs mt-2 mb-2 flex items-center sm:ml-2 ${
                        id !== requestedItem._id ? "hidden" : ""
                      }`}
                      onClick={() => {
                        setNoOfItems((prev) => {
                          return prev + 1;
                        });
                        setCartItems((prev) => {
                          return [
                            ...prev,
                            { ...requestedItem, noOfItems: noOfItems + 1 },
                          ];
                        });
                      }}
                    >
                      add<p className="ml-2">{addCart}</p>
                    </button>
                    <button
                      className={`p-2 border text-xs ${
                        noOfItems === 0 && "hidden"
                      } hover:bg-red-600 hover:text-white sm:ml-2`}
                      onClick={() => {
                        setNoOfItems((prev) => prev - 1);
                        let finalArray = [];
                        setCartItems((prev) => {
                          const isAvailable = prev.some((item) => {
                            if (item._id === id) {
                              return true;
                            }
                          });

                          console.log(isAvailable);
                          let finalArray = [];
                          if (isAvailable) {
                            let firstItem = false;
                            prev.forEach((item) => {
                              if (item._id === id && !firstItem) {
                                console.log(prev.indexOf(item));
                                const index = prev.indexOf(item);
                                finalArray = prev.filter((product) => {
                                  if (prev.indexOf(product) !== index) {
                                    return product;
                                  }
                                });
                                firstItem = true;
                              }
                            });
                          }
                          return finalArray;
                          /*   prev.some(item => {
              if(item._id === id){
                  const removedPrev = prev.splice(prev.indexOf(item), prev.indexOf(item)+1)
                  console.log(removedPrev, "removed")
                  removedPrev.forEach(item => {
                     finalArray.push(item)
                  })
              } 
          })
          finalArray.splice(0,1)
          console.log([...finalArray, ...prev], "test")
          return [...finalArray, ...prev] */
                        });
                      }}
                    >
                      remove
                    </button>
                  </div>

                  <div
                    className="text-gray-700 border font-mono text-xs block mr-2 hidden md:block p-2"
                    style={{ maxWidth: "400px" }}
                  >
                    <p className="block text-lg">Description</p>
                    {requestedItem.description}
                  </div>

                  <div
                    className="text-gray-700 border font-mono text-xs mt-6 pb-12 mr-2 hidden md:block"
                    style={{ maxWidth: "400px" }}
                  >
                    <div
                      className="block text-lg flex flex-col"
                      style={{ maxWidth: "400px" }}
                    >
                      <p className="flex items-center p-2">
                        Comments{" "}
                        <button
                          className="ml-2"
                          onClick={() => {
                            addCommentRequest();
                          }}
                        >
                          {addComment}
                        </button>
                      </p>
                      {
                        <textarea
                          type="text"
                          className="border p-2 text-gray-600 focus:outline focus:outline-black outline-1"
                          style={{ maxWidth: "400px" }}
                          value={userComments}
                          onChange={(e) => {
                            setUserComments(e.target.value);
                          }}
                          placeholder={
                            !requestedItem.comments
                              ? "add a comment"
                              : "we need your opinion : ]"
                          }
                        ></textarea>
                      }
                    </div>

                    {requestedItem.comments}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-gray-700 border font-mono text-xs block p-2 md:hidden">
              <p className="block text-lg">Description</p>
              {requestedItem.description}
            </div>
            <div className="text-gray-700 border font-mono text-xs mt-6 pb-12 md:hidden">
              <div className="block text-lg flex flex-col">
                <p className="flex items-center pl-2">
                  Comments{" "}
                  <button
                    className="ml-2"
                    onClick={() => {
                      addCommentRequest();
                    }}
                  >
                    {addComment}
                  </button>
                </p>
                {
                  <textarea
                    type="text"
                    className="border p-2 text-gray-600 focus:outline focus:outline-black outline-1"
                    value={userComments}
                    onChange={(e) => {
                      setUserComments(e.target.value);
                    }}
                    placeholder={
                      !requestedItem.comments
                        ? "add a comment"
                        : "we need your opinion : ]"
                    }
                  ></textarea>
                }
              </div>

              {requestedItem.comments}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen bg-gray-100 w-screen animate-pulse duration-75"></div>
      )}
    </div>
  );
}
