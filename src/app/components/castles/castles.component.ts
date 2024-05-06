import { Component } from '@angular/core';
import { BuildingsService } from '../../core/services/buildings.service';
import { ConvertImageService } from '../../shared/utils/convert-image.service';

@Component({
  selector: 'app-castles',
  standalone: true,
  imports: [],
  templateUrl: './castles.component.html',
  styleUrl: './castles.component.scss',
})
export class CastlesComponent {
  constructor(
    protected readonly buildingService: BuildingsService,
    protected readonly convertImageService: ConvertImageService,
  ) {}
}
