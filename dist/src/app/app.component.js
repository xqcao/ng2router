"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.appTitle = 'myngclient';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'myngclient',
        styles: ["\n\t\theader {\n\t\t\talign-items: center;\n\t\t\tbackground: #333333;\n\t\t\tcolor: white;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\tpadding: 0.8rem 1.2rem;\n\t\t}\n\t\th1 {\n\t\t\tflex: auto;\n      font-size: 1.4rem;\n\t\t}\n\t\tnav {\n\t\t\tmargin-left: auto;\n\t\t}\n\t\ta {\n\t\t\tcolor: inherit;\n      font-size: 1.4rem;\n\t\t\ttext-decoration: none;\n\t\t}\n\t\ta.router-link-active { color: #6699cc;}\n\t\ta:hover { color: #4080bf; }\n\t\ta:not(:first-of-type):before {\n\t\t\tcolor: white;\n\t\t\tcontent: \"  .  \";\n\t\t}\n\t"],
        template: "\n\t\t<header bs-directive>\n\t\t\t<h1>{{appTitle}}</h1>\n\t\t\t<nav>\n\t\t\t\t<a [routerLink]=\"['/']\">Welcome</a>\n\t\t\t\t<a [routerLink]=\"['/about']\">About Us</a>\n\t\t\t\t<a [routerLink]=\"['/contact']\">Contact Me</a>\n\t\t\t</nav>\n\t\t</header>\n    <router-outlet></router-outlet>\n\t"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
