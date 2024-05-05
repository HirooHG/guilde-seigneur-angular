import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Character } from '../../shared/models/character';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  characters = signal<Character[] | null>(null);
  constructor(private http: HttpClient) {}

  fetchCharacters(): void {
    this.http
      .get<Character[]>('http://localhost:3000/guilde-seigneur/character')
      .subscribe({
        next: (value: Character[]) => {
          this.characters.set(value);
        },
      });
  }
}
