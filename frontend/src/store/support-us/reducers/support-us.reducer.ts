import { Post } from 'src/interfaces/Post';
import * as fromSupportUs from '../actions/support-us.actions';

export interface SupportUsState {
  data: Post;
  loaded: boolean;
  loading: boolean;
}

export const initialState: SupportUsState = {
  data: {
    title: '',
    content: '',
  },
  loaded: false,
  loading: false,
};

export function reducer(
  state: SupportUsState = initialState,
  action: fromSupportUs.Actions,
): SupportUsState {
  switch (action.type) {
    case fromSupportUs.LOAD_SUPPORT_US: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromSupportUs.LOAD_SUPPORT_US_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromSupportUs.LOAD_SUPPORT_US_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromSupportUs.LOAD_SUPPORT_US_INFO: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromSupportUs.LOAD_SUPPORT_US_INFO_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }

    case fromSupportUs.LOAD_SUPPORT_US_INFO_FAIL: {
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

export const getSupportUsLoading = (state: SupportUsState) => state.loading;

export const getSupportUsLoaded = (state: SupportUsState) => state.loaded;

export const getSupportUs = (state: SupportUsState) => state.data;
