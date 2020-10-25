import React, { useEffect, useState } from 'react';
import {Link , useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from './index.module.css';
import PageWrapper from '../../components/page-wrapper';
import buttonsObj from '../../components/button';
import handlers from '../../utils/profile-page-handlers';

const {getRentedCars , declineRent} = handlers;

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

export default ProfilePage;