import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Artifact } from '../../shared/models/artifact';

@Injectable({
  providedIn: 'root',
})
export class ArtifactsService {
  artifacts = signal<Artifact[] | null>(null);
  constructor(private http: HttpClient) {}

  fetchArtifacts(): void {
    this.http
      .get<Artifact[]>('http://localhost:3000/guilde-seigneur/artifact')
      .subscribe({
        next: (value: Artifact[]) => {
          this.artifacts.set(value);
        },
      });
  }
}
