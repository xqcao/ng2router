"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var welcomepage_1 = require("./subpages/welcomepage");
var aboutpage_1 = require("./subpages/aboutpage");
var contactpage_1 = require("./subpages/contactpage");
var loginpage_1 = require("./subpages/loginpage");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            welcomepage_1.WelcomeComponent,
            aboutpage_1.AboutComponent,
            contactpage_1.ContactComponent,
            loginpage_1.LoginPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: '', pathMatch: 'full', redirectTo: 'welcome' },
                { path: 'welcome', component: welcomepage_1.WelcomeComponent },
                { path: 'about', component: aboutpage_1.AboutComponent },
                { path: 'contact', component: contactpage_1.ContactComponent }
            ])
        ],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            platform_browser_1.Title
        ]
    })
], AppModule);
exports.AppModule = AppModule;
