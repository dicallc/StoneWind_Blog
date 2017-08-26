import { Component, OnInit } from '@angular/core';
import {web_statistics} from "../../mock-data/Constant";

@Component({
  selector: 'app-webstatistics',
  templateUrl: './webstatistics.component.html',
  styleUrls: ['./webstatistics.component.scss']
})
export class WebstatisticsComponent implements OnInit {
  list: any[] = web_statistics;
  constructor() { }

  ngOnInit() {
  }

}
