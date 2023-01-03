import Button from "../button/Button";
import './cart-dropdown.styles'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CartItem from "../cart-item/Cart-item";
import {useNavigate} from "react-router-dom"
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return <CartDropdownContainer>
        <CartItems>
            {
                cartItems.length
                    ? (cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem}/>
                    )))
                    : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )}
        </CartItems>
        <Button onClick={goToCheckoutHandler}>checkout</Button>
    </CartDropdownContainer>
}

export default CartDropdown;