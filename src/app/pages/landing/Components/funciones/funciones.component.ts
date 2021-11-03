import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent implements OnInit {
  innerWidth: number
  constructor() { }

  ngOnInit(): void {
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
