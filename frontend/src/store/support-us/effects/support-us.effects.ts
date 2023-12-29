import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Post } from 'src/interfaces/Post';
import * as SupportUsActions from '../actions/support-us.actions';

@Injectable()
export class SupportUsEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadSupportUs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupportUsActions.LOAD_SUPPORT_US),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getSupportUs {
                supportUs {
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
                  supportUs: any;
                  data: { supportUs: { data: { attributes: Post } } };
                }>({
                  query: gql`
                    query getSupportUsInfo {
                      supportUsInfo {
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
                      new SupportUsActions.LoadSupportUsSuccess(
                        result.data.supportUs.data.attributes,
                      ),
                  ),
                  catchError((error) => EMPTY),
                ),
            ),
          ),
      ),
    ),
  );
}
