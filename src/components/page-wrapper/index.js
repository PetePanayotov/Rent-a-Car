import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import styles from './index.module.css';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import Navigation from '../navigation';
import actions from '../../actions/auth';
import buttonsObj from '../../components/button';

const {HeaderButton} = buttonsObj;

const PageWrapper = (props) => {

    const history = useHistory();
    const authObj = useSelector(state => state.auth);
    const {isLoggedIn} = authObj;
    const {logout} = actions;
    const dispatch = useDispatch();

    return (

        <div>
            <Header>
                <Navigation/>
                {
                    isLoggedIn &&
                    <HeaderButton type='logout' onClick={e => logoutUser(e , history ,dispatch , logout)}>
                        Logout
                    </HeaderButton>
                }
            </Header>
            <Main>
                {props.children}
            </Main>
            <Footer/>
        </div>
    );

};

function logoutUser(event , history , dispatch , logout) {

    event.preventDefault();

    dispatch(logout());

    history.push('/')
};

export default PageWrapper;