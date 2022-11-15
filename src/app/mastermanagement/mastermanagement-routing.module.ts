import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastermanagementComponent } from './mastermanagement.component';

const routes: Routes = [{ path: '', component: MastermanagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastermanagementRoutingModule { }
