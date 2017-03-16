import { Component } from '@angular/core';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ResultsListComponent } from "./results-list/results-list.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private storageEnabled: boolean;

    constructor(){
        this.CheckStorageAvailability();
    }

    CheckStorageAvailability(){
        if (typeof(Storage) !== "undefined") {
            this.storageEnabled = true;
        } else {
            alert('Please, enable LocalStorage in your browser.');
            this.storageEnabled = false;
        }
    }
}
