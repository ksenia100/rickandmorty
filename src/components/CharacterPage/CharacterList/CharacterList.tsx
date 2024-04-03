import React from 'react';
import { Link } from 'react-router-dom';

import { Character, Indicator } from '../../../types/type';

import styles from './CharacterList.module.css';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <ul className={styles.list__container} data-testid="list__container">
      {characters.map(({ id, name, img, status }) => (
        <li className={styles.list__item} key={id}>
          <Link to={`/character/${id}`}>
            <img className={styles.person__photo} src={img} alt={name} />
            <p>{name}</p>
            <div className={styles.list__status_container}>
              <div className={`${styles.status_indicator} ${Indicator(status)}`} />
              <p className={styles.status_txt}>Status: {status}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;