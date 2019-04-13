import { LOAD_USER_DATA, IS_AUTHORIZED } from '../constants/action-types';
import { USER_DATA_URL } from '../constants/config';

export const loadUserData = data => ({
    type: LOAD_USER_DATA,
    userData: data
});

export const isAuthorized = data => ({
    type: IS_AUTHORIZED,
    authorized: data
});

export const fetchUserData = () => {
    return (dispatch) => {
        const init = {
          method: 'POST',
        };
        fetch(USER_DATA_URL, init)
        .then((resp) => {
          if (!resp.ok) {
            console.error("AUTH: " + resp.statusText);
            dispatch(isAuthorized(false));
          }
          
          return resp;
        })
        .then(resp => resp.json())
        .then(data => {
          dispatch(isAuthorized(true));
          dispatch(loadUserData(data));
        })
        .catch((err) => {
            dispatch(isAuthorized(false));
            console.error(err);
        });
    }
};