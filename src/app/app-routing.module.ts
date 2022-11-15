import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AuthgaurdService} from '../app/service/Authgaurd/authgaurd.service';
const routes: Routes = [
  {path:"", component:RegisterComponent},
  { 
  path: 'master', 
  loadChildren: () => import('./mastermanagement/mastermanagement.module').then(m => m.MastermanagementModule),
  canActivate: [AuthgaurdService] ,
  data: {
    id: '1'
  }
  },
  { 
  path: 'role', 
  loadChildren: () => import('./rolemanagement/rolemanagement.module').then(m => m.RolemanagementModule),
  canActivate: [AuthgaurdService] ,
  data: {
    id: '2',
    name:"Doctor",
  } 
},
  { 
    path: 'test', 
    loadChildren: () => import('./testmanagement/testmanagement.module').then(m => m.TestmanagementModule),
    canActivate: [AuthgaurdService] ,
    data: {
      id: '3'
    } 
  },
  { path: 'usermanagement', 
  loadChildren: () => import('./usermanagement/usermanagement.module').then(m => m.UsermanagementModule),
  canActivate: [AuthgaurdService] ,
  data: {
    id: '4'
  } 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
