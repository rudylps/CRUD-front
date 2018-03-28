import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddAffaireComponent } from './add-affaire/add-affaire.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from './api.service';
import { AffaireServiceService } from './affaire-service.service';
import { HttpClient } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from '../routing.module';
import { MatModule } from '../mat-module';
import { ListAffairesComponent } from './list-affaires/list-affaires.component';
import { AffaireDetailComponent } from './affaire-detail/affaire-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    AddAffaireComponent,
    ListAffairesComponent,
    AffaireDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    AffaireServiceService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
