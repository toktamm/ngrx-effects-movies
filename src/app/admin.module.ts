import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movie.effects';

@NgModule({
  imports: [EffectsModule.forFeature([MovieEffects])],
})
export class MovieModule {}
