import { Action } from '@ngrx/store';
import { Post } from 'src/interfaces/Post';

export const LOAD_PALLIATIVE = '[Palliative] Get Palliative';
export const LOAD_PALLIATIVE_SUCCESS = '[Palliative] Get Palliative Success';
export const LOAD_PALLIATIVE_FAIL = '[Palliative] Get Palliative Failure';

export class LoadPalliative implements Action {
  readonly type = LOAD_PALLIATIVE;

  constructor(public payload: any) {}
}

export class LoadPalliativeSuccess implements Action {
  readonly type = LOAD_PALLIATIVE_SUCCESS;

  constructor(public payload: Post[]) {}
}

export class LoadPalliativeFail implements Action {
  readonly type = LOAD_PALLIATIVE_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | LoadPalliative
  | LoadPalliativeSuccess
  | LoadPalliativeFail;
