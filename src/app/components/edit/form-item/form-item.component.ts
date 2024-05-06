import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormState } from '../../../core/states/form.state';
import { GuildsService } from '../../../core/services/guilds.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Guild } from '../../../shared/models/guild';
import { EquipmentsService } from '../../../core/services/equipments.service';
import { ArtifactsService } from '../../../core/services/artifacts.service';
import { CastesService } from '../../../core/services/castes.service';
import { BuildingsService } from '../../../core/services/buildings.service';
import { KindService } from '../../../core/services/kind.service';
import { FormType } from '../../../shared/types/form.type';
import { NgIf } from '@angular/common';
import { Caste } from '../../../shared/models/caste';
import { Kind } from '../../../shared/models/kind';
import { Building } from '../../../shared/models/building';
import { Artifact } from '../../../shared/models/artifact';
import { Equipment } from '../../../shared/models/equipment';
import { EditType } from '../../../shared/types/edit.type';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    NgIf,
    MatSnackBarModule,
  ],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.scss',
})
export class FormItemComponent {
  constructor(
    private formState: FormState,
    private snackBar: MatSnackBar,
    protected readonly guildService: GuildsService,
    protected readonly equipmentService: EquipmentsService,
    protected readonly artifactService: ArtifactsService,
    protected readonly casteService: CastesService,
    protected readonly buildingService: BuildingsService,
    protected readonly kindService: KindService,
  ) {}

  protected FormType = FormType;

  @Input({ required: true }) editType!: EditType;
  @Input({ required: true }) formTypes!: FormType[];

  name = '';
  rate = 0;
  strength = 0;

  selectedFile?: File;

  // refactor callback methods
  onChangeName() {
    this.formState.name.set(this.name);
  }

  onChangeRate() {
    this.formState.rate.set(this.rate);
  }

  onChangeStrength() {
    this.formState.strength.set(this.strength);
  }

  onChangeGuild(guild: Guild) {
    this.formState.guild.set(guild);
  }

  onChangeCaste(caste: Caste) {
    this.formState.caste.set(caste);
  }

  onChangeKind(kind: Kind) {
    this.formState.kind.set(kind);
  }

  onChangeBuilding(building: Building) {
    this.formState.building.set(building);
  }

  onChangeArtifacts(artifacts: Artifact[]) {
    this.formState.artifacts.set(artifacts);
  }

  onChangeEquipments(equipments: Equipment[]) {
    this.formState.equipments.set(equipments);
  }

  onValid() {
    this.snackBar.open('something happened !');
  }

  isInForm(formType: FormType): boolean {
    return this.formTypes.includes(formType);
  }

  selectFiles(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
        console.log(typeof e.target.result);
      };

      reader.readAsDataURL(this.selectedFile);
    }
  }
}
