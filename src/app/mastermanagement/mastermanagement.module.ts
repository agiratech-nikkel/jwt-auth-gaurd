import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastermanagementRoutingModule } from './mastermanagement-routing.module';
import { MastermanagementComponent } from './mastermanagement.component';


@NgModule({
  declarations: [
    MastermanagementComponent
  ],
  imports: [
    CommonModule,
    MastermanagementRoutingModule
  ]
})
export class MastermanagementModule { }
