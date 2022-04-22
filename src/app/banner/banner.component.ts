import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../Movies_interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() movie : IMovie= <IMovie>{}

  constructor() { }

  ngOnInit(): void {
  }

}
