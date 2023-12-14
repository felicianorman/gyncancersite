import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent implements OnInit {
  constructor(private apollo: Apollo) {}
  public vaccineText: string = '';
  public vaccineImg: string = '';
  public levaLiteTillText: string = '';
  public levaLiteTillImg: string = '';
  public meetUpText: string = '';
  public meetUpImg: string = '';
  public gynCancerDagenText: string = '';
  public gynCancerDagenImg: string = '';

  ngOnInit(): void {
    //levalitetill
    this.apollo
      .watchQuery({
        query: gql`
          query getLevaLiteTill {
            doneraLevalitetill {
              data {
                attributes {
                  content
                  img {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.levaLiteTillText =
          result.data.doneraLevalitetill.data.attributes.content;
        this.levaLiteTillImg =
          'http://localhost:1337' +
          result.data.doneraLevalitetill.data.attributes.img.data.attributes
            .url;

        console.log(
          result.data.doneraLevalitetill.data.attributes.img.data.attributes
            .url,
        );
      });

    //livmoderhalscancer
    this.apollo
      .watchQuery({
        query: gql`
          query getVaccin {
            doneraVaccin {
              data {
                attributes {
                  content
                  img {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.vaccineText = result.data.doneraVaccin.data.attributes.content;
        this.vaccineImg =
          'http://localhost:1337' +
          result.data.doneraVaccin.data.attributes.img.data.attributes.url;

        console.log(
          result.data.doneraLevalitetill.data.attributes.img.data.attributes
            .url,
        );
      });

    //systerträffar
    this.apollo
      .watchQuery({
        query: gql`
          query getMeetup {
            doneraMeetup {
              data {
                attributes {
                  content
                  img {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.meetUpText = result.data.doneraMeetup.data.attributes.content;
        this.meetUpImg =
          'http://localhost:1337' +
          result.data.doneraMeetup.data.attributes.img.data.attributes.url;
      });

    //gyncancerdagen
    this.apollo
      .watchQuery({
        query: gql`
          query getGynCancerDagen {
            doneraGyncancerdagen {
              data {
                attributes {
                  content
                  img {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.gynCancerDagenText =
          result.data.doneraGyncancerdagen.data.attributes.content;
        this.gynCancerDagenImg =
          'http://localhost:1337' +
          result.data.doneraGyncancerdagen.data.attributes.img.data.attributes
            .url;
      });
  }
}
