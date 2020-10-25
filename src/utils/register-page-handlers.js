const registerUser = async (e , state , history) => {

    e.preventDefault();

    const data = {...state};
    
    const headerObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const url = 'http://localhost:9999/api/user/register';

    try {
        
        const promise = await fetch(url , headerObj);

        if (promise.status === 200) {
            history.push('/login')
        }else {
            throw new Error();
        }

    } catch (error) {
        console.error('Something went wrong')
    };
};

export default registerUser;