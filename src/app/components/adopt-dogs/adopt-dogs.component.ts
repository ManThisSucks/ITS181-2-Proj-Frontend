import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dog } from '../../models/dog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adopt-dogs',
  templateUrl: './adopt-dogs.component.html',
  styleUrl: './adopt-dogs.component.css'
})
export class AdoptDogsComponent implements OnInit {
  
  dogs?: Dog[] = [];
  
  constructor(
    private http: HttpClient, 
    public router: Router
  ) { }
  
  ngOnInit(): void {
    this.initData();
  }
  initData(): void {
    this.http.get<Dog[]>('http://localhost:18080/api/dogs/available')
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

}
