import { Component } from '@angular/core';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ResultsListComponent } from "./results-list/results-list.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
}
