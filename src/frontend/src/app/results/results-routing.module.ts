import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterComponent } from './enter/enter.component';

const routes: Routes = [
  {
    path: ':opponentId',
    pathMatch: 'full',
    component: EnterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsRoutingModule {}
