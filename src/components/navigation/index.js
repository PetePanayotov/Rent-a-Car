import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from './index.module.css';
import getNavigation from '../../utils/getNavigation';


const Navigation = () => {

    const authObj = useSelector(state => state.auth);
    const {isLoggedIn , user} = authObj;

    const navigationArray = getNavigation(isLoggedIn , user.isAdmin);

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