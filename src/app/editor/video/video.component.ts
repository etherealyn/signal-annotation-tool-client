import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: [ './video.component.scss' ]
})
export class VideoComponent implements OnInit {
  @Input() source: String;
  @Output() playerReady: EventEmitter<any> = new EventEmitter();

  private api: VgAPI;
  url: String = 'http://localhost:8080/api/projects/files';

  constructor() {
  }

  ngOnInit() {
  }

  onPlayerReady$(api: VgAPI) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.timeUpdate.subscribe(x => {
      console.log(this.api.getDefaultMedia().currentTime, this.api.getDefaultMedia().duration);
    });

    this.playerReady.emit(api);
  }
}
