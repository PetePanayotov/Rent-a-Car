import React , {useEffect , useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './index.module.css';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import Label from '../../components/label';
import Input from '../../components/input';
import buttonsObj from '../../components/button';



const {SubmitButton} = buttonsObj;

const initialState = {
    type: 'Economy',
    brand: '',
    model: '',
    year: '',
    fuel: 'Petrol',
    seats: '',
    img: '',
    price: '',
    count: ''

}

const AddPage = () => {

    const history = useHistory()
    const [state , setState] = useState(initialState);
    const {type , brand, model , year , seats , img , price , count} = state

    useEffect(() => {
        document.title = 'Add Page';
    })

    return (
        <PageWrapper>
            <Form page="add">

                <Label>
                    Type
                    <select className={styles.select} onChange={e => handleChange(e , state , setState , 'type')}>
                        <option value="Economy">Economy</option>
                        <option value="Estate">Estate</option>
                        <option value="Luxury">Luxury</option>
                        <option value="SUV">SUV</option>
                        <option value="Cargo">Cargo</option>
                    </select>
                </Label>

                <Label>
                    Brand
                    <Input value={brand} onChange={e => handleChange(e , state , setState , 'brand')}/>
                </Label>

                <Label>
                    Model
                    <Input value={model} onChange={e => handleChange(e , state , setState , 'model')}/>
                </Label>

                <Label>
                    Construction Year
                    <Input value={year} onChange={e => handleChange(e , state , setState , 'year')}/>
                </Label>

                <Label>
                    Fuel Type
                    <select className={styles.select} onChange={e => handleChange(e , state , setState , 'fuel')}>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Electric">Electric</option>
                    </select>
                </Label>

                <Label>
                    Number of Seats
                    <Input value={seats} onChange={e => handleChange(e , state , setState , 'seats')}/>
                </Label>

                <Label>
                    Image URL
                    <Input value={img} onChange={e => handleChange(e , state , setState , 'img')}/>
                </Label>

                <Label>
                    Price per day
                    <Input value={price} onChange={e => handleChange(e , state , setState , 'price')}/>
                </Label>

                <Label>
                    Count
                    <Input value={count} onChange={e => handleChange(e , state , setState , 'count')}/>
                </Label>

                <SubmitButton onClick={e => submitForm(e , history ,state)}>
                    Add
                </SubmitButton>
            </Form>
        </PageWrapper>
    );

};

function handleChange(event , state , setState , property) {

    event.preventDefault();
    const value = event.target.value;
    const newState = {[property]: value};

    return setState({...state , ...newState})

}

async function submitForm(event , history , state) {
    
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
        history.push('/')
    };

    console.error('Something went wrong');
    
};

export default AddPage;