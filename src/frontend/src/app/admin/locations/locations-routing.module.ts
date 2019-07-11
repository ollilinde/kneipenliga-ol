import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsAddComponent } from './add/add.component';
import { LocationsEditComponent } from './edit/edit.component';

const routes: Routes = [{
  path: 'add',
  component: LocationsAddComponent,
}, {
  path: 'edit/:id',
  component: LocationsEditComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLocationsRoutingModule { }
