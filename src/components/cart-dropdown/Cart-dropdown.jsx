import Button from "../button/Button";
import './cart-dropdown.styles'
import CartItem from "../cart-item/Cart-item";
import {useNavigate} from "react-router-dom"
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
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