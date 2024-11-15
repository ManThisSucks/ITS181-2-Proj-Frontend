import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDogComponent } from './components/add-dog/add-dog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditDogComponent } from './components/edit-dog/edit-dog.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SuccessComponent } from './components/success/success.component';
import { AdoptDogsComponent } from './components/adopt-dogs/adopt-dogs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddDogComponent,
    DashboardComponent,
    EditDogComponent,
    WelcomeComponent,
    SuccessComponent,
    AdoptDogsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
