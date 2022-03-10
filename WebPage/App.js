import './App.css';
import React from "react";
import NavBar from "./Nav";
import { Route } from "react-router-dom";
import Notice from "./Notice";
import Research from "./Research";
import Admin from "./Admin";
import Home from "./Home";

const App=()=>{
    return(
        <>
            <NavBar />
            <div className="content">
                <switch>
                    <Route path="/notice" component={Notice} />
                    <Route path="/research" component={Research} />
                    <Route path="/admin" component={Admin} />
                    <Route exact path="/" component={Home} />
                </switch>

            </div>
        </>
    )
}

export default App;
