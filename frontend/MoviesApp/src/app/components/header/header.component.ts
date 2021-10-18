import { Movie } from 'src/app/model/movie';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public movie: Movie = new Movie;

  @Output()
  public movieClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  public pickedMovie(): void {

    this.movieClicked.emit(this.movie.title);
  }
}
