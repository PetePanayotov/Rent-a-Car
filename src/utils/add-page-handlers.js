const submitForm = async (event , history , state) => {
    
    event.preventDefault();

    const url = 'http://localhost:9999/api/car/add';
    const data = {...state};
    
    const headerObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const promise = await fetch(url , headerObj);

    if (promise.status === 200) {
        return history.push('/')
    };

    return console.error('Something went wrong');
    
};

export default submitForm;