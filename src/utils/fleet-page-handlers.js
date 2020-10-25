const getCars = async (state , setState , cat) => {

    const url = `http://localhost:9999/api/car/${cat}`;

    const promise = await fetch(url);
    
    if (promise.status === 200) {
        
        const response = await promise.json();

        return setState({...state , cars: response})

    };

    return console.error('Something went wrong');
    
};

export default getCars;