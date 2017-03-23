import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

/*
  Generated class for the Tatost page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tatost',
  templateUrl: 'tatost.html'
})
export class TatostPage {
  character:any;
  shopnum : number;
  buthidden:boolean;
  itemindex:number;
  listarray:any;
  items : number;
  characters = [{
        name: '天骏',
        image : "assets/img/shoplist1.jpg",
        quote: '￥3333.00',
        shopnumber : '207773',
        num : 1,
        footer: false,
        items: [
          { title: '白盘 钢带 罗马', note: '0' },
          { title: '黑盘 钢带 罗马', note: '1' },
          { title: '白盘 皮带 罗马', note: '2' },
          { title: '白盘 棕带 罗马', note: '3' },
          { title: '玫瑰金钢带 罗马', note: '4' },
          { title: '黑盘 皮带 罗马', note: '5' }
        ]
        },{
          name: '优惠券',
          quote: '暂无优惠券可领',
          image: 'assets/img/bkw.png',
        },{
          name: '促销',
          quote: '此价格不与套装优惠同时享受',
        },{
          name: '配送至',
          quote: '苏州市工业园区星湖小区56栋2单元',
        }
      ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public params: NavParams,
              public viewCtrl: ViewController) {
      
    this.character = this.params.get('index');
    console.log(this.character);
    console.log(this.character.index);
    if(this.character.index == 0){
       this.itemindex = 0;
       this.listarray = this.characters[0];
       console.log(this.listarray)
    }else if(this.character.index == 1){
      this.itemindex = 1;
      this.listarray = this.characters[1];
       console.log(this.listarray)
    }else if(this.character.index == 2){
      this.itemindex = 2;
      this.listarray = this.characters[2];
       console.log(this.listarray)
    }else if(this.character.index == 3){
      this.itemindex = 3;
      this.listarray = this.characters[3];
       console.log(this.listarray)
    }
  //  console.log(this.params.get('index'));
    console.log(1111111);
    this.buthidden = false;
    this.shopnum = 1;
    // this.itemindex = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TatostPage');
  }
  dismiss() {
    console.log(this.shopnum);
    console.log(this.character.numss);
    this.character.numss = this.shopnum;
    console.log(this.character.numss);
    this.viewCtrl.dismiss();
  }
  reduce(){
    this.shopnum =this.shopnum - 1;
    if(this.shopnum == 0){
      this.buthidden = true;
    }
  }
  plus(){
    this.buthidden = false;
    this.shopnum =this.shopnum + 1;
  }
  itemclick(i,it){
    console.log(it.title);
    this.items = i;
  }

}
