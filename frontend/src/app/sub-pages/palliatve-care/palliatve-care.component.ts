import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/interfaces/Post';
import { PalliativeService } from 'src/services/palliative.services';
import * as fromStore from '../../../store/palliative';

@Component({
  selector: 'app-palliatve-care',
  templateUrl: './palliatve-care.component.html',
  styleUrls: ['./palliatve-care.component.scss'],
})
export class PalliatveCareComponent implements OnInit {
  public posts$: Observable<Post[]>;
  public posts: Post[] = [];
  public postDetails: any[] = [];

  public title: string = '';
  public content: string = '';

  constructor(
    private store: Store<fromStore.PalliativeState>,
    private palliativeService: PalliativeService,
  ) {
    this.store.select((state) => state.palliative);
  }

  ngOnInit(): void {
    this.posts$ = this.store.select(fromStore.getPalliative);
    this.store.dispatch({ type: '[Palliative] Get Palliative' });

    this.palliativeService.getPalliative().valueChanges.subscribe((result) => {
      this.posts = (result.data as any)['palliativVards'].data;
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
