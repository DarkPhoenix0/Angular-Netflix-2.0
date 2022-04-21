
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies-service.service';
import { IMovie } from '../Movies_interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies : IMovie[] = []
  public errMsg = ''

  constructor(private movieService : MoviesService) {

  }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(){
    this.movieService.getMovies().subscribe({
      next : movies => console.log(movies),
      error : err => console.log(err),
    })
  }

}


