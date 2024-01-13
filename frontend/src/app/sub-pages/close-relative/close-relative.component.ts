import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/interfaces/Post';

import { Store } from '@ngrx/store';
import { post } from 'cypress/types/jquery';
import { closeRelativeService } from 'src/services/close-relative.services';
import * as fromStore from '../../../store/close-relative/index';

@Component({
  selector: 'app-close-relative',
  templateUrl: './close-relative.component.html',
  styleUrls: ['./close-relative.component.scss'],
})
export class CloseRelativeComponent implements OnInit {
  public posts$: Observable<Post[]>;
  public posts: Post[] = [];
  public postDetails: any[] = [];

  public title: string = '';
  public content: string = '';

  constructor(
    private store: Store<fromStore.CloseRelativeState>,
    private closeRelativeService: closeRelativeService,
  ) {
    this.store.select((state) => state.closeRelative);
  }

  ngOnInit(): void {
    this.posts$ = this.store.select(fromStore.getCloseRelative);
    this.store.dispatch({ type: '[CloseRelative] Get CloseRelative' });

    this.closeRelativeService
      .getCloseRelative()
      .valueChanges.subscribe((result) => {
        this.posts = (result.data as any)['foerNaerstaendes'].data;
        console.log(this.posts);

        this.postDetails = this.posts.map((post: any) => {
          return {
            title: post.attributes.title,
            content: post.attributes.content,
          };
        });
      });
  }
}
