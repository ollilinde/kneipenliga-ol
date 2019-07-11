import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTeamsRoutingModule } from './teams-routing.module';
import { TeamsAddComponent } from './add/add.component';
import { TeamsEditComponent } from './edit/edit.component';
import { TeamsFormComponent } from './form/form.component';

@NgModule({
  declarations: [TeamsAddComponent, TeamsEditComponent, TeamsFormComponent],
  imports: [
    CommonModule,
    AdminTeamsRoutingModule
  ]
})
export class AdminTeamsModule { }
