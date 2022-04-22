import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies-service.service';
import { IMovie } from '../Movies_interface';

@Component({
  selector: 'app-fiml-detail',
  templateUrl: './fiml-detail.component.html',
  styleUrls: ['./fiml-detail.component.scss']
})
export class FimlDetailComponent implements OnInit {


  public movie : IMovie = <IMovie>{}

  constructor(public route : ActivatedRoute, public movieService : MoviesService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getMovieDetail(id)
  }

  get getDate(){
    return
  }

  getMovieDetail(id:any){
    this.movieService.getMovie(id).subscribe({
      next : movie => this.movie = movie
    })

  }

}
