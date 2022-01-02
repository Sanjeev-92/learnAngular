import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { RegistrationFormComponent } from './register/registration-form/registration-form.component';

const routes: Routes = [
  { path: 'register', component: RegistrationFormComponent },
 // { path: '**', component: RegistrationFormComponent }, // Wild card routing
  { path: 'login', component: LoginComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
