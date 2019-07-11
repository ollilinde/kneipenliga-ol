import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { MainModule } from './main/main.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { IsAdminGuard } from './guards/is-admin.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    MainModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [IsLoggedInGuard, IsAdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
