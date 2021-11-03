import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css']
})
export class PoliticasComponent implements OnInit {
  innerWidth: number
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.aosInit();
  }

  aosInit(){
    AOS.init({
      disable: this.innerWidth < 800
    });
  }

  ngAfterViewChecked(){
    if(window.innerWidth !== this.innerWidth){
      this.innerWidth = window.innerWidth
      this.aosInit();
    }
  }

}
