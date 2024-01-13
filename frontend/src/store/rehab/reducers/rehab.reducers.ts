import { Post } from 'src/interfaces/Post';
import * as fromRehab from '../actions/rehab.actions';

export interface RehabState {
  data: Post[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: RehabState = {
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
  state = initialState,
  action: fromRehab.Actions,
): RehabState {
  switch (action.type) {
    case fromRehab.LOAD_REHAB: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromRehab.LOAD_REHAB_SUCCESS: {
      const data = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }

    case fromRehab.LOAD_REHAB_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
}

export const getRehabLoading = (state: RehabState) => state.loading;

export const getRehabLoaded = (state: RehabState) => state.loaded;

export const getRehab = (state: RehabState) => state.data;
