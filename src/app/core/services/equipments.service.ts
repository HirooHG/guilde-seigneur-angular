import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Equipment } from '../../shared/models/equipment';

@Injectable({
  providedIn: 'root',
})
export class EquipmentsService {
  private url = 'http://localhost:3000/guilde-seigneur/equipment';
  equipments = signal<Equipment[] | null>(null);

  constructor(private http: HttpClient) {}

  fetchEquipments() {
    this.http.get<Equipment[]>(this.url).subscribe({
      next: (value: Equipment[]) => {
        this.equipments.set(value);
      },
    });
  }
}
