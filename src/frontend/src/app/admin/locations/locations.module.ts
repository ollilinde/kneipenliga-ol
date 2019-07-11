import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLocationsRoutingModule } from './locations-routing.module';
import { LocationsFormComponent } from './form/form.component';
import { LocationsAddComponent } from './add/add.component';
import { LocationsEditComponent } from './edit/edit.component';

@NgModule({
  declarations: [LocationsFormComponent, LocationsAddComponent, LocationsEditComponent],
  imports: [
    CommonModule,
    AdminLocationsRoutingModule
  ]
})
export class AdminLocationsModule { }
