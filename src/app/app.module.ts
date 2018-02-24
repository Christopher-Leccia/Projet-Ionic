import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PanierPage } from '../pages/panier/panier';
import { AddPage } from '../pages/add/add';
import { ModificationPage } from '../pages/modification/modification';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Pizzaservice } from '../providers/pizzaservice/pizzaservice';
import { Vibration } from '@ionic-native/vibration';
import { Camera } from '@ionic-native/camera';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PanierPage,
    AddPage,
    ModificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PanierPage,
    AddPage,
    ModificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Pizzaservice,
    Vibration,
    Camera,

  ]
})
export class AppModule {}
