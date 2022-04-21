import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IMovie } from './Movies_interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies_api_url = 'https://api.themoviedb.org/3/movie/popular?api_key=958f51dbf188c794e7faad23ae1ed6ff&language=en-US&page=1';

  constructor(private http : HttpClient) { }

  public getMovies():Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.movies_api_url)
    // .pipe(
    //   tap(movie => console.log('Movies : ', movie)),
    //   catchError(this.handleError)
    // )

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {

      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
