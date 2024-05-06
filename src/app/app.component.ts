import { Component, effect, untracked } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { GuildsService } from './core/services/guilds.service';
import { LoadingState } from './core/states/loading.state';
import { CastesService } from './core/services/castes.service';
import { AnimalsService } from './core/services/animals.service';
import { BuildingsService } from './core/services/buildings.service';
import { CharactersService } from './core/services/characters.service';
import { ArtifactsService } from './core/services/artifacts.service';
import { EquipmentsService } from './core/services/equipments.service';
import { KindService } from './core/services/kind.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLayoutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private loadingState: LoadingState,
    private guildService: GuildsService,
    private casteService: CastesService,
    private animalService: AnimalsService,
    private buildingService: BuildingsService,
    private characterService: CharactersService,
    private artifactService: ArtifactsService,
    private equipmentService: EquipmentsService,
    private kindService: KindService,
  ) {
    effect(() => {
      if (this.checkLists()) {
        untracked(() => {
          this.loadingState.loading.set(false);
        });
      }
    });

    this.guildService.fetchGuilds();
    this.casteService.fetchCastes();
    this.buildingService.fetchBuildings();
    this.animalService.fetchAnimal();
    this.characterService.fetchCharacters();
    this.equipmentService.fetchEquipments();
    this.artifactService.fetchArtifacts();
    this.kindService.fetchKinds();
  }

  private checkLists(): boolean {
    return (
      this.guildService.guilds() !== null &&
      this.casteService.castes() !== null &&
      this.buildingService.buildings() !== null &&
      this.characterService.characters() !== null &&
      this.equipmentService.equipments() !== null &&
      this.artifactService.artifacts() !== null &&
      this.kindService.kinds() !== null
    );
  }
}
