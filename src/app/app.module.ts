import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  CovalentLayoutModule,
  CovalentStepsModule,
  CovalentDataTableModule,
  CovalentMessageModule,
  CovalentDialogsModule,
  CovalentNotificationsModule,
  CovalentSearchModule
} from '@covalent/core';
import {CovalentHttpModule} from '@covalent/http';
import {CovalentHighlightModule} from '@covalent/highlight';
import {CovalentMarkdownModule} from '@covalent/markdown';
import {CovalentDynamicFormsModule} from '@covalent/dynamic-forms';

import {AppComponent} from './app.component';
import {CompaniesComponent} from './companies/companies.component';
import {DetailsComponent} from './companies/details/details.component';

import { CompaniesService } from './companies/companies.service';

const appRoutes: Routes = [
  {path: '', component: CompaniesComponent},
  {path: ':name', component: DetailsComponent},
  {path: '**', component: CompaniesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    DetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentDataTableModule,
    CovalentMessageModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentDialogsModule,
    CovalentNotificationsModule,
    CovalentSearchModule
  ],
  providers: [
    CompaniesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
