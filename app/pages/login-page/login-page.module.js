"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var login_page_component_1 = require("./login-page.component");
var login_form_component_1 = require("../../components/login-form/login-form.component");
var logo_component_1 = require("../../components/logo/logo.component");
var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule],
        declarations: [login_page_component_1.LoginPageComponent, login_form_component_1.LoginFormComponent, logo_component_1.LogoComponent]
    })
], LoginPageModule);
exports.LoginPageModule = LoginPageModule;
//# sourceMappingURL=login-page.module.js.map