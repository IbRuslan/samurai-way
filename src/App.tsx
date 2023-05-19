import React from 'react';
import './App.css';
import {Header} from "antd/es/layout/layout";
import {Technologies} from "./components/Technologies";

function App() {
  return (
    <div className="App">
     Hello, samurai! Let's go!
        <Header />
        <Technologies />
    </div>
  );
}

export default App;
