import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestmanagementRoutingModule } from './testmanagement-routing.module';
import { TestmanagementComponent } from './testmanagement.component';


@NgModule({
  declarations: [
    TestmanagementComponent
  ],
  imports: [
    CommonModule,
    TestmanagementRoutingModule
  ]
})
export class TestmanagementModule { }
