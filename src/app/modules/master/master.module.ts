import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  declarations: [    
    SidebarComponent,
    NavbarComponent,
    FooterComponent]
})
export class MasterModule { }
