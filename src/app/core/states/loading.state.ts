import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingState {
  loading = signal(true);
  error = signal(false);
}
