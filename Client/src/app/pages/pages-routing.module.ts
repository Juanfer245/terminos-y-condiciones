import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent} from '../auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaticModule } from '../static/static.module';
import { InstructorComponent } from '../instructores/instructo.component';
import { ChartComponent } from '../chart/chart.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    //Rutas hijas
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'instructor',
        component: InstructorComponent,
      },
      {
        path: 'chart',
        component: ChartComponent,
      },
      {
        path: 'product',
        component: ProductListComponent
      },
      {
        path: 'product/create',
        component: ProductFormComponent 
      },
      {
        path: 'product/edit/:id',
        component: ProductFormComponent
      }
    ],
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StaticModule,
    RouterModule.forChild(routes)
  ]
  //Forchild invoca a los hijos
})
export class PagesRoutingModule { }
