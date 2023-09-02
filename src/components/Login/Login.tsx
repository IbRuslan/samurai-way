import React, {ReactElement} from 'react';
import s from './Login.module.css'
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {connect} from "react-redux";
import {setLoginTC} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {Input} from "antd";

interface LoginFormValues {
    email: string;
    password: string;
    rememberMe: boolean;
    error: string
}

interface LoginFormProps extends InjectedFormProps<LoginFormValues> {
}

const LoginForm = (props: LoginFormProps): ReactElement => {

    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'email'} component={'input'} name={'email'}/>
            </div>
            <div>
                <Field placeholder={'password'} component={'input'} type={'password'} name={'password'}/>
            </div>
            {
                props.error
                    ? <div className={s.error}>
                        {props.error}
                    </div>
                    : ''
            }
            <div>
                <span>Remember me</span><Field type={'checkbox'} component={Input} name={'rememberMe'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<LoginFormValues, {}>({form: 'login'})(LoginForm);

type LoginTypeProps = {
    setLoginTC: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login: React.FC<LoginTypeProps> = ({setLoginTC, ...props}) => {
    const onSubmit = (formData: LoginFormValues) => {
        setLoginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: AppRootStateType) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {setLoginTC})(Login)