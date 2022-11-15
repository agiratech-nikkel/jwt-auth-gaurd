import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolemanagementComponent } from './rolemanagement.component';

const routes: Routes = [{ path: '', component: RolemanagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolemanagementRoutingModule { }
