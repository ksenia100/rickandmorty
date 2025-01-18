import React from 'react';
import { Link } from 'react-router-dom';
import { Episode } from 'types/type';
import styles from './EpisodeList.module.css';


const EpisodeList: React.FC<{ episodes: Episode[] }> = ({ episodes }) => {

  return (
    <div className={styles.episodes}>
      <ul data-testid='episode-list'>
        {episodes && episodes.map((episode) => (
          <Link to={`/episode/${episode.id}`} key={episode.id}>
            <li>
              {episode.name} - {episode.air_date}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;