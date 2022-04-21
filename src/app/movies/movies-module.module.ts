import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesFormComponent } from './movies-form/movies-form.component';



@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesFormComponent,

  ],
  imports: [
    CommonModule,
  ]
})
export class MoviesModuleModule { }
