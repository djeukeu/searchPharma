import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrugdetailPageRoutingModule } from './drugdetail-routing.module';

import { DrugdetailPage } from './drugdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrugdetailPageRoutingModule
  ],
  declarations: [DrugdetailPage]
})
export class DrugdetailPageModule {}
