import { Blog } from 'src/interfaces/Blog';
import * as fromPatientStories from '../actions/patient-stories.actions';

export interface PatientStoriesState {
  data: Blog[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PatientStoriesState = {
  data: [
    {
      title: '',
      body: '',
      author: '',
      preview: '',
      img: '',
    },
  ],
  loaded: false,
  loading: false,
};

export function reducer(
  state: PatientStoriesState = initialState,
  action: fromPatientStories.Actions,
): PatientStoriesState {
  switch (action.type) {
    case fromPatientStories.LOAD_BLOG: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromPatientStories.LOAD_BLOG_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromPatientStories.LOAD_BLOG_FAIL: {
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

export const getPatientStoriesLoading = (state: PatientStoriesState) =>
  state.loading;

export const getPatientStoriesLoaded = (state: PatientStoriesState) =>
  state.loaded;

export const getPatientStories = (state: PatientStoriesState) => state.data;
