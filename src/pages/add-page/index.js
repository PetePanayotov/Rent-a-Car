import React , {useEffect , useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './index.module.css';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import Label from '../../components/label';
import Input from '../../components/input';
import buttonsObj from '../../components/button';
import submitForm from '../../utils/add-page-handlers';
import handleChange from '../../utils/handleChange';

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

};


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

export default AddPage;