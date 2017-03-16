import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiService } from "../providers/api.service";
import {FavsService} from "../providers/favs.service";
import {Fav} from "../models/fav.model";


@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

    private _inputText;
    public top3favs: Fav[];
    private _favButtonDisabled: boolean;
    public _highlight: boolean;

    constructor(
        public apiService: ApiService,
        public favsService: FavsService
    ) {
        this._favButtonDisabled = true;
        this._highlight = false;

        this._inputText = new FormControl();
        this._inputText
            .valueChanges
            .debounceTime(500)
            .subscribe(
                (val) => {
                    this.Search(val);
                }
            );

        this.top3favs = this.favsService.LoadFavsOrderDesc();
    }

    private Search(val){
        this.apiService.SearchByActor(val).then(
            () => {
                this._favButtonDisabled = false;
                if(this.favsService.ExistentFav(val)){
                    this.AddFav(val);
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }

    private PlaceLoading(){
        let loadingRow = [{
            show_id: -2,
            show_title: 'Loading results...'
        }];
        this.apiService.SetResultsInfo(loadingRow);
        this._favButtonDisabled = true;
    }

    private AddFav(query){
        this.favsService.AddFavQuery(query);
        this.top3favs = this.favsService.LoadFavsOrderDesc();
        this._highlight = true;

        setTimeout(() => {
            this._highlight = false;
        }, 2000)
    }
}
