"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var home_page_component_1 = require("./home-page.component");
var forecast_component_1 = require("../../components/forecast/forecast.component");
var WeatherService_1 = require("../../shared/services/WeatherService");
var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule],
        declarations: [home_page_component_1.HomePageComponent, forecast_component_1.ForecastComponent],
        providers: [WeatherService_1.WeatherService]
    })
], HomePageModule);
exports.HomePageModule = HomePageModule;
;
//# sourceMappingURL=home-page.module.js.map