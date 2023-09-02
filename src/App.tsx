import './App.css';
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {MessageContainer} from "./components/Messages/MessagesContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainerConnect} from "./components/Profile/ProfileContainer";
import {HeaderContainerApi} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {useEffect} from "react";
import {initializeTC} from "./redux/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/redux-store";
import MainPreloader from "./components/SuperComponents/MainPreloader/MainPreloader";


const App = () => {

    const initialized = useSelector<AppRootStateType>(state => state.app.initialized)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeTC());
    }, []);

    return (
        <BrowserRouter>
                {initialized ?
                    <div className="App">
                        <HeaderContainerApi/>
                        <Navbar/>
                        <div className="content">
                            <Route path='/login' component={Login}/>
                            <Route path='/profile/:userId?' component={ProfileContainerConnect}/>
                            <Route path='/messages' render={() => <MessageContainer/>}/>
                            <Route path='/users' component={UsersContainer}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                        </div>
                    </div>
                    : <MainPreloader/>
                }

        </BrowserRouter>
    );
}

export default App;
