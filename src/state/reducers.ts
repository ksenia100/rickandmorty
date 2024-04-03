import { CHARACTERS_LOADING, CHARACTERS_LOADED, CHARACTERS_FAILED } from "../constants/constants";
import { EPISODES_LOADED, EPISODES_FAILED } from "../constants/constants";
import { CLEAR_FILTERS, SET_FILTER } from "../constants/constants";

import { FiltersState, initialState } from "../types/type";
import { CharacterState, characterInitialState, episodeInitialState } from "../types/type";

//characters reducer
export const charactersReducer = (state: CharacterState = characterInitialState, action: { type: string, payload?: any }): CharacterState => {
  switch (action.type) {
    case CHARACTERS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHARACTERS_LOADED:
      return {
        ...state,
        characters: action.payload,
        loading: false,
        error: null
      };
    case CHARACTERS_FAILED:
      return {
        ...state,
        characters: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

//filters reducer
export const filtersReducer = (state = initialState, action: any): FiltersState => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case CLEAR_FILTERS:
      return initialState;
    default:
      return state;
  }
};

//episodes reducer
export const episodesReducer = (state = episodeInitialState, action: any) => {
  switch (action.type) {
    case EPISODES_LOADED:
      return {
        ...state,
        episodes: action.payload.results,
        loading: false,
        error: null
      };
    case EPISODES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};