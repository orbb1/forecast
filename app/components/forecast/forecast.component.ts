import { Component } from '@angular/core';

import { WeatherService } from '../../shared/services/WeatherService';

@Component({
    moduleId: module.id,
    selector: 'forecast',
    templateUrl: './forecast.html',
    styleUrls: ['./forecast.css']
})

export class ForecastComponent {
    constructor(private weatherService: WeatherService) {}

    checkWeather = function() { return this.weatherService.getWeatherData(); }
}