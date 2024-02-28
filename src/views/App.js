import React from 'react';
import './App.css';
import logo from './logo.svg';
import MyComponents from './Example/MyComponents';
import TodoList from './Todo/TodoList';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import ListUsers from './User/ListUsers';
import DetailUser from './User/DetailUser';
import NotFound from './NotFound/NotFound';

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/todo">
                            <TodoList />
                        </Route>
                        <Route path="/about">
                            <MyComponents />
                        </Route>
                        <Route exact path="/user">
                            <ListUsers />
                        </Route>
                        <Route path="/user/:id">
                            <DetailUser />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
