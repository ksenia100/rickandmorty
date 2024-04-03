import { combineReducers, Reducer, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { legacy_createStore as createStore } from 'redux';
import { charactersReducer, episodesReducer } from './reducers';

import { episodesSaga } from './saga';

export interface RootState {
    characters: {
        characters: any[];
        loading: boolean;
        error: null | any;
    };
    episodes: {
        episodes: any[];
        loading: boolean;
        error: null | any;
    };
}

const rootReducer: Reducer<RootState> = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(episodesSaga);

export default store;