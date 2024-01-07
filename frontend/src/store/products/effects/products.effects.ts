import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, Observable } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';

import { Product } from 'src/interfaces/Product';
import * as ProductActions from '../actions/products.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.LOAD_PRODUCTS),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getProducts {
                products {
                  data {
                    attributes {
                      title
                      productId
                      img {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                      price
                      description
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
                  products: any;
                  data: { products: { data: { attributes: Product } } };
                }>({
                  query: gql`
                    query getProducts {
                      products {
                        data {
                          attributes {
                            title
                            productId
                            img {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                            price
                            description
                          }
                        }
                      }
                    }
                  `,
                })
                .pipe(
                  map(
                    (result) =>
                      new ProductActions.LoadProductsSuccess(
                        result.data.products.data.attributes,
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
