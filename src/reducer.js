export const iniState = {
    cart: [],
  };
  
  const red = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
      case "REMOVE_TO_CART":
        return { state };
      default:
        return state;
    }
  };
  
  export default red;