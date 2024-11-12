import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
