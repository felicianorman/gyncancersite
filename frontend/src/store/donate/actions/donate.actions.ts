import { Action } from '@ngrx/store';
import { Donate } from 'src/interfaces/Donate';

export const LOAD_LEVA = '[Donate] Get Leva';
export const LOAD_LEVA_SUCCESS = '[Donate] Get Leva Success';
export const LOAD_LEVA_FAIL = '[Donate] Get Leva Failure';

export const LOAD_VACCINE = '[Donate] Get Vaccine';
export const LOAD_VACCINE_SUCCESS = '[Donate] Get Vaccine Success';
export const LOAD_VACCINE_FAIL = '[Donate] Get Vaccine Failure';

export const LOAD_MEETUP = '[Donate] Get Meetup';
export const LOAD_MEETUP_SUCCESS = '[Donate] Get Meetup Success';
export const LOAD_MEETUP_FAIL = '[Donate] Get Meetup Failure';

export const LOAD_GYNCANCERDAGEN = '[Donate] Get Gyncancerdagen';
export const LOAD_GYNCANCERDAGEN_SUCCESS =
  '[Donate] Get Gyncancerdagen Success';
export const LOAD_GYNCANCERDAGEN_FAIL = '[Donate] Get Gyncancerdagen Failure';

export class LoadLeva implements Action {
  readonly type = LOAD_LEVA;

  constructor(public payload: any) {}
}

export class LoadLevaSuccess implements Action {
  readonly type = LOAD_LEVA_SUCCESS;

  constructor(public payload: Donate) {}
}

export class LoadLevaFail implements Action {
  readonly type = LOAD_LEVA_FAIL;

  constructor(public payload: any) {}
}

export class LoadVaccine implements Action {
  readonly type = LOAD_VACCINE;

  constructor(public payload: any) {}
}

export class LoadVaccineSuccess implements Action {
  readonly type = LOAD_VACCINE_SUCCESS;

  constructor(public payload: Donate) {}
}

export class LoadVaccineFail implements Action {
  readonly type = LOAD_VACCINE_FAIL;

  constructor(public payload: any) {}
}

export class LoadMeetup implements Action {
  readonly type = LOAD_MEETUP;

  constructor(public payload: any) {}
}

export class LoadMeetupSuccess implements Action {
  readonly type = LOAD_MEETUP_SUCCESS;

  constructor(public payload: Donate) {}
}

export class LoadMeetupFail implements Action {
  readonly type = LOAD_MEETUP_FAIL;

  constructor(public payload: any) {}
}

export class LoadGyncancerdagen implements Action {
  readonly type = LOAD_GYNCANCERDAGEN;

  constructor(public payload: any) {}
}

export class LoadGyncancerdagenSuccess implements Action {
  readonly type = LOAD_GYNCANCERDAGEN_SUCCESS;

  constructor(public payload: Donate) {}
}

export class LoadGyncancerdagenFail implements Action {
  readonly type = LOAD_GYNCANCERDAGEN_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | LoadLeva
  | LoadLevaSuccess
  | LoadLevaFail
  | LoadVaccine
  | LoadVaccineSuccess
  | LoadVaccineFail
  | LoadMeetup
  | LoadMeetupSuccess
  | LoadMeetupFail
  | LoadGyncancerdagen
  | LoadGyncancerdagenSuccess
  | LoadGyncancerdagenFail;
