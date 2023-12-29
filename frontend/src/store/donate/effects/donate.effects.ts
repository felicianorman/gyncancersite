import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, Observable } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Post } from 'src/interfaces/Post';
import * as DonateActions from '../actions/donate.actions';

@Injectable()
export class DonateEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadLevaLiteTill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DonateActions.LOAD_LEVA),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getLevaLiteTill {
                doneraLevalitetill {
                  data {
                    attributes {
                      content
                      img {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
          })
          .pipe(
            switchMap(() =>
              this.apollo
                .query<{
                  doneraLevalitetill: any;
                  data: { doneraLevalitetill: { data: { attributes: Post } } };
                }>({
                  query: gql`
                    query getLevaLiteTill {
                      doneraLevalitetill {
                        data {
                          attributes {
                            content
                            img {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  `,
                })
                .pipe(
                  map(
                    (result) =>
                      new DonateActions.LoadLevaSuccess(
                        result.data.doneraLevalitetill.data.attributes,
                      ),
                  ),
                  catchError(() => EMPTY),
                ),
            ),
          ),
      ),
    ),
  );

  loadVaccine$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DonateActions.LOAD_VACCINE),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getVaccin {
                doneraVaccin {
                  data {
                    attributes {
                      content
                      img {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
          })
          .pipe(
            switchMap(() =>
              this.apollo
                .query<{
                  doneraVacicin: any;
                  data: { doneraVaccin: { data: { attributes: Post } } };
                }>({
                  query: gql`
                    query getVaccin {
                      doneraVaccin {
                        data {
                          attributes {
                            content
                            img {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  `,
                })
                .pipe(
                  map(
                    (result) =>
                      new DonateActions.LoadVaccineSuccess(
                        result.data.doneraVacicin.data.attributes,
                      ),
                  ),
                  catchError(() => EMPTY),
                ),
            ),
          ),
      ),
    ),
  );

  loadMeetup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DonateActions.LOAD_MEETUP),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getMeetup {
                doneraMeetup {
                  data {
                    attributes {
                      content
                      img {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
          })
          .pipe(
            switchMap(() =>
              this.apollo
                .query<{
                  doneraMeetup: any;
                  data: { doneraMeetup: { data: { attributes: Post } } };
                }>({
                  query: gql`
                    query getMeetup {
                      doneraMeetup {
                        data {
                          attributes {
                            content
                            img {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  `,
                })
                .pipe(
                  map(
                    (result) =>
                      new DonateActions.LoadMeetupSuccess(
                        result.data.doneraMeetup.data.attributes,
                      ),
                  ),
                  catchError(() => EMPTY),
                ),
            ),
          ),
      ),
    ),
  );

  loadGynCancerdagen$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DonateActions.LOAD_GYNCANCERDAGEN),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getGynCancerDagen {
                doneraGyncancerdagen {
                  data {
                    attributes {
                      content
                      img {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
          })
          .pipe(
            switchMap(() =>
              this.apollo
                .query<{
                  doneraGyncancerdagen: any;
                  data: {
                    doneraGyncancerdagen: { data: { attributes: Post } };
                  };
                }>({
                  query: gql`
                    query getGynCancerDagen {
                      doneraGyncancerdagen {
                        data {
                          attributes {
                            content
                            img {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  `,
                })
                .pipe(
                  map(
                    (result) =>
                      new DonateActions.LoadGyncancerdagenSuccess(
                        result.data.doneraGyncancerdagen.data.attributes,
                      ),
                  ),
                  catchError(() => EMPTY),
                ),
            ),
          ),
      ),
    ),
  );
}
