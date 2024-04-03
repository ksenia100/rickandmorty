import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './EpisodeNav.module.css'

interface EpisodeNavProps {
  currentPage: number;
  onPageChange: (page: number) => void; 
  isActive?: boolean;
}

const EpisodeNav: React.FC<EpisodeNavProps> = ({ onPageChange }) => { 
  return (
    <div className={styles.episode_nav}>
      <NavLink to="/episode" className={`${styles.episode_nav_link}`} onClick={() => onPageChange(1)}>1</NavLink>
      <NavLink to="/episode" className={`${styles.episode_nav_link}`} onClick={() => onPageChange(2)}>2</NavLink>
      <NavLink to="/episode" className={`${styles.episode_nav_link}`} onClick={() => onPageChange(3)}>3</NavLink>
    </div>
  );
};

export default EpisodeNav;
