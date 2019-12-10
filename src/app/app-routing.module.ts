import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './page-form/register-form/register-form.component';
import { ContentComponent } from './content/content.component';
import { PageFormComponent } from './page-form/page-form.component';
import { LoginComponent } from './page-form/login/login.component';

const routes: Routes = [
  { 
    path: "", 
    component: ContentComponent 
  },
  {
    path: "pageform",
    component: PageFormComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register-form',
        component: RegisterFormComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
