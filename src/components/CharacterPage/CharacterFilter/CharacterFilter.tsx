import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiltersState } from 'types/type';
import { setFilter } from '../../../state/actions';

import styles from './CharacterFilter.module.css';

interface Props {
  dispatchFilters: React.Dispatch<any>;
  filters: FiltersState;
}

const CharacterFilter: React.FC<Props> = ({ dispatchFilters, filters }) => {
  const [isStatusExpanded, setIsStatusExpanded] = useState(false);
  const [isGenderExpanded, setIsGenderExpanded] = useState(false);
  const [isSpeciesExpanded, setIsSpeciesExpanded] = useState(false);

  const isFilterStatusActive = (filterValue: string) => filters.status === filterValue;
  const isFilterGenderActive = (filterValue: string) => filters.gender === filterValue;
  const isFilterSpeciesActive = (filterValue: string) => filters.species === filterValue;

  const toggleStatusFilter = (filterValue: string) => {
    dispatchFilters(setFilter({ key: 'status', value: isFilterStatusActive(filterValue) ? '' : filterValue }));
  };

  const toggleGenderFilter = (filterValue: string) => {
    dispatchFilters(setFilter({ key: 'gender', value: isFilterGenderActive(filterValue) ? '' : filterValue }));
  };

  const toggleSpeciesFilter = (filterValue: string) => {
    dispatchFilters(setFilter({ key: 'species', value: isFilterSpeciesActive(filterValue) ? '' : filterValue }));
  };

  const clearFilters = () => {
    dispatchFilters(clearFilters());
    setIsStatusExpanded(false);
    setIsGenderExpanded(false);
    setIsSpeciesExpanded(false);
  };
  return (
    <div className={styles.container__filter}>
      <h1 className={styles.filter}>Filters</h1>
      <Link to='/character' className={styles.clear} onClick={clearFilters}>
        Clear Filters
      </Link>
      <div >
        <button className={styles.accordingItem} onClick={() => setIsStatusExpanded(!isStatusExpanded)}>
          Status {isStatusExpanded ? '▽' : '△'}
        </button>
        {isStatusExpanded ? (
          <div className={`${styles.accordingContent} ${isStatusExpanded ? `${styles.show}` : ''}`}>
            <button className={isFilterStatusActive('alive') ? styles.activeFilter : ''}
              onClick={() => toggleStatusFilter('alive')}> Alive </button>
            <button className={isFilterStatusActive('unknown') ? styles.activeFilter : ''}
              onClick={() => toggleStatusFilter('unknown')} > Unknown</button>
            <button className={isFilterStatusActive('dead') ? styles.styactiveFilter : ''}
              onClick={() => toggleStatusFilter('dead')}> Dead </button>
          </div>
        ) : null}
      </div>

      <div >
        <button className={styles.accordingItem} onClick={() => setIsGenderExpanded(!isGenderExpanded)}>
          Gender {isGenderExpanded ? '▽' : '△'}
        </button>
        {isGenderExpanded ? (
          <div className={`${styles.accordingContent} ${isGenderExpanded ? styles.show : ''}`}>
            <button className={isFilterGenderActive('male') ? styles.activeFilter : ''}
              onClick={() => toggleGenderFilter('male')} >Male</button>
            <button className={isFilterGenderActive('female') ? styles.activeFilter : ''}
              onClick={() => toggleGenderFilter('female')}>Female</button>
            <button className={isFilterGenderActive('genderless') ? styles.activeFilter : ''}
              onClick={() => toggleGenderFilter('genderless')}>Genderless</button>
            <button className={isFilterGenderActive('unknown') ? styles.activeFilter : ''}
              onClick={() => toggleGenderFilter('unknown')}>Unknown</button>
          </div>
        ) : null}
      </div>

      <div>
        <button className={styles.accordingItem} onClick={() => setIsSpeciesExpanded(!isSpeciesExpanded)}>
          Species {isSpeciesExpanded ? '▽' : '△'}
        </button>
        {isSpeciesExpanded ? (
          <div className={`${styles.accordingContent} ${isSpeciesExpanded ? styles.show : ''}`}>
            <button className={isFilterSpeciesActive('human') ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('human')}>Human</button>
            <button className={isFilterSpeciesActive('alien') ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('alien')}>Alien</button>
            <button className={isFilterSpeciesActive('mythological') ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('mythological')}>Mythological</button>
            <button className={isFilterSpeciesActive('unknown') ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('unknown')}>Unknown</button>
            <button className={isFilterSpeciesActive('animal') ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('animal')}>Animal</button>
            <button className={isFilterSpeciesActive('disease') ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('disease')}>Disease</button>
            <button className={isFilterSpeciesActive('robot') ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('robot')}>Robot</button>
            <button className={isFilterSpeciesActive('croneberg') ? styles.activeFilter : ''}
              onClick={() => toggleSpeciesFilter('croneberg')}>Croneberg</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CharacterFilter;