import { takeLatest, put, call } from 'redux-saga/effects';
import { episodesLoaded, episodesFailed, fetchEpisodes } from './actions';
import { EPISODES_LOADING } from 'constants/constants';

function* handleFetchEpisodes(action: { type: string, payload?: any }) {
  try {
    const { currentPage } = action.payload;
    const episodes: ReturnType<typeof fetchEpisodes> = yield call(fetchEpisodes, currentPage);

    yield put(episodesLoaded(episodes));
  } catch (error: any) {
    yield put(episodesFailed(error.message));
  }
}

export function* episodesSaga() {
  yield takeLatest(EPISODES_LOADING, handleFetchEpisodes);
}
