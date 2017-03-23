import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Userservice } from '../../providers/userservice';
// import { Keyboard } from 'ionic-native';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  searchcvalue = "";
  searchs =new Array;
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userservice : Userservice,
              // public keyboard : Keyboard,
              public storage:Storage) {}

  ionViewDidLoad() {
    console.log(this.searchs);
    this.storage.get('search').then(data=>{
      console.log(data);
      
      for(var i=0;i<data.length;i++){
        console.log(data[i]);
        this.searchs.push(data[i])
      }
    }).catch(error=>{
      console.log(error)
    })
  }
  searchclick(){
    let searchz = this.searchcvalue;
    console.log(searchz)
    if (searchz == ""||searchz == undefined) {
      let toaststr = "请输入要搜索的商品";
      this.userservice.showToast(toaststr);
      return ;
    }
    this.searchs.push(searchz);
    this.storage.set('search',this.searchs);
  }
  shoe(){
   this.searchs = [];
   this.storage.set('search'," ");
  }

}
