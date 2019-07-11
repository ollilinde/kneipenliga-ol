import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { EnterComponent } from './enter/enter.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultsService } from './services/results.service';
import { ResultsEffects } from './effects/results.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [EnterComponent, FormComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ResultsEffects]),
  ],
  providers: [ResultsService],
})
export class ResultsModule {}
