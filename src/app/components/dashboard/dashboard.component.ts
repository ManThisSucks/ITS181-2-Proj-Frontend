import { Component, OnInit } from '@angular/core';
import { Dog } from '../../models/dog.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  dogs?: Dog[] = [];
  
  constructor(
    private http: HttpClient, 
    public router: Router
  ) { }
  
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

  editDog(id: number): void {
    this.router.navigate(['/edit-dog', id]);
  }

  deleteDog(id: number): void {
    this.http.delete(`http://localhost:18080/api/dog/${id}`).subscribe({
      next: () => {
        console.log(`Dog with id ${id} deleted successfully`);
        // Refresh the dog list after deletion
        this.initData();
      },
      error: (err) => console.error('Error deleting dog', err)
    });
  }

  addDog(): void {
    this.router.navigate(['/add-dog']);
  }

  unlistDog(id: number): void {
    this.http.get(`http://localhost:18080/api/reserve-dog/${id}`).subscribe({
      next: () => {
        console.log(`Dog with id ${id} unlisted/reserved successfully`);
        // Refresh the dog list
        this.initData();
      },
      error: (err) => console.error('Error unlisting dog', err)
    });
  }

  relistDog(id: number): void {
    this.http.get(`http://localhost:18080/api/unreserve-dog/${id}`).subscribe({
      next: () => {
        console.log(`Dog with id ${id} relisted successfully`);
        // Refresh the dog list
        this.initData();
      },
      error: (err) => console.error('Error relisting dog', err)
    });
  }

}
