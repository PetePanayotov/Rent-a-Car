const authenticateUser = async (event , history, dispatch, login , name , password) => {

    event.preventDefault()

    const url = 'http://localhost:9999/api/user/login';
    const data = {name , password};

    const headerObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const promise = await fetch(url , headerObj);
    
    if (promise.status === 200) {

        const token = promise.headers.get('Authorization');

        document.cookie = `oreo=${token}`;
    
        const response = await promise.json();
        dispatch(login(response));

        return history.push('/')
    };

    window.alert('Incorrect credentials');
    return console.error('Something went wrong');
};

export default authenticateUser;