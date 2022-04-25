import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(window.scrollY>80){
      console.log('dépassé')
    }
  }

  navbar_fixed = false

  @HostListener("window:scroll")

  onScroll(): void{
    if(window.scrollY >= 70){
      console.log("top")
      this.navbar_fixed = true
    }
    if(window.scrollY == 0){
      console.log(window.scrollY)
      this.navbar_fixed = false
    }

  }

}
