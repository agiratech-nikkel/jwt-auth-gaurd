import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolemanagementRoutingModule } from './rolemanagement-routing.module';
import { RolemanagementComponent } from './rolemanagement.component';


@NgModule({
  declarations: [
    RolemanagementComponent
  ],
  imports: [
    CommonModule,
    RolemanagementRoutingModule
  ]
})
export class RolemanagementModule { }
