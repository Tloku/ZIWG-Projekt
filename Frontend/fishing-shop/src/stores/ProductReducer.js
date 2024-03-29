const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const REMOVE_ALL_PRODUCTS = "REMOVE_ALL_PRODUCTS";

export function addProduct(product) {
  return { type: ADD_PRODUCT, product };
}

export function removeProduct(product) {
  return { type: REMOVE_PRODUCT, product };
}

export function updateProduct(product) {
  return { type: UPDATE_PRODUCT, product };
}

export function removeAllProducts() {
  return { type: REMOVE_ALL_PRODUCTS };
}

const initialState = [];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      if (state.find((x) => x.id === action.product.id)) {
        return state;
      }
      return [...state, action.product];
    case REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.product);
    case UPDATE_PRODUCT: {
      let productIndex = state.findIndex(
        (product) => product.id === action.product.id
      );
      state[productIndex] = action.product;
      return [...state];
    }
    case REMOVE_ALL_PRODUCTS:
      return [];
    default:
      return state;
  }
}
