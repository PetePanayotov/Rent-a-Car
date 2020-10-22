const initialState = {
    isLoggedIn: null,
    user: null
};

const login = (state , userInfo) => {

    const newState = {
        ...state,
        isLoggedIn: true,
        user: userInfo
    };

    return newState;

};


const logout = (state) => {

    document.cookie = "oreo= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

    const newState = {
        ...state,
        isLoggedIn: false,
        user: {}
    };

    return newState;
};

function authReducer(state = initialState , action) {

    switch (action.type) {
        case 'SIGN_IN':
            return state = login(state , action.payload);
            break;
    
        case 'SIGN_OUT':
            return  state = logout(state);
            break;

        default: 
            return state;
            break;
    };
};

export default authReducer;