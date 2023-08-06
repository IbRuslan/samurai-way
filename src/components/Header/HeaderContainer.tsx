import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {authMe} from "../../api/api";

export interface HeaderContainerType {
    isAuth: boolean
    login: string
    setAuthUserDataAC: (userId: number, email: string, login: string)=> void
}

class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        authMe()
            .then(data => {
                const {id, email, login} = data.data
                data.resultCode === 0 ? this.props.setAuthUserDataAC(id, email, login) : undefined
            })
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
export const HeaderContainerApi: FC = connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)
