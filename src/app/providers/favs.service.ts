import { Injectable } from '@angular/core';
import { ReplaySubject } from "rxjs";
import {Fav} from "../models/fav.model";

@Injectable()
export class FavsService {

    private _currentFav;
    private _localStorageArray: any[] = [];

    constructor() {

    }

    AddFavQuery(query: string){
        this._currentFav = localStorage.getItem('soa:' + query);

        if(this._currentFav == null){
            localStorage.setItem('soa:' + query, "1");
        }else{
            let newVal = parseInt(this._currentFav) +1;
            localStorage.setItem('soa:' + query, newVal.toString());
        }

        console.log(localStorage);
    }

    LoadFavsOrderDesc(): Fav[] {
        let newFav = new Fav();
        let query, count;
        this._localStorageArray = [];

        for (let i = 0; i < localStorage.length; i++){
            if (localStorage.key(i).substring(0,4) == 'soa:' &&
                Number.isInteger(parseInt(localStorage[localStorage.key(i)]))) { // <- string value equivalent to integer === true

                query = localStorage.key(i).replace('soa:', '');
                count = parseInt(localStorage[localStorage.key(i)]);
                newFav = {
                    query: query,
                    favCount: count
                };
                this._localStorageArray.push(newFav);
            }
        }

        this._localStorageArray =  this._localStorageArray.sort(
            function (a,b) {
                if (a.favCount < b.favCount)
                    return 1;
                if (a.favCount > b.favCount)
                    return -1;
                return 0;
            }
        );

        return this._localStorageArray.slice(0,3);
    }

    public ExistentFav(query){
        let doesExist: boolean = false;

        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) == 'soa:' + query){
                doesExist = true;
            }
        }

        return doesExist;
    }

}