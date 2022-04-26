import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movie.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EffectsModule.forRoot([MovieEffects])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
