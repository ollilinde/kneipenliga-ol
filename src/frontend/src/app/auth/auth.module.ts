import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { ResetComponent } from './reset/reset.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './effects/auth.effects';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RecoverComponent,
    ResetComponent,
    RegisterComponent
  ],
  providers: [
    AuthService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
