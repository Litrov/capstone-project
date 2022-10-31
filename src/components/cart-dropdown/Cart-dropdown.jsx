import Button from "../button/Button";
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return <div className='cart-dropdown-container'>
        <div className='cart-items'/>
        <Button>checkout</Button>
    </div>
}

export default CartDropdown;