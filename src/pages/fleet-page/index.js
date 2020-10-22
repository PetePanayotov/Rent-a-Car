import React , {useEffect, useState} from 'react';
import styles from './index.module.css';
import PageWrapper from '../../components/page-wrapper';
import Car from '../../components/car';


const initalState = {
    cars: []
}

const FleetPage = () => {

    const [state , setState] = useState(initalState)


    useEffect(() => {

        document.title = 'Fleet Page';

        getCars(state , setState)

    }, []);

    const {cars} = state;
    console.log(cars[0])

    return (

        <PageWrapper>
            <h1 className={styles.title}>
                The Cars We Offer
            </h1>
            <section className={styles.carsWrapper}>    

                {
                    cars.map((carObj , ) => {

                        const {_id , brand , model , year , img , price , seats} = carObj;

                        return <Car 
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

async function getCars(state , setState) {

    const url = 'http://localhost:9999/api/car/';

    const promise = await fetch(url);
    
    if (promise.status === 200) {
        
        const response = await promise.json();

        setState({...state , cars: response})

    };

    return console.error('Something went wrong')
    
};

export default FleetPage;