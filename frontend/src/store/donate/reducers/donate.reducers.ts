import { Donate } from 'src/interfaces/Donate';
import * as fromDonate from '../actions/donate.actions';

export interface DonateState {
  data: Donate;
  loaded: boolean;
  loading: boolean;
}

export const initialState: DonateState = {
  data: {
    content: '',
    img: '',
  },
  loaded: false,
  loading: false,
};

export function reducer(
  state: DonateState = initialState,
  action: fromDonate.Actions,
): DonateState {
  switch (action.type) {
    case fromDonate.LOAD_LEVA: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromDonate.LOAD_LEVA_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromDonate.LOAD_LEVA_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    case fromDonate.LOAD_VACCINE: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromDonate.LOAD_VACCINE_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromDonate.LOAD_VACCINE_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    case fromDonate.LOAD_MEETUP: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromDonate.LOAD_MEETUP_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromDonate.LOAD_MEETUP_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    case fromDonate.LOAD_GYNCANCERDAGEN: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromDonate.LOAD_GYNCANCERDAGEN_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromDonate.LOAD_GYNCANCERDAGEN_FAIL: {
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

export const getDonate = (state: DonateState) => state.data;

export const getDonateLoading = (state: DonateState) => state.loading;

export const getDonateLoaded = (state: DonateState) => state.loaded;
