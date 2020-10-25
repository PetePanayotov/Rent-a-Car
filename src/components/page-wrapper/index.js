import React from 'react';
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
            <Main page={props.page}>
                {props.children}
            </Main>
            <Footer/>
        </div>
    );

};

export default PageWrapper;