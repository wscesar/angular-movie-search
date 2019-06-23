import { Component } from '@angular/core';
import { MoviedbService } from './services/moviedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  title = 'The Movie Database';

  constructor(public _ms: MoviedbService) {
    this._ms.getHomepageMovies().subscribe(data => console.log(data));
  }

}
