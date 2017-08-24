import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toobar_left_list:string[] =['Hi, 请登录', '我要注册', '找回密码'];
  toobar_right_list:string[] =['读者墙', '标签云', '文章归档','友情链接','网址导航','个人简历','关于本站'];
  constructor() { }

  ngOnInit() {
  }

}
