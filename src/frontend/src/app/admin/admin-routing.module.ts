import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'teams',
  loadChildren: () => import('./teams/teams.module').then(m => m.AdminTeamsModule),
}, {
  path: 'kneipen',
  loadChildren: () => import('./locations/locations.module').then(m => m.AdminLocationsModule),
}, {
  path: 'saisons',
  loadChildren: () => import('./seasons/seasons.module').then(m => m.AdminSeasonsModule),
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
