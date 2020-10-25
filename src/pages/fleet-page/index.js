import React , {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import styles from './index.module.css';
import PageWrapper from '../../components/page-wrapper';
import Car from '../../components/car';
import getCars from '../../utils/fleet-page-handlers';


const initalState = {
    cars: []
}

const FleetPage = () => {

    const [state , setState] = useState(initalState);
    const searchObj = useSelector(state => state.search);
    const {category} = searchObj;
    const [ , queryString] = document.location.search.split('=')

    useEffect(() => {

        const titles = {
            all: 'All Cars',
            ec: 'Economy',
            est: 'Estate',
            lux: 'Luxury',
            suv: 'SUV',
            crg: 'Cargo'
        };


        document.title = titles[category] || titles[queryString];

        const param = category || queryString;

        getCars(state , setState , param)

    }, [category]);

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

export default FleetPage;