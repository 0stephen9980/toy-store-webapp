export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action);
      return { ...state, Cart: [...state.Cart, { ...action.payload }] };
    default:
      return state;
  }
};
