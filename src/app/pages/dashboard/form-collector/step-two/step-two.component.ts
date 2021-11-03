import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPrev(){
    this.router.navigate(['/dashboard/form/three']);
  }

  navigateToPrevItem(){
    this.router.navigate(['/dashboard/form/one'])
  }

}
