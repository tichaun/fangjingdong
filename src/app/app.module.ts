import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PersonalPage } from '../pages/personal/personal';
import { NewsPage } from '../pages/news/news';
import { LoginPage } from '../pages/login/login';
import { OrderPage } from '../pages/order/order';
import { SearchPage } from '../pages/search/search';
import { ShoplistPage } from '../pages/shoplist/shoplist';
import { TatostPage } from '../pages/tatost/tatost';
import { PopoversPage } from '../pages/popovers/popovers';
import { ShopimgPage } from '../pages/shopimg/shopimg';

import { Userservice } from '../providers/userservice'; 

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PersonalPage,
    NewsPage,
    LoginPage,
    OrderPage,
    SearchPage,
    ShoplistPage,
    TatostPage,
    PopoversPage,
    ShopimgPage
  ],
  imports: [
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages:true,
                    // backButtonText: '',
                    // iconMode: 'ios',
                    // modalEnter: 'modal-slide-in',
                    // modalLeave: 'modal-slide-out',
                    // tabsPlacement: 'bottom',
                    // pageTransition: 'ios'
                })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PersonalPage,
    NewsPage,
    LoginPage,
    OrderPage,
    SearchPage,
    ShoplistPage,
    TatostPage,
    PopoversPage,
    ShopimgPage
  ],
  providers: [
    Userservice,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
