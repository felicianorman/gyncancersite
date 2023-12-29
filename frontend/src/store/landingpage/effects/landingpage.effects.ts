import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, Observable } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Post } from 'src/interfaces/Post';
import * as LandingPageActions from '../actions/landingpage.actions';

@Injectable()
export class LandingPageEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadShareSite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LandingPageActions.LOAD_SHARE_SITE),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getShareSite {
                lpSharesite {
                  data {
                    attributes {
                      title
                      content
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
                  lpSharesite: any;
                  data: { lpSharesite: { data: { attributes: Post } } };
                }>({
                  query: gql`
                    query getShareSite {
                      lpSharesite {
                        data {
                          attributes {
                            title
                            content
                          }
                        }
                      }
                    }
                  `,
                })
                .pipe(
                  map(
                    (result) =>
                      new LandingPageActions.LoadShareSiteSuccess(
                        result.data.lpSharesite.data.attributes,
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
