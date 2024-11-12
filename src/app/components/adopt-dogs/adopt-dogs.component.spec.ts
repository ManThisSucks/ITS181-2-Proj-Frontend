import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptDogsComponent } from './adopt-dogs.component';

describe('AdoptDogsComponent', () => {
  let component: AdoptDogsComponent;
  let fixture: ComponentFixture<AdoptDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdoptDogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
