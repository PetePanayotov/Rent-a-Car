const login = (userInfo) => {

    return {
        type: 'SIGN_IN',
        payload: userInfo
    };

};

const logout = () => {

    return {
        type: 'SIGN_OUT'
    };

};

export default {
    login,
    logout
};