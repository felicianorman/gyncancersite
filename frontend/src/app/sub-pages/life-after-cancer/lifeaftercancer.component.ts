import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Page } from 'src/interfaces/Page';
import { LifeAfterCancerService } from 'src/services/life-after-cancer.service';
import * as fromStore from '../../../store/life-after-cancer/index';

@Component({
  selector: 'life-after-cancer',
  templateUrl: './life-after-cancer.component.html',
  styleUrls: ['./lifeaftercancer.component.scss'],
})
export class LifeaftercancerComponent implements OnInit {
  public pages$: Observable<Page[]>;
  public pages: Page[] = [];
  public pageDetails: any[] = [];

  public title: string = '';
  public content: string = '';
  public img: string = '';

  constructor(
    private store: Store<fromStore.LifeAfterCancerState>,
    private lifeAfterCancerService: LifeAfterCancerService,
  ) {
    this.store.select((state) => state.lifeAfterCancer);
  }

  ngOnInit(): void {
    this.pages$ = this.store.select(fromStore.getLifeAfterCancer);
    this.store.dispatch({ type: '[LifeAfterCancer] Get LifeAfterCancer' });

    this.lifeAfterCancerService
      .getLifeAfterCancer()
      .valueChanges.subscribe((result) => {
        this.pages = (result.data as any)['livetEfterCancers'].data;
        console.log(this.pages[1]);

        this.pageDetails = this.pages.map((page: any) => {
          const imgObject = page.attributes.img?.data?.[0]; // Assuming img is an array, adjust accordingly if it's not
          const imgUrl = imgObject?.attributes?.url || '';

          return {
            title: page.attributes.title,
            content: page.attributes.content,
            img: 'http://localhost:1337' + imgUrl,
          };
        });

        console.log('Processed pageDetails:', this.pageDetails);
      });
  }
}
