import { createContext, useContext, useReducer } from "react";
import FakeData from "../localData/GenerateFakerData";
import { CartReducer } from "./Reducer";

const CartContext = createContext();
const Context = ({ children }) => {
  //Api call needs to be handled here
  const toysData = [
    {
      name: "Super Man",
      ratting: 5,
      description: "Super Hero",
      price: 120,
      image: [],
    },
  ];
  const [state, dispatch] = useReducer(CartReducer, {
    Toys: toysData,
    fakeData: FakeData,
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
