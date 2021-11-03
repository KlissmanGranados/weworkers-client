import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPrev(){
    this.router.navigate(['/dashboard/form/four']);
  }

  navigateToPrevItem(){
    this.router.navigate(['/dashboard/form/two']);
  }
}
