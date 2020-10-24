import React , {useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';

const HomePage = () => {

    useEffect(() => {
        document.title = 'Home Page';
    })

    return (
        <PageWrapper page="home">
           <h1>
               You need a car?
           </h1>
        </PageWrapper>
    );

};

export default HomePage