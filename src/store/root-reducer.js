import {combineReducers} from "redux";
import {userReducer} from "./user/user.reducer";
import {categoriesReducer} from "./categories/category.reducer";
import {cartReducer} from "./cart/cart.reducer";

export let rootReducer = combineReducers({
    users: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
});