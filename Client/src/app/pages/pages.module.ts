import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaticModule } from '../static/static.module';



@NgModule({
  declarations:[
    DashboardComponent,



  ],
  exports:[
    DashboardComponent,


  ],
  imports: [
    CommonModule,
    StaticModule
  ]
})
export class PagesModule { }
