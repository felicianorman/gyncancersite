import { Page } from 'src/interfaces/Page';
import * as fromAboutUs from '../actions/about-us.actions';

export interface AboutUsState {
  data: Page[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: AboutUsState = {
  data: [
    {
      title: '',
      content: '',
      img: '',
    },
  ],
  loaded: false,
  loading: false,
};

export function reducer(
  state: AboutUsState = initialState,
  action: fromAboutUs.Actions,
): AboutUsState {
  switch (action.type) {
    case fromAboutUs.LOAD_ABOUT_US: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromAboutUs.LOAD_ABOUT_US_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromAboutUs.LOAD_ABOUT_US_FAIL: {
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

export const getAboutUsLoading = (state: AboutUsState) => state.loading;

export const getAboutUsLoaded = (state: AboutUsState) => state.loaded;

export const getAboutUs = (state: AboutUsState) => state.data;
