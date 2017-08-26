import {Component, Input, OnInit} from '@angular/core';
import {card_list} from "../../mock-data/Constant";

@Component({
  selector: 'app-recommendlist',
  templateUrl: './recommendlist.component.html',
  styleUrls: ['./recommendlist.component.scss']
})
export class RecommendlistComponent implements OnInit {
  @Input('title') title: string;
  list: any[] = card_list;
  constructor() { }

  ngOnInit() {

  }

}
