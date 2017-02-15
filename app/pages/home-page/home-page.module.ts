import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HomePageComponent } from './home-page.component';
import { ForecastComponent } from '../../components/forecast/forecast.component';

@NgModule({
    imports: [ HttpModule ],
    declarations: [ HomePageComponent, ForecastComponent ]
})

export class HomePageModule {};