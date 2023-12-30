import { Register, Role } from 'src/interfaces/Register';
import * as fromRegister from '../actions';

export interface RegisterState {
  data: Register;
  loaded: boolean;
  loading: boolean;
}

export const initialState: RegisterState = {
  data: {
    firstName: '',
    lastName: '',
    age: 0,
    region: '',
    role: Role.Drabbad,
    email: '',
  },
  loaded: false,
  loading: false,
};

export function reducer(
  state: RegisterState = initialState,
  action: fromRegister.RegisterActions.Actions,
): RegisterState {
  switch (action.type) {
    case fromRegister.RegisterActions.CREATE_REGISTER: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromRegister.RegisterActions.CREATE_REGISTER_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }

    case fromRegister.RegisterActions.CREATE_REGISTER_FAIL: {
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

export const getRegisterLoading = (state: RegisterState) => state.loading;

export const getRegisterLoaded = (state: RegisterState) => state.loaded;

export const getRegister = (state: RegisterState) => state.data;
