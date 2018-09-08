import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion';


@Component({
  selector: 'page-device-motion',
  templateUrl: 'device-motion.html',
})
export class DeviceMotionPage {
  public data: any;
  private subscription: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private deviceMotion: DeviceMotion) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceMotionPage');
  }

  startWatching() {
    var options: DeviceMotionAccelerometerOptions = {
      frequency:500
    };
    this.subscription = this.deviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration);
      this.data = acceleration;
    });
  }

  stopWatching() {
    this.subscription.unsubscribe();
  }
}
