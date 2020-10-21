import React from 'react';
import {Link} from 'react-router-dom';
import styles from './index.module.css';
import getNavigation from '../../utils/getNavigation';

const navigationArray = getNavigation(false);

const Navigation = () => {

    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>

                {
                    navigationArray.map((obj , i) => {

                        const {title , href} = obj;

                        return (
                            <li key={i} className={styles.li}>
                                <Link to={href} className={styles.link}>
                                    {title}
                                </Link>
                            </li>
                        )
                    })
                }

            </ul>
        </nav>
    )

};

export default Navigation