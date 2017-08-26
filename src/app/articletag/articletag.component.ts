import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articletag',
  templateUrl: './articletag.component.html',
  styleUrls: ['./articletag.component.scss']
})
export class ArticletagComponent implements OnInit {
  tag_list:string[] =['最新文章', '安卓基础', 'java基础','成长'];
  constructor() { }

  ngOnInit() {
  }

}
