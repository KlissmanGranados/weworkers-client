import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import {PrimeNGConfig} from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar-general',
  templateUrl: './navbar-general.component.html',
  styleUrls: ['./navbar-general.component.css']
})
export class NavbarGeneralComponent implements OnInit {
  gfg: MenuItem[];
  message: MenuItem[];
  constructor(private primengConfig: PrimeNGConfig, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.gfg = [
      {
        label: 'Mis Opciones',
        items: [
          {
            label: 'Mi perfil',
            routerLink: ['/dashboard/profile']
          },
          {
            label: 'Cerrar sesión',
            command: () => this.singOut()
          }
        ]
      },
      {
        label: 'Ayuda',
        items: [
          {
            label: 'Como funciona'
          }
        ]
      }
    ];

    this.message = [
      {
        label: 'Mis mensajes',
        items: [
          {
            label: 'HTML 1'
          },
          {
            label: 'HTML 2'
          }
        ]
      }
    ];
  }


  singOut(): void {
    this.authService.singOut();
    this.route.navigate(['/']);
  }
}


