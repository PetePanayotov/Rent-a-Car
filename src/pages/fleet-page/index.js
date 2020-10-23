import React , {useEffect, useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import styles from './index.module.css';
import PageWrapper from '../../components/page-wrapper';
import Car from '../../components/car';


const initalState = {
    cars: []
}

const FleetPage = () => {

    const [state , setState] = useState(initalState);

    const searchObj = useSelector(state => state.search);
    const {queryString} = searchObj;

    useEffect(() => {
        console.log('triggered')
        document.title = 'Fleet Page';

        getCars(state , setState , queryString)

    }, [queryString]);

    const {cars} = state;

    return (

        <PageWrapper>
            <h1 className={styles.title}>
                The Cars We Offer
            </h1>
            <section className={styles.carsWrapper}>    

                {
                    cars.map((carObj , i) => {

                        const {_id , brand , model , year , img , price , seats} = carObj;

                        return <Car 
                                    key={i}
                                    id={_id}
                                    brand={brand}
                                    model={model}
                                    year={year}
                                    img={img}
                                    price={price}
                                    seats={seats}
                                />

                    })
                }

            </section>
        </PageWrapper>
    );


};

async function getCars(state , setState , category) {

    const url = `http://localhost:9999/api/car/${category}`;

    const promise = await fetch(url);
    
    if (promise.status === 200) {
        
        const response = await promise.json();

        return setState({...state , cars: response})

    };

    return console.error('Something went wrong')
    
};

export default FleetPage;