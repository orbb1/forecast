import { WEATHER_API_URL } from '../config';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {
    constructor(private http:Http) {}
    getWeatherData() {
        console.log('getting weather..');
        return http.get(WEATHER_API_URL).map(response => response.json())
    };
};