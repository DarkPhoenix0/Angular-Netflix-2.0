import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  login = false

  scrollTop(){
    window.scrollTo(0,0)
    console.log('up')
  }
}


