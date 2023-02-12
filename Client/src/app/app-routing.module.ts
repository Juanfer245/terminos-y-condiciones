import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CommonModule } from '@angular/common';
import { NotfoundRoutingModule } from './notfound/notfound-routing.module';



const routes: Routes = [
  //{path:'', redirectTo:'/login', pathMatch:'full'}
  {path: '', redirectTo:'auth', pathMatch:'full'},
  {
    path: 'auth',
    loadChildren: () =>
     import('./auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  
  {
    path: 'pages',
    loadChildren: () =>
     import('./pages/pages.module').then(
        (m) => m.PagesModule
      ),
  }//ruta por defecto 
];
//routermodule.forRoot :especifica las rutas principales
@NgModule({  
  imports:[
  RouterModule.forRoot(routes),
  PagesRoutingModule,
  AuthRoutingModule,
  NotfoundRoutingModule    
],
  exports: [RouterModule],
})
export class AppRoutingModule { }
