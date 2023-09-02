import React, {ReactElement} from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {connect} from "react-redux";
import {setLoginTC} from "../../redux/auth-reducer";
import {AppRootStateType, AppThunkDispatch} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

interface LoginFormValues {
    login: string;
    password: string;
    rememberMe: boolean;
}

interface LoginFormProps extends InjectedFormProps<LoginFormValues> {
}

const LoginForm = (props: LoginFormProps): ReactElement => {

    const {handleSubmit} = props;

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

const ReduxLoginForm = reduxForm<LoginFormValues, {}>({form: 'login'})(LoginForm);

type LoginTypeProps = {
    setLoginTC: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login: React.FC<LoginTypeProps> = ({setLoginTC, ...props}) => {
    const onSubmit = (formData: LoginFormValues) => {
        setLoginTC(formData.login, formData.password, formData.rememberMe)
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