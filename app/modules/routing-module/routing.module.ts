import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LoginPageComponent } from '../../../app/pages/login-page/login-page.component';
import { AppComponent } from '../../app.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'login', component: LoginPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule {}
