import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsAddComponent } from './add/add.component';
import { TeamsEditComponent } from './edit/edit.component';

const routes: Routes = [{
  path: 'add',
  component: TeamsAddComponent,
}, {
  path: 'edit/:id',
  component: TeamsEditComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTeamsRoutingModule { }
