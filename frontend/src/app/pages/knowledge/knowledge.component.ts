import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Page } from 'src/interfaces/Page';
import { KnowledgeService } from 'src/services/knowledge.service';
import * as fromStore from '../../../store/knowledge/index';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'],
})
export class KnowledgeComponent {
  public page$: Observable<Page[]>;
  public pages: Page[] = [];
  public pageDetails: any[] = [];

  public title: string = '';
  public content: string = '';
  public img: string = '';

  constructor(
    private store: Store<fromStore.KnowledgeState>,
    private knowledgeService: KnowledgeService,
  ) {
    this.store.select((state) => state.knowledge);
  }

  ngOnInit() {
    this.page$ = this.store.select(fromStore.getKnowledge);
    this.store.dispatch({ type: '[Knowledge] Get Knowledge' });

    this.knowledgeService.getKnowledge().valueChanges.subscribe((result) => {
      this.pages = (result.data as any)['kunskaps'].data;

      this.pageDetails = this.pages.map((page: any) => {
        const imgObject = page.attributes.img?.data?.attributes.url;

        return {
          title: page.attributes.title,
          content: page.attributes.content,
          img: 'http://localhost:1337' + imgObject,
        };
      });

      console.log('Processed pageDetails:', this.pageDetails);
    });
  }
}
