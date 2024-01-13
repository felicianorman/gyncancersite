import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from 'src/interfaces/Post';

import { WhatWeDoServices } from 'src/services/we-do.services';
import * as fromStore from '../.././../store/what-we-do/index';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
})
export class WhatWeDoComponent implements OnInit {
  posts$: Observable<Post[]>;
  posts: Post[] = [];
  public postDetails: any[] = [];

  public title: string = '';
  public content: string = '';

  constructor(
    private store: Store<fromStore.WhatWeDoState>,
    private whatWeDoService: WhatWeDoServices,
  ) {
    this.store.select((state) => state.whatWeDo);
  }

  ngOnInit(): void {
    this.posts$ = this.store.select(fromStore.getWhatWeDo);
    this.store.dispatch({ type: '[What We Do] Get What We Do' });

    this.whatWeDoService.getWhatWeDo().valueChanges.subscribe((result) => {
      this.posts = (result.data as any)['gynekologiskCancers'].data;

      this.postDetails = this.posts.map((page: any) => {
        return {
          title: page.attributes.title,
          content: page.attributes.content,
        };
      });
    });
  }
}
