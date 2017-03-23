import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Popovers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-popovers',
  templateUrl: 'popovers.html'
})
export class PopoversPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }

}
