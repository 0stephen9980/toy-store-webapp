import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { CartReducer } from "./Reducer";

const CartContext = createContext();
const Context = ({ children }) => {
  const toysData = [
    {
      name: "Super Man",
      ratting: 5,
      description: "Super Hero",
      price: 120,
      image: [],
    },
  ];
  console.log(toysData);
  const [state, dispatch] = useReducer(CartReducer, {
    Toys: toysData,
    Cart: [],
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(CartContext);
};
