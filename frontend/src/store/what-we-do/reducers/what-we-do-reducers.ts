import { Post } from 'src/interfaces/Post';
import * as fromWhatWeDo from '../actions/what-we-do.actions';

export interface WhatWeDoState {
  data: Post[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: WhatWeDoState = {
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
  state: WhatWeDoState = initialState,
  action: fromWhatWeDo.Actions,
): WhatWeDoState {
  switch (action.type) {
    case fromWhatWeDo.LOAD_WHAT_WE_DO: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromWhatWeDo.LOAD_WHAT_WE_DO_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromWhatWeDo.LOAD_WHAT_WE_DO_FAIL: {
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

export const getWhatWeDoLoading = (state: WhatWeDoState) => state.loading;

export const getWhatWeDoLoaded = (state: WhatWeDoState) => state.loaded;

export const getWhatWeDo = (state: WhatWeDoState) => state.data;
