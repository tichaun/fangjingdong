import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Userservice } from '../../providers/userservice';

/*
  Generated class for the Personal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})
export class PersonalPage {
  username:String;
  networkstr:String;

  constructor(public navCtrl: NavController, public navParams: NavParams,public userservice: Userservice) {
    this.username = "登录/注册";
    //判断网络
      // Network.onDisconnect().subscribe(() => {
      //   console.log('network was disconnected :-(');
      //   let str = "网络连接已断开请检查网络";
      //    this.userservice.showToast(str);
      // });
      // Network.onConnect().subscribe(() => {
      //   console.log('network connected!');
      //   let str = "网络已连接";
      //    this.userservice.showToast(str);
      // });
      // if (Network.connection == 'unknown') {
      //   let str = "未知的";
      //    this.userservice.showToast(str);
      //   this.networkstr = 'unknown';
      // } else if (Network.connection == 'none') {
      //   let str = "没有网络!";
      //    this.userservice.showToast(str);
      //   this.networkstr = 'none';
      // } else if (Network.connection == '2g') {
      //   let str ='当前网络' + Network.connection
      //    this.userservice.showToast(str);
      //   this.networkstr = '2g';
      // } else {
      //   let str = '当前网络' + Network.connection;
      //   this.userservice.showToast(str);
      //   this.networkstr = 'good';
      // }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }
  networkss(){
    console.log(this.networkstr);
    
  }

}
