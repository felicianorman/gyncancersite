import { Page } from 'src/interfaces/Page';
import * as fromLifeAfterCancer from '../actions/life-after-cancer.actions';

export interface LifeAfterCancerState {
  data: Page[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: LifeAfterCancerState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state: LifeAfterCancerState = initialState,
  action: fromLifeAfterCancer.Actions,
): LifeAfterCancerState {
  switch (action.type) {
    case fromLifeAfterCancer.LOAD_LIFE_AFTER_CANCER: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromLifeAfterCancer.LOAD_LIFE_AFTER_CANCER_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromLifeAfterCancer.LOAD_LIFE_AFTER_CANCER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    default:
      return state;
  }
}

export const getLifeAfterCancerLoading = (state: LifeAfterCancerState) =>
  state.loading;

export const getLifeAfterCancerLoaded = (state: LifeAfterCancerState) =>
  state.loaded;

export const getLifeAfterCancer = (state: LifeAfterCancerState) => state.data;
