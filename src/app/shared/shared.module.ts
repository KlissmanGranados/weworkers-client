import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {MultiSelectModule} from 'primeng/multiselect';
import {MenuModule} from 'primeng/menu';

import { NavbarGeneralComponent } from './navbar-general/navbar-general.component';
import { FooterGeneralComponent } from './footer-general/footer-general.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BadgeModule } from 'primeng/badge';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { RippleModule } from 'primeng/ripple';
import { ChipsModule } from 'primeng/chips';
import {PaginatorModule} from 'primeng/paginator';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiDropdownComponent } from './multi-dropdown/multi-dropdown.component';
import { FiltersService } from '../core/services/filters.service';
import { AuthService } from '../core/services/auth.service';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationService } from '../core/services/pagination.service';
import { LoadComponent } from './load/load.component';



@NgModule({
  declarations: [
    NavbarGeneralComponent,
    FooterGeneralComponent,
    SidebarComponent,
    RightSidebarComponent,
    MultiDropdownComponent,
    PaginationComponent,
    LoadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    MultiSelectModule,
    RippleModule,
    MenuModule,
    ChipsModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarGeneralComponent,
    FooterGeneralComponent,
    SidebarComponent,
    RightSidebarComponent,
    MultiDropdownComponent,
    PaginationComponent
  ],
  providers: [
    FiltersService,
    AuthService,
    PaginationService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
