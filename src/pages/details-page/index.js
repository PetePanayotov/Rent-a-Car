import React, { useEffect, useState } from 'react';
import {useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import Label from '../../components/label';
import Input from '../../components/input';
import paragraphsObj from '../../components/paragraph';
import buttonsObj from '../../components/button';
import styles from './index.module.css';
import handlers from '../../utils/details-page-handlers';
import handleChange from '../../utils/handleChange';


const {DescrParagraph , FormParagraph} = paragraphsObj;
const {SubmitButton} = buttonsObj;
const {getCar , calculatePrice , rentCar} = handlers;

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


export default DetailsPage;