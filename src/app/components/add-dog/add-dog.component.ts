import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dog } from '../../models/dog.model';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css']
})
export class AddDogComponent implements OnInit {
  addForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      available: [true]
    });
  }

  onSubmit(): void {
    if (this.addForm.valid) {
      // Prepare the form data for submission
      const newDog: Dog = this.addForm.value;

      // Send a POST request to add the new dog
      this.http.post('http://localhost:18080/api/add-dog', newDog).subscribe({
        next: () => {
          console.log('Dog added successfully');
          // Redirect to the dashboard after saving
          this.router.navigate(['/admin']);
        },
        error: (err) => console.error('Error adding dog', err)
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/admin']);
  }
}