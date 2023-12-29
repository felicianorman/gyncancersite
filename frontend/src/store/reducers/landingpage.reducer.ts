import { Post } from 'src/interfaces/Post';
import * as fromLandingPage from '../actions/landingpage.actions';

export interface LandingPageState {
  data: Post;
  loaded: boolean;
  loading: boolean;
}

export const initialState: LandingPageState = {
  data: {
    title: '',
    content: '',
  },
  loaded: false,
  loading: false,
};

export function reducer(
  state: LandingPageState = initialState,
  action: fromLandingPage.Actions,
): LandingPageState {
  switch (action.type) {
    case fromLandingPage.LOAD_SHARE_SITE: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromLandingPage.LOAD_SHARE_SITE_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromLandingPage.LOAD_SHARE_SITE_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromLandingPage.LOAD_OUR_VISION: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromLandingPage.LOAD_OUR_VISION_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }

    case fromLandingPage.LOAD_OUR_VISION_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
}

export const getLandingPageLoading = (state: LandingPageState) => state.loading;

export const getLandingPageLoaded = (state: LandingPageState) => state.loaded;

export const getLandingPageData = (state: LandingPageState) => state.data;
