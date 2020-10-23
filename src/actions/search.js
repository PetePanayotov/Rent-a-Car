const changeQS = (queryString) => {

    return {
        type: 'CHANGE_QS',
        payload: queryString
    }
}

export default changeQS;