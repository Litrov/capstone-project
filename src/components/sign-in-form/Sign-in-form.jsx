import {useState} from "react";
import {signInWithGooglePopup} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import './Sign-in-form.styles.scss'
import Button, {BUTTON_TYPE_CLASSES} from "../button/Button";
import {useDispatch} from "react-redux";
import {emailSignInStart, googleSignInStart} from "../../store/user/user.action";

const defaultFormField = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormField);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormField)
    }

    const logGoogleUser = async () => {
        dispatch(googleSignInStart())
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Email' type='email' onChange={handleChange} name='email' value={email} required/>

                <FormInput label='Password' type='password' onChange={handleChange} name='password' value={password}
                           required/>

                <div className='buttons-container'>
                    <Button type='submit'>Sign in</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGooglePopup}>Google
                        sign in</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;
