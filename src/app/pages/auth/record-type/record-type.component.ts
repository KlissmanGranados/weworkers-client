import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-type',
  templateUrl: './record-type.component.html',
  styleUrls: ['./record-type.component.css']
})
export class RecordTypeComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  TuNavigate(path:string){
    this.router.navigate([path]);
  }

}
