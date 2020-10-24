import React, { useEffect, useState } from 'react';
import {Link , useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from './index.module.css';
import PageWrapper from '../../components/page-wrapper';
import buttonsObj from '../../components/button';

const {DeclineBtn} = buttonsObj;
const initialState = {
    cars: []
}

const ProfilePage = () => {

    const authObj = useSelector(globalState => globalState.auth);
    const {user} = authObj;
    const [state , setState] = useState(initialState);
    const history = useHistory()
    
    useEffect(() => {

        document.title = user.name;

        getRentedCars(state , setState , user._id);
        
    } , []);

    const {cars} = state;

    return (
        <PageWrapper>
            <h1>
                My Rented Cars
            </h1>

            <section className={styles.wrapper}>
                {
                    cars.length === 0 && 
                    <p>
                        No cars yet
                    </p>
                }
                {
                    cars.map((car , i) => {

                        const {startDate , endDate , finalPrice , carId , userId} = car
                        const link = `details/${carId}`;

                        return (
                            <div key={i} className={styles.unit}>
                                <p className={styles.info}>
                                    Start Date: {startDate}
                                </p>

                                <p className={styles.info}>
                                    End Date: {endDate}
                                </p>

                                <p className={styles.info}>
                                    Sum: {finalPrice} lv.
                                </p>
                                <Link className={styles.infoLink} to={link}>
                                    <i className="fas fa-info-circle"></i> Car Information
                                </Link>
                                <DeclineBtn onClick={e => declineRent(e , history , carId , userId)}>
                                    <i className="far fa-window-close"></i> Decline
                                </DeclineBtn>
                            </div>
                        )

                    })

                } 
            </section>
        </PageWrapper>
    );
};

async function declineRent(event , history, carId , userId) {

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

async function getRentedCars(state , setState , userId) {

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

export default ProfilePage;