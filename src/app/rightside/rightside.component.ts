import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.scss']
})
export class RightsideComponent implements OnInit {
  recommond_name_1:string='置顶推荐';
  recommond_name_2:string='热门文章';
  constructor() { }

  ngOnInit() {
  }

}
