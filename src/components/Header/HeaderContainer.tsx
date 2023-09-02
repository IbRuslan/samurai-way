import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setAuthUserDataTC, setLogoutTC} from "../../redux/auth-reducer";

export interface HeaderContainerType {
    isAuth: boolean
    login: string
    setAuthUserDataTC: () => void
    setLogoutTC: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        this.props.setAuthUserDataTC()
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

// @ts-ignore
export const HeaderContainerApi: FC = connect(mapStateToProps, {setAuthUserDataTC, setLogoutTC})(HeaderContainer)
