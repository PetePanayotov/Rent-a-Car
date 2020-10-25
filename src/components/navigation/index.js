import React from 'react';
import {Link , useHistory} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import actions from '../../actions/auth';
import styles from './index.module.css';
import buttonsObj from '../button';
import changeQS from '../../actions/search';
import getNavigation from '../../utils/getNavigation';
import handlers from '../../utils/navigationHandlers';

const {handleMouseOver , handleMouseOut , handleClick} = handlers;
const {HeaderButton ,DropDownBtn} = buttonsObj;


const Navigation = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const authObj = useSelector(state => state.auth);
    const {isLoggedIn , user} = authObj;
    const {logout} = actions;
    
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

                    <li className={styles.li} onMouseOver={e => handleMouseOver(e)} onMouseOut={e => handleMouseOut(e)} onClick={(e) => handleClick(e , history ,dispatch , changeQS)}>
                        
                        <HeaderButton>
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

                {
                    isLoggedIn &&
                    
                    <li className={styles.li}>
                        <HeaderButton type='logout' onClick={e => logoutUser(e , history ,dispatch , logout)}>
                            Logout
                        </HeaderButton>
                    </li>
                }

            </ul>
        </nav>
    )

};

function logoutUser(event , history , dispatch , logout) {

    event.preventDefault();

    dispatch(logout());

    history.push('/')
};

export default Navigation