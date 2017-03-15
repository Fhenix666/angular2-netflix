import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { ReplaySubject } from "rxjs";


@Injectable()
export class ApiService {

    private _url: string;
    public results: ReplaySubject<any[]>;

    constructor(
        private _http: Http
    ){
        this._url = 'https://netflixroulette.net/api/api.php?';
        this.results = new ReplaySubject();
    }

    public SearchByActor(name: string) {
        name = encodeURI(name);

        this._http.get(this._url + 'actor=' + name).subscribe(
            (val: Response) => {
                this.results.next(val.json());
            },
            (err) => {
                console.log(err);
                if(err.status != 200){
                    let errorRow = [{
                        show_id: -1,
                        show_title: JSON.parse(err._body).message
                    }];
                    this.results.next(errorRow);
                }
            }
        );
    }

}