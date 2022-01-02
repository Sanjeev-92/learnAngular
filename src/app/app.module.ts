import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './register/registration-form/registration-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { FormsModule } from '@angular/forms';
import { MenusComponent } from './menus/menus/menus.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginComponentComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
