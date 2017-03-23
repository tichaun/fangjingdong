import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

/*
  Generated class for the Shopimg page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shopimg',
  templateUrl: 'shopimg.html'
})
export class ShopimgPage {
  imgarray:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {

    this.imgarray = this.navParams.get('slides').slides;
    console.log(this.imgarray)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopimgPage');
  }
  onSlideTap(){
    this.viewCtrl.dismiss();
  }

}
