import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Blog } from 'src/interfaces/Blog';
import { PatientStoriesService } from 'src/services/patient-stories.service';
import * as fromStore from '../../../store/patient-stories/index';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public title: string = '';
  public body: string = '';
  public author: string = '';
  public preview: string = '';
  public img: string = '';

  blog$: Observable<Blog[]>;
  blog: Blog[];
  blogDetails: any[] = [];

  constructor(
    private apollo: Apollo,
    private store: Store<fromStore.PatientStoriesState>,
    private patientStoriesService: PatientStoriesService,
  ) {
    this.store.select((state) => state.patientStories);
  }

  ngOnInit(): void {
    this.blog$ = this.store.select(fromStore.getPatientStories);
    this.store.dispatch({ type: '[Blog] Get Blog' });

    this.patientStoriesService.getBlog().valueChanges.subscribe((result) => {
      this.blog = (result.data as any)['stories'].data;

      this.blogDetails = this.blog.map((blog: any) => {
        const imgObject = blog.attributes.img?.data?.attributes.url;
        return {
          title: blog.attributes.title,
          body: blog.attributes.content,
          author: blog.attributes.author,
          preview: blog.attributes.preview,
          img: 'http://localhost:1337' + imgObject,
        };
      });

      console.log('Processed blog:', this.blog);
    });
  }
}
