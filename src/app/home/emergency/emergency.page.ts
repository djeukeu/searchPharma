import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Phone } from './phone.model';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage implements OnInit {

  value = firebase.database();
  phones: Phone[];

  constructor(private callNumber: CallNumber) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.fetchData();
  }

  fetchData() {
    this.phones = [];
    this.value.ref('emergency').on('value', data => {
      // tslint:disable-next-line: forin
      for (const key in data.val()) {
        this.phones.push({...data.val()[key], id: key}) ;
      }
    });
  }

  call(number: string) {
    this.callNumber.callNumber(number, true).then(resp => {
      console.log('Call', resp);
    })
      .catch(err => {
        console.log('Error');
      });
    }

}
