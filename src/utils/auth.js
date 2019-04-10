import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const isAuthorized = () => {
    const init = {
        method: 'POST'
    };
    
    fetch('http://localhost:8000/verifysession', init).then((resp) => {
        if (!resp.ok) {
            return false;
        } else {
            resp.json().then((data) => {
               switch (data.status) {
                   case 'error': return false;
                   case 'ok': return true;
                   default: return false;
               } 
            });
        }
    }).catch((err) => {
        console.error(err);
    });

    return false;
};

export const AuthRoute = ({ component: Component, ...options }) => (
    <Route {...options} render={(props) => (
        isAuthorized
        ? <Component {...props} />
        : <Redirect to='/signin' />
    )} />
);