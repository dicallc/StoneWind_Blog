import { Component, OnInit } from '@angular/core';
import {callboard_list} from "../../mock-data/Constant";
@Component({
  selector: 'app-callboard',
  templateUrl: './callboard.component.html',
  styleUrls: ['./callboard.component.scss']
})
export class CallboardComponent implements OnInit {
  list: any[] = callboard_list;
  constructor() { }

  ngOnInit() {

  }

}
