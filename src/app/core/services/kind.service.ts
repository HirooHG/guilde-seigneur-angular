import { Injectable, signal } from '@angular/core';
import { Kind } from '../../shared/models/kind';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class KindService {
  private url = 'http://localhost:3000/guilde-seigneur/kind';
  kinds = signal<Kind[] | null>(null);

  constructor(private http: HttpClient) {}

  fetchKinds() {
    this.http.get<Kind[]>(this.url).subscribe({
      next: (value: Kind[]) => {
        this.kinds.set(value);
      },
    });
  }
}
