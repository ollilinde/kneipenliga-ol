import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsAddComponent } from './add/add.component';
import { SeasonsFormComponent } from './form/form.component';

@NgModule({
  declarations: [
    SeasonsAddComponent,
    SeasonsFormComponent
  ],
  imports: [
    CommonModule,
    AdminSeasonsRoutingModule
  ]
})
export class AdminSeasonsModule { }
