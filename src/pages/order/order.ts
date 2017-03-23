import { Component } from '@angular/core';
import { ModalController,NavController, NavParams,PopoverController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { TatostPage } from '../tatost/tatost';
import { PopoversPage } from '../popovers/popovers';
import { ShopimgPage } from '../shopimg/shopimg';
/*
  Generated class for the Order page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  slides = [{
      image: "assets/img/shoplist1.jpg",
    },{
      image: "assets/img/shoplist2.jpg",
    },{
      image: "assets/img/shoplist3.jpg",
    },{
      image: "assets/img/shoplist4.jpg",
    },{
      image: "assets/img/shoplist5.jpg",
    }];
    segmentModel:any;
    detailsModel:any;
    evaluate :any;
    imghidden:Number;
    follows : String;
    numss = "";
    names = "";
    index = '';
    homecart = "";
    numbadge :number;
    badges :boolean;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public modalCtrl: ModalController,
   public popoverCtrl: PopoverController) {
    this.segmentModel = "0";
    this.detailsModel = '0';
    this.evaluate = '0';
    this.imghidden = 0;
    this.follows = "关注";
    this.names = "黑带 钢盘 罗马";
    this.numss = "1";
    this.homecart = "苏州市工业园区星湖小区56栋2单元";
    this.numbadge = 0;
    this.badges = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  
  onSlideTap(event){
    console.log(event);
     let modal = this.modalCtrl.create(ShopimgPage,{'slides':this});
    modal.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoversPage);
    popover.present({
      ev: myEvent
    });
  }
  quan(){
    this.index = '1';
    let modal = this.modalCtrl.create(TatostPage,{'index':this});
    modal.present();
  }
  promotions(){
    this.index = '2';
    let modal = this.modalCtrl.create(TatostPage,{'index':this});
    modal.present();
  }
  distribution(){
    this.index = '3';
    let modal = this.modalCtrl.create(TatostPage,{'index':this});
    modal.present();
  }
  selected(){
    this.index = '0';
    let modal = this.modalCtrl.create(TatostPage,{'index':this});
    modal.present();
  }
  join(){
    this.badges = false;
    this.numbadge++;
  }
  shopcart(){
    let modal = this.modalCtrl.create(TatostPage,{"index":this});
    modal.present();
  }
  follow(){
    if(this.imghidden == 0){
      this.imghidden = 1;
      this.follows = "已关注";
    }else if(this.imghidden == 1){
      this.imghidden = 0;
      this.follows = "关注";
    }
    
  }

}
