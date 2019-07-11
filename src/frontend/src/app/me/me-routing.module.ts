import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { TeamComponent } from './team/team.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamInviteComponent } from './team-invite/team-invite.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'team/create',
    component: TeamCreateComponent,
  },
  {
    path: 'team/invite',
    component: TeamInviteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeRoutingModule {}
