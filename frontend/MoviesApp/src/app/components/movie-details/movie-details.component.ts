import { MoviesService } from './../../service/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movies: Movie[] = [];
  public movie: Movie = new Movie();
  public movieId = 0;
  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    try {

      this.movieId = Number(this.route.snapshot.paramMap.get('id'));
      if (this.movieId) {
        this.moviesService.getNoteById(this.movieId).subscribe((movie) => {
          this.movie = movie;
        }, (err) => {
          alert("something went wrong");
        });
      } else {
        this.movie = new Movie();
      }
    } catch (err) {
      alert(err);
    }
  }

  async getMovies() {
    await this.moviesService.getAllMovies()
      .subscribe((data) => {
        this.movies = data;
      }, (err) => {
        console.log(err);
      });
  }
}
