import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  movies: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) { }

  search(gotResponse: string) {
    console.log(gotResponse);

    this.loading = true;
    this.moviedb.getSearchpageMovies(gotResponse).subscribe((data: any) => {
      console.log(data);

      this.movies = data;
      this.loading = false;
    });
  }
}
