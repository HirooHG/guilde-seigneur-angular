import { Component } from '@angular/core';
import { CharactersService } from '../../core/services/characters.service';
import { RouterModule } from '@angular/router';
import { ConvertImageService } from '../../shared/utils/convert-image.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  constructor(
    protected readonly characterService: CharactersService,
    protected readonly convertImageService: ConvertImageService,
  ) {}
}
