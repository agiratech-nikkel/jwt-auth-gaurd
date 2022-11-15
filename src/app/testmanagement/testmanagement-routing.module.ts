import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestmanagementComponent } from './testmanagement.component';

const routes: Routes = [{ path: '', component: TestmanagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestmanagementRoutingModule { }
