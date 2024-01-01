import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/interfaces/Post';
import { LifeWithCancerService } from 'src/services/life-with-cancer.service';
import * as fromStore from '../../../store/life-with-cancer/index';

@Component({
  selector: 'life-with-cancer',
  templateUrl: './life-with-cancer.component.html',
  styleUrls: ['./life-with-cancer.component.scss'],
})
export class LifewithcancerComponent implements OnInit {
  public lwcTitle: string = '';
  public lwcContent: string = '';

  public posts$: Observable<Post>;
  public posts: Post;

  constructor(
    private store: Store<fromStore.LifeWithCancerState>,
    private lifeWithCancerService: LifeWithCancerService,
  ) {
    this.store.select((state) => state.lifeWithCancer);
  }

  ngOnInit(): void {
    this.posts$ = this.store.select(fromStore.getLifeWithCancer);

    this.store.dispatch({ type: '[LifeWithCancer] Get LifeWithCancer' });

    this.lifeWithCancerService
      .getLifeWithCancer()
      .valueChanges.subscribe((result) => {
        this.lwcTitle = (result.data as any)[
          'lifewithcancer'
        ].data.attributes.title;
        this.lwcContent = (result.data as any)[
          'lifewithcancer'
        ].data.attributes.content;
      });
  }
}
