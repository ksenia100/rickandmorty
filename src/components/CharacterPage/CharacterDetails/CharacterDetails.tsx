import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { fetchCharactersDetails } from '../../../state/actions';
import { Character, Indicator } from '../../../types/type';

import styles from './CharacterDetails.module.css';

const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [fetchedData, updateFetchedData] = useState<Character>({} as Character);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharactersDetails(Number(id));
      updateFetchedData(data);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div className={styles.breadcrumbs}>
        <Link to='/character'>Characters</Link> {` /`} Character Details
      </div>
      <ul className={styles.list__container}>
        <li className={styles.list__item}>
          <img src={fetchedData.image} className={styles.person__photo} alt={fetchedData.name} />
          <p>{fetchedData.name}</p>
          <div className={styles.list__status_container}>
            <div className={`${styles.status_indicator} ${Indicator(fetchedData.status)}`} />
            <p className={styles.status_txt}>Status: {fetchedData.status}</p>
          </div>
          <p>Gender: {fetchedData.gender}</p>
          <p>Species: {fetchedData.species?.name}</p>
          <p>Location: {fetchedData.location?.name}</p>
          <p>Origin: {fetchedData.origin?.name}</p>
          <p>Created: {fetchedData.created}</p>
        </li>
      </ul>
    </div>
  );
};

export default CharacterDetails;