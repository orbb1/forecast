import { WEATHER_API_URL } from '../config';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class WeatherService {
    constructor(private http:Http) {}
    getWeatherData() {
        console.log('getting weather..');
        return this.http.get(WEATHER_API_URL).toPromise().then((response) => response.json);
    };
};