import {Link, Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './Navigation.styles.scss'
import {UserContext} from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/Cart-icon";
import CartDropdown from "../../components/cart-dropdown/Cart-dropdown";
import {CartContext} from "../../contexts/cart.context";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div>
                        <CrwnLogo/>
                    </div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                        : (<Link className='sign-in' to='/auth'>
                            SIGN IN
                        </Link>)}
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;