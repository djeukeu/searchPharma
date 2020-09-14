import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Drug } from '../drug.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drugdetail',
  templateUrl: './drugdetail.page.html',
  styleUrls: ['./drugdetail.page.scss'],
})
export class DrugdetailPage implements OnInit {

  drug: Drug;
  value = firebase.database();
  drugId;

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.loadDrug();
  }

  ionViewWillEnter(){
    this.loadDrug();
  }

  loadDrug(){
    this.activatedroute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('drugId')){
        return;
      }
      this.drugId = paramMap.get('drugId');
      this.value.ref('drugs').on('value', data => {
        this.drug = {...data.val()[this.drugId], id: this.drugId};
      });
    });
    console.log(this.drug);
  }

}
