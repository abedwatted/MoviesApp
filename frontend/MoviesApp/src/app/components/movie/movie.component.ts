import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public id: number = -1;
  public title: string = "Default title";
  public content: string = "Default content";
  public toggleValue: boolean = false;
  public valuePriority: any = 1;


  @Input()
  public movie: Movie = new Movie();


  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
  }

  showMovieDetails(): void {
    let id = this.movie.id;
    this.router.navigate(['movies', id]);
  }
}
