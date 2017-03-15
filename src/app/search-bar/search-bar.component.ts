import { Component, OnInit } from '@angular/core';
import { ApiService } from "../providers/api.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(
      public apiService: ApiService
  ) { }

  search(){
    this.apiService.SearchByActor('Nicolas');
  }
}
