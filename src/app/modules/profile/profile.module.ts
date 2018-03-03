import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ],
  declarations: [EmployeeListComponent, ViewComponent]
})
export class ProfileModule { }
