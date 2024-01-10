import { Action } from '@ngrx/store';
import { Page } from 'src/interfaces/Page';

export const LOAD_ABOUT_US = '[AboutUs] Get AboutUs';
export const LOAD_ABOUT_US_SUCCESS = '[AboutUs] Get AboutUs Success';
export const LOAD_ABOUT_US_FAIL = '[AboutUs] Get AboutUs Failure';

export class LoadAboutUs implements Action {
  readonly type = LOAD_ABOUT_US;

  constructor(public payload: any) {}
}

export class LoadAboutUsSuccess implements Action {
  readonly type = LOAD_ABOUT_US_SUCCESS;

  constructor(public payload: Page[]) {}
}

export class LoadAboutUsFail implements Action {
  readonly type = LOAD_ABOUT_US_FAIL;

  constructor(public payload: any) {}
}

export type Actions = LoadAboutUs | LoadAboutUsSuccess | LoadAboutUsFail;
