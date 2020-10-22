import React, { useContext } from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import RegisterPage from './pages/register-page';
import LoginPage from './pages/login-page';
import AddPage from './pages/add-page';
import FleetPage from './pages/fleet-page';


const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/add" component={AddPage}/>
                <Route path="/fleet" component={FleetPage}/>
            </Switch>
        </BrowserRouter>
    );

};

export default Navigation;