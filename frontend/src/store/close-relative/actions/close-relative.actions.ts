import { Action } from '@ngrx/store';
import { Post } from 'src/interfaces/Post';

export const LOAD_CLOSE_RELATIVE = '[CloseRelative] Get CloseRelative';
export const LOAD_CLOSE_RELATIVE_SUCCESS =
  '[CloseRelative] Get CloseRelative Success';

export const LOAD_CLOSE_RELATIVE_FAIL =
  '[CloseRelative] Get CloseRelative Failure';

export class LoadCloseRelative implements Action {
  readonly type = LOAD_CLOSE_RELATIVE;

  constructor(public payload: any) {}
}

export class LoadCloseRelativeSuccess implements Action {
  readonly type = LOAD_CLOSE_RELATIVE_SUCCESS;

  constructor(public payload: Post[]) {}
}

export class LoadCloseRelativeFail implements Action {
  readonly type = LOAD_CLOSE_RELATIVE_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | LoadCloseRelative
  | LoadCloseRelativeSuccess
  | LoadCloseRelativeFail;
