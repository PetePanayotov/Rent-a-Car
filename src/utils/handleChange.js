const handleChange = (event , state , setState , property) => {

    event.preventDefault();
    const value = event.target.value;
    const newState = {[property]: value};

    return setState({...state , ...newState})

};

export default handleChange