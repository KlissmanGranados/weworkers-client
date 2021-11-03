import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  innerWidth: number;
  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.aosInit();
  }

  ngAfterViewChecked(){
    if(window.innerWidth !== this.innerWidth){
      this.innerWidth = window.innerWidth
      this.aosInit();
    }
  }

  aosInit(){
    AOS.init({
      disable: this.innerWidth < 800
    });
  }
}
