import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getCharacterImg, getCharacterId } from '../../../services/getCharacterData';
import { charactersReducer } from '../../../state/reducers';
import { charactersLoaded, fetchCharactersDetails, fetchEpisodesDetails } from '../../../state/actions';
import { Episode, Character, Indicator } from '../../../types/type';

import styles from './EpisodeDetails.module.css';

const EpisodeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [fetchedData, updateFetchedData] = useState<Episode>({} as Episode);
  const [state, dispatch] = useReducer(charactersReducer, {
    characters: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (id) {
      const fetchEpisodeData = async () => {
        const episodeData: Episode = await fetchEpisodesDetails(Number(id));

        if (!episodeData || !episodeData.characters) {
          throw new Error('Episode data is invalid');
        }

        const characterIds = episodeData.characters.map((characterUrl) => getCharacterId(characterUrl));

        updateFetchedData(episodeData);


        const characterPromises = characterIds.map(async (characterId) => {
          const characterData: Character = await fetchCharactersDetails(characterId);
          return { ...characterData, image: getCharacterImg(characterId) };
        });

        const charactersData = await Promise.all(characterPromises);
        dispatch(charactersLoaded(charactersData));
      };

      fetchEpisodeData();
    }
  }, [id]);

  return (
    <>
      {fetchedData && (
        <div className={styles.episode_details}>
          <div className={styles.breadcrumbs}>
            <Link to='/episode'>Episodes</Link> / Episode Details
          </div>
          <h2>{fetchedData.name}</h2>
          <p>{fetchedData.air_date}</p>
          <h3>Characters:</h3>
          <div>
            <ul className={styles.list__container}>
              {state.characters.map((character) => (
                <li key={character.id} className={styles.list__item}>
                  <img src={character.image} alt={character.name} className={styles.person__photo} />
                  <p>{character.name}</p>
                  <div className={styles.list__status_container}>
                    <div className={`${styles.status_indicator} ${Indicator(character.status)}`} />
                    <p className={styles.status_txt}>Status: {character.status}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default EpisodeDetails;