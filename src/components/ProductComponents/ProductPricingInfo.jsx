import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { CartState } from "../../hooks/Context";
import Rating from "../Rating";
function ProductPricingInfo({ data }) {
  const {
    state: { Cart },
    dispatch,
  } = CartState();
  console.log(Cart.length);
  const { name, description, ratings, price, inStock } = data;
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    Cart.forEach((element) => {
      if (element[data.id]) setIsInCart(true);
    });
  }, [Cart]);

  const Decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const Increment = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="border-[1px] border-gray-200 p-4 rounded-md flex flex-col gap-y-6 font-mono justify-center items-center w-full h-[100%] mt-5 lg:mt-0 lg:p-10 shadow-lg">
      <div>
        <span className="text-2xl lg:text-4xl font-bold">{name}</span>
      </div>
      <div>
        <span className="text-gray-500">{description}</span>
      </div>
      <div className="flex">
        <Rating className="flex flex-row" value={ratings} IsEditMode={false} />
        <span className="ml-2 text-xs text-green-400">
          <a href="#reviews">reviews</a>
        </span>
      </div>
      <div>
        <span className="text-2xl font-bold">${price}</span>
      </div>
      <div>
        <span className="text-xl font-semibold">Select Quantity</span>
        <div className="mt-4 border-2 border-green-400 py-2 flex justify-evenly text-xl rounded-md">
          <span
            className="w-1/4 flex justify-center cursor-pointer"
            onClick={() => Decrement()}
          >
            -
          </span>
          <span className="w-1/2 flex justify-center">{quantity}</span>
          <span
            className="w-1/4 flex justify-center cursor-pointer"
            onClick={() => Increment()}
          >
            +
          </span>
        </div>
      </div>
      <div className="w-full">
        <Button
          variant="outline"
          className="active:bg-green-400 border-2 border-green-400 active:text-white w-full text-green-400"
          disabled={inStock == 0 || isInCart}
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: { [data.id]: data, qnty: quantity },
            })
          }
        >
          Add To Cart
        </Button>
      </div>
      <div className="w-full">
        <Button variant="solid" className="bg-green-400 w-full text-white">
          Buy
        </Button>
      </div>
    </div>
  );
}

export default React.memo(ProductPricingInfo);
