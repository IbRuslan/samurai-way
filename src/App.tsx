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
import {DialogsData, MessagesData, Posts} from "./index";

export type AppType = {
    posts:Posts[]
    dialogsData: DialogsData[]
    messagesData: MessagesData[]
}

const App: React.FC<AppType> = ({posts, dialogsData, messagesData}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path='/profile' render={()=> <Profile posts={posts}/>}/>
                    <Route path='/messages' render={ ()=> <Messages dialogsData={dialogsData} messagesData={messagesData}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
