import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

export const checkIfAuthed = () => {
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

const AuthRoute = ({authorized, component: Component, ...options }) => (
    <Route {...options} render={(props) => (
        checkIfAuthed()
        ? <Component {...props} />
        : <Redirect to='/signin' />
    )} />
);

const mapStateToProps = state => ({
    authorized: state.isAuthorized
})
  
export default connect(mapStateToProps)(AuthRoute)