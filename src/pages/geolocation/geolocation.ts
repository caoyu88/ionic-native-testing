import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  public location: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private geolocation: Geolocation
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
    // const subscription = 
    //               this.geolocation.watchPosition()
    //                   .pipe(
    //                     filter((p) => p.coords !== undefined) 
    //                   ).subscribe(position => {
    //                     console.log(position.coords.longitude + ' ' + position.coords.latitude);
    //                     this.location = {
    //                       lat: position.coords.latitude,
    //                       lng: position.coords.longitude
    //                     }
    //                   });
  }

  getGeolocation() {
    let options = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 20000
    };
    this.geolocation.getCurrentPosition(options).then(resp => {
      this.location = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      }
    }).catch((error) => {
      alert(error.code + ' : ' + error.message);
    });

  }

}
