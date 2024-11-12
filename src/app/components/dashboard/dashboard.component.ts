import { Component } from '@angular/core';
import { Dog } from '../../models/dog.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  dogs?: Dog[] = [];
  
  constructor(private http: HttpClient, private router: Router) { }
  
  ngOnInit(): void {
    this.initData();
  }
  initData(): void {
    this.http.get<Dog[]>('http://localhost:18080/api/dogs/all')
    .subscribe({
      next: (data: Dog[]) => {
        this.dogs=data;
        console.log(this.dogs);
      }
    })
  }

  adoptDog(id: number): void {
    this.http.get('http://localhost:18080/api/reserve-dog/' + id.toString())
    this.router.navigate(['/success']);
  }

  editDog(id: number): void {
    //TODO: go to edit-dog component to get the required info, then when the user clicks submit, send a PUT request to /api/update-dog/{id} with the updated info
  }

  deleteDog(id: number): void {
    //TODO: send a DELETE request to /api/dog/{id} and refresh the dashboard
  }

  addDog(): void {
    //TODO: go to add-dog component to get the required info, then when the user clicks submit, send a POST request to /api/add-dog with the updated info
  }

}
