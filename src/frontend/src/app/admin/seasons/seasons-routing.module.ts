import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeasonsAddComponent } from './add/add.component';

const routes: Routes = [{
  path: 'add',
  component: SeasonsAddComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSeasonsRoutingModule { }
