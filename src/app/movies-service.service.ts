import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private key = environment.api_key

  private movies_api_url = 'https://api.themoviedb.org/3/movie/popular?api_key='+this.key+'&language=en-US&page=1';
  private movies_api_url2 = 'https://api.themoviedb.org/3/movie/popular?api_key='+this.key+'&language=en-US&page=2';

  constructor(private http : HttpClient) { }

  public getMovies():Observable<any>{
    return this.http.get<any>(this.movies_api_url)
    .pipe(
      tap(movie => console.log('Movies : ', movie)),
      catchError(this.handleError)
    )
  }

  public getMovies2():Observable<any>{
    return this.http.get<any>(this.movies_api_url2)
    .pipe(
      tap(movie => console.log('Movies : ', movie)),
      catchError(this.handleError)
    )
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
