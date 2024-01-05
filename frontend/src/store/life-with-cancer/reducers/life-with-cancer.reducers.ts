import { Page } from 'src/interfaces/Page';
import * as fromLifeWithCancer from '../actions/life-with-cancer.action';

export interface LifeWithCancerState {
  data: Page[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: LifeWithCancerState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state: LifeWithCancerState = initialState,
  action: fromLifeWithCancer.Actions,
): LifeWithCancerState {
  switch (action.type) {
    case fromLifeWithCancer.LOAD_LIFE_WITH_CANCER: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromLifeWithCancer.LOAD_LIFE_WITH_CANCER_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromLifeWithCancer.LOAD_LIFE_WITH_CANCER_FAIL: {
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

export const getLifeWithCancerLoading = (state: LifeWithCancerState) =>
  state.loading;

export const getLifeWithCancerLoaded = (state: LifeWithCancerState) =>
  state.loaded;
export const getLifeWithCancer = (state: LifeWithCancerState) => state.data;
