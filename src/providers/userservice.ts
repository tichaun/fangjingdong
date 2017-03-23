import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the Userservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Userservice {

  constructor(public http: Http,public toastCtrl: ToastController) {
    console.log('Hello Userservice Provider');
  }
  showToast(toaststr: string) {
    let toast = this.toastCtrl.create({
      message: toaststr,
      duration: 2000,
      position: "middle"
    });
    toast.present(toast);
  }

}
