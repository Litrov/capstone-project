import SignUpForm from "../../components/sign-up-form/Sign-up-form";
import SignInForm from "../../components/sign-in-form/Sign-in-form";
import './Authentication.styles.scss'

const Authentication = () => {
    return (
        <div className='authentication-container'>
            <h1></h1>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication;