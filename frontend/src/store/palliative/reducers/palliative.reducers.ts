import { Post } from 'src/interfaces/Post';
import * as fromPalliative from '../actions/palliative.actions';

export interface PalliativeState {
  data: Post[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PalliativeState = {
  data: [
    {
      title: '',
      content: '',
    },
  ],
  loaded: false,
  loading: false,
};

export function reducer(
  state: PalliativeState = initialState,
  action: fromPalliative.Actions,
): PalliativeState {
  switch (action.type) {
    case fromPalliative.LOAD_PALLIATIVE: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromPalliative.LOAD_PALLIATIVE_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromPalliative.LOAD_PALLIATIVE_FAIL: {
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

export const getPalliativeData = (state: PalliativeState) => state.data;

export const getPalliativeLoaded = (state: PalliativeState) => state.loaded;

export const getPalliativeLoading = (state: PalliativeState) => state.loading;
