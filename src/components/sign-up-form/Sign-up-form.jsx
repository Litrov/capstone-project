import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import './Sign-up-form.styles.scss'
import Button from "../button/Button";

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormField)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('password do not match')
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch (error) {
            console.log('user creation encountered an error', error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Dont have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display name' type='text' onChange={handleChange} name='displayName' value={displayName} required/>

                <FormInput label='Email' type='email' onChange={handleChange} name='email' value={email} required/>

                <FormInput label='Password' type='password' onChange={handleChange} name='password' value={password} required/>

                <FormInput label='Confirm password' type='password' onChange={handleChange} name='confirmPassword' value={confirmPassword} required/>

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;
