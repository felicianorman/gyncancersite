import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Page } from 'src/interfaces/Page';
import * as AboutUsActions from '../actions/about-us.actions';

@Injectable()
export class AboutUsEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadAboutUs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AboutUsActions.LOAD_ABOUT_US),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getAboutUs {
                aboutUses {
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
                  aboutUs: any;
                  data: { aboutUs: { data: { attributes: Page } } };
                }>({
                  query: gql`
                    query getAboutUs {
                      aboutUses {
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
                      new AboutUsActions.LoadAboutUsSuccess(
                        result.data.aboutUs.data.attributes,
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
