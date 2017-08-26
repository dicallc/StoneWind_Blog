import { Component, OnInit } from '@angular/core';
import {hot_tag_list} from "../../mock-data/Constant";

@Component({
  selector: 'app-hottag',
  templateUrl: './hottag.component.html',
  styleUrls: ['./hottag.component.scss']
})
export class HottagComponent implements OnInit {
  list: any[] = hot_tag_list;
  constructor() { }

  ngOnInit() {

  }

}
