import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Drug } from './drug.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  value = firebase.database();
  drugs: Drug[];

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.fetchData();
  }

  fetchData(){
    this.drugs = [];
    this.value.ref('drugs').on('value', data => {
      // tslint:disable-next-line: forin
      for (const key in data.val()) {
        this.drugs.push({...data.val()[key], id: key});
      }
    });
  }

}
