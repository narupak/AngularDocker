import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageFormComponent} from './page-form.component';
import {LoginComponent} from './login/login.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {RegisterFormComponent} from './register-form/register-form.component';
// import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: PageFormComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      // {
      //     path: "register",
      //     component: RegisterFormComponent,
      //     data: { urlback: '/auth/login' }
      // },
    //   {
    //     path: 'register',
    //     component: RegisterComponent,
    //     data: {
    //       urlback: '/auth/login',  //ย้อนกลับไปหน้าlogin
    //       messageback: 'กลับสู่หน้า Login' //messagebackที่แสดงbuttonกลับสู่หน้าlogin
    //     }
    //   },
      { path: 'forget-password', //เรียกใช้ในส่วนของหน้า forgetPassword
        component: ForgetPasswordComponent 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
