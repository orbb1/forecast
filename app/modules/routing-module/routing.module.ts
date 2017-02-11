import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LoginPageComponent } from '../../../app/pages/login-page/login-page.component';
import { AppComponent } from '../../app.component';
import { HomePageComponent } from '../../../app/pages/home-page/home-page.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'home', component: HomePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule {}
