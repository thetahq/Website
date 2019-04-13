import { LOAD_USER_DATA, IS_AUTHORIZED } from "../constants/action-types";

const userDataState = {
    username: '',
    email: '',
    containers: []
};

export const isAuthorized = (state = false, action) => {
    switch (action.type) {
        case IS_AUTHORIZED:
            return action.authorized;
        default:
            return state;
    }
};

export const loadUserData = (state = userDataState, action) => {
    switch (action.type) {
        case LOAD_USER_DATA:
            return action.userData;
        default:
            return state;
    }
};