import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieComponent } from './serie/serie.component';
import { NewFilmsComponent } from './new-films/new-films.component';
import { FilmsComponent } from './films/films.component';
import { FavoritComponent } from './favorit/favorit.component';
import { HomeComponent } from './home/home.component';
import { FimlDetailComponent } from './fiml-detail/fiml-detail.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'series', component:SerieComponent},
  {path:'nouveaux_films', component:NewFilmsComponent},
  {path:'fimls', component:FilmsComponent},
  {path:'fiml/:id', component:FimlDetailComponent},
  {path:'ma_liste', component:FavoritComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
