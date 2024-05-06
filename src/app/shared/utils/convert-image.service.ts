import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ConvertImageService {
  constructor(private _sanitizer: DomSanitizer) {}

  getImagePath(imageBase64: string) {
    return this._sanitizer.bypassSecurityTrustUrl(
      'data:image/png;base64,' + imageBase64,
    );
  }
}
