import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LogoComponent } from '../../components/logo/logo.component';

@NgModule({
    imports: [FormsModule],
    declarations: [LoginPageComponent, LoginFormComponent, LogoComponent]
})

export class LoginPageModule {}