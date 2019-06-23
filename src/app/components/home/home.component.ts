import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  newMovies: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) {

    this.loading = true;

    this.moviedb.getHomepageMovies()
      .subscribe((data: any) => {

        console.log(data);
        this.newMovies = data;
        this.loading = false;
      });

  }

}
