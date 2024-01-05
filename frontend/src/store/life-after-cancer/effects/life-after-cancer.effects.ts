import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Page } from 'src/interfaces/Page';
import * as LifeAfterCancerActions from '../actions/life-after-cancer.actions';

@Injectable()
export class LifeAfterCancerEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadLifeAfterCancer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LifeAfterCancerActions.LOAD_LIFE_AFTER_CANCER),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getLifeAfterCancer {
                livetEfterCancers {
                  data {
                    attributes {
                      title
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
                  lifeaftercancer: any;
                  data: { lifeaftercancer: { data: { attributes: Page } } };
                }>({
                  query: gql`
                    query getLifeAfterCancer {
                      livetEfterCancers {
                        data {
                          attributes {
                            title
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
                      new LifeAfterCancerActions.LoadLifeAfterCancerSuccess(
                        result.data.lifeaftercancer.data.attributes,
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
