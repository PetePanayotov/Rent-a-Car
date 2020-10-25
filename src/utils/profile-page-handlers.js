const declineRent = async (event , history, carId , userId) => {

    event.preventDefault();

    const url = 'http://localhost:9999/api/user/decline';
    const data = {carId , userId};

    const headerObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const promise = await fetch(url , headerObj);

    if (promise.status !== 200) {
        return console.error('Something went wrong');
    };

    return history.push('/');

};

const getRentedCars = async (state , setState , userId) => {

    const url = `http://localhost:9999/api/user/rentedCars/${userId}`;

    const promise = await fetch(url);
    
    if (promise.status !== 200) {
        return console.error('Something went wrong');
    };

    const response = await promise.json();
    
    const {rentCars} = response;
    const newState = {cars: rentCars};
    
    return setState({
        ...state,
        ...newState
    });

};

export default {getRentedCars , declineRent}