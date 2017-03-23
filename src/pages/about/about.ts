import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ShoplistPage } from '../shoplist/shoplist';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  itemindex:Number;
  shoplist = [{shop:"推荐分类",id:1},
              {shop:"潮流女装",id:1},
              {shop:"品牌男装",id:1},
              {shop:"电脑办公",id:1},
              {shop:"首饰珠宝",id:1},
              {shop:"家居用品",id:1},
              {shop:"个人化妆",id:1},
              {shop:"手机数码",id:1},
              {shop:"品牌男装",id:1},
              {shop:"推荐分类",id:1},
              {shop:"潮流女装",id:1},
              {shop:"品牌男装",id:1}];
  shoprow = [{img:'assets/img/dn1.jpg',text:'联想'},
             {img:'assets/img/dn2.jpg',text:'戴尔'},
             {img:'assets/img/dn3.jpg',text:'鸿基'},
             {img:'assets/img/biao1.jpg',text:'天王'},
             {img:'assets/img/biao2.jpg',text:'欧米茄'},
             {img:'assets/img/biao3.jpg',text:'瑞士'},
             {img:'assets/img/dn1.jpg',text:'微软'},
             {img:'assets/img/dn2.jpg',text:'苹果'},
             {img:'assets/img/dn3.jpg',text:'三星'},
             {img:'assets/img/biao1.jpg',text:'华为'},
             {img:'assets/img/biao2.jpg',text:'浪琴'},
             {img:'assets/img/biao3.jpg',text:'劳力士'},
             {img:'assets/img/dn1.jpg',text:'联想'},
             {img:'assets/img/dn2.jpg',text:'联想'},
             {img:'assets/img/dn3.jpg',text:'联想'},
             {img:'assets/img/biao1.jpg',text:'联想'},
             {img:'assets/img/biao2.jpg',text:'联想'},
             {img:'assets/img/biao3.jpg',text:'联想'},]
 

  constructor(public navCtrl: NavController,platform: Platform) {
   this.itemindex = 0;
  }
  searchclick(){

  }
  itemclick(i){
    console.log(i);
   this.itemindex = i;
  }
  shopclick(){
    this.navCtrl.push(ShoplistPage);
  }
  

}
