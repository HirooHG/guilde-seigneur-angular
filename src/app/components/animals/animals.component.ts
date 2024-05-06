import { Component } from '@angular/core';
import { ConvertImageService } from '../../shared/utils/convert-image.service';
import { AnimalsService } from '../../core/services/animals.service';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.scss',
})
export class AnimalsComponent {
  constructor(
    protected readonly convertImageService: ConvertImageService,
    protected readonly animalService: AnimalsService,
  ) {}
}
