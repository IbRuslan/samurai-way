import React, {ReactElement} from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";

interface LoginFormValues {
    login: string;
    password: string;
    rememberMe: boolean;
}

interface LoginFormProps extends InjectedFormProps<LoginFormValues> {}

const LoginForm = (props: LoginFormProps): ReactElement => {

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'password'} component={'input'} name={'password'}/>
            </div>
            <div>
                <span>Remember me</span><Field type={'checkbox'} component={'input'} name={'rememberMe'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<LoginFormValues, {}>({ form: 'login' })(LoginForm);

export const Login = () => {

    const onSubmit = (formData: LoginFormValues) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    );
};