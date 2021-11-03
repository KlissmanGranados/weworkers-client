import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPrev(){
    this.router.navigate(['/dashboard/form/five']);
  }

  navigateToPrevItem(){
    this.router.navigate(['/dashboard/form/three']);
  }

}
