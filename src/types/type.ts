import styles from 'components/EpisodePage/EpisodeDetails/EpisodeDetails.module.css'

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export interface Character {
  id: number;
  name: string;
  img: any;
  status: string;
  location?: { name: string };
  origin?: { name: string };
  gender?: string;
  image?: string;
  species?: { name: string };
  created?: string;
}

export interface CharacterState {
  characters: any[];
  loading: boolean;
  error: null | any;
}

export interface EpisodeState {
  episodes: any[];
  loading: boolean;
  error: null | any;
}

export const characterInitialState: CharacterState = {
  characters: [],
  loading: true,
  error: null
};

export const episodeInitialState: EpisodeState = {
  episodes: [],
  loading: true,
  error: null
};

export type CharacterStatus = 'Dead' | 'Alive' | 'Unknown';

export const initialState: FiltersState = {
  status: '',
  gender: '',
  species: '',
};

export interface FiltersState {
  status: string;
  gender: string;
  species: string;
}

export const Indicator = (status: string) => {
  switch (status) {
    case 'Dead':
      return styles.dead;
    case 'Alive':
      return styles.alive;
    default:
      return styles.unknown;
  }
};

