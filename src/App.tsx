import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Messages} from "./components/Messages/Messages";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import state from "./state/state";

type AppType = {
    addPost: (post: string) => void
}

const App: React.FC<AppType>  = ({addPost}) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path='/profile' render={ ()=> <Profile posts={state.profilePage.posts} addPost={addPost}/> } />
                    <Route path='/messages' render={ ()=> <Messages messagesUsers={state.messagesPage.messagesUsers} messagesData={state.messagesPage.messagesData}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
