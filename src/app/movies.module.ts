import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { MovieEffects } from './movie.effects';

providers: [
  MovieEffects,
  {
    provide: USER_PROVIDED_EFFECTS,
    multi: true,
    useValue: [MovieEffects],
  },
];
