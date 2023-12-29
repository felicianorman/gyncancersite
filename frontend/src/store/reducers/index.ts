import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromLandingPage from './landingpage.reducer';
import * as fromSupportUs from './support-us.reducer';

export interface LandingPageState {
  landingPage: fromLandingPage.LandingPageState;
}

export const reducers: ActionReducerMap<LandingPageState, any> = {
  landingPage: fromLandingPage.reducer,
};

export const getLandingPageState =
  createFeatureSelector<LandingPageState>('landingPage');

export const getLandingPageEntitiesState = createSelector(
  getLandingPageState,
  (state) => state.landingPage,
);

export const getLandingPage = createSelector(
  getLandingPageEntitiesState,
  fromLandingPage.getLandingPageData,
);

export const getLoading = createSelector(
  getLandingPageEntitiesState,
  fromLandingPage.getLandingPageLoaded,
);

export const getLoaded = createSelector(
  getLandingPageEntitiesState,
  fromLandingPage.getLandingPageLoading,
);

export interface SupportUsState {
  supportUs: fromSupportUs.SupportUsState;
}

export const reducersSupportUs: ActionReducerMap<SupportUsState, any> = {
  supportUs: fromSupportUs.reducer,
};

export const getSupportUsState =
  createFeatureSelector<SupportUsState>('supportUs');

export const getSupportUsEntitiesState = createSelector(
  getSupportUsState,
  (state) => state.supportUs,
);

export const getSupportUs = createSelector(
  getSupportUsEntitiesState,
  fromSupportUs.getSupportUs,
);

export const getSupportUsLoaded = createSelector(
  getSupportUsEntitiesState,
  fromSupportUs.getSupportUsLoaded,
);

export const getLoadingSupportUs = createSelector(
  getSupportUsEntitiesState,
  fromSupportUs.getSupportUsLoading,
);
