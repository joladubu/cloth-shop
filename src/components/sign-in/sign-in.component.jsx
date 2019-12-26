import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.component.styles.scss';
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit  = (event) => {
    // preventing the default event action from firing
        event.preventDefault();

        // resetting the email and password to an empty string
        this.setState({ email: '', password: ''})

    }

    handleChange = event => {
        const{ name, value } = event.target;
        this.setState({ [name]: value})

    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="email"
                        handleChange={this.handleChange}
                        required
                    />
                    {/* <label>Email</label> */}

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        label="password"
                        handleChange={this.handleChange}
                        required
                    />
                    {/* <label>password</label> */}

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;