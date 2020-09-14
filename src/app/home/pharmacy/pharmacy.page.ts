import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Pharmacy } from './pharmacty.model';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.page.html',
  styleUrls: ['./pharmacy.page.scss'],
})
export class PharmacyPage implements OnInit {

  value = firebase.database();
  pharmacys: Pharmacy[];

  constructor(private callNumber: CallNumber) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.fetchData();
  }

  fetchData() {
    this.pharmacys = [];
    this.value.ref('pharmacy').on('value', data => {
      // tslint:disable-next-line: forin
      for (const key in data.val()) {
        this.pharmacys.push({ ...data.val()[key], id: key });
      }
    });
  }

  call(number: string){
    this.callNumber.callNumber(number, true).then(resp => {
      console.log('Call', resp);
    })
    .catch(err => {
      console.log('Error');
    });

  }

}
