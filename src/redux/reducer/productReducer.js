/* eslint-disable no-fallthrough */
const initialState = {
    cart: [],
}
const productReducer = (state = initialState, action) => {

    const restProduct = state.cart.filter((product) => product._id !== action.payload._id)
    const existProduct = state.cart.find((product) => product._id === action.payload._id)
    console.log(existProduct)
    switch (action.type) {
        case "ADD_TO_CART": {
            if (existProduct) {
                existProduct.quantity = existProduct.quantity + 1
                return {
                    ...state,
                    cart: [...restProduct, existProduct]
                }
            } else {
                return {
                    ...state,
                    cart: [...restProduct, { ...action.payload, quantity: 1 }]
                }
            }

        }
        case "REMOVE_TO_CART": {
            if (existProduct.quantity > 1) {
                existProduct.quantity = existProduct.quantity - 1
                return {
                    ...state,
                    cart: [...restProduct, existProduct]
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart.filter((product) => product._id !== action.payload._id)]
                }
            }

        }
        default: {
            return state
        }
    }
}
export default productReducer;