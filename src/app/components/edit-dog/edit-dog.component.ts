import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dog } from '../../models/dog.model';

@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.css']
})
export class EditDogComponent implements OnInit {
  editForm!: FormGroup;
  dogId!: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve the dog ID from the route parameters
    this.dogId = +this.route.snapshot.paramMap.get('id')!;
    this.initializeForm();
    this.loadDogData();
  }

  initializeForm(): void {
    // Initialize the form with empty values
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      available: [false]
    });
  }

  loadDogData(): void {
    // Fetch the dog's current details to populate the form
    this.http.get<Dog>(`http://localhost:18080/api/dog/${this.dogId}`).subscribe({
      next: (dog) => {
        // Set the form's default values
        this.editForm.patchValue({
          name: dog.name,
          breed: dog.breed,
          age: dog.age,
          description: dog.description,
          available: dog.available
        });
      },
      error: (err) => console.error('Error loading dog data', err)
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      // Prepare the form data for submission
      const updatedDog: Dog = this.editForm.value;

      // Send a PUT request to update the dog record
      this.http.put(`http://localhost:18080/api/update-dog/${this.dogId}`, updatedDog).subscribe({
        next: () => {
          console.log('Dog updated successfully');
          // Redirect to the dashboard after saving
          this.router.navigate(['/admin']);
        },
        error: (err) => console.error('Error updating dog', err)
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/admin']);
  }
}
