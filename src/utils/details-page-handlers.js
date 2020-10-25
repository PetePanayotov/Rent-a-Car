const getCar = async (state , setState , carId) => {

    const url = `http://localhost:9999/api/car/details/${carId}`;

    const promise = await fetch(url);

    if(promise.status === 200) {

        const response = await promise.json();
        const newState = {car: response};
        
        document.title = `${response.brand} ${response.model}`;
        
        return setState({
            ...state,
            ...newState
        });

    }else  {
        return console.error('Something went wrong')
    };

};

// const handleChange = (event , state , setState , property) => {

//     let value = event.target.value;
    
//     const newState = {[property] : value};

//     setState ({
//         ...state,
//         ...newState
//     });
// }

const calculatePrice = (event , state , setState , startDate , endDate , carPrice) => {

    event.preventDefault();

    const regex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

    const startDateIsValid = regex.test(startDate);
    const endDateIsValid = regex.test(endDate);

    let newState = {};

    if (!startDateIsValid) {
        newState = {
            startDate: 'Invalid date'
        };

        return setState({
            ...state,
            ...newState
        });
    };

    if (!endDateIsValid) {
        
        newState = {
            endDate: 'Invalid date'
        };

        return setState({
            ...state,
            ...newState
        })
    };

    const [sDay , sMonth , sYear] = startDate.split('/');
    const newFormatSDate = `${sMonth}/${sDay}/${sYear}`;
    const sDate = new Date(newFormatSDate);

    const [eDay , eMonth , eYear] = endDate.split('/');
    const newFormatEDate = `${eMonth}/${eDay}/${eYear}`;    
    const eDate =  new Date(newFormatEDate);

    const diff = eDate - sDate;

    if (diff < 0) {
        
        newState = {
            startDate: 'Invalid date',
            endDate: 'Invalid date'
        };

        return setState({
            ...state,
            ...newState
        });
    };

    const days = Math.floor((((diff / 1000) / 60) / 60) / 24); 
    const totalPrice = days * carPrice;
    let discount;

    if (days > 10) {

        discount = 10;

    }
    else if(days > 5)
    {
        discount = 7;

    }else {
        
        discount = 3;

    };

    const finalPrice = (totalPrice * (1 - discount / 100)).toFixed(2);

    newState = {
        totalPrice,
        days,
        discount,
        finalPrice
    };

    setState({
        ...state,
        ...newState
    });

    const button = event.target;
    const parent = button.parentNode;
    const priceWrapper = parent.querySelector('div');

    return priceWrapper.style.display = 'flex';

};

const rentCar = async (event , history , carId , userId , finalPrice , startDate , endDate) => {

    event.preventDefault();

    const url = 'http://localhost:9999/api/car/rent';
    const data = {
        carId,
        userId,
        finalPrice,
        startDate,
        endDate,

    };

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

export default {getCar , calculatePrice , rentCar}