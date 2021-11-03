import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  personalInformation: any;

  constructor(private router: Router){
  }

  ngOnInit(): void {
  }

  navigateToPrev(){
    this.router.navigate(['/dashboard/form/two']);
  }

}
