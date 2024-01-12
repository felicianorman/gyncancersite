import { INJECTOR, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, Observable } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Page } from 'src/interfaces/Page';

import { Post } from 'src/interfaces/Post';
import * as KnowledgeActions from '../actions/knowledge.actions';

@Injectable()
export class KnowledgeEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadKnowledge$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KnowledgeActions.LOAD_KNOWLEDGE),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getKnowledge {
                kunskaps {
                  data {
                    attributes {
                      title
                      content
                      preview
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
                  knowledge: any;
                  data: { knowledge: { data: { attributes: Post } } };
                }>({
                  query: gql`
                    query getKnowledge {
                      kunskaps {
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
                      new KnowledgeActions.LoadKnowledgeSuccess(
                        result.data.knowledge.data.attributes,
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
