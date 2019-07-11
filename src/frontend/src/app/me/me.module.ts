import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { TeamComponent } from './team/team.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamInviteComponent } from './team-invite/team-invite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { MeEffects } from './effects/me.effects';
import { MeService } from './services/me.service';

@NgModule({
  declarations: [
    OverviewComponent,
    TeamComponent,
    TeamCreateComponent,
    TeamInviteComponent,
  ],
  imports: [
    CommonModule,
    MeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([MeEffects]),
  ],
  providers: [MeService],
})
export class MeModule {}
