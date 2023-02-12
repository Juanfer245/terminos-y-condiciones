import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { TermsComponent } from './terms/terms.component';


const routes :Routes = [
  {
    path: '',
    children:[
      {path: '', redirectTo:'login', pathMatch:'full'},
      { 
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'login/register',
      component: RegisterComponent,
    },
    {
      path: 'terms',
      component: TermsComponent,
    },],
  },
      
    ]
    


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthRoutingModule {

}
