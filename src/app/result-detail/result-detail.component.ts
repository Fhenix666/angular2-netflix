import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { ApiService } from "../providers/api.service";
import { videoEntity } from "../models/video-item.model";

@Component({
    selector: 'app-result-detail',
    templateUrl: './result-detail.component.html',
    styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent {

    private item: videoEntity;
    private posterImg: SafeResourceUrl;

    constructor(
        public apiService: ApiService,
        private _sanitizer: DomSanitizer
    ) {
        this.StartListeningForItem();
    }

    StartListeningForItem(){
        this.apiService.selectedItem.subscribe(
            (res: videoEntity) => {
                this.posterImg = this._sanitizer.bypassSecurityTrustResourceUrl(res.poster);
                this.item = res;
            },
            (err) => {
                this.item = null;
                console.log(err);
            }
        )
    }

}
