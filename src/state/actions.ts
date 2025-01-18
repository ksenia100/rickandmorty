import { CHARACTERS_LOADING, CHARACTERS_LOADED, CHARACTERS_FAILED } from '../constants/constants';
import { EPISODES_LOADING, EPISODES_LOADED, EPISODES_FAILED, EPISODE_LIST_ROUTE, CHARACTER_LIST_ROUTE } from '../constants/constants';
import { SET_FILTER, CLEAR_FILTERS } from '../constants/constants';

import { getCharacterId, getCharacterImg } from '../services/getCharacterData';

export const charactersLoading = (): { type: string } => ({
  type: CHARACTERS_LOADING,
});

export const charactersLoaded = (characters: any[]): { type: string, payload: any } => ({
  type: CHARACTERS_LOADED,
  payload: characters
});

export const charactersFailed = (characters: any[]): { type: string, payload: any } => ({
  type: CHARACTERS_FAILED,
  payload: characters
});

export const fetchCharacters = async (currentPage: number, searchValue: string, status: string, gender: string, species: string) => {
  const res = await fetch(`${CHARACTER_LIST_ROUTE}?page=${currentPage}&name=${searchValue}&status=${status}&gender=${gender}&species=${species}`);
  const data = await res.json();

  if (!data.results || data.results.length === 0) return { error: 'No characters found' };

  const characterList = data.results.map(({ url, name, status }: any) => ({
    id: getCharacterId(url),
    name,
    img: getCharacterImg(getCharacterId(url)),
    status
  }));

  return {
    characters: characterList,
    totalPages: data.info.pages
  };
};

export const fetchCharactersDetails = async (id: number) => {
  const res = await fetch(`${CHARACTER_LIST_ROUTE}${id}`);
  return await res.json();
};


// filter actions
export const setFilter = (payload: { key: string; value: string }) => ({
  type: SET_FILTER,
  payload,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

//episodes actions 
export const episodesLoading = (): { type: string } => ({
  type: EPISODES_LOADING,
});

export const episodesLoaded = (episodes: any): { type: string, payload: any } => ({
  type: EPISODES_LOADED,
  payload: episodes
});

export const episodesFailed = (error: any): { type: string, payload: any } => ({
  type: EPISODES_FAILED,
  payload: error
});

export const fetchEpisodes = async (currentPage: number) => {
  const res = await fetch(`${EPISODE_LIST_ROUTE}?page=${currentPage}`);
  if (!res.ok) throw new Error('Data format error or empty response');
  return await res.json();
}

export const fetchEpisodesDetails = async (id: number) => {
  const res = await fetch(`${EPISODE_LIST_ROUTE}${id}`);
  if (!res.ok) throw new Error('Data format error or empty response');
  return await res.json();
}