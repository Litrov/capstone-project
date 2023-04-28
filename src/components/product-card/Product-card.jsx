import './Product-card.styles.scss'
import Button, {BUTTON_TYPE_CLASSES} from "../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";
import {addItemToCart} from "../../store/cart/cart.action";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCard = () => dispatch(addItemToCart(cartItems, product));

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard}>Add to card</Button>
        </div>
    )
}

export default ProductCard;