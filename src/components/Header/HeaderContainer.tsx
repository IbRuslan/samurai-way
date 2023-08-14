import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {setAuthUserDataTC} from "../../redux/auth-reducer";

export interface HeaderContainerType {
    isAuth: boolean
    login: string
    setAuthUserDataTC: () => any
}

class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        this.props.setAuthUserDataTC()
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

// @ts-ignore
export const HeaderContainerApi: FC = connect(mapStateToProps, {setAuthUserDataTC})(HeaderContainer)
