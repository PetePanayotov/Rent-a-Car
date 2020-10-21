import React from 'react';
import styles from './index.module.css';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import Navigation from '../navigation';

const PageWrapper = (props) => {

    return (

        <div>
            <Header>
                <Navigation/>
            </Header>
            <Main>
                {props.children}
            </Main>
            <Footer/>
        </div>
    );

};

export default PageWrapper;