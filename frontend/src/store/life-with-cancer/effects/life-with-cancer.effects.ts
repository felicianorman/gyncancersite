import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, Observable } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Page } from 'src/interfaces/Page';
import { Post } from 'src/interfaces/Post';
import * as LifeWithCancerActions from '../actions/life-with-cancer.action';

@Injectable()
export class LifeWithCancerEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadLifeWithCancer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LifeWithCancerActions.LOAD_LIFE_WITH_CANCER),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getLifeWithCancer {
                donates {
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
                  lifewithcancer: any;
                  data: { lifewithcancer: { data: { attributes: Page } } };
                }>({
                  query: gql`
                    query getLifeWithCancer {
                      donates {
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
                      new LifeWithCancerActions.LoadLifeWithCancerSuccess(
                        result.data.lifewithcancer.data.attributes,
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
