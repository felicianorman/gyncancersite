import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRegister from './register.reducer';

export interface RegisterState {
  register: fromRegister.RegisterState;
}

export const reducersRegister: ActionReducerMap<RegisterState, any> = {
  register: fromRegister.reducer,
};

export const getRegisterState =
  createFeatureSelector<RegisterState>('register');

export const getRegisterEntitiesState = createSelector(
  getRegisterState,
  (state) => state.register,
);

export const getRegister = createSelector(
  getRegisterEntitiesState,
  fromRegister.getRegister,
);

export const getRegisterLoaded = createSelector(
  getRegisterEntitiesState,
  fromRegister.getRegisterLoaded,
);

export const getLoadingRegister = createSelector(
  getRegisterEntitiesState,
  fromRegister.getRegisterLoading,
);
