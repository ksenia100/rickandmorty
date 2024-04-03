import React from 'react';
import { useState, useEffect, useCallback, useReducer } from 'react';

import CharacterList from '../../components/CharacterPage/CharacterList';
import CharacterNavigation from '../../components/CharacterPage/CharacterNavigation';
import CharacterSearch from '../../components/CharacterPage/CharacterSearch';
import CharacterFilter from '../../components/CharacterPage/CharacterFilter';

import { appendParamsURL } from '../../services/urlUpdate';

import { charactersFailed, charactersLoaded } from '../../state/actions';
import { charactersReducer, filtersReducer } from '../../state/reducers';
import { fetchCharacters } from '../../state/actions';
import { characterInitialState, initialState } from '../../types/type';

import styles from './CharacterPage.module.css';

const CharacterPage: React.FC = () => {
  const [state, dispatch] = useReducer(charactersReducer, characterInitialState);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, dispatchFilters] = useReducer(filtersReducer, initialState);

  const appendParamsToURL = useCallback(() => appendParamsURL(currentPage, searchValue, filters), [
    currentPage,
    searchValue,
    filters,
  ]);

  const fetchData = useCallback(async () => {
    const { characters, totalPages, error } = await fetchCharacters(currentPage, searchValue, filters.status, filters.gender, filters.species);

    dispatch(error ? charactersFailed([]) : charactersLoaded(characters));
    setTotalPages(totalPages);
    setSearchResult(false);
  }, [currentPage, searchValue, filters]);

  useEffect(() => {
    fetchData();
    appendParamsToURL();
  }, [fetchData, appendParamsToURL]);

  const paginate = (page: number) => setCurrentPage(page);

  return (
    <>
      <h1 className={styles.text}>Characters</h1>

      <div className={styles.characters_filter}>
        <div className={styles.inputContainer}>
          <CharacterSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          {state.characters.length === 0 && !searchResult && (
            <p className={styles.err}>Not Found /:</p>)}
        </div>
      </div>

      <div className={styles.characters_filter}>
        <CharacterFilter dispatchFilters={dispatchFilters} filters={filters} />
        <CharacterList characters={state.characters} />
      </div>

      {state.characters.length > 0 && (
        <CharacterNavigation paginate={paginate} currentPage={currentPage} totalPages={totalPages} />)}
    </>
  );
};

export default CharacterPage;