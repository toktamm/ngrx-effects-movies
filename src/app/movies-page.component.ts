import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  template: `
    <li *ngFor="let movie of movies">
      {{ movie.nane }}
    </li>
  `,
})
export class MoviesPageComponent {
  movies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService
      .getAll()
      .subscribe((movies: Movie[]) => (this.movies = movies));
  }
}
