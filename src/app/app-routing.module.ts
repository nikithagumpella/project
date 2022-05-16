import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [  { path: 'user-register', component: UserRegisterComponent },
{ path: 'user/login', component: UserLoginComponent },
{path:'',component:UserRegisterComponent},
{path:'api',component:ApiComponent},
{path:'home',component:HomeComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
