import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromPatientStories from './patient-stories.reducers';

export interface PatientStoriesState {
  patientStories: fromPatientStories.PatientStoriesState;
}

export const reducersPatientStories: ActionReducerMap<
  PatientStoriesState,
  any
> = {
  patientStories: fromPatientStories.reducer,
};

export const getPatientStoriesState =
  createFeatureSelector<PatientStoriesState>('patientStories');

export const getPatientStoriesEntitiesState = createSelector(
  getPatientStoriesState,
  (state) => state.patientStories,
);

export const getPatientStories = createSelector(
  getPatientStoriesEntitiesState,
  fromPatientStories.getPatientStories,
);

export const getPatientStoriesLoaded = createSelector(
  getPatientStoriesEntitiesState,
  fromPatientStories.getPatientStoriesLoaded,
);

export const getPatientStoriesLoading = createSelector(
  getPatientStoriesEntitiesState,
  fromPatientStories.getPatientStoriesLoading,
);
