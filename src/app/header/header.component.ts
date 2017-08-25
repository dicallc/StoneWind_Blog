import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toobar_left_list:string[] =['Hi, 请登录', '我要注册', '找回密码'];
  toobar_right_list:string[] =['读者墙', '标签云', '文章归档','友情链接','网址导航','个人简历','关于本站'];
  navigation_list=[{name:'首页',icon:'icon-shouye',select:true},{name:'android前沿学习',icon:'icon-zhifeiji',select:false} ,{name:'android心得',icon:'icon-xinde',select:false} ,{name:'android开发者须知',icon:'icon-jiuhuashantubiao-',select:false}];
  constructor() {

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
