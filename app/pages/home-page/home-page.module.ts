import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HomePageComponent } from './home-page.component';
import { ForecastComponent } from '../../components/forecast/forecast.component';

import { WeatherService } from '../../shared/services/WeatherService';

@NgModule({
    imports: [ HttpModule ],
    declarations: [ HomePageComponent, ForecastComponent ],
    providers: [ WeatherService ]
})

export class HomePageModule {};