import { Movie } from './../model/movie';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  public movies: Movie[] = [];
  public path = 'http://localhost:3000';

  constructor(private http: HttpClient) {


  }

  public getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + '/movies')
      .pipe(catchError(this.handleError));
  }

  getNoteById(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.path + "/:id=" + id);
  }

  handleError(error: HttpErrorResponse) {
    return throwError('something went wrong');
  }
}

