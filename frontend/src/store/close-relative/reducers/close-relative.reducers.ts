import { Post } from 'src/interfaces/Post';
import * as fromCloseRelative from '../actions/close-relative.actions';

export interface CloseRelativeState {
  data: Post[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: CloseRelativeState = {
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
  state: CloseRelativeState = initialState,
  action: fromCloseRelative.Actions,
): CloseRelativeState {
  switch (action.type) {
    case fromCloseRelative.LOAD_CLOSE_RELATIVE: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromCloseRelative.LOAD_CLOSE_RELATIVE_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromCloseRelative.LOAD_CLOSE_RELATIVE_FAIL: {
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

export const getCloseRelativeLoading = (state: CloseRelativeState) =>
  state.loading;

export const getCloseRelativeLoaded = (state: CloseRelativeState) =>
  state.loaded;

export const getCloseRelative = (state: CloseRelativeState) => state.data;
