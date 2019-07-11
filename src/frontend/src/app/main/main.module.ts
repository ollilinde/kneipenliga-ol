import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { TableComponent } from './table/table.component';
import { TeamsComponent } from './teams/teams.component';
import { LocationsComponent } from './locations/locations.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { RouterModule } from '@angular/router';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    IndexComponent,
    TableComponent,
    TeamsComponent,
    LocationsComponent,
    PrivacyComponent,
    ImprintComponent,
    RulesComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class MainModule {}
