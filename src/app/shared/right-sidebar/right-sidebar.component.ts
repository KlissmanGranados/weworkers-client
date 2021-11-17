import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {
  userId: number;

  constructor(private authService: AuthService, private route: Router) {
    this.userId = this.authService.getUserRole().rolesid;
  }

  ngOnInit(): void {
  }

  singOut(): void {
    this.authService.singOut();
    this.route.navigate(['/']);
  }

  // redirect(){
  //   if(this.authService.getUserRole().rolesid === 1){
  //     this.route.navigate(['/dashboard/dashboard-freelancer']);
  //   }else{
  //     this.route.navigate(['/dashboard/dashboard-collector']);
  //   }
  // }
}
