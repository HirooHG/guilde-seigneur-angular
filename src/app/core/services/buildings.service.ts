import { Injectable, signal } from '@angular/core';
import { Building } from '../../shared/models/building';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BuildingsService {
  buildings = signal<Building[] | null>(null);
  constructor(private http: HttpClient) {}

  fetchBuildings(): void {
    this.http
      .get<Building[]>('http://localhost:3000/guilde-seigneur/building')
      .subscribe({
        next: (value: Building[]) => {
          this.buildings.set(value);
        },
      });
  }
}
