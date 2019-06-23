import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MoviedbService {

  private api_key = '494260f96e2afbdd08460b970f0d6862';
  private base_url = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `${this.base_url}${query}&api_key=${this.api_key}&language=pt-BR&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, '');
  }

  getQueryforMovie(query: string) {
    const url = `${this.base_url}${query}?api_key=${this.api_key}&language=pt-BR&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, '');
  }

  getHomepageMovies() {
    return this.getQuery('/discover/movie?sort_by=popularity.desc')
      .pipe(map((data: any) => data.results));
  }

  getSearchpageMovies(gotResponse: string) {
    return this.getQuery(`/search/movie?query=${gotResponse}&sort_by=popularity.desc`)
      .pipe(map((data: any) => data.results));
  }

  getMovie(id: string) {
    return this.getQueryforMovie(`/movie/${id}`)
      .pipe(map((data: any) => data));
  }

}
