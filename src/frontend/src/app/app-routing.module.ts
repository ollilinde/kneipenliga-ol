import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './main/index/index.component';
import { TableComponent } from './main/table/table.component';
import { TeamsComponent } from './main/teams/teams.component';
import { LocationsComponent } from './main/locations/locations.component';
import { PrivacyComponent } from './main/privacy/privacy.component';
import { ImprintComponent } from './main/imprint/imprint.component';
import { IsAdminGuard } from './guards/is-admin.guard';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { RulesComponent } from './main/rules/rules.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full',
  },
  {
    path: 'tabelle',
    component: TableComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'kneipen',
    component: LocationsComponent,
  },
  {
    path: 'regelwerk',
    component: RulesComponent,
  },
  {
    path: 'datenschutz',
    component: PrivacyComponent,
  },
  {
    path: 'impressum',
    component: ImprintComponent,
  },
  {
    path: 'ergebnis-eintragen',
    canActivate: [IsLoggedInGuard],
    loadChildren: () =>
      import('./results/results.module').then(m => m.ResultsModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    canActivate: [IsAdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'me',
    canActivate: [IsLoggedInGuard],
    loadChildren: () => import('./me/me.module').then(m => m.MeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
