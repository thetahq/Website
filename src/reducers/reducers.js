import { LOAD_USER_DATA } from "../constants/action-types";

const initState = {
    userData: {
        username: '',
        email: '',
        containers: []
    }
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_USER_DATA:
            return { ...state, userData: action.payload }
        default:
            return state
    }
}

export default rootReducer