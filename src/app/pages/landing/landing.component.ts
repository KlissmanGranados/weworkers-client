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

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.aosInit();
    AOS.refresh();
  }

  aosInit(){
    AOS.init({
      disable: this.innerWidth < 990
    });
  }

  ngAfterViewChecked(){
    if(window.innerWidth !== this.innerWidth){
      this.innerWidth = window.innerWidth
      this.aosInit();
    }
  }

}
