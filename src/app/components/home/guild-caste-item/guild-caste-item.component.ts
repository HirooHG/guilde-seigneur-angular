import { Component, Input, computed } from '@angular/core';
import { Guild } from '../../../shared/models/guild';
import { CastesService } from '../../../core/services/castes.service';
import { CharactersService } from '../../../core/services/characters.service';
import { BuildingsService } from '../../../core/services/buildings.service';
import { AnimalsService } from '../../../core/services/animals.service';
import { ConvertImageService } from '../../../shared/utils/convert-image.service';

@Component({
  selector: 'app-guild-caste-item',
  standalone: true,
  imports: [],
  templateUrl: './guild-caste-item.component.html',
  styleUrl: './guild-caste-item.component.scss',
})
export class GuildCasteItemComponent {
  @Input({ required: true }) guild!: Guild;

  // signals
  castesSignal = this.casteService.castes;
  charactersSignal = this.characterService.characters;
  buildingsSignal = this.buildingService.buildings;
  animalSignal = this.animalService.animals;

  // computed read only signals
  animals = computed(() => {
    return this.animalSignal()?.filter((x) => x.guild._id === this.guild?._id);
  });
  buildings = computed(() => {
    return this.buildingsSignal()?.filter(
      (x) => x.guild._id === this.guild?._id,
    );
  });
  castes = computed(() => {
    return this.castesSignal()?.filter((x) => x.guild._id === this.guild?._id);
  });
  characters = computed(() => {
    return this.charactersSignal()?.filter(
      (x) => x.guild._id === this.guild?._id,
    );
  });

  constructor(
    private casteService: CastesService,
    private characterService: CharactersService,
    private buildingService: BuildingsService,
    private animalService: AnimalsService,
    protected readonly convertImageService: ConvertImageService,
  ) {}
}
