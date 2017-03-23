import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';

/*
  Generated class for the Shoplist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shoplist',
  templateUrl: 'shoplist.html'
})
export class ShoplistPage {
  itemindex :Number;
  indexhide :Number;
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemindex = 0;
    this.indexhide = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoplistPage');
  }
  searchclick(){
    
  }
  gridclick(){
    console.log("1111111")
    this.itemindex = 0;
    this.indexhide = 0;
  }
  listclick(){
    console.log("222222")
    this.itemindex = 1;
    this.indexhide = 1;
  }
  commodity_click(){
    this.navCtrl.push(OrderPage);
  }

}
