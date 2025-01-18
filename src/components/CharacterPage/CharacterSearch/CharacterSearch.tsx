import React from 'react';
import { ChangeEvent } from 'react';

import styles from './CharacterSearch.module.css'

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const CharacterSearch: React.FC<Props> = ({ searchValue, setSearchValue }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      type='text'
      placeholder='Search...'
      className={styles.input}
      value={searchValue}
      onChange={handleChange}
    />
  );
};

export default CharacterSearch;