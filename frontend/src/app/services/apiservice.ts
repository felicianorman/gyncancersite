import { Apollo, ApolloBase, gql } from "apollo-angular";
import { Injectable } from "@angular/core";

@Injectable()
class ApiService {
    private apollo: ApolloBase;

    constructor(private apolloProvider: Apollo) {
        this.apollo = apolloProvider.use('default');
    }
}}