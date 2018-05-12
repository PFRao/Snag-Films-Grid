import { Injectable } from '@angular/core';
import { Film } from './film';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmService {

  constructor(private http: HttpClient) { }

  private filmsUrl = 'api/films';  // URL to web api

  getFilms(): Observable<object> {
    const films = this.http.get('http://www.snagfilms.com/apis/films.json');

    return films;
  }

}
