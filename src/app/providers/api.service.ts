import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { ReplaySubject } from "rxjs";
import {videoEntity} from "../models/video-item.model";


@Injectable()
export class ApiService {

    private _url: string;
    public results: ReplaySubject<videoEntity[]>;
    public selectedItem: ReplaySubject<videoEntity>;

    constructor(
        private _http: Http
    ){
        this._url = 'https://netflixroulette.net/api/api.php?';
        this.results = new ReplaySubject();
        this.selectedItem = new ReplaySubject();
    }

    public SearchByActor(name: string) {
        return new Promise(function(resolve, reject){
            name = encodeURI(name);
            let results: videoEntity;

            this._http.get(this._url + 'actor=' + name).subscribe(
                (val: Response) => {
                    results = val.json();
                    this.SetResultsInfo(results);
                    resolve();
                },
                (err) => {
                    console.log(err);
                    let errorRow = [{
                        show_id: -1,
                        show_title: JSON.parse(err._body).message
                    }];
                    this.SetResultsInfo(errorRow);
                    reject();
                }
            );
        }.bind(this));
    }

    public SetResultsInfo(data) {
        this.results.next(data);
    }

    public SetSelectedItem(item: videoEntity){
        this.selectedItem.next(item);
    }

}