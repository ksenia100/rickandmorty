import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EpisodeNav from '../../components/EpisodePage/EpisodeNav';
import EpisodeList from '../../components/EpisodePage/EpisodeList';
import { EPISODES_LOADING } from '../../constants/constants';

import styles from './EpisodePage.module.css';

const EpisodePage: React.FC = () => {
  const dispatch = useDispatch();
  const episodes = useSelector((state: any) => state.episodes.episodes); 
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    dispatch({ type: EPISODES_LOADING, payload: { currentPage: page } });
  };

  useEffect(() => {
    dispatch({ type: EPISODES_LOADING, payload: { currentPage } }); 
  }, [dispatch, currentPage]);

  return (
    <>
      <div className={styles.pos}>
        {episodes && episodes.length > 0 && (  
          <EpisodeList episodes={episodes} />
        )}
      </div>
      <EpisodeNav currentPage={currentPage} onPageChange={onPageChange} />
    </>
  );
};


export default EpisodePage;



