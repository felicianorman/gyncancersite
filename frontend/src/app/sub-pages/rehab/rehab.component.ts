import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/interfaces/Post';
import { RehabService } from 'src/services/rehab.service';
import * as fromStore from '../../../store/rehab/index';

@Component({
  selector: 'app-rehab',
  templateUrl: './rehab.component.html',
  styleUrl: './rehab.component.scss',
})
export class RehabComponent implements OnInit {
  public posts$: Observable<Post[]>;
  public posts: Post[] = [];
  public postDetails: any[] = [];

  public title: string = '';
  public content: string = '';

  constructor(
    private store: Store<fromStore.RehabState>,
    private rehabService: RehabService,
  ) {
    this.store.select((state) => state.rehab);
  }

  ngOnInit(): void {
    this.posts$ = this.store.select(fromStore.getRehab);
    this.store.dispatch({ type: '[Rehab] Get Rehab' });

    this.rehabService.getRehab().valueChanges.subscribe((result) => {
      this.posts = (result.data as any)['rehabs'].data;

      this.postDetails = this.posts.map((post: any) => {
        return {
          title: post.attributes.title,
          content: post.attributes.content,
        };
      });
    });
  }
}
