import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";
import cartReducer, { initialState } from "../redux/cartSlice";
// export const fakerStroe = {
//   retail: {
//     products: [
//       {
//         id: 1,
//         name: "Batman Action Figure",
//         description: "",
//         price: 65000,
//       },
//     ],
//     cartItems: [],
//     favorites: [],
//     showProductDetails: [],
//   },
// };

// export const render = (ui: any, {
//     initialState = [],
//     store = configureStore({
//         reducer: { retail: cartReducer},
//         preloadedState: initialState
//     }),
//     ...renderOptions
// } = {})=>{
//     function Wrapper({children}: { children: any }){
//         return <Provider store={store}>{children}</Provider>
//     }
//     return rtlRender(ui, { wrapper: Wrapper, ...renderOptions})
// }
