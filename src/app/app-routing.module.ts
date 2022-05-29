import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { AppliedformsComponent } from './pages/appliedforms/appliedforms.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { EmployeeslistComponent } from './pages/employeeslist/employeeslist.component';
import { TraineeslistComponent } from './pages/traineeslist/traineeslist.component';
import { TrainerslistComponent } from './pages/trainerslist/trainerslist.component';
import { LoginComponent } from './pages/login/login.component';
import { SupervisorlistComponent } from './pages/supervisorlist/supervisorlist.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{

    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'appliedforms',
    component: AppliedformsComponent
  },
  {
    path: 'traineeslist',
    component: TraineeslistComponent
  },
  {
    path: 'trainerslist',
    component: TrainerslistComponent
  },
  {
    path: 'employeeslist',
    component: EmployeeslistComponent
  },
  {
    path: 'supervisorlist',
    component: SupervisorlistComponent
  },
  {
    path: 'certificate',
    component: CertificateComponent
  }

]
},
{
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
