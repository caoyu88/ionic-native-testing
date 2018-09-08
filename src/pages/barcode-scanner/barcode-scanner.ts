import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {

  public results: any;
  public openLink = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

  reset() {
    this.results = null;
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      

      if(barcodeData.format && barcodeData.format==='QR_CODE' && barcodeData.text.toLowerCase().startsWith('http')) {
        this.openLink = true;
      }

      this.results = barcodeData;
     }).catch(err => {
         console.log('Error', err);
     });
  }

  lookup() {
    window.open(`http://www.upcindex.com/${this.results.text}`, '_system');
  }

  openUrl() {
    window.open(`${this.results.text}`, '_system');
  }

}
