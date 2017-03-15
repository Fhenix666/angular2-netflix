import { Component } from '@angular/core';
import { ApiService } from "../providers/api.service";

@Component({
    selector: 'app-results-list',
    templateUrl: './results-list.component.html',
    styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent {

    results: any[] = [];

    constructor(
        public apiService: ApiService
    ) {
        this.StartListeningResults();
    }


    StartListeningResults(){
        this.apiService.results.subscribe(
            (res) => {
                this.results = res;
            }
        )
    }
}
