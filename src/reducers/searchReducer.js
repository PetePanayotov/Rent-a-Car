const initialState = {
    category: ''
};

const changeQS = (state , newString) => {

    const newState = {
        ...state,
        category: newString
    };

    return newState;
} 


const searchReducer = (state = initialState , action) => {

    switch (action.type) {
        case 'CHANGE_QS':
            return state = changeQS(state , action.payload);
            break;
    
        default:
            return state;
            break;
    }
}

export default searchReducer;