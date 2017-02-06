import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './subpages/welcomepage';
import { AboutComponent } from './subpages/aboutpage';
import { ContactComponent } from './subpages/contactpage';

import {LoginPage} from './subpages/loginpage'

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        WelcomeComponent,
        AboutComponent,
        ContactComponent,
        LoginPage
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', pathMatch: 'full', redirectTo: 'welcome' },
            { path: 'welcome', component: WelcomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent }
        ])
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        Title
    ]
})
export class AppModule { }