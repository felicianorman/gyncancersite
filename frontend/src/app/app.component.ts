
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Apollo, gql, } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{
  stories: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}
  
  ngOnInit() {
    this.apollo.watchQuery({
      query: gql`
        query GetPosts {
          stories {
          data {
            attributes {
              title,
              body,
              author
            }
          }
          }
        }
      `
    }).valueChanges.subscribe((result: any) => {
      console.log(result.data.stories.data)
      this.stories = result.data.stories.data;
    })
      
  }

 

}

