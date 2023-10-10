export const CART_ACTIONS = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  CLEAR: 'CLEAR',
};

export const cartInitialState = [];

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.ADD_PRODUCT: {
      const { id } = payload;
      let newCart = [];
      const productIndex = state.findIndex((product) => product.id === id);
      if (productIndex >= 0) {
        newCart = structuredClone(state);
        newCart[productIndex].quantity += 1;
      } else {
        newCart = [{ ...payload, quantity: 1 }, ...state];
      }
      return newCart;
    }
    case CART_ACTIONS.REMOVE_PRODUCT: {
      const { id } = payload;
      return state.filter((item) => item.id !== id);
    }
    case CART_ACTIONS.CLEAR: {
      return cartInitialState;
    }
  }
};
