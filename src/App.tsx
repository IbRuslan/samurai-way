import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {MessageContainer} from "./components/Messages/MessagesContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainerConnect} from "./components/Profile/ProfileContainer";
import {FC} from "react";

type AppType = {
}

const App: FC<AppType>  = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path='/profile' component={ProfileContainerConnect}/>
                    <Route path='/messages' render={ ()=> <MessageContainer/>}/>
                    <Route path='/users' component={UsersContainer}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
