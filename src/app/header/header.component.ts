import { Component, OnInit } from '@angular/core';
import {mock_navigation_list, mock_toobar_left_list, mock_toobar_right_list} from "../../mock-data/Constant";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toobar_left_list:string[] =mock_toobar_left_list;
  toobar_right_list:string[] =mock_toobar_right_list;
  navigation_list=mock_navigation_list;

  constructor(){

  }
  ngOnInit() {
  }
  part_index=0;
  navigationClick(index:number){
    this.navigation_list[this.part_index].select=false;
    this.navigation_list[index].select=true
    this.part_index=index;
    console.log(index);
  }
}
