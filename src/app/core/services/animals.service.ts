import { Injectable, signal } from '@angular/core';
import { Animal } from '../../shared/models/animal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  animals = signal<Animal[] | null>(null);
  constructor(private http: HttpClient) {}

  fetchAnimal(): void {
    this.http
      .get<Animal[]>('http://localhost:3000/guilde-seigneur/animal')
      .subscribe({
        next: (value: Animal[]) => {
          this.animals.set(value);
        },
      });
  }
}
