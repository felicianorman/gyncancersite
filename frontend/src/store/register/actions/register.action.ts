import { Action } from '@ngrx/store';
import { Register } from 'src/interfaces/Register';

export const CREATE_REGISTER = '[Register] Create Register';
export const CREATE_REGISTER_SUCCESS = '[Register] Get Register Success';
export const CREATE_REGISTER_FAIL = '[Register] Get Register Failure';

export class CreateRegister implements Action {
  readonly type = CREATE_REGISTER;

  constructor(public payload: Register) {}
}

export class CreateRegisterSuccess implements Action {
  readonly type = CREATE_REGISTER_SUCCESS;

  constructor(public payload: Register) {}
}

export class CreateRegisterFail implements Action {
  readonly type = CREATE_REGISTER_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | CreateRegister
  | CreateRegisterSuccess
  | CreateRegisterFail;
