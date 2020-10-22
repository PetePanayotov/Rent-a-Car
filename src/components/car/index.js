import React from 'react';
import {Link} from 'react-router-dom';
import styles from './index.module.css';


const Car = ({id , brand , model , year , img , price , seats}) => {


    return (
        <article className={styles.article}>
            <p className={styles.brand}>
                {brand} {model}
            </p>
            <div className={styles.imgWrapper}>
                <label className={styles.year}>
                    {year}
                </label>
                <img className={styles.img} src={img}/>
            </div>
            <p className={styles.price}>
                <i className="fas fa-dollar-sign"></i><i className="fas fa-dollar-sign"></i>: {price} lv.
            </p>
            <p className={styles.people}>
                <i className="fas fa-users"></i>: {seats}
            </p>
            <Link to={`details/${id}`} className={styles.infoLink}>
                Information
            </Link>
        </article>
    )

}

export default Car;