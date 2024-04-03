import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.list__container}>
                <ul>
                    <li><NavLink to="/"> Home </NavLink> </li>
                    <li> <NavLink to="/character"> Character </NavLink> </li>
                    <li><NavLink to="/episode">Episode</NavLink> </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;