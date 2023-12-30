import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class DonateService {
  constructor(private apollo: Apollo) {}

  public getVaccine() {
    return this.apollo.watchQuery({
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
    });
  }

  public getLevaLiteTill() {
    return this.apollo.watchQuery({
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
    });
  }

  public getMeetup() {
    return this.apollo.watchQuery({
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
    });
  }

  public getGynCancerdagen() {
    return this.apollo.watchQuery({
      query: gql`
        query getGynCancerdagen {
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
    });
  }
}
