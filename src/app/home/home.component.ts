
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
  public movies2 : IMovie[] = []
  public errMsg = ''
  public pages = this.movies.length

  movieID = 1

  constructor(private movieService : MoviesService) {

  }

  ngOnInit(): void {
    this.getMovies()
    this.getMovies2()
    console.log(this.movies);
  }

  getMovies(){
    this.movieService.getMovies().subscribe({
      next : movies => this.movies.push(...movies.results),
    })
  }

  getMovies2(){
    this.movieService.getMovies2().subscribe({
      next : movies => this.movies2.push(...movies.results),
    })
  }


}


