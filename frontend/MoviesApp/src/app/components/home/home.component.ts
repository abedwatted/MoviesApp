import { MoviesService } from './../../service/movies.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public noteSubscription: Subscription = new Subscription();

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getMovies();
  }

  ngOnInit(): void {
    this.getMovies();
  }

  async getMovies() {
    await this.movieService.getAllMovies()
      .subscribe((data) => {
        this.movies = data;
      }, (err) => {
        console.log(err);
      });
  }
}
