import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SuccessComponent } from './components/success/success.component';
import { EditDogComponent } from './components/edit-dog/edit-dog.component';
import { AddDogComponent } from './components/add-dog/add-dog.component';
import { AdoptDogsComponent } from './components/adopt-dogs/adopt-dogs.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'admin', component: DashboardComponent},
  {path: 'adopt-a-dog', component: AdoptDogsComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'edit-dog/:id', component: EditDogComponent},
  {path: 'add-dog', component: AddDogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
