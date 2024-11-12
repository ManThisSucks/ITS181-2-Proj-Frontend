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

}
