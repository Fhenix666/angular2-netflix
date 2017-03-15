import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiService } from "../providers/api.service";


@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

    private _inputText;

    constructor(
        public apiService: ApiService
    ) {
        this._inputText = new FormControl();
        this._inputText
            .valueChanges
            .debounceTime(300)
            .subscribe(
                (val) => {
                    this.Search(val);
                }
            );
    }

    private Search(val){
        this.apiService.SearchByActor(val);
    }

    private PlaceLoading(){
        let loadingRow = [{
            show_id: -2,
            show_title: 'Loading results...'
        }];
        this.apiService.results.next(loadingRow);
    }
}
