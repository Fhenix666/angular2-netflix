import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { ApiService } from "./providers/api.service";

@NgModule({
    declarations: [
        AppComponent,
        SearchBarComponent,
        ResultsListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
