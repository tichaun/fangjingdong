import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  shoprow = [{img:'assets/img/dn1.jpg',
            text:'Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/128GB SSD闪存 MMGF2CH/A)',
            pcis:3333.00,dis:false},
             {img:'assets/img/dn2.jpg',
             text:'Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/128GB SSD闪存 MMGF2CH/A)',
             pcis:4333.00,dis:false}]
  selects:boolean = false;
  price :number;
  settlement:number;
  arrayshop :any;
  constructor(public navCtrl: NavController) {
    console.log(this.selects);
    this.price = 0.00;
    this.settlement = 0;
    this.arrayshop = "";
  }

  onchange(event,i){
     let jia = 0;
     let arrleng = 0 ;
     let k = 0;
     for (var index = 0; index < this.shoprow.length; index++) {
        if (this.shoprow[index].dis == true) {
          jia +=  this.shoprow[index].pcis; 
          arrleng ++;
          console.log(jia+"===="+arrleng);
          k++; 
          console.log("k="+k);
        } 
        if(k == this.shoprow.length){
          this.selects = true;
        }else{
          this.selects = false;
        }
      }
      this.price = jia;
      this.settlement = arrleng;
  }
  onch(event){
    console.log("quanxuan");
    if(this.selects == true){
      let jia = 0;
      let arrleng = 0 ;
      for (var index = 0; index < this.shoprow.length; index++) {
        this.shoprow[index].dis = true;
        jia +=  this.shoprow[index].pcis;  
      }
      arrleng = this.shoprow.length;
      this.price = jia;
      console.log(this.price);
      this.settlement = arrleng;
    }else if(this.selects == false){
      console.log("quanxuansssss");
      let kk = 0;
      for (var index = 0; index < this.shoprow.length; index++) {
        console.log(this.shoprow[index].dis);
        if(this.shoprow[index].dis == true){
          kk++; 
          console.log("kk="+kk);
        }
        if (kk == this.shoprow.length ) {
          for (var ii = 0; ii < this.shoprow.length; ii++) {
            this.shoprow[ii].dis = false; 
          }
          this.price = 0.00;
          this.settlement = 0;
        }
      }
      
    }

  }

}
