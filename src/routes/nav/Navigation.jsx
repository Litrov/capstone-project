import {Link, Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './Navigation.styles'
import {UserContext} from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/Cart-icon";
import CartDropdown from "../../components/cart-dropdown/Cart-dropdown";
import {CartContext} from "../../contexts/cart.context";
import {LogoContainer, NavigationContainer, NavLink, NavLinks} from "./Navigation.styles";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <div>
                        <CrwnLogo/>
                    </div>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>
                                SIGN OUT
                            </NavLink>)
                        : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>)}
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;