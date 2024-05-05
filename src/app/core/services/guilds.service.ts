import { Injectable, signal } from '@angular/core';
import { Guild } from '../../shared/models/guild';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GuildsService {
  private url = 'http://localhost:3000/guilde-seigneur/guild';
  guilds = signal<Guild[] | null>(null);

  constructor(private http: HttpClient) {}

  fetchGuilds() {
    this.http.get<Guild[]>(this.url).subscribe({
      next: (value: Guild[]) => {
        this.guilds.set(value);
      },
    });
  }
}
