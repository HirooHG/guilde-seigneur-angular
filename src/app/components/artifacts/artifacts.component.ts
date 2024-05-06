import { Component } from '@angular/core';
import { ArtifactsService } from '../../core/services/artifacts.service';
import { ConvertImageService } from '../../shared/utils/convert-image.service';

@Component({
  selector: 'app-artifacts',
  standalone: true,
  imports: [],
  templateUrl: './artifacts.component.html',
  styleUrl: './artifacts.component.scss',
})
export class ArtifactsComponent {
  constructor(
    protected readonly artifactService: ArtifactsService,
    protected readonly convertImageService: ConvertImageService,
  ) {}
}
