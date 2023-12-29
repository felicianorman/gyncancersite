import { Action } from '@ngrx/store';
import { Post } from 'src/interfaces/Post';

export const LOAD_SUPPORT_US = '[Support Us] Get Support Us';
export const LOAD_SUPPORT_US_SUCCESS = '[Support Us] Get Support Us Success';
export const LOAD_SUPPORT_US_FAIL = '[Support Us] Get Support Us Failure';

export const LOAD_SUPPORT_US_INFO = '[Support Us] Get Support Us Info';
export const LOAD_SUPPORT_US_INFO_SUCCESS =
  '[Support Us] Get Support Us Info Success';
export const LOAD_SUPPORT_US_INFO_FAIL =
  '[Support Us] Get Support Us Info Failure';

export class LoadSupportUs implements Action {
  readonly type = LOAD_SUPPORT_US;

  constructor(public payload: any) {}
}

export class LoadSupportUsSuccess implements Action {
  readonly type = LOAD_SUPPORT_US_SUCCESS;

  constructor(public payload: Post) {}
}

export class LoadSupportUsFail implements Action {
  readonly type = LOAD_SUPPORT_US_FAIL;

  constructor(public payload: any) {}
}

export class LoadSupportUsInfo implements Action {
  readonly type = LOAD_SUPPORT_US_INFO;

  constructor(public payload: any) {}
}

export class LoadSupportUsInfoSuccess implements Action {
  readonly type = LOAD_SUPPORT_US_INFO_SUCCESS;

  constructor(public payload: Post) {}
}

export class LoadSupportUsInfoFail implements Action {
  readonly type = LOAD_SUPPORT_US_INFO_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | LoadSupportUs
  | LoadSupportUsSuccess
  | LoadSupportUsFail
  | LoadSupportUsInfo
  | LoadSupportUsInfoSuccess
  | LoadSupportUsInfoFail;
