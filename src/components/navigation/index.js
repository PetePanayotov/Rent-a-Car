import React from 'react';
import {Link , useHistory} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import styles from './index.module.css';
import buttonsObj from '../button';
import changeQS from '../../actions/search';
import getNavigation from '../../utils/getNavigation';
import handlers from '../../utils/navigationHandlers';

const {handleMouseOver , handleMouseOut} = handlers;
const {HeaderButton ,DropDownBtn} = buttonsObj;


const Navigation = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();
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

                {
                    isLoggedIn &&
                    
                    <li onMouseOver={e => handleMouseOver(e)} onMouseOut={e => handleMouseOut(e)} onClick={(e) => handleClick(e , history ,dispatch , changeQS)}>
                        
                        <HeaderButton className={styles.link}>
                            Car Fleet
                        </HeaderButton>
                        <div className={styles.dropDownContent}>
                            <DropDownBtn>
                                Economy
                            </DropDownBtn>

                            <DropDownBtn>
                                Estate
                            </DropDownBtn>

                            <DropDownBtn>
                                Luxury
                            </DropDownBtn>

                            <DropDownBtn>
                                SUV
                            </DropDownBtn>

                            <DropDownBtn>
                                Cargo
                            </DropDownBtn>
                        </div>
                    </li>

                }

            </ul>
        </nav>
    )

};

function handleClick(e , history ,dispatch , changeQS) {

    const category = e.target.textContent;

    const type = {
        'Car Fleet': 'all',
        'Economy': 'ec',
        'Estate': 'est',
        'Luxury': 'lux',
        'SUV': 'suv',
        'Cargo': 'crg'
    };

    history.push(`/fleet?cat=${type[category]}`);

    dispatch(changeQS(type[category]));

};

export default Navigation