import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Caste } from '../../shared/models/caste';

@Injectable({
  providedIn: 'root',
})
export class CastesService {
  private url = 'http://localhost:3000/guilde-seigneur/caste';
  castes = signal<Caste[] | null>(null);

  constructor(private http: HttpClient) {}

  fetchCastes() {
    this.http.get<Caste[]>(this.url).subscribe({
      next: (value: Caste[]) => {
        this.castes.set(value);
      },
    });
  }
}
