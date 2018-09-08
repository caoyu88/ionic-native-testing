import { BarcodeScannerPage } from './../pages/barcode-scanner/barcode-scanner';
import { GeolocationPage } from './../pages/geolocation/geolocation';
import { VibrationPage } from './../pages/vibration/vibration';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vibration } from '@ionic-native/vibration';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DeviceMotionPage } from '../pages/device-motion/device-motion';
import { DeviceMotion } from '@ionic-native/device-motion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VibrationPage,
    GeolocationPage,
    BarcodeScannerPage,
    DeviceMotionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VibrationPage,
    GeolocationPage,
    BarcodeScannerPage,
    DeviceMotionPage
  ],
  providers: [
    Vibration,
    Geolocation,
    BarcodeScanner,
    DeviceMotion,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
