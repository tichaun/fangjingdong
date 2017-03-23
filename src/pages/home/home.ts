import { Component,ViewChild } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { NavController,Platform } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { ShoplistPage } from '../shoplist/shoplist';
import { OrderPage } from '../order/order';
import {InAppBrowser,Network} from 'ionic-native';
import { Userservice } from '../../providers/userservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;
  slides = [{
      image: "assets/img/silder1.jpg",
    },{
      image: "assets/img/seriler2.jpg",
    },{
      image: "assets/img/serlide3.jpg",
    },{
      image: "assets/img/serlider4.jpg",
    }];
  // mySlideOptions = {
	// 	  autoplay:2000,//设置几秒换一次autoplay
	//     initialSlide: 0,//开始时显示第几个
	//     pager:true,//是否显示圆表
	//     loop: true,//是否循环
	//   	speed:300//循环的速度
  // 	};
  constructor(public navCtrl: NavController, public platform:Platform,public userservice:Userservice) {
    this.platform = platform;
    //判断网络
      Network.onDisconnect().subscribe(() => {
        console.log('network was disconnected :-(');
        let str = "网络连接已断开请检查网络";
         this.userservice.showToast(str);

      });
      Network.onConnect().subscribe(() => {
        console.log('network connected!');
        let str = "网络已连接";
         this.userservice.showToast(str);
      });
      if (Network.type == 'unknown') {
        let str = "未知的";
         this.userservice.showToast(str);
      } else if (Network.type == 'none') {
        let str = "没有网络!";
         this.userservice.showToast(str);
      } else if (Network.type == '2g') {
        let str ='当前网络' + Network.type
         this.userservice.showToast(str);
      } else {
        let str = '当前网络' + Network.type;
        this.userservice.showToast(str);   
      }
  }
  ngOnInit(){
    console.log(22222)
  	setInterval(()=>{
  		this.slider.slideNext(300, true);
  	},2000);
    
  }
  // slideChanged(){
  //   if(this.slider.isEnd()==true){
  //       this.slider.slideTo(0, 300, false)
  //   }
  // }
  searchclick(){
    this.navCtrl.push(SearchPage);
  }
  shoplistclick(){
    this.navCtrl.push(ShoplistPage);
  }
  orderclick(){
    this.navCtrl.push(OrderPage);
  }
  wsxcde(){
    console.log("双击");
  }
  openModal(){
    
  }
  scans(){
    this.platform.ready().then(()=>{
      BarcodeScanner.scan().then((barcodeData) => {
     alert(barcodeData.text);
     let str = barcodeData.text;
      let browser = new InAppBrowser(str, '_blank ','location=yes');
	  	browser.show();
      }, (err) => {
         alert("错误="+err)
      });
    })
    
  }

}
