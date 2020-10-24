import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import Label from '../../components/label';
import Input from '../../components/input';
import paragraphsObj from '../../components/paragraph';
import buttonsObj from '../../components/button';
import styles from './index.module.css';
import { useHistory } from 'react-router-dom';

const {DescrParagraph , FormParagraph} = paragraphsObj;
const {SubmitButton} = buttonsObj;

const initialState = {
    car: {},
    startDate: '',
    endDate: '',
    totalPrice: '',
    days: '',
    discount: '',
    finalPrice: ''

};


const DetailsPage = () => {

    const [state , setState] = useState(initialState);
    const history = useHistory();
    const authObj = useSelector(globalState => globalState.auth);
    const {user} = authObj;

    useEffect(() => {
 
        const [ , , carId] = document.location.pathname.split('/');
        getCar(state , setState , carId);
    
    } , []);

    const {car , startDate , endDate , totalPrice , days , discount , finalPrice} = state;

    return (
        <PageWrapper>
            <section className={styles.wrapper}>
                <article className={styles.content}>
                    <div className={styles.imgWrapper}>
                        <img src={car.img} className={styles.img}/>
                    </div>
                        <DescrParagraph>
                            Type: {car.type}
                        </DescrParagraph>
                            
                        <DescrParagraph>
                            Brand: {car.brand}
                        </DescrParagraph>

                        <DescrParagraph>
                            Model: {car.model}
                        </DescrParagraph>

                        <DescrParagraph>
                            Fuel Type: {car.fuel}
                        </DescrParagraph>

                        <DescrParagraph>
                            Construction Year: {car.year}
                        </DescrParagraph>
                        
                        <DescrParagraph>
                            Number of seats: {car.seats - 1} + 1
                        </DescrParagraph>

                        <DescrParagraph>
                            Price per day: {car.price} lv.
                        </DescrParagraph>

                        <DescrParagraph>
                            Count: {car.count}
                        </DescrParagraph>
                        
                 </article>
                <article className={styles.reservation}>

                    <Form page="reserve">
                        <Label page="reserve">
                            Start Date:
                            <Input value={startDate} onChange={e => handleChange(e , state , setState , 'startDate')} placeholder="dd/mm/yyyy"/>
                        </Label>
                        <Label page="reserve">
                            End Date:
                            <Input value={endDate} onChange={e => handleChange(e , state , setState , 'endDate')} placeholder="dd/mm/yyyy"/>
                        </Label>
                        <SubmitButton onClick={e => calculatePrice(e , state , setState ,startDate , endDate , car.price)}>
                            Calculate Price
                        </SubmitButton>

                        <div className={styles.priceWrapper}>
                            
                            <FormParagraph>
                                Days: {days}
                            </FormParagraph>
                            
                            <FormParagraph>
                                Total Price: {totalPrice} lv.
                            </FormParagraph>

                            <FormParagraph>
                                Discount: {discount}%
                            </FormParagraph>

                            <FormParagraph>
                                Final Price: {finalPrice} lv.
                            </FormParagraph>

                            <SubmitButton onClick={e => rentCar(e , history , car._id , user._id , finalPrice ,startDate , endDate)}>
                                Rent
                            </SubmitButton>
                        </div>
                    </Form>

                </article>
            </section>
        </PageWrapper>
    )

};

async function getCar(state , setState , carId) {

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

function handleChange(event , state , setState , property) {

    let value = event.target.value;
    
    const newState = {[property] : value};

    setState ({
        ...state,
        ...newState
    });
}

function calculatePrice(event , state , setState , startDate , endDate , carPrice) {

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
        })
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
    }

    setState({
        ...state,
        ...newState
    });

    const button = event.target;
    const parent = button.parentNode;
    const priceWrapper = parent.querySelector('div');

    return priceWrapper.style.display = 'flex';

};

async function rentCar(event , history , carId , userId , finalPrice , startDate , endDate) {

    event.preventDefault();

    const url = 'http://localhost:9999/api/car/rent';
    const data = {
        carId,
        userId,
        finalPrice,
        startDate,
        endDate,

    }

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


export default DetailsPage;